const spicedPg = require('spiced-pg');
var dbUrl = process.env.DATABASE_URL || `postgres://${require('../config/database.json').user}:${require('../config/database.json').pass}@localhost:5432/cookbook`;

var db = spicedPg(dbUrl);

exports.dbRegisterUser = function(firstname, lastname, email, hashedPassword){
    return db.query(`INSERT INTO users (firstname, lastname, email, password) VALUES ($1, $2, $3, $4) RETURNING id`, [firstname, lastname, email, hashedPassword]).then(data=>{
        return data.rows;
    });
};
exports.dbGetUserByEmail = function(email){
    return db.query(`SELECT * FROM users WHERE email = $1`, [email]).then(data=>{
        return data.rows;
    });
};

exports.dbInsertProduct = function(productName, important, userid){
    return db.query(`INSERT INTO product (name, important, userid) VALUES ($1, $2, $3) RETURNING id`, [productName, important, userid]).then(data=>{
        return data.rows;
    });
};

exports.dbUpdateProductPic = function(url, productId){
    return db.query(`UPDATE product SET image = $1 WHERE id = $2 RETURNING image`, [url, productId]).then(data=>{
        return data.rows;
    });
};
