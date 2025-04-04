const express = require('express');
const router = express.Router();
const { homePage, addMessage, detailsPage, editPage, updateMessage, deleteMessage } = require('../controllers/controller')

router.get('/', (req, res) => {
    res.redirect('/feed')
});
router.get('/feed', homePage)

router.post('/new-message', addMessage)
router.get('/feed/:index', detailsPage)

router.get('/feed/edit/:index', editPage)
router.post('/feed/edit/:index', updateMessage)

router.get('/feed/delete/:index', deleteMessage)

module.exports = router;