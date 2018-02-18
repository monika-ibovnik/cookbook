const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const Query = require('../models/query.js');

router.post('/picture/upload', (req,res)=>{
    let {imgBase64} = req.body;
    let imgToSave = imgBase64.replace(/^data:image\/png;base64,/, "");
    fs.writeFile("img.png", imgToSave, 'base64', (err)=>{
        console.log('error', err);
    });

});
module.exports=router;
