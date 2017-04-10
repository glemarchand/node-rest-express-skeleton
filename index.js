#!/usr/bin/env node
'use strict';

const express = require('express');
const http = require('http');
const router = require('./lib/router.js');
const log = require('./lib/log');

// look for environnement configuration
process.argv.forEach((val, index) => {
    if (val === '-e' || val === '--env') {
        console.log(process.argv[index + 1]);
        process.env.NODE_ENV = process.argv[index + 1];
    }
});

// Parameters
const config = require('config');

/*
 * Express configuration
 */

const app = express();
// Allow Request from anywhere
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.use('/api', router);
app.use('/', express.static(__dirname + '/public'));

/*
 * HTTP server
 */
const server = http.createServer(app);
server.listen(config.http.port, function () {
    log.debug('HTTP server is listening on ' + config.http.port);
});

/*
 * Process handling
 */
process.on('SIGINT', function () {
    log.warn('Exit called');
    setTimeout(function () {
        process.exit(0);
    }, 200);
});
