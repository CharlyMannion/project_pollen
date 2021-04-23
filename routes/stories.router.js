const storiesRouter = require('express').Router();
const { getStory, getStories} = require('../controllers/stories.controller');

storiesRouter.route('/').get(getStories);

storiesRouter.route('/:id').get(getStory);

module.exports = storiesRouter;