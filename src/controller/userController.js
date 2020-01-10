const Service = require("../service/userService")

async function create (req,res,next){
   
    try
    {
    const data  = await Service.createUser(req,res)
    console.log(data)
    res.json(data)
    }
    catch(err)
    {
        res.json(err);
    }
}

module.exports.create = create

 async function login(req,res,next){
    console.log(req.body)
    try
    {
    const data = await Service.userLogin(req,res)
    console.log(data)
    res.json(data)
    }
    catch(err)
    {
        res.json(err);
    }
}

module.exports.login=login


