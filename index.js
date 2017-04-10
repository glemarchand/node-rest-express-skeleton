#!/usr/bin/env node
var express = require('express');
var http    = require('http');
var router  = require('./lib/router.js');
var log     = require('./lib/log');

// Parameters
PORT=8080


/*
 * Express configuration
 */

var app = express();
// Allow Request from anywhere
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use('/api', router);
app.use('/', express.static(__dirname + '/public'));

/*
 * HTTP server
 */
var server = http.createServer(app);
server.listen(PORT, function() {
  log.debug('HTTP server is listening on ' + PORT);
});

/*
 * Process handling
 */
process.on('SIGINT', function () {
  log.warn("Exit called");
  setTimeout(function () {
      process.exit(0);
  }, 200);
});
