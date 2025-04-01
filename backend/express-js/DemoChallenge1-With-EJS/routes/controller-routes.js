const router = require('express').Router()
const {deleteArticle, addArticle} =require('../controllers/article-controller')

// This is business route
router.post('/new/article',addArticle)
router.get('/delete/article/:index',deleteArticle)

module.exports = router