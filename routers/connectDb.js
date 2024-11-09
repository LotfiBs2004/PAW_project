
const mysql2 = require('mysql2'); 

// Path: backend/routers/connectDb.js

const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root' ,
    password: '01061977',
    database: 'paw'  , 
}); 

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
}
);

module.exports = db;