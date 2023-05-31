var express = require('express')
var router = express.Router()

const ratingsCtrl = require('../controllers/ratings')

// POST /restaurants/:id/ratings
router.post('/restaurants/:id/ratings', ratingsCtrl.create)

module.exports = router
