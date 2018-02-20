const express = require('express');
const router = express.Router();
const knox = require('knox');
const fs = require('fs');
const util = require('util');
const uidSafe = require('uid-safe');

var writeFile = util.promisify(fs.writeFile);
var stat = util.promisify(fs.stat);

let secrets;
if (process.env.NODE_ENV == 'production') {
    secrets = process.env; // in prod the secrets are environment variables
} else {
    secrets = require('../config/secrets.json'); // secrets.json is in .gitignore
}

function uploadToS3(imgToSave){
    return uidSafe(24).then(uid=>{
        let fileName = `${uid}.png`;
        let filePath = `./uploads/${fileName}`;
        return writeFile(filePath, imgToSave, 'base64').then(()=>{
            return stat(filePath).then(stats=>{
                const client = knox.createClient({
                    key: secrets.AWS_KEY,
                    secret: secrets.AWS_SECRET,
                    bucket: 'agentcrispbucket'
                });
                const s3Request = client.put(fileName, {
                    'Content-Type': 'image/png',
                    'Content-Length': stats.size,
                    'x-amz-acl': 'public-read'
                });
                const readStream = fs.createReadStream(filePath);
                readStream.pipe(s3Request);
                return new Promise(function(resolve, reject){
                    s3Request.on('response', s3Response => {
                        const wasSuccessful = s3Response.statusCode = 200;
                        if(wasSuccessful){
                            let url = require('../awsbucket.json').s3Url;
                            resolve(url+fileName);
                        }else{
                            reject();
                        }
                        fs.unlink(filePath, (error)=>{console.log(error);});
                    });
                });
            }).catch(err=>{
                console.log('Could not get the file stats.',err);
            });
        }).catch(err=>{
            console.log('Could not save the file.', err);
        });
    });
}

router.post('/picture/upload', (req,res)=>{
    let {imgBase64} = req.body;
    let imgToSave = imgBase64.replace(/^data:image\/png;base64,/, '');
    uploadToS3(imgToSave).then(url=>{
        res.json({imgUrl: url});
    }).catch(err=>{
        console.log(err);
        res.json({error: "S3Error Something went wrong. Please try later"});
    });
});

module.exports = router;
