const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();  // Import dotenv for environment variables

// Database connection
const db = require('./routers/connectDb'); // Import the database connection

// Middleware setup
app.use(cors());  // Allow cross-origin requests
app.use(bodyParser.json());  // Parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: true }));  // Parse URL-encoded bodies

// Basic route for testing
app.get("/", (req, res) => { 
    res.json({ message: "Hello World!", status: 200 }); 
});

// Import routers
const signUpRouter = require('./routers/signUp'); 
const loginRouter = require('./routers/login'); 
const categoryRouter = require('./routers/category');  // Import the category route

// Use the routers
app.use('/', signUpRouter);   // Signup routes
app.use('/', loginRouter);    // Login routes
app.use('/', categoryRouter); // Category creation route

// Set up the server port using environment variable or default to 3000
const port = process.env.PORT || 3000;  // Use PORT from .env or default to 3000

// Start the server
app.listen(port, () => { 
    console.log(`Server is running on http://localhost:${port}`);
});
