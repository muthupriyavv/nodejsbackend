const auth = require("../middleware/auth")
const User =  require("../models/User")
const express = require("express")

async function  createUser(req, res){

    try {
        const user = await User.findOne({ emailId: req.body.emailId })
        if (user) {
            return res.status(200).json({ 'message': 'That user already exisits!' });
        }
        else {
            const user = new User(req.body)
            await user.save()
            const token = await user.generateAuthToken()
            res.json({ user, token })
        }
    }
    catch (error) {
        res.status(400).json({"message":error})
    }
}

module.exports.createUser=createUser

async function userLogin(req,res){
    try {
        const { emailId, password } = req.body
        const user = await User.findOne({ emailId })
        if (user === null) {
            res.json({ error: 'Invalid Email' })
        }
        else if (emailId === user.emailId && password === user.password) {
            const token = await user.generateAuthToken()
            res.json({ user, token })
        }
        else {
            res.status(401).json({ error: 'Login failed!!' })
        }
    }
    catch (error) {
        res.status(400).json(error)
    }
}

module.exports.userLogin=userLogin