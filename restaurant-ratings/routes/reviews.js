var express = require('express')
var router = express.Router()

const reviewsCtrl = require('../controllers/reviews')

// POST /restaurants/:id/reviews
router.post('/restaurants/:id/reviews', reviewsCtrl.create)

module.exports = router
