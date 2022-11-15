const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  Name: { type: String, required: true,unique:true,minLength:1, maxLength: 20 },
  Description: { type: String, required: true,lowerCase:true,minLength:2, maxLength: 100 },
  Category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
  Price: { type: Number, required: true,minLength:1, maxLength: 20 },
  Availablity: { type: Number, required: true,minLength:1, maxLength: 20 },
  Image: { type: String, required: true,minLength:1, maxLength: 500 },
  joinDate: { type: Date,default:Date.now() },
  updateDate: { type: Date,default:Date.now() },
});
// Virtual for author's URL
ItemSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/inventory/item/${this._id}`;
});

module.exports = mongoose.model("Item",ItemSchema);