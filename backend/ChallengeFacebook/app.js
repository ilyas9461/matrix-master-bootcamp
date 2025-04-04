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
app.use(express.urlencoded({ extended: true }))

app.use(router)

app.listen(process.env.PORT || 3000, ()=>{
    console.log(`Server is listening http://localhost:${process.env.PORT} `)
    
})