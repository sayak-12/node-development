const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const validator = require('validator');
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
Userschema.statics.signup = async function (username, email, password, cpass) {
    if (!(validator.isEmail(email))) {
        throw Error("Not a valid email address");
    }
    const exists = await this.findOne({email});
    if (!exists){
        if(password === cpass){
            var salt = await bcrypt.genSalt(10);
        var hash = await bcrypt.hash(password, salt);
        const user = await this.create({username: username, email: email, password: hash});
        return user;
        }
        else{
            throw Error("Password and Confirm password fields don't match");
        }
    }
    else{
        throw Error("Email already exists");

    }
}
//static login function
Userschema.statics.login = async function(email, password){
    const user = await this.findOne({email});
    if (!user){
        throw Error("This email does not exist");
    }
    else{
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            throw Error("Password does not match");

        }
        return user;
    }
}

const User = mongoose.model("user", Userschema);

module.exports= User;