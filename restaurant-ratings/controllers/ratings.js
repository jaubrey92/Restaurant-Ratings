const Restaurant = require('../models/restaurant')

module.exports = {
  create
}

async function create(req, res) {
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
