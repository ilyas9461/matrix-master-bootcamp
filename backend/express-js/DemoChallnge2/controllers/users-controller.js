const UserModel = require('../models/users');
const jwt = require('jsonwebtoken')
const {verifyJWT }= require('../auth/auth')

const handleErrors = (err) => {
    console.log(err.message, err.code)
    let errors = {}

    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message
        })
    }
    return errors
}

const addUser = (req, res) => {
    const { password, confirm_password } = req.body

    if (confirm_password !== password) {
        return res.status(400).send('Passwords do not match !')
    }

    new UserModel(req.body)
        .save()
        .then(async () => {
            res.redirect('/')
            // res.render('welcome', { user: req.body })
        })
        .catch((error) => {
            const errors = handleErrors(error)
            console.log("Error adding article:", error)
            res.status(500).json({ error })
        })
}

const login = async (req, res) => {
    console.log(req.body)
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).send({ error: 'Email and password are required' });
    }
    const existUser = await UserModel.findOne({ email })
    // console.log('existUser:', existUser)

    if (existUser) {
        if (existUser.password !== password) {
            return res.status(400).send({ error: 'Invalid password' });
        }
        const { password: dBPassword, ...userWithoutPsw } = existUser.toObject()

        const token = jwt.sign({ user:userWithoutPsw }, process.env.JWT_SECRET, { expiresIn: '1h' })
        res.locals.user = userWithoutPsw

         console.log('existUser:',  res.locals.user )

        res.cookie('token',token )

        // res.redirect('/welcome') 
        res.render('welcome', { user: userWithoutPsw });   

    } else {
        const err = { error: 'User not found or invalid credentials' }
        console.error('Error finding user:', err);
        return res.status(404).send(err);
    }


}
const logoff = (req, res) => {
    console.log('logoff user')

    res.locals.user = null
    res.clearCookie('token')
    res.redirect('/')
}

const welcome=(req, res) => {

    const user=verifyJWT(req.cookies.token )
    if(!user)
        res.status(401).send({ message: 'Token is missing ...' })

    console.log({user: user});

    
    res.render('welcome',{user: user})
}

module.exports = {
    addUser,
    login,
    logoff, 
    welcome
}