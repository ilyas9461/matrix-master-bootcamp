const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},
{ timestamps: true })

const UserModel = mongoose.model("Users", UserSchema )
module.exports = UserModel 