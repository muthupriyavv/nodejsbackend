const mongoose = require("mongoose")
const validator = require('validator')
const jwt = require('jsonwebtoken')
const userSchema = new mongoose.Schema({

    userId:
    {
        type:String,
        required: true
    },
    username:
    {
        type:String,
        required: true
    },
    emailId:
    {
        type : String,
        required: true,
        unique: true,
        lowercase: true,
        validate: value => {
            if (!validator.isEmail(value)) {
                throw new Error({error: 'Invalid Email address'})
            }
        }
    },
    password:
    {
        type: String,
        required: true,
        minLength: 7
    },
    contactNo:
    {
        type: Number,
        required: true
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]


})

userSchema.methods.generateAuthToken = async function() {
    // Generate an auth token for the user
    const user = this
    const token = jwt.sign({_id: user._id}, process.env.JWT_KEY)
    user.tokens = user.tokens.concat({token})
    await user.save()
    return token
}


const User =  mongoose.model('User',userSchema)
module.exports = User