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
    { timestamps: true })

const UserModel = mongoose.model("users", UserSchema)
// (CollectionName, Schema)
// 'users' is the collection or document name, DB name is in the connection URL in the .env file.
//    | -DB NAME (matrix-master)
//       [Collection or Document Name] 
//    |   - messages
//    |   - users
//    |   - comments
module.exports = UserModel 