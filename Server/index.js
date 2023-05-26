const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const fileUpload = require("express-fileupload");

const authRoute = require("./src/api/routes/authRoutes");
const userRoute = require("./src/api/routes/userRoutes");
const imageUploadRoute = require("./src/api/routes/imageUploadRoute");
const categoryImageRoute = require("./src/api/routes/categoryImageRoute");
const productRoute = require("./src/api/routes/product");
const profileImageRoute = require("./src/api/routes/userImageRoute");

const app = express();

dotenv.config();
app.use(
	cors({
		credentials: true,
		origin: true,
	}),
);

app.use((req, res, next) => {
	res.setHeader(
		"Access-Control-Allow-Origin",
		"https://ctms-api.vercel.app",
	);
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, PUT, DELETE",
	);
	res.setHeader("Access-Control-Allow-Headers", "Content-Type");
	next();
});

app.use(express.urlencoded({ extended: true }));
app.set("trust proxy", 1);
app.use(
	fileUpload({
		useTempFiles: true,
	}),
);

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

app.get("/", (req, res) => {
	res.send("Welcome to Travel Bee");
});

// Wrap the app in the serverless handler
const handler = serverless(app);

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/product", productRoute);
app.use("/api", imageUploadRoute);
app.use("/api", categoryImageRoute);
app.use("/api/user", profileImageRoute);

// creating the port connection with the backend server
const port = process.env.PORT || 5000;

app.listen(port || 5000, () => {
	console.log("Server listening on port " + port || 5000, "🔥");
});

// Export the handler for serverless deployment
module.exports = { handler };
