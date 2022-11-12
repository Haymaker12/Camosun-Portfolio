const express = require('express');
const router = express.Router();
const { check, params, validationResult } = require('express-validator');

const Project = require('../../models/Project');
const Program = require('../../models/Program');
const fs = require('fs');

const minDate = '';
const maxDate = '';

//determine minimum date for project query
function setMinDate(year, minDate) {
    if (year == '2021'){
        minDate = '2021-01-01T00:00:00.000Z';
    }
    else {
        minDate = '2022-01-01T00:00:00.000Z';
    }
    return minDate;
}
//determine maximum date for project query
function setMaxDate(year, maxDate) {
    if (year == '2021'){
        maxDate = '2022-01-01T00:00:00.000Z';
    }
    else {
        maxDate = '2023-01-01T00:00:00.000Z';
    }
    return maxDate;
}

// @route  GET api/projects
// @desc   Test projects route
// @access Public (no token/authentication needed)
router.get('/', (req, res) => {
    //get programID and year, year is based on year select dropdown
    let programID = req.query['program'];
    let year = req.query['year'];
    //find projects in date range
    Project.find({ program: { _id: programID }, date:{$gt: new Date(setMinDate(year, minDate)), $lt: new Date(setMaxDate(year, maxDate))}}, async (err, projects) => {

        if (projects) {

            const program = await Program.findOne({ _id: programID });
            const programJSON = JSON.parse(JSON.stringify(program));

            const projectsWithProgramName = JSON.parse(JSON.stringify(projects)).map(project => {
                project["programName"] = programJSON["program"];
                return project;
            });

            return res.send(projectsWithProgramName);
        }
        else {
            Project.find({}, async (err, projects) => {

                const projectsWithProgramName = JSON.parse(JSON.stringify(projects));

                for (const project of projectsWithProgramName) {
                    if (project["program"]) {
                        const program = await Program.findOne({ _id: project["program"] });

                        if (program) {
                            const programJSON = JSON.parse(JSON.stringify(program));
                            project["programName"] = programJSON["program"];
                        }

                    }
                    else {
                        project["programName"] = "Undefined";
                    }
                };

                return res.send(projectsWithProgramName);
            });
        }
    });
});


// @route  GET api/projects/{projID} (where projID is one individual project)
// @desc   Test individual project route
// @access Public (no token/authentication needed)
// @req-param {projectID: int}
router.get('/:_id',  
    async (req, res) => {
        try {
            const project = await Project.findOne({ _id: req.params._id});

            if(!project) 
                return res.status(400).json( {msg: "Project not found." });

            res.json(project);
        }
        catch (err) {
            console.error(err.message);
            if(err.kind == 'ObjectId') {
                return res.status(400).json( {msg: "Project not found." });
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
        check('name', 'Project name is required')
            .not()
            .isEmpty(),
        check('program', 'Program is required')
            .not()
            .isEmpty()
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        res.send('Project Route Worked PP');
        
        try {
            const { program, name, shortDescription, longDescription, participants, date, content } = req.body;
/*
            // This code block looks through the contents array for any image segment.
            // If image is found, rename file to arbitrary unique id, and copy it to a remote location on the server.  
            content.forEach(section => {
                if (section.type === 'si' || section.type === 'ps' || section.type === 'pp') {
                    try {
                        /*
                        // Temporary solution to test functions. Creates a .txt using the content information.
                        // ---------------------------------------------------------
                        // 
                        const fileName = section.content;
                        const time = new Date();
                        const extension = fileName.split('.').pop();
                        const newFileName = time.getTime().toString() + "_" + section.id.toString() + "." + extension;

                        section.content = newFileName;
                        fs.writeFile(`client/public/images/${newFileName}`, `Test Content for: ${newFileName}`, function (err) {
                            if (err) throw err;
                        });
                        // ---------------------------------------------------------
                        

                        // ---------------------------------------------------------
                        // Proper solution for updating file name, and copying file to remote location.
                        const base64Parts = section.content.split(',');
                        const contentType = base64Parts[0].split(':')[1].split(';')[0];
                        const rawData = Buffer.from( base64Parts[1] ,'base64');
                        const fileName = Date.now().toString() + "_" + section.id.toString() + "." + contentType.split('/')[1].toString();
                        section.content = fileName;

                        fs.writeFile(`client/public/images/${fileName}`, rawData, function (err) {
                            if (err) throw err;
                        });
                        // ---------------------------------------------------------
                    }
                    catch (err) {
                        console.log("Error: " + err);
                    }
                }
            })
*/
            const project = new Project({
                program,
                name, 
                shortDescription,
                longDescription,
                participants,
                date,
                content
            });

            await project.save();
            
        } catch(err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    });

module.exports = router;