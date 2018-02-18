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
module.exports=router;
