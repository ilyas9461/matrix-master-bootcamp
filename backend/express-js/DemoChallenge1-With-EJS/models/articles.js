const mongoose = require("mongoose");

const ArticleSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxlength: [25, 'The Title field must be longer than 25 characters.']
    },
    article:{
        type:String,
        required:true,
        maxlength: [100, 'The Article field must be longer than 100 character']
    }
},
{ 
    timestamps: true 
})

const ArticleModel = mongoose.model("articles", ArticleSchema)

module.exports=ArticleModel