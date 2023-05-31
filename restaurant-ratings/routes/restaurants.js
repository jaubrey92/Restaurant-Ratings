var express = require('express')
var router = express.Router()

const restaurantsCtrl = require('../controllers/restaurants')

// GET /restaurants
router.get('/', restaurantsCtrl.index)
// GET /restaurants/new
router.get('/new', restaurantsCtrl.new)
// POST /restaurants
router.post('/', restaurantsCtrl.create)

/* GET users listing.
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
}); */

module.exports = router
