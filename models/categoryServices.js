const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  Name: { type: String, required: true,unique:true,minLength:1, maxLength: 20 },
  Description: { type: String, required: true,lowerCase:true,minLength:2, maxLength: 100 },
  joinDate: { type: Date,default:Date.now() },
  updateDate: { type: Date,default:Date.now() },
});
// Virtual for author's URL
CategorySchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/inventory/category/${this._id}`;
});

module.exports = mongoose.model("Category",CategorySchema);