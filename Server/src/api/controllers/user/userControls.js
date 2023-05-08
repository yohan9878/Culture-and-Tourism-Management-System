const User = require("../../models/user");

const findOneUser = async (req, res) => {
	try {
		const user = await User.findOne({ _id: req.params.id });

		if (!user) {
			return res.status(404).json({ message: "User Not Found!" });
		} else {
			return res
				.status(200)
				.json({ data: user, message: "User Found !" });
		}
	} catch (error) {
		return res.status(400).json({ message: "Server Error !" });
	}
};

module.exports = {
	findOneUser,
};
