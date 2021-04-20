const storiesRouter = require('express').Router();

storiesRouter.route('/stories').get(getStories);

storiesRouter.route('/stories/:id').get(getStory);

module.exports = storiesRouter;