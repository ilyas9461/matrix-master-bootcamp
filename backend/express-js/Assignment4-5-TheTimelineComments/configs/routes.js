const router = require('express').Router();
const { addPost, getData, deletePost, updatePost } = require('../controllers/message-controller');
const { getAllUsers, addUser, deleteUser,updateUser, login } = require('../controllers/user-controller')
const {addComment, delComment} =require('../controllers/comment-controler')
const verifyJWT =require('../auth/auth')

// router.get('/', (req, res) => {  // Main root
//   res.status(200).send('This is the root route!');
// });

/* Messages routes */
router.get('/data', getData)                    // it is not protected endpoint
router.post('/post',verifyJWT, addPost)
router.delete('/delete', verifyJWT,deletePost)
router.put('/update',verifyJWT, updatePost)     // protected 

/* Users routes */
router.get('/users',verifyJWT,getAllUsers)
router.post('/login',login)
router.post('/add-user', addUser)   
router.delete('/del-user',verifyJWT, deleteUser)
router.put('/update-user',verifyJWT, updateUser)

/* comments routes */
router.post('/add-comment', addComment)
router.delete('/del-comment',delComment)

module.exports = router;
