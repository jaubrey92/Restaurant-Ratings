const Restaurant = require('../models/restaurant')

const create = async (req, res) => {
  const restaurant = await Restaurant.findById(req.params.id)
  req.body.user = req.user._id
  req.body.userName = req.user.name
  req.body.userAvatar = req.user.avatar
  restaurant.ratings.push(req.body)
  try {
    await restaurant.save()
    res.redirect(`/restaurants/${restaurant._id}`)
  } catch (err) {
    console.log(err)
    res.render(`restaurants/${restaurant._id}`, { errorMsg: err.message })
  }
}

const deleteRating = async (req, res) => {
  const restaurant = await Restaurant.findOne({
    'ratings._id': req.params.id,
    'ratings.user': req.user._id
  })
  if (!restaurant) return res.redirect('/restaurants')
  restaurant.ratings.remove(req.params.id)
  await restaurant.save()
  res.redirect(`/restaurants/${restaurant._id}`)
}

module.exports = {
  create,
  delete: deleteRating
}
