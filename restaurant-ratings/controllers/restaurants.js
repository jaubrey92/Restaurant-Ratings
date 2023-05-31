const Restaurant = require('../models/restaurant')

module.exports = {
  index,
  new: newRestaurant,
  create,
  show
}

async function index(req, res) {
  const restaurants = await Restaurant.find({})
  res.render('restaurants/index', { title: 'All Restaurants', restaurants })
}

function newRestaurant(req, res) {
  res.render('restaurants/new', { title: 'Add a New Restaurant', errorMsg: '' })
}

async function create(req, res) {
  try {
    await Restaurant.create(req.body)
    res.redirect('/restaurants/')
  } catch (err) {
    console.log(err)
    res.render('restaurants/new', { errorMsg: err.message })
  }
}

async function show(req, res) {
  const restaurant = await Restaurant.findById(req.params.id)
  res.render('restaurants/show', { title: 'Ratings and Reviews', restaurant })
}
