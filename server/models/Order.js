const { Schema, model } = require('mongoose');
const foodSchema = require('../models/Food')

// order model
const orderSchema = new Schema(
  {
    orderNumber: {
      type: String,
      required: true,
      unique: true
    },
    orderPrice: {
      type: String,
      required: true
    },
    // set orderFood to be an array of data that adheres to the foodSchema
    orderFood: [foodSchema],
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
  }
);

const Order = model('Order', orderSchema);

module.exports = Order;