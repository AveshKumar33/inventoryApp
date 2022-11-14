const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  Name: { type: String, required: true,unique:true,minLength:3, maxLength: 20 },
  Desc: { type: String, required: true,lowerCase:true,minLength:5, maxLength: 100 },
  URL: { type: String, required: true,minLength:5, maxLength: 200 },
  joinDate: { type: Date,default:Date.now() },
  updateDate: { type: Date,default:Date.now() },
});


module.exports = mongoose.model("Category",CategorySchema);