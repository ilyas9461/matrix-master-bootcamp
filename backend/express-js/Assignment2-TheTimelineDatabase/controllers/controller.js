const { post } = require('../configs/routes');
const PostModel = require('../models/post-models');

// After every operations, all datas will get from DB  and send frontend.
const getAllDataFromDB = async () => {
    try {
        const allPosts = await PostModel.find({}).sort({ _id: 'desc' })
        if (allPosts.length === 0 || !allPosts) {
            return false
        } else return allPosts

    } catch (error) {
        return error
    }
}

const getData = async (req, res) => {
    try {
        const posts = await getAllDataFromDB()
        if (posts.length > 0)
            res.send(posts)
        else
            res.status(404).send({ message: 'No posts found' })
    } catch (error) {
        res.status(500).send({ error })
    }
}

const postData = async (req, res) => {
    const Post = new PostModel(req.body)
    Post.save().then(async () => {
        const posts = await getAllDataFromDB()
        console.log('all data after post:', posts);
        
        res.status(200).send(posts)
    }).catch((error) => {
        res.status(400).send(error)
    })
}

const deletePost= async(req, res)=>{ 
    PostModel.deleteOne({_id:{$eq:req.body._id}}).then(async ()=>{
        const posts = await getAllDataFromDB()
        console.log('alld data after delete:', posts);

        res.status(200).send(posts)
    }).catch(error=>{
        res.status(400).send(error)
    })
}

const updatePost= async(req, res)=>{   
    PostModel.updateOne({_id:{$eq:req.body._id}}, req.body).then(async ()=>{
        const posts = await getAllDataFromDB()
        console.log('alld data after update:', posts);
        
        res.status(200).send(posts)
    }).catch(error=>{
        res.status(400).send(error)
    })
}

module.exports = {
    postData,
    getData,
    deletePost,
    updatePost
}