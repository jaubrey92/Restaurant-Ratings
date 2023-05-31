var express = require('express')
var router = express.Router()

const ratingsCtrl = require('../controllers/ratings')
const ensureLoggedIn = require('../config/ensureLoggedIn')

// POST /restaurants/:id/ratings
router.post('/restaurants/:id/ratings', ensureLoggedIn, ratingsCtrl.create)
// DELETE /reviews//:id
router.delete('/ratings/:id', ensureLoggedIn, ratingsCtrl.delete)

module.exports = router
