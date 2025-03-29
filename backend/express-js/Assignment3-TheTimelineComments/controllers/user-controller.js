const UserModel = require('../models/users')
const { ObjectId } = require('mongodb');

const getAllUsers = (req, res) => {

    UserModel.find({}).sort({ _id: 'desc' })
        .then(users => {
            if (users.length === 0)
                res.send('No users in DB!')
            else
                res.status(200).send(users)
        }).catch(err => {
            res.status(500).send(err)
        })
}

const getUser=(req,res)=>{
    
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).send({ error: 'Email and password are required' });
    }

    UserModel.findOne({ email: email, password: password })
    .then(user => {
        if (!user) {
            return res.status(404).send({ error: 'User not found or invalid credentials' });
        }
        res.status(200).send(user)
    })
    .catch(err => {
        console.error('Error finding user:', err);
        res.status(500).send(err);
    });
}

const addUser=(req,res)=>{
    const {...user}=req.body
    console.log(user)
    new UserModel(user).save()
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send(err)
    })
}

const deleteUser=(req,res)=>{
    const {...user}=req.body
    console.log(user)
    UserModel.deleteOne({_id: { $eq: user._id }}).then(resData=>{
        res.status(200).send(resData)
    })
    .catch(err=> res.status(500).send(err))
}

const updateUser=(req,res)=>{
    const { ...user } = req.body; // Destructure _id and other fields from the request body
    
    if (!user._id) {
        return res.status(400).send({ error: 'Missing _id field in request body' });
    }
    const objectId = ObjectId.createFromHexString(user._id);
    UserModel.updateOne({ _id: objectId }, user).then(resData=>{
        res.status(200).send(resData)

    }).catch(err=>res.status(500).send(err))

}

module.exports = {
    getAllUsers,
    addUser,
    deleteUser,
    updateUser,
    getUser
}