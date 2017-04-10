'use strict';
const config = require('config');
const router = require('express').Router();

const log = require('./log.js');
const Controller = require('./controller.js');

const controller = new Controller();

router.get('/', (req, res) => {
    log.trace('GET /');
    res.json({
        message: config.message.welcome
    });
});

router.get('/foo', controller.foo);

module.exports = router;
