const express = require('express');
const router = express.Router();
const Query = require('../models/query.js');

router.post('/recipe/new', (req,res)=>{
    let userid = req.session.user.id;
    let {title} = req.body;
    Query.dbInsertRecipe(title, userid).then(result=>{
        let recipeId = result[0].id;
        res.json({recipeId : recipeId});
    }).catch(err=>{
        console.log('Could not get the recipe id.', err);
        res.json({error: 'Something went wrong, please try later.'});
    });
});

router.post('/recipe/image', (req,res)=>{
    let {image,recipeId} = req.body;
    Query.dbUpdateRecipeImage(image,recipeId).then(()=>{
        res.json({message: 'success'});
    }).catch(err=>{
        console.log(err);
        res.json({error: 'Something went wrong, please try later.'});
    });
});

router.post('/recipe/steps', (req,res)=>{
    let {steps, recipeId} = req.body;
    Promise.all(
        steps.map((value, index)=>{
            Query.dbInsertRecipeStep(value,index,recipeId);
        })
    ).then(()=>{
        res.json({message: 'success'});
    }).catch((err)=>{
        console.log(err);
        res.json({error: 'Something went wrong.'});
    });
});

router.get('/recipe/getall', (req,res)=>{
    let userid = req.session.user.id;
    Query.dbGetAllRecipes(userid).then(result=>{
        res.json(result);
    }).catch(err=>{
        console.log(err);
        res.sjon({errror: 'Something went wrong. Please try later.'});
    });
});
module.exports=router;
