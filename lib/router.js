var log = require('./log.js');
var router = require('express').Router();
var Controller = require('./controller.js');
var controller = new Controller();

router.get('/', function(req, res) {
    res.json({
        message: 'Welcome to the API'
    });
});

router.get('/foo', controller.foo);


module.exports = router;
