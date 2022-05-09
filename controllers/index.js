const router = require('express').Router()

const apiRouters = require('./api')

router.use('/api', apiRouters);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;