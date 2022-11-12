const express = require('express');
const router = express.Router();
const { check, params, validationResult } = require('express-validator');

const Comment = require('../../models/Comment');
const Project = require('../../models/Project');
const User = require('../../models/User');

// @route POST api/comments
// @desc Creates a new comment with the given data
// @access public, can be posted anonymously

router.post('/', 
    [
        check('project', 'Project ID is required')
            .not()
            .isEmpty(),

        check('comment', 'Comment text is required')
            .not()
            .isEmpty(),

    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // res.send('Hurray it worked');
        
        try {
            const { project, comment, user, name } = req.body;

            try {
                
                const commentObj = new Comment({
                    comment: comment,
                    user: user,
                    name: name
                });

                await Project.findOneAndUpdate({ _id: project }, 
                    { $addToSet: { comments: commentObj } }, 
                    { new: true, useFindAndModify: false });
                
                await commentObj.save();

                return res.status(200).send('Comment has been added');

            } catch(err) {
                return res.status(500).send('Incorrect Project ID');
            }

        } catch(err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    });

module.exports = router;