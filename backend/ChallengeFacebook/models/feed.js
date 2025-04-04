const mongoose = require("mongoose");

const Feed=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxlength: [15, 'The Title field must be longer than 15 characters.']
    },
    message:{
        type:String,
        required:true,
        maxlength: [40, 'The Article field must be longer than 40 character']
    }
},
{ 
    timestamps: true 
})

const FeedModel = mongoose.model("feeds", Feed)

module.exports=FeedModel