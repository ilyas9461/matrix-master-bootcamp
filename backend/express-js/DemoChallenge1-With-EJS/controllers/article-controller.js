const ArticleModel = require('../models/articles');

const getAlldata = async () => {
    return ArticleModel.find({}).sort({ _id: -1 })
        .then(articles => {
            return articles
        })
        .catch(err => {
            console.log('getAllData :', err)
            throw err
        })
}

const homePage = (req, res) => {
    getAlldata()
        .then(articles => {
            res.render('index', { articles })
        })
        .catch(error => {
            console.log(error);
            res.status(500).send('Error fetching articles')
        })
}

const detailsPage = async (req, res) => {
    const index = req.params.index
    const articles = await getAlldata()
    const article = articles[index]    // it find article from array with index then send it details page.

    if (article)
        res.render('details', { article, index })
    else
        res.send({ error: 'The article is not in DB!' })
}

const editArticlePage = async (req, res) => {
    const index = req.params.index

    const articles = await getAlldata()
    const article = articles[index]

    // console.log('editArticlePage:', index, article)
    if (article)
        res.render('new-article-page', { article, index })
    else
        res.send({ error: 'The article is not in DB!' })

}

const deleteArticle = async (req, res) => {
    const index = req.params.index
    const articles = await getAlldata()
    const article = articles[index]

    if (!article) {
        return res.status(404).send({ error: "Article not found!" })
    }

    ArticleModel.deleteOne(article._id,)
        .then(resData => {
            console.log(resData)
            res.redirect('/')
        }).catch(err => {
            res.send(err)
        })

}
const updateArticleInDB = (req,res) => {
    const { _id, title, article } = req.body

    ArticleModel.findByIdAndUpdate(
        _id,
        { title, article },                 // * The updated fields
        { new: true, runValidators: true }  // * Options: return the updated document and validate
    )
        .then(async (updatedArticle) => {
            if (updatedArticle) {
                console.log("Article updated:", updatedArticle)
                const articles = await getAlldata()
                // res.render('index', { articles })
                res.redirect('/')
            } else {
                res.status(404).send({ error: "Article not found for update" })
            }
        })
        .catch((error) => {
            console.log("Error updating article:", error)
            res.status(500).send(error)
        })
}
const newArticleInDB = (req, res) => {
    const { title, article } = req.body

    new ArticleModel({ title, article })
        .save()
        .then(async () => {
            try {
                const articles = await getAlldata()
                // res.render('index', { articles })
                res.redirect('/')
            } catch (error) {
                console.log(error);
                res.status(500).send('Error fetching articles')
            }
        })
        .catch((error) => {
            console.log("Error adding article:", error)
            res.status(500).send(error)
        })
}

const addArticle = (req, res) => {
    console.log("/new/article :", req.body)

    // Check if the request contains an `id` (to determine if it's an update)
    // Because we use the same controller add and update operations from in the same page.
    const { _id } = req.body

    if (_id) { // If `id` exists, update the article        
        updateArticleInDB(req, res)
    } else { // If no `id`, create a new article
        newArticleInDB(req,res)
    }
}

module.exports = {
    getAlldata,
    homePage,
    addArticle,
    detailsPage,
    editArticlePage,
    deleteArticle
}