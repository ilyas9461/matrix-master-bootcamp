const router = require('express').Router();
const { postData, getData, deletePost, updatePost } = require('../controllers/controller');

// router.get('/', (req, res) => {  // Main root
//   res.status(200).send('This is the root route!');
// });

router.get('/data', getData)
router.post('/post', postData)
router.delete('/delete', deletePost)
router.put('/update', updatePost)

module.exports = router;
