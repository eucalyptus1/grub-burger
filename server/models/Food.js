const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model 
const foodSchema = new Schema({

  foodId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  price: {
    type: String,
  },
},
{
  toJSON: {
    getters: true,
  }
});


module.exports = foodSchema;