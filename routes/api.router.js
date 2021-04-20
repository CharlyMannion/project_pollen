const router = require('express').Router();
const storyRouter = require('/stories.router');

router.use('/stories', storyRouter);

module.exports = router;