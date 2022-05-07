const { Schema } = require('mongoose');
const foodSchema = require('../models/Food')

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
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
    },
  }
);


module.exports = orderSchema;