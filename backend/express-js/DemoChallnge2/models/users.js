const mongoose=require('mongoose')
const {isEmail} = require('validator')

const UserSchema = new mongoose.Schema({
    first_name:{
        type: String,
        required: true, 
        maxlength: [10, 'Comment must be at least 10 characters long.'],
    }, 
    last_name: {
        type: String,
        required: true, 
        maxlength: [15, 'Comment must be at least 15 characters long.'],
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate:[isEmail, 'Invalid email address !'],
    },
    password: {
        type: String,
        required: true,
        // minLength: 6
    },

},
    { timestamps: true })

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel 