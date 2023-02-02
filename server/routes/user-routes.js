const router = require("express").Router();
const {
    getUserById,
    createUser,
    deleteUser
} = require("../controllers/user-controllers");

router
    .route("/")
    .post(createUser)

router
    .route("/:id")
    .get(getUserById)
    .delete(deleteUser)

module.exports = router;