const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

const authRoute = require("./api/routes/authRoutes");

//importRoutes
import careerRoute from "./api/routes/careerRoute";
import postRoute from "./api/routes/postRoute";

const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json());

// creating the connection with database
mongoose
	.connect(process.env.URL)
	.then(() => {
		console.log("Database Connection Succeeded 🔥");
	})
	.catch((err) => {
		console.log("Database Connection Failed ❌ - Error: " + err);
	});

// middleware
app.use(express.json());

app.use("/api/auth", authRoute);
app.use(careerRoute);
app.use(postRoute);
// const postRouter = require("./api/controllers/admin/Posts");
// app.use("/post", postRouter);

// creating the port connection with the backend server
const port = process.env.PORT || 5000;

app.listen(process.env.PORT || 5000, () => {
	console.log(
		"Server listening on port " + process.env.PORT || 5000,
		"🔥",
	);
});
