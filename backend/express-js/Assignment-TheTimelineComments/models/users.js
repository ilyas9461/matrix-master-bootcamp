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
                                // (CollectionName, Schema)
// 'Users' is the collection or document name, DB name is in the connection URL in the .env file.
//    | -DB NAME (matrix-master)
//       [Collection or Document Name] 
//    |   - messages
//    |   - users
//    |   - comments
module.exports = UserModel 