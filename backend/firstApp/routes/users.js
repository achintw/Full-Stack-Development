// install mongodb
// install mongoosejs
// require and setup collection
// make schema
// create models and export


const mongoose = require("mongoose");

// practiceDB ke naam se db bann jayega mongoDB mein
mongoose.connect("mongodb://127.0.0.1:27017/practiceDB");


// schema matlab aapko ye batana hai, bann ne wale har document
// mein kya kya hoga
const userschema = mongoose.Schema({
  username: String, 
  name: String,
  age: Number
})


// creation of collection
// mongoose.model("naam", schema);
module.exports = mongoose.model("user", userschema);