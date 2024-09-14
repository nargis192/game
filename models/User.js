const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
  username: { type: String, required: true, unique: true },

  // email:{ type: String,required: true,unique: true,
  //   validate: {
  //       validator: function (value) {
  //           return /^[\w.-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/.test(value);
  //       },
  //       message: 'Invalid email address'
  //   }},

  password: { type: String, required: true },

  highScore: { type: Number, default: 0 }, 
});

module.exports = mongoose.model('User', userSchema);
//The first argument is the singular name of the collection your model is for. Mongoose automatically looks for the plural, 
//lowercased version of your model name. Thus, for the example above, the model Tank is for the tanks collection in the database.

