const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();
const routes = require("./routes/Todoroutes");

const app = express();
app.use(express.json());
app.use(cors());

mongoose
	.connect(process.env.MONGODB_URL)
	.then(() => console.log("database connected"))
	.catch((err) => {
		console.log(err);
	});

app.use(routes);
const PORT = process.env.port || 5000;

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
