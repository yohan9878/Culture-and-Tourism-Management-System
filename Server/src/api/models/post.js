import mongoose from "mongoose";
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

export default model("Post", postSchema);
