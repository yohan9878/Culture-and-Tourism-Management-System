const bcryptjs = require("bcryptjs");
const User = require("../../models/user");
const JWT = require("jsonwebtoken");

const register = async (req, res) => {
	// check whether the user already exists
	const exist = await User.findOne({
		email: req.body.email,
	});

	if (exist) {
		return res.status(400).json({ message: "User Already Exists !" });
	} else {
		// encrypt password
		const salt = await bcryptjs.genSalt(5);
		const hashPassword = await bcryptjs.hash(req.body.password, salt);

		const newUser = new User({
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			email: req.body.email,
			mobile: req.body.mobile,
			nationality: req.body.nationality,
			nic_passport: req.body.nic_passport,
			url: req.body.url,
			address_country: req.body.address_country,
			gender: req.body.gender,
			password: hashPassword,
			isForiegner: req.body.isForiegner,
		});

		try {
			newUser.save();
			return res.status(200).json({
				user: newUser,
				message: "User Registered Succefully !",
			});
		} catch (error) {
			return res
				.status(400)
				.json({ message: "User Registration Error !" });
		}
	}
};

const login = async (req, res) => {
	const userData = await User.findOne({ email: req.body.email });

	if (!userData) {
		return res.status(400).send({
			Login: false,
			message: "Invalid email address",
		});
	} else {
		let role;
		// decrypt password
		const password = await bcryptjs.compare(
			req.body.password,
			userData.password,
		);

		// validating the password
		if (!password) {
			return res.status(400).send({
				Login: false,
				message: "Incorrect Password !",
			});
		} else {
			const id = userData.id;
			const token = JWT.sign({ id }, process.env.SECRETE, {
				expiresIn: process.env.EXPIREIN,
			});

			if (userData.isAdmin) {
				role = "admin";
			} else {
				role = "user";
			}

			return res.status(200).json({
				Role: role,
				Login: true,
				message: "Login Successfull !",
				token,
				userData,
			});
		}
	}
};

const logout = async (req, res) => {
	// const refreashToken = req.params.authToken;

	localstorage.clear();

	try {
		// refreashTokens = refreashTokens.filter(
		// 	(token) => token !== refreashToken,
		// );
		res.status(200).json({
			message: "You are logged out successfully",
		});
	} catch (err) {
		return res.status(400).send({ message: err });
	}
};

module.exports = {
	register,
	login,
	logout,
};
