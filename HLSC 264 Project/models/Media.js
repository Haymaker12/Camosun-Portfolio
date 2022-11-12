const mongoose = require('mongoose');

// This is a central database for dealing with media at large.
// This is not the ideal way to deal with handing media; you would want an individual database for each piece of media (image, video, powerpoint, etc.)
// But, for the sake of time and considering the scope of media that will be inserted, it will do for now.
// FUTURE REFACTORING WILL REQUIRE A MORE COMPLEX SOLUTION. 
const MediaSchema = new mongoose.Schema({
    fileName: {
        type: String,
        required: true
    },
});

module.exports = Comment = mongoose.model('images', MediaSchema);