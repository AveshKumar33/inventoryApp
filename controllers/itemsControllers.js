
const Item=require("../models/itemServices");
//const { body, validationResult } = require("express-validator");
exports.insertItem=async (req,res)=>{
    try{
    const data=req.body;
    console.log(data);
    const item= await Item.create({Name:data.Name,Description:data.Description,Category:data.Category,Price:data.Price,Availablity:data.Availablity,Image:data.Image});
        res.status(200).send(`item save successfully : ${item}`);
    
    }catch(e){
        res.status(409).send(e.message);
    
    }
  }
  exports.readItem=async (req,res)=>{
    try{
    const item= await Item.find();
        res.status(200).send(item);
    
    }catch(e){
        res.status(409).send(e.message);
    
    }
  }