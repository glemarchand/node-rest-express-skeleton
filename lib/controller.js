'use strict';

const log = require('./log.js');

class Controller {
    constructor () {
        log.trace('Controller created');
    }

    foo (req, res, next) {
        log.trace('Controller received foo request');
        res.status(200).send('OK');
        return next();
    }
}

module.exports = Controller;
