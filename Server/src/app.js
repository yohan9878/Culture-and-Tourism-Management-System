const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const authRoute = require("./api/routes/authRoutes");
const userRoute = require("./api/routes/userRoutes");

const app = express();
dotenv.config();

app.use(cors());

// creating the connection with database
mongoose
	.connect(process.env.URL)
	.then(() => {
		console.log("Database Connection Succeeded 🔥");
	})
	.catch((err, res) => {
		console.log("Database Connection Failed ❌ - Error: " + err);
	});

// middleware
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);

// creating the port connection with the backend server
const port = process.env.PORT || 5000;

app.listen(port || 5000, () => {
	console.log("Server listening on port " + port || 5000, "🔥");
});
