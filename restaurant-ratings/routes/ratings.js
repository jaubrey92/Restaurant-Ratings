var express = require('express')
var router = express.Router()

const ratingsCtrl = require('../controllers/ratings')
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.post('/restaurants/:id/ratings', ensureLoggedIn, ratingsCtrl.create)

router.delete('/ratings/:id', ensureLoggedIn, ratingsCtrl.delete)

module.exports = router
