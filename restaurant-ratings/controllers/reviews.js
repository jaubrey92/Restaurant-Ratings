const Restaurant = require('../models/restaurant')

module.exports = {
  create,
  delete: deleteReview
}

async function create(req, res) {
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

function deleteReview(req, res, next) {
  // Note the cool "dot" syntax to query on the property of a subdoc
  Restaurant.findOne({
    'reviews._id': req.params.id,
    'reviews.user': req.user._id
  }).then(function (restaurant) {
    // Rogue user!
    if (!restaurant) return res.redirect('/restaurant')
    // Remove the review using the remove method available on Mongoose arrays
    restaurant.reviews.remove(req.params.id)
    // Save the updated movie
    restaurant
      .save()
      .then(function () {
        // Redirect back to the movie's show view
        res.redirect(`/restaurants/${restaurant._id}`)
      })
      .catch(function (err) {
        // Let Express display an error
        return next(err)
        // res.redirect(`/movies/${movie._id}`);
      })
  })
}
