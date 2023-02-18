const router = require("express").Router();
const {
    getUserById,
    createUser,
    login,
    deleteUser,
    
} = require("../controllers/user-controllers");

router
    .route("/")
    .post(createUser)

router
    .route("/:id")
    .get(getUserById)
    .delete(deleteUser)

router
    .route("/login")
    .post(login)

module.exports = router;