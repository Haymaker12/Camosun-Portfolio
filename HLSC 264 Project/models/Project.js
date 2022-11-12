const mongoose = require('mongoose');

// Initial Project model (incomplete, requires more specifics from the client)
const ProjectSchema = new mongoose.Schema({
    program: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'program'
    },
    name: {
        type: String,
        required: true
    },
    shortDescription: {
        type: String
    },
    longDescription: {
        type: String
    },
    participants: {
        type: Array
    },
    date: {
        type: Date,
        default: Date.now
    },
    content: {
        type: Array
    },
    comments: {
        type: Array
    }
});

module.exports = Project = mongoose.model('project', ProjectSchema);