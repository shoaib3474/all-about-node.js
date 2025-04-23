const express =require("express")
const router = express.Router()

const userCtrl = require("../controllers/user_ctrl.js")

//HTML route
router.get("/users",userCtrl.getAllUsersHTML)


//API routes

router.get("/", userCtrl.welcome)
router.get("/api/users", userCtrl.getAllUsersJSON)
router.post("/api/users", userCtrl.createUser)

router.
route("/api/users/:id")
.get( userCtrl.getUserById)
.patch(userCtrl.createUser)
.delete( userCtrl.deleteUserById
)

module.exports = router