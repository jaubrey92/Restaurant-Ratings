const Restaurant = require('../models/restaurant')

module.exports = {
  index
}

async function index(req, res) {
  const restaurants = await Restaurant.find({})
  res.render('restaurants/index', { title: 'All Restaurants', restaurants })
}
