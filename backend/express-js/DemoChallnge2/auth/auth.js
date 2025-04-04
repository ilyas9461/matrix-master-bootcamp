const jwt = require("jsonwebtoken");

const verifyJWT = (cookies) => {
    const token = cookies.token   
    
    if (!token) {
        return false
    }

    console.log('verifyJWT:', token);
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        console.log('decoded:', decoded)       
        // req.user = decoded; 
        //next() 
        return decoded
    } catch (err) {
        // res.status(401).send({ message: 'Invalid or expired token' })
        return false
    }
}

const isLoggedIn = (req, res, next) => {
    if (req.cookies.token) {
        next();
    
    } else {
        res.redirect("/");
    }
}

const isSignupLoginEnable = (req, res, next) => {
    if (req.cookies.token) {
        res.redirect("/")
    } else {
        next();
    }
}
module.exports = {
    isLoggedIn,
    isSignupLoginEnable,
    verifyJWT 
}