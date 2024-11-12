const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const router = express.Router();

// Import the database connection
const db = require('./connectDb');

// JWT secret key
const JWT_SECRET = 'your_jwt_secret_key'; // Replace with a secure secret key in environment variables

// Define the login route with validation and sanitization
router.post('/login',
    [
        // Sanitize and validate email
        body('email')
            .isEmail().withMessage('Invalid email')
            .normalizeEmail(),

        // Validate password
        body('password')
            .notEmpty().withMessage('Password cannot be empty')
            .trim()
    ],
    async (req, res) => {
        // Check validation results
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        try {
            // Check if the user exists in the database
            db.query("SELECT * FROM user WHERE email = ?", [email], async (err, result) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ message: 'Internal server error', status: 500 });
                }
                
                // If user not found
                if (result.length === 0) {
                    return res.status(400).json({ message: 'Invalid email or password', status: 400 });
                }

                const user = result[0];

                // Compare the password with the stored hashed password
                const match = await bcrypt.compare(password, user.password);
                if (!match) {
                    return res.status(400).json({ message: 'Invalid email or password', status: 400 });
                }

                // Generate a JWT token if password matches
                const token = jwt.sign(
                    { id: user.id, email: user.email }, // payload
                    JWT_SECRET,                         // secret key
                    { expiresIn: '1h' }                 // token expiration
                );

                // Send the token back to the client
                res.status(200).json({
                    message: 'Login successful',
                    token: token,
                    status: 200
                });
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error', status: 500 });
        }
    }
);

module.exports = router;
