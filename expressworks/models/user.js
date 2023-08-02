const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Userschema = new Schema({
    username : {
        type: "string", 
        required: true
    }, 
    email : {
        type: "string", 
        required: true
    },
    password : {
        type: "string", 
        required: true
    }
} , {timestamps:true});

const User = mongoose.model("user", Userschema);

module.exports= User;