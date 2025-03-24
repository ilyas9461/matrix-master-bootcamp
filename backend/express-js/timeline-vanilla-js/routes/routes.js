const router = require('express').Router();
const {dataReq} = require('../controller/data-controller.js');

// router.get('/', (req, res) => {
//   res.status(200).send('This is the root route!');
// });

router.get('/data', dataReq);// localhost:3000/data

module.exports = router;
