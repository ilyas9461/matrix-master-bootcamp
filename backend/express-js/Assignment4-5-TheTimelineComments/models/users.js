const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        // minLength: 6
    }
},
    { 
        timestamps: true 
    }
)

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel 