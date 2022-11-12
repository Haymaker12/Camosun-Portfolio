const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const dotenv = require('dotenv');
dotenv.config();

const User = require('../../models/User');
const JWTsecret = process.env.JWT_SECRET;


// @route  POST api/users
// @desc   Creates a new user if parameters are correct. Raises error otherwise.
// @access Public
router.post('/', 
    [
        check('email', 'Please enter a valid email').isEmail(),
        check(
            'password', 
            'Please enter a password with 8 or more characters'
        ).isLength({ min: 8 })
    ], 
    async (req, res) => {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        try {
            // Registration steps:
            
            // See if the user exists with the given email
            let user = await User.findOne({ email: email});

            //     -> if yes - send back an error message
            if (user) {
                return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
            }

            user = new User({
                email: email,
                password: password
            });

             // Encrypt their password
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);

            // Save user
            await user.save();
            
            const payload = {
                user: {
                    id: user.id
                }
            };

            jwt.sign(
                payload, 
                JWTsecret,
                {
                    expiresIn: 3600
                },
                (err, token) => {
                    if(err) {
                        throw err;
                    }
                    res.json({ token });
                }
            );
        }
        catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }

        
});

module.exports = router;