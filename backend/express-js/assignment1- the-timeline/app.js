const express = require("express")
const ejs = require("ejs")
const app = express()

const { sortByCreatedAtWithFor,formatDateWithSuffix }=require('./utils/utils.js')

// Model
const {posts}=require('./models/data.js')
console.log(sortByCreatedAtWithFor(posts,false))

//View
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// Serve static files from the 'public' directory from css and images
app.use(express.static('public'));

// Controller
app.get("/", (req, res) => {
    res.render("index", { posts, formatDateWithSuffix });
  });

// Server
const APP_PORT=3000
app.listen(APP_PORT, () => {
  console.log(`Server is listening on port ${APP_PORT}, ${new Date().toTimeString()}`);
});