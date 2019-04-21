const router = require('express').Router();
const controller = require('./controller')

// Pattern 1:
// simple router calls a controller function directly
// each controller/service is responsible for handling their own errors
// the controller is responsible for catching any errors, and 
// returning a properly formatted Error message using res.json() to the client
router.get('/user/:id', controller.getUser)

module.exports = router;
