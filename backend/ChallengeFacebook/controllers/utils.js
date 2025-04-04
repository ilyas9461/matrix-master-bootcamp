const FeedModel = require('../models/feed')

const getAlldata = async () => {
    return FeedModel.find({}).sort({ _id: -1 }) //desc
        .then(messages => {
            return messages
        })
        .catch(err => {
            console.log('getAllData :', err)
            throw err
        })
}

const handleErrors = (err) => {
    console.log(err.message, err.code)
    let errors = {}

    if (err.message.includes('failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message
        })
    }
    return {errors}
}

module.exports={
    handleErrors,
    getAlldata
}