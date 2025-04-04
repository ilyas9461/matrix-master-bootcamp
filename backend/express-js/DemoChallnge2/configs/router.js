const express = require('express');
const router = express.Router();
const {addUser,login, logoff,welcome} = require('../controllers/users-controller')
const{isSignupLoginEnable, isLoggedIn} =require('../auth/auth')

// Main root
router.get('/', (req, res) => {  
  res.render('index')
});
router.get('/welcome',isLoggedIn,welcome)
router.post('/register',addUser)
router.post('/login',login)
router.get('/logoff', logoff)


module.exports = router