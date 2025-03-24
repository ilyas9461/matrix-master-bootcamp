const mongoose =require("mongoose")
 
const PostSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    default: new Date().toLocaleDateString('en-GB').split("/").join("-"),
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});
 
const PostModel = mongoose.model("Posts", PostSchema) 
// 'Post' is the collection or document name, DB name is in the .env file.
//    | -DB-NAME (matrix-master)
//    |   - Collection or Document Name (posts)

module.exports =PostModel