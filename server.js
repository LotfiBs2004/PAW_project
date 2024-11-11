

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config(); // Import the dotenv module

const db = require('./routers/connectDb'); // Import the database connection

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 

app.get("/" , function(req, res){ 
    res.json({message: "Hello World!" , status: 200}); 
})


const signUpRouter = require('./routers/signUp'); 
const loginRouter = require('./routers/login'); 

app.use('/', signUpRouter);

app.use('/', loginRouter);


let port = 3000;
app.listen(port, () => { 
    console.log(`Server is running on port localhost://${port}`);
});
