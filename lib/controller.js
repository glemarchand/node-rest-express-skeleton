var log = require('./log.js');

function controller() {
    log.trace('Controller created');
}
module.exports = controller;

controller.prototype.foo = function(req, res, next) {
    log.trace('Controller received foo request');
    res.statusCode = 200;
    res.send("OK");
    return next();
};
