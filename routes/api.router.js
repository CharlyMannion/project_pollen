const router = require('express').Router();
const storyRouter = require('./stories.router');

router.use('/', storyRouter);

router.get('/', (req, res) => {
    res.json({
        'possible endpoints:': {
            '/api/stories': ['GET'],
            '/api/storiess/:id': ['GET']
        }
    });
});

module.exports = router;