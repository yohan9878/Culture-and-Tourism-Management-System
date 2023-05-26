const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	color: {
		type: String,
	},
	size: {
		type: String,
	},

	productImage: {
		type: String,
	},
	description: {
		type: String,
	},
});

module.exports = mongoose.model("Product", ProductSchema);
