const express = require('express');
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const db = require('./connectDb'); 
const router = express.Router();







router.post('/create-C',
    
    [
        // Validate and sanitize category name
        body('name')
            .notEmpty().withMessage('Category name is required')
            .trim()
            .escape()
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name } = req.body;
        const userId = req.userId; // User ID from JWT

        try {
            // Insert the new category into the database
            db.query(
                'INSERT INTO category (idU, name) VALUES (?, ?)', 
                [userId, name], 
                (err, result) => {
                    if (err) {
                        console.error(err);
                        return res.status(500).json({ message: 'Internal server error', status: 500 });
                    }

                    res.status(200).json({
                        message: 'Category created successfully',
                        category: {
                            idC: result.insertId,
                            name: name,
                            idU: userId
                        },
                        status: 200
                    });
                }
            );
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error', status: 500 });
        }
    }
);

module.exports = router;
