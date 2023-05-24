const mongoose = require("mongoose");

const user = new mongoose.Schema(
	{
		firstname: { type: String, required: true },
		lastname: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		mobile: { type: String, required: true },
		nationality: { type: String, required: true },
		nic_passport: { type: String, required: true, unique: true },
		url: {
			type: String,
			required: false,
			default:
				"https://res.cloudinary.com/dkzx8v24n/image/upload/v1683526835/CategoryImages/f49vpv3rgaf7mmznmi2c.png",
		},
		address_country: { type: String, required: true },
		gender: { type: String, required: true },
		password: { type: String, required: true },
		isForiegner: { type: Boolean },
		isAdmin: { type: Boolean, default: false },
	},
	{ timestamps: true },
);

module.exports = mongoose.model("users", user);
