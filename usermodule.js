const mongoose = require('mongoose');

const usermodel = new mongoose.Schema({
    name:String,
    roll:String,
    gender:String,
    Dept:String


   
});

exports.users = mongoose.model("users",usermodel);