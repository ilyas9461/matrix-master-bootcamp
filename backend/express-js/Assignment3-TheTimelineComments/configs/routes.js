const router = require('express').Router();
const { addPost, getData, deletePost, updatePost } = require('../controllers/message-controller');
const { getAllUsers, addUser, deleteUser,updateUser, getUser } = require('../controllers/user-controller')
const {addComment, delComment} =require('../controllers/comment-controler')

// router.get('/', (req, res) => {  // Main root
//   res.status(200).send('This is the root route!');
// });

router.get('/data', getData)
router.post('/post', addPost)
router.delete('/delete', deletePost)
router.put('/update', updatePost)

router.get('/users', getAllUsers)
router.post('/get-user', getUser)
router.post('/add-user', addUser)
router.delete('/del-user', deleteUser)
router.put('/update-user',updateUser)

router.post('/add-comment', addComment)
router.delete('/del-comment',delComment)

module.exports = router;
