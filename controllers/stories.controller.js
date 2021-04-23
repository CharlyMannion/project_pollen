const Story = require('../models/story');

exports.getStory = (req, res, next) => {
    Story.findById(req.params.id)
        .then(story => {
            res.status(200).send(story);
        })
        .catch(function(err) {
            next(err);
        });
}

exports.getStories = (req, res, next) => {
    Story.find({})
        .then(stories => {
            res.status(200).send(stories);
        })
        .catch(err => {
            next(err);
        });
}




