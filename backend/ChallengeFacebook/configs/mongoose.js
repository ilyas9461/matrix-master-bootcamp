const mongoose = require('mongoose')  // ORM
const FeedModel = require('../models/feed')

mongoose.connect(process.env.MONGO_URI).then(con => {
    
    console.log('App connected MongoDB via Mongoose')
    // Only to store test value in DB one time after connection.
    // FeedModel.create({   
    //     name: 'Test ',
    //     message: 'New message for test.'
    // }).then(result => {
    //     console.log(result)
    // })

}).catch(err => {
    console.log('Mongo connect error:', err);

})