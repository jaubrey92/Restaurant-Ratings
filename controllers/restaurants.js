const Restaurant = require('../models/restaurant')

const index = async (req, res) => {
  const restaurants = await Restaurant.find({})
  res.render('restaurants/index', { title: 'All Restaurants', restaurants })
}

const newRestaurant = (req, res) => {
  res.render('restaurants/new', { title: 'Add a New Restaurant', errorMsg: '' })
}

const create = async (req, res) => {
  try {
    await Restaurant.create(req.body)
    res.redirect('/restaurants/')
  } catch (err) {
    console.log(err)
    res.render('restaurants/new', { errorMsg: err.message })
  }
}

const show = async (req, res) => {
  const restaurant = await Restaurant.findById(req.params.id)
  res.render('restaurants/show', { title: 'Ratings and Reviews', restaurant })
}

module.exports = {
  index,
  new: newRestaurant,
  create,
  show
}
