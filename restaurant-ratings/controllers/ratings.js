const Restaurant = require('../models/restaurant')

module.exports = {
  create,
  delete: deleteRating
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

function deleteRating(req, res, next) {
  Restaurant.findOne({
    'ratings._id': req.params.id,
    'ratings.user': req.user._id
  }).then(function (restaurant) {
    if (!restaurant) return res.redirect('/restaurants')
    restaurant.ratings.remove(req.params.id)
    restaurant
      .save()
      .then(function () {
        res.redirect(`/restaurants/${restaurant._id}`)
      })
      .catch(function (err) {
        return next(err)
      })
  })
}
