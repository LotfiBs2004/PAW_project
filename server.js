

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./routers/connectDb'); // Import the database connection

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 

app.get("/" , function(req, res){ 
    res.send("Hello World"); 
})


let port = 3000;
app.listen(port, () => { 
    console.log(`Server is running on port localhost://${port}`);
});
