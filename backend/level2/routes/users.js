const mongoose = require('mongoose');
const plm = require("passport-local-mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/testinglevel2");



// creating the format of entries in the model
/*
const userSchema = mongoose.Schema({
  username: String,
  nickname: String,
  description: String,
  // categories: [],
  categories: {
    type: Array,
    default: [],
  },
  datecreated: {
    type: Date,
    default: Date.now(),
  }
})
*/

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  secret: String
})

userSchema.plugin(plm);


// creating the model in the db
module.exports = mongoose.model("user", userSchema);