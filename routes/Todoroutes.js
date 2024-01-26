const express = require("express");
const { Router } =require("express");

const { getTodo ,saveTodo,updateTodo,deleteTodo } = require("../controllers/TodoController")
const router = Router();

// router.get("/",(req, res)=> {
//     res.json({ message: "hi hemant" })
// })
router.get("/todos", getTodo);
router.post("/todo", saveTodo);
router.put("/update", updateTodo);
router.delete("/delete", deleteTodo);


module.exports = router;
