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
//
// exports.dbUploadProfilePic = function(filename, userid){
//     return db.query(`INSERT INTO pictures (filename, userid) VALUES ($1, $2) RETURNING filename`, [filename, userid]).then(data=>{
//         return `${require('../config/config.json').s3Url}${data.rows[0].filename}`;
//     });
// };
//
// exports.dbUpdateProfilePic = function(filename,userid){
//     return db.query(`UPDATE pictures SET filename = $1 WHERE userid = $2 RETURNING filename`, [filename, userid]).then(data=>{
//         return `${require('../config/config.json').s3Url}${data.rows[0].filename}`;
//     });
// };
//
// exports.dbGetProfilePic = function(userid){
//     return db.query(`SELECT * FROM pictures WHERE userid = $1`, [userid]).then(data=>{
//         if(data.rows.length != 0){
//             return `${require('../config/config.json').s3Url}${data.rows[0].filename}`;
//         }else{
//             return null;
//         }
//     });
// };
// exports.dbGetProfileInfo = function(userid){
//     return db.query(`SELECT * FROM profile WHERE userid=$1`, [userid]).then(data=>{
//         return data.rows;
//     });
// };
// exports.dbInsertProfileInfo = function(bio,superpower, userid){
//     return db.query(`INSERT INTO profile (bio, superpower, userid) VALUES ($1, $2, $3) RETURNING id`, [bio, superpower, userid]).then(data=>{
//         return data.rows[0];
//     });
// };
//
// exports.dbUpdateProfileInfo = function(bio,superpower, userid){
//     return db.query(`UPDATE profile SET bio=$1, superpower=$2 WHERE userid=$3`, [bio,superpower,userid]);
// };
//
// exports.dbGetUsers = function({searchString}){
//     return db.query(`SELECT * FROM users WHERE supername ~* $1`, [searchString]).then(data=>{
//         return data.rows;
//     });
// };
//
// exports.dbGetOtherProfileInfo = function(userid){
//     return db.query(`SELECT users.id, supername, bio, superpower, filename
//                             FROM users
//                             FULL JOIN profile ON users.id = profile.userid
//                             FULL JOIN pictures ON users.id = pictures.userid
//                             WHERE users.id=$1`, [userid])
//         .then(data=>{
//             return data.rows;
//         }).catch(err=>{
//             console.log('error error', err);
//         });
// };
//
// exports.dbGetFriendshipStatus = function(sender_id, recipient_id){
//     return db.query(`SELECT id, status FROM friendship_status WHERE sender_id=$1 AND recipient_id=$2`, [sender_id, recipient_id]).then(data=>{
//         return data.rows;
//     });
// };
//
// exports.dbGetFriendshipStatusIfRecipient = function(sender_id, recipient_id){
//     return db.query(`SELECT id, status FROM friendship_status WHERE sender_id=$1 AND recipient_id=$2 AND status != 0`, [sender_id, recipient_id]).then(data=>{
//         return data.rows;
//     });
// };
//
// exports.dbInsertFriendshipStatus = function(sender_id, recipient_id){
//     return db.query(`INSERT INTO friendship_status (sender_id, recipient_id, status) VALUES($1, $2, 1) RETURNING id, status`, [sender_id, recipient_id])
//         .then(data=>{
//             return data.rows;
//         });
// };
//
// exports.dbUpdateFriendshipStatus = function(status, friendship_id){
//     return db.query(`UPDATE friendship_status SET status=$1 WHERE id=$2 RETURNING status`, [status, friendship_id]).then(data=>{
//         return data.rows;
//     });
// };
//
// exports.dbGetFriends = function(userid){
//     return db.query(``);
// };
