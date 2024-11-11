const express = require('express'); 
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const router = express.Router(); 

// Import the database connection
const db = require('./connectDb'); 

let saltRounds = 10; 

// Function to check if email exists in the database
async function checkDatainDb(email) {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM user WHERE email = ?", [email], (err, result) => {
            if (err) return reject(err);
            resolve(result.length > 0); // true if email exists, false otherwise
        });
    });
}

// Define the signup route with validation and sanitization
router.post('/signUp', 
    [
        // Sanitize and validate email
        body('email')
            .isEmail().withMessage('Invalid email')
            .normalizeEmail(),

        // Sanitize and validate password
        body('password')
            .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
            .trim()
            .escape()
    ],
    async (req, res) => {
        // Check validation results
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        try {
            // Check if email already exists in the database
            const emailExists = await checkDatainDb(email);
            if (emailExists) {
                return res.status(400).json({ message: 'Email already exists', status: 400 });
            }

            // Hash the password
            const hashedPassword = await bcrypt.hash(password, saltRounds);

            // Insert the new user into the database
            db.query("INSERT INTO user (email, password) VALUES (?, ?)", [email, hashedPassword], (err, result) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ message: 'Internal server error', status: 500 });
                }
                res.status(200).json({ message: 'User created successfully', status: 200 });
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error', status: 500 });
        }
    }
);

module.exports = router;
