const router = require('express').Router()

const apiRouters = require('./api');
const homeRoutes = require('./homepage-routes');
const dashboardRoutes = require('./dashboard-routes');

router.use('/api', apiRouters);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes)

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;