const mongoose = require('mongoose');

// Initial Project model (incomplete, requires more specifics from the client)
const ProgramSchema = new mongoose.Schema({
    program: {
        type: String,
        required: true
    }
});

module.exports = Program = mongoose.model('program', ProgramSchema);