const mongoose = require('mongoose')
const ArticleModel = require('../models/articles')

mongoose.connect(process.env.MONGO_URI).then(con => {
    
    console.log('App connected MongoDB via Mongoose')
    // Only to store test value in DB one time after connection.
    // ArticleModel.create({   
    //     title: 'Test Article',
    //     article: 'New article for test.'
    // }).then(result => {
    //     console.log(result)
    // })

}).catch(err => {
    console.log('Mongo connect error:', err);

})