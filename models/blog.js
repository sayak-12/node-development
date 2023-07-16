const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Blogschema = new Schema({
    name : {
        type: "string", 
        required: true
    }, 
    review : {
        type: "string", 
        required: true
    }
} , {timestamps:true});

const Blog = mongoose.model("Review", Blogschema);

module.exports= Blog;