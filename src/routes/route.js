const Controller = require("../controller/userController")
const express =  require("express")
const router = express.Router()

router.post("/createUser", Controller.create )
router.post("/login", Controller.login)
// router.get("/user/profile",)
// router.get("/user/profile/logout",)

module.exports = router