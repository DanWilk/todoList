const router = require("express").Router();
const todoRoutes = require("./todo-routes");
const userRoutes = require("./user-routes");

router.use("/api/user", userRoutes);
router.use("/api/todo", todoRoutes);

module.exports = router;