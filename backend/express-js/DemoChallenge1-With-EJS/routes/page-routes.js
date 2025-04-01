const express = require('express');
const router = express.Router();
const {homePage, detailsPage,  editArticlePage} = require('../controllers/article-controller')

router.get('/', homePage)

router.get('/new-article', (req, res) => {
    const article=false   // we use only one page for new article and edit-delete article.
    res.render('new-article-page',{article})
})
router.get('/article-details/:index', detailsPage)

router.get('/edit/article/:index', editArticlePage)

module.exports = router;