const mongoose = require('mongoose')
const Schema = mongoose.Schema

const restaurantSchema = new Schema(
  {
    title: { type: String, required: true },
    cuisine: { type: String, required: true },
    price: {
      type: String,
      required: true,
      enum: ['$', '$$', '$$$', '$$$$']
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Restaurant', restaurantSchema)
