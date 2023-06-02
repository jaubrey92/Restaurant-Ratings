const Restaurant = require('../models/restaurant')

const create = async (req, res) => {
  const restaurant = await Restaurant.findById(req.params.id)
  req.body.user = req.user._id
  req.body.userName = req.user.name
  req.body.userAvatar = req.user.avatar
  restaurant.reviews.push(req.body)
  try {
    await restaurant.save()
    res.redirect(`/restaurants/${restaurant._id}`)
  } catch (err) {
    console.log(err)
    res.render(`restaurants/${restaurant._id}`, { errorMsg: err.message })
  }
}

const deleteReview = async (req, res) => {
  const restaurant = await Restaurant.findOne({
    'reviews._id': req.params.id,
    'reviews.user': req.user._id
  })
  if (!restaurant) return res.redirect('/restaurants')
  restaurant.reviews.remove(req.params.id)
  await restaurant.save()
  res.redirect(`/restaurants/${restaurant._id}`)
}

module.exports = {
  create,
  delete: deleteReview
}
