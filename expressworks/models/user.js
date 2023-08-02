const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const Userschema = new Schema({
    username : {
        type: "string", 
        required: true
    }, 
    email : {
        type: "string", 
        required: true,
        unique: true
    },
    password : {
        type: "string", 
        required: true
    }
} , {timestamps:true});

//static signup function
Userschema.statics.signup = async function (username, email, password) {
    const exists = await this.findOne({email});
    if (!exists){
        var salt = await bcrypt.genSalt(10);
        var hash = await bcrypt.hash(password, salt);
        const user = await this.create({username: username, email: email, password: hash});
        return user;
    }
}

const User = mongoose.model("user", Userschema);

module.exports= User;