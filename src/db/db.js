const mongoose = require("mongoose")

mongoose.connect('mongodb://127.0.0.1:27017/userdb1',()=>
{
    console.log("user database connected")
})