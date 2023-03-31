const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
    Name:{type:String,required:true},
    Post:{type:String,required:true},
    isDeleted:{type:Boolean,default:false}
})

module.exports = mongoose.model("post", postSchema)