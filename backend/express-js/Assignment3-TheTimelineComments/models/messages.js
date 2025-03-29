const mongoose = require("mongoose")

const MessageSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  user:
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
  },
  comments:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comments',
    }
  ]
},
  { timestamps: true });

const MessageModel = mongoose.model("Messages", MessageSchema)
// 'Post' is the collection or document name, DB name is in the .env file.
//    | -DB-NAME (matrix-master)
//    |   - Collection or Document Name (Messages)

module.exports = MessageModel