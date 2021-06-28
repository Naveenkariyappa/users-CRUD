const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  createdOn: {
    type: Date,
    default: new Date(),
  },
});

var userdata = mongoose.model('userSchema', userSchema);
module.exports = userdata;
