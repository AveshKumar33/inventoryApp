const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AdminSchema = new Schema({
  Name: { type: String, required: true,unique:true,minLength:3, maxLength: 20 },
  Email: { type: String, required: true,lowerCase:true,minLength:11, maxLength: 25 },
  Password: { type: String, required: true,minLength:5, maxLength: 40 },
  Address: { type: String, required: true,minLength:5, maxLength: 100 },
  GovId: { type: String, required: true,minLength:5, maxLength: 100 },
  joinDate: { type: Date,default:Date.now() },
});


module.exports = mongoose.model("Admin", AdminSchema);
