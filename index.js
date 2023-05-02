const express=require('express');
const app=express();
const{users}=require('./usermodule');
const mongoose=require('mongoose');
const bp=require('body-parser');
app.use(express.json())
const cors=require('cors');
app.use(bp.urlencoded({extended:true}))
app.use(cors())
mongoose.connect("mongodb+srv://naren:naren@cluster0.xx9d4.mongodb.net/crud")
app.post('/get', async (req,res)=>{
    const data= await users.find({"name":req.body.name});
    console.log(data);
    console.log(data[0]);
    res.json(data);
})
app.post('/del', async (req,res)=>{
    const roll=req.body.roll;
    const data= await users.deleteMany({"roll":roll});
    await users.deleteOne(data[0]);
    console.log(data);
    res.json({data});
})
app.post('/up', async (req,res)=>{
    const roll=req.body.roll;
    const name=req.body.name;
    const data= await users.findOneAndUpdate({"roll":roll},{$set:{"name":name}});
    console.log(data);
    res.json(data[0]);
})
app.post("/",async(req,res)=>{
    console.log("hi");
    console.log("hi");
    var user=new users()
    user.name=req.body.name;
    console.log(req.body.ch)
    user.roll=req.body.roll;
    user.gender=req.body.gend;
    user.Dept=req.body.dept;
    await user.save()
})
app.listen(5000,function(){
    console.log("ok");
})