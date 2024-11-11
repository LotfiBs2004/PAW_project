
const mysql2 = require('mysql2'); 

// Path: backend/routers/connectDb.js
require('dotenv').config(); // Import the dotenv module

const db = mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER, 
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME, 
    port: process.env.DB_PORT , 

}); 

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
}
);

module.exports = db;