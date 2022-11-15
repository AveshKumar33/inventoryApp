
const Category=require("../models/categoryServices");
//const { body, validationResult } = require("express-validator");
exports.insertCategory=async (req,res)=>{
    try{
    const data=req.body;
    const category= await Category.create({Name:data.Name,Description:data.Description,Category:data.Category,Price:data.Price,Availablity:data.Availablity});
        res.status(200).send(`category save successfully : ${category}`);
    
    }catch(e){
        res.status(409).send(e.message);
    
    }
  }
  
  exports.readCategory=async (req,res)=>{
    try{
    const category= await Category.find();
        res.status(200).send(category);
    
    }catch(e){
        res.status(409).send(e.message);
    
    }
  }
  
  exports.deleteCategory=async (req,res)=>{
    try{
        const entry = await Test.find({ Name: 'req.body.Name'});
        await Test.deleteById(entry._id);
        res.status(200).send(entry);
    
    }catch(e){
        res.status(409).send(e.message);
    
    }
  }
//   async function run() {
//     const entry = await Test.create({ name: 'Masteringjs' });
//     console.log(await Test.countDocuments({ _id: entry._id })); // 1
  
//     await Test.deleteById(entry._id);
  
//     console.log(await Test.countDocuments({ _id: entry._id })); // 0  
//   }