const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const careerSchema = new Schema({
	title: {
		type: String,
		required: true,
	},

	description: {
		type: String,
		required: true,
	},

	educationalReq: {
		type: String,
		required: true,
	},

	experience: {
		type: String,
		required: true,
	},
});

module.exports = model("Career", careerSchema);
