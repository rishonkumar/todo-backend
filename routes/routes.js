const express = require("express");
const {createTodo, updateTodos, deleteTodo, getTodos} = require("../controller/controller");
const router = express.Router();

router.post("/", createTodo);
router.get("/", getTodos);
router.put("/:id", updateTodos);
router.delete("/:id", deleteTodo);

module.exports = router;

