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
module.exports=router;
