var bunyan = require('bunyan');
var PrettyStream = require('bunyan-prettystream');

var prettyStdOut = new PrettyStream();
prettyStdOut.pipe(process.stdout);
var log = bunyan.createLogger({
    name: 'skeleton',
    streams: [{
        level: 'trace',
        type: 'raw',
        stream: prettyStdOut
        }]
});
module.exports = log;
