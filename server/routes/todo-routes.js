const router = require("express").Router();
const {
    addTodo,
    updateTodo,
    deleteTodo
} = require("../controllers/todo-controllers");

router
    .route("/:todoId")
    .put(updateTodo);

router
    .route("/:todoId/:id")
    .delete(deleteTodo);

router
    .route("/")
    .post(addTodo);

module.exports = router;