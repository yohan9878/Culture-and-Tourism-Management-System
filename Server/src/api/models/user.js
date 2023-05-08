const mongoose = require("mongoose");

const user = new mongoose.Schema(
	{
		firstname: { type: String, required: true },
		lastname: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		mobile: { type: String, required: true },
		nationality: { type: String, required: true, unique: true },
		nic_passport: { type: String, required: true },
		address_country: { type: String, required: true },
		gender: { type: String, required: true },
		password: { type: String, required: true },
		isForiegner: { type: Boolean },
		isAdmin: { type: Boolean, default: false },
	},
	{ timestamps: true },
);

module.exports = mongoose.model("users", user);
