const Career = require("../../models/career.js");

const careerController = {
	//AddCareers
	addCareer: async (req, res) => {
		try {
			const { title, description, educationalReq, experience } =
				req.body;
			if (!title || !description || !educationalReq || !experience)
				return res
					.status(400)
					.json({ msg: "Please fill all fields." });

			const newCareer = new Career({
				title,
				description,
				educationalReq,
				experience,
			});
			console.log(newCareer);
			await newCareer.save();
			res.json({
				message: "Career Added successfully",
				data: newCareer,
			});
		} catch (err) {
			return res.status(500).json({ message: err.message });
		}
	},

	//DisplayCareers
	getCareers: async (req, res) => {
		try {
			const career = await Career.find();
			res.json({
				message: "Careers fetch successful",
				data: career,
			});
		} catch (err) {
			return res.status(500).json({ message: err.message });
		}
	},

	//DeleteCareers
	deleteCareer: async (req, res) => {
		try {
			const id = req.params.id;

			await Career.findByIdAndDelete({ _id: id });
			res.json({ message: "Career Deleted" });
		} catch (err) {
			return res.status(500).json({ message: err.message });
		}
	},
};

module.exports = careerController;
