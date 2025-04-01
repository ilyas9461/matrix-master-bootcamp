require('dotenv').config()   
const express=require('express')
const path = require('path')

const router = require('./routes/router');
require('./configs/mongoose')

const app=express()

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json())
/* 
 🔸 This middleware parses incoming JSON payloads in the request body.
 🔸 It is commonly used when your application expects JSON data from the client (e.g., in a POST or PUT request).
 🔸 After this middleware is applied, the parsed JSON data will be available in req.body.
*/
app.use(express.urlencoded({ extended: true }))
/*
 🔸This middleware parses incoming URL-encoded data (from FORMS) in the request body.
 🔸The extended: true 
        Allows parsing of nested objects in the URL-encoded data using the qs library. 
        If set to false, it uses the querystring library, which does not support nested objects.
 🔸Like the JSON middleware, the parsed data will be available in req.body.
*/

app.use(router)

app.listen(process.env.PORT || 3000, ()=>{
    console.log(`Server is listening http://localhost:${process.env.PORT} `)
    
})