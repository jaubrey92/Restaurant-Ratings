var express = require('express')
var router = express.Router()

const reviewsCtrl = require('../controllers/reviews')
const ensureLoggedIn = require('../config/ensureLoggedIn')

// POST /restaurants/:id/reviews
router.post('/restaurants/:id/reviews', ensureLoggedIn, reviewsCtrl.create)
// DELETE /reviews/:id
router.delete('/reviews/:id', ensureLoggedIn, reviewsCtrl.delete)

module.exports = router
