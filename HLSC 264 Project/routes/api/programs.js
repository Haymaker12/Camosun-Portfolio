const express = require('express');
const router = express.Router();
const { check, params, validationResult } = require('express-validator');

const Program = require('../../models/Program');

// @route  GET api/program
// @desc   Test program route
// @access Public (no token/authentication needed)
router.get('/', (req, res) => {
    Program.find({}, (err, programs) => {
        res.send(programs);
    });
});


// @route  GET api/program/{progID} (where progID is one individual project)
// @desc   Test individual project route
// @access Public (no token/authentication needed)
// @req-param {programID: int}
router.get('/:_id',  
    async (req, res) => {
        try {
            const program = await Program.findOne({ _id: req.params._id });

            if(!program) 
                return res.status(400).json( {msg: "Program not found." });

            res.json(program);
        }
        catch (err) {
            console.error(err.message);
            if(err.kind == 'ObjectId') {
                return res.status(400).json( {msg: "Program not found." });
            }
            res.status(500).send('Server Error');
        }
    }
);

// @route POST api/projects
// @desc Creates a new project with the given data
// @access public (for now, change later, only admins/logged users are supposed
// to access this feature)
router.post('/', 
    [
        check('program', 'Program is required')
            .not()
            .isEmpty()
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        res.send('Program Route Worked PP');
        
        try {
            const { program } = req.body;

            const courseProgram = new Program({
                program
            });

            await courseProgram.save();
        } catch(err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    });

module.exports = router;