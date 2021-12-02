const mongoose = require("mongoose") 
const dogSchema = mongoose.Schema({  breed: {type: String, minLength: 3},  price: {type: Number, max: 500},  colour: String }) 
 
module.exports = mongoose.model("dog", dogSchema) 
