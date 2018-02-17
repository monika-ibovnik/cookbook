const express = require('express');
const router = express.Router();
const Query = require('../models/query.js');
const Password = require('../models/password.js');

router.post('/register', (req, res)=>{
    let {firstname, lastname, email, password} = req.body;
    Query.dbGetUserByEmail(email).then(results =>{
        if(results.length==0){
            Password.hashPassword(password).then(hashedPassword => {
                Query.dbRegisterUser(firstname, lastname, email, hashedPassword).then(result =>{
                    req.session.user = {
                        firstname: firstname,
                        lastname : lastname,
                        email : email,
                        id : result[0].id
                    };
                    res.redirect('/');
                }).catch(err=>{
                    console.log('could not register the user, database error',err);
                    res.json({error: 'Something went wrong, please try later.'});
                });
            }).catch(err=>{
                console.log('could not hash the password', err);
                res.json({error: 'Something went wrong, please try later.'});
            });
        }else{
            res.json({error:'E-mail address has already been taken.'});
        }
    });
});


router.post('/login', (req,res)=>{
    let {email, password} = req.body;
    Query.dbGetUserByEmail(email).then(results=>{
        if(results.length != 0){
            let databasePassword = results[0].password;
            Password.checkPassword(password, databasePassword).then(matches=>{
                if(matches){
                    req.session.user={
                        firstname: results[0].firstname,
                        lastname: results[0].lastname,
                        email: results[0].email,
                        id: results[0].id
                    };
                    res.redirect('/');
                }else{
                    res.json({error: 'Incorrect password'});
                }
            });
        }else{
            res.json({error: 'Email does not exist in the database.'});
        }
    });
});
router.get('/logout', (req,res)=>{
    req.session = null;
    res.redirect('/welcome');
});

router.get('/user', (req,res)=>{
    res.json({
        firstname : req.session.user.firstname,
        lastname: req.session.user.lastname,
        id : req.session.user.id,
    });
});

module.exports = router;
