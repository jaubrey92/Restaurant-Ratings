const express = require('express')
const router = express.Router()
const passport = require('passport')

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Tulsa Restaurant Reviews' })
})

router.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
    prompt: 'select_account'
  })
)

router.get(
  '/oauth2callback',
  passport.authenticate('google', {
    successRedirect: '/restaurants',
    failureRedirect: '/restaurants'
  })
)

router.get('/logout', function (req, res) {
  req.logout(function () {
    res.redirect('/restaurants')
  })
})

module.exports = router
