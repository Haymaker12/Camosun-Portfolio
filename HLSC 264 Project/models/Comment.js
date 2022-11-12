const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user' 
    },
    date: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        default: "Anonymous"
    }
});

module.exports = Comment = mongoose.model('comment', CommentSchema);