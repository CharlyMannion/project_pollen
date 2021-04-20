const Story = require('../models/story');

exports.getStory = (req, res, next) => {
    Story.fetchStory(id)
        .then(story => {
            res.status(200).send(story);
        })
        .catch(err => {
            next(err);
        });
}

exports.getStories = (req, res, next) => {
    Story.fetchStories()
        .then(stories => {
            res.status(200).send(stories);
        })
        .catch(err => {
            next(err);
        });
}




