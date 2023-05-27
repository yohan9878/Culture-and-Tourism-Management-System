const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const postSchema = new Schema({
	location: {
		type: String,
		required: true,
	},

	description: {
		type: String,
		required: true,
	},

	img: {
		type: String,
		required: true,
	},
});

module.exports = model("Post", postSchema);
