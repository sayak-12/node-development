const jwt = require("jsonwebtoken");
const User = require("../models/user.js");
const requireAuth = async function(req, res, next) {
    const token = req.cookies.jwt;
    if(token){
        jwt.verify(token, process.env.SECRET_KEY, (err, decodedToken)=>{
            if(err){
                console.log(err);
                res.redirect("/login");
            }
            else{
                next();
            }

        })
    }
    else{
        res.redirect("/login");
    }
}
const loginAuth = async function(req, res, next) {
    const token = req.cookies.jwt;
    if(token){
        jwt.verify(token, process.env.SECRET_KEY, (err, decodedToken)=>{
            if(err){
                console.log(err);
                next();
            }
            else{
                res.redirect("/dashboard");
            }

        })
    }
    else{
        next();
    }
}
const userdata = function(req, res, next){
    const token = req.cookies.jwt;
    if(token){
        jwt.verify(token, process.env.SECRET_KEY, async (err, decodedToken)=>{
            if(err){
                console.log(err);
                res.locals.user = null;
                next();
            }
            else{
                let user = await User.findById(decodedToken._id);
                res.locals.user = user;
                next();
            }

        })
    }
    else{
        res.locals.user = null;
        next();
    }
}

module.exports = {requireAuth, loginAuth,userdata};