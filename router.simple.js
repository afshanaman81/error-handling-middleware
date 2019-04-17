const router = require('express').Router();
const controller = require('./controller')

// simple router calls a controller function directly
// each controller/service is responsible for handling their own errors
// each controller/service will throw error explicitly ??
// If an error caught? thrown? in the controller, it wont return to the router (the http call will timeout)
router.get('/user/:id', controller.getUser)

module.exports = router;
