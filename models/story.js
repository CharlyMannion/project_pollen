const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }, 
    story: {
        title: {
            type: String,
            required: true
        },
        paragraphs: {
            type: [String],
            required: true
        },
        quotes:  {
            type: [String],
            required: true
        },
        author: {
            type: String
        }
    }
});

storySchema.statics.fetchStory = function fetchStory(id) {
    this.findById(id, (err, story) => {
        if (!err) return story;
        else console.log('Error: ' + err);
    });
}

storySchema.statics.fetchStories = function fetchStories() {
    this.find({}, (err, stories) => {
        if (!err) return stories;
        else console.log('Error: ' + err);
    });
    
}

module.exports = mongoose.model('Story', storySchema);