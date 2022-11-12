const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
dotenv.config();

const User = require('../../models/User');
const JWTsecret = process.env.JWT_SECRET;

// @router  GET api/auth
// @desc    Test AUTH route
// @access  Public
router.get(
    '/',
    auth,
    async (req, res) => {
        try {
            const user = await User.findById(req.user.id).select('-password');

            // Return the user ID data
            res.json(user);
        } catch(err) {
            res.status(500).send('Server Error');
        }
    }
);


// @route  POST api/auth
// @desc   Authenticate the user and get token.
// @access Public
router.post('/', 
    [
        check('email', 'Please enter a valid email').isEmail(),
        check(
            'password', 
            'Incorrect password, please try again' 
        )
    ], 
    async (req, res) => {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        try {

            // Find the user
            let user = await User.findOne({ email: email});

            // If no user -> Send error
            if (!user) {
                return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
            }

             // Check their password
            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
            }

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