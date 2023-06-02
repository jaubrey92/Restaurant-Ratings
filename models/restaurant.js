const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema(
  {
    content: { type: String, required: true },
    score: { type: Number, min: 1, max: 5, required: true },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    userName: String,
    userAvatar: String
  },
  {
    timestamps: true
  }
)

const ratingSchema = new Schema(
  {
    content: { type: String, required: true },
    score: { type: Number, min: 1, max: 5, required: true },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    userName: String,
    userAvatar: String
  },
  {
    timestamps: true
  }
)

const restaurantSchema = new Schema(
  {
    title: { type: String, required: true },
    cuisine: { type: String, required: true },
    price: {
      type: String,
      required: true,
      enum: ['$', '$$', '$$$', '$$$$']
    },
    ratings: [ratingSchema],
    reviews: [reviewSchema]
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Restaurant', restaurantSchema)
