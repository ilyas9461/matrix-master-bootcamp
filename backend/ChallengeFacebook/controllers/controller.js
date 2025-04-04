const FeedModel = require('../models/feed')
const {handleErrors, getAlldata}=require('./utils')

const homePage = (req, res) => {
    getAlldata()  // [{},{} ....]
        .then(messages => {
            // console.log('All data:', messages)
            res.render('index', { messages })
        })
        .catch(error => {
            console.log(error);
            res.status(500).send('Error fetching articles')
        })
}

const addMessage = (req, res) => {
    // console.log('addMessage: ', req.body)
    new FeedModel(req.body)
        .save()
        .then(async () => {
              res.redirect('/feed')  
        })
        .catch((errors) => {
            const error=handleErrors(errors)
            res.status(500).send(error)
        })
}

const detailsPage = async (req, res) => {
    const index = req.params.index
    const messages = await getAlldata()
    const message = messages[index]

    if (message)
        res.render('details', { message, index })
    else
        res.send({ error: 'The message is not in DB!' })
}

const editPage = async (req, res) => {
    const index = req.params.index
    const messages = await getAlldata()
    const message = messages[index]
    // console.log('editPage:', message);

    if (message)
        res.render('edit-page', { message, index })
    else
        res.send({ error: 'The message is not in DB!' })
}

const updateMessage = async (req, res) => {
    const index = req.params.index
    const messages = await getAlldata()
    const message = messages[index]

    FeedModel.findByIdAndUpdate(
        message._id,
        req.body,
        { new: true, runValidators: true }
    )
        .then(async (updated) => {
            if (updated) {
                res.redirect(`/feed/${index}`)
            } else {
                res.status(404).send({ error: "Message not found for update" })
            }
        })
        .catch((errors) => {
            const error=handleErrors(errors)
            res.status(500).send(error)
        })
}

const deleteMessage= async (req, res) => {
    const index = req.params.index
    const messages = await getAlldata()
    const message = messages[index]

    if (!message) {
        return res.status(404).send({ error: "Article not found!" })
    }

    FeedModel.deleteOne(message._id,)
        .then(resData => {
            console.log(resData)
            res.redirect('/')
        }).catch(err => {
            res.send(err)
        })
}

module.exports = {
    getAlldata,
    homePage,
    addMessage,
    detailsPage,
    editPage,
    updateMessage,
    deleteMessage
}