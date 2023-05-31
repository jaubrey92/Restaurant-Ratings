var express = require('express')
var router = express.Router()
const restaurantsCtrl = require('../controllers/restaurants')
const ensureLoggedIn = require('../config/ensureLoggedIn')

// GET /restaurants
router.get('/', restaurantsCtrl.index)
// GET /restaurants/new
router.get('/new', ensureLoggedIn, restaurantsCtrl.new)
// GET /restaurants/:id
router.get('/:id', restaurantsCtrl.show)
// POST /restaurants
router.post('/', ensureLoggedIn, restaurantsCtrl.create)

/* GET users listing.
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
}); */

module.exports = router
