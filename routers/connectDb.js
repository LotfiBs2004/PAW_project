
const mysql2 = require('mysql2'); 

// Path: backend/routers/connectDb.js
require('dotenv').config(); // Import the dotenv module

const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root' ,
    password: process.env.DB_PASSWORD,
    database: 'paw'  , 
    port: 3306 , 

}); 

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
}
);

module.exports = db;