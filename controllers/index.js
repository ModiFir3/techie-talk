const router = require('express').Router()

const apiRouters = require('./api');
const homeRoutes = require('./homepage-routes');

router.use('/api', apiRouters);
router.use('/', homeRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;