const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
    name: {
        type: String,
    },
    image: {
        type: String,
    }, 
    story: {
        title: {
            type: String,
        },
        paragraphs: {
            type: [String],
        },
        quotes:  {
            type: [String],
        },
        author: {
            type: String
        }
    }
});

module.exports = mongoose.model('Story', storySchema);