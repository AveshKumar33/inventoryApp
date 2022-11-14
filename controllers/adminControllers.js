
const Admin=require("../models/adminServices");
exports.insertAdmin=async (req,res)=>{
    try{
    const data=req.body;
    const admin= await Admin.create({Name:data.Name,Email:data.Email,Password:data.Password,Address:data.Address,GovId:data.GovId,joinDate:data.joinDate});
        res.status(200).send(`data save successfully : ${admin}`);
    
    }catch(e){
        res.status(409).send(e.message);
    
    }
  }
  
  exports.readAdmin=async (req,res)=>{
    try{
    const admin= await Admin.find();
        res.status(200).send(admin);
    
    }catch(e){
        res.status(409).send(e.message);
    
    }
  }