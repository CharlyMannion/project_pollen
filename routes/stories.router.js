const storiesRouter = require('express').Router();
const { getStory, getStories} = require('../controllers/stories.controller');

storiesRouter.route('/stories').get(getStories);

storiesRouter.route('/stories/:id').get(getStory);

module.exports = storiesRouter;