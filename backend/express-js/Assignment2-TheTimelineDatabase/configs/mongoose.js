const mongoose = require("mongoose");
require('dotenv').config();
const PostModel = require('../models/post-models');

const Post = new PostModel()
const post = {
    name: "John Doe",
    message: "Hello World",
    createdAt: new Date().toLocaleDateString('en-GB').split("/").join("-")
}
Post.set(post)

mongoose.connect(process.env.MONGO_URI
).then(() => {
    console.log("Connected to MongoDB", mongoose.connection.readyState);

    // Post.save().then(post => {
    //     console.log('save:',post);
    // }).catch((error) => {
    //     console.log(error);
    // })
}).catch((err) => {
    console.log("Error connecting to MongoDB", err);
})