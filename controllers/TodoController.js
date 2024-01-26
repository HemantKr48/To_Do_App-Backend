const mongoose = require("mongoose");

const TodoModel = require("../models/TodoModels");

const getTodo = async (req, res) => {
	const todo = await TodoModel.find();
	res.send(todo);
};

const saveTodo = async (req, res) => {
	const { text } = req.body;

	TodoModel.create({ text }).then((data) => {
		console.log("Added successfully");
		console.log(data);
		res.send(data);
	});
};

const updateTodo = async (req, res) => {
	const { _id, text } = req.body;

	TodoModel.findByIdAndUpdate(_id, { text })
		.then(() => res.send("Updated Successfully....."))
		.catch((err) => console.log(err));
};

const deleteTodo = async (req, res) => {
	const { _id } = req.body;
	TodoModel.findByIdAndDelete(_id )
		.then(() => res.send("Deleted Successfully"))
		.catch((err) => console.log(err));
};

module.exports = { getTodo, saveTodo,updateTodo,deleteTodo };
