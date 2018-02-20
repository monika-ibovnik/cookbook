const express = require('express');
const router = express.Router();
const Query = require('../models/query.js');

router.post('/product/edit', (req,res)=>{
    let {productName, important} = req.body;
    let userid = req.session.user.id;
    Query.dbInsertProduct(productName, important, userid).then(results=>{
        res.json({
            productId: results[0].id
        });
    });
});

router.get('/product/getall', (req, res)=>{
    let userid = req.session.user.id;
    Query.dbGetAllProducts(userid).then(result=>{
        res.json(result);
    });
});

router.post('/product/image', (req,res)=>{
    let {image, productId} = req.body;
    Query.dbUpdateProductPic(image,productId).then(()=>{
        res.json({message: 'success'});
    }).catch(err=>{
        console.log(err);
        res.json({error: 'error'});
    });
});
module.exports=router;
