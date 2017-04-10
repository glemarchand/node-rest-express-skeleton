const log = require('./log.js');
const router = require('express').Router();
const Controller = require('./controller.js');
const controller = new Controller();

router.get('/', (req, res) => {
    log.trace('GET /');
    res.json({
        message: 'Welcome to the API'
    });
});

router.get('/foo', controller.foo);

module.exports = router;
