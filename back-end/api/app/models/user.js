const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username:String,
    password: String,
    
})


const User= mongoose.model('marsupilami', UserSchema)

module.exports= User