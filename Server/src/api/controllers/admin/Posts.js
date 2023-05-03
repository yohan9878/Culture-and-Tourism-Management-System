import Post from "../../models/post";

const postController = {
	//CreatePost
	createPost: async (req, res) => {
		try {
			const { location, description, img } = req.body;
			if (!location || !description || !img)
				return res
					.status(400)
					.json({ msg: "Please fill in all fields." });

			const newPost = new Post({
				location,
				description,
				img,
			});
			console.log(newPost);
			await newPost.save();
			res.json({
				message: "Post Added successfully",
				data: newPost,
			});
		} catch (err) {
			return res.status(500).json({ message: err.message });
		}
	},

	//GetALLPosts
	getPosts: async (req, res) => {
		try {
			const post = await Post.find();
			res.json({ message: "Posts fetch success", data: post });
		} catch (err) {
			return res.status(500).json({ message: err.message });
		}
	},

	//ModifyPost
	updatePosts: async (req, res) => {
		try {
			const id = req.params.id;
			const { img, location, description } = req.body;

			await Post.findOneAndUpdate(
				{ _id: id },
				{ img, location, description },
			);
			res.json({
				message: "Post update successfull",
				data: { img, location, description },
			});
		} catch (err) {
			return res.status(500).json({ message: err.message });
		}
	},

	//DeletePosts
	deletePosts: async (req, res) => {
		try {
			const id = req.params.id;

			await Post.findByIdAndDelete({ _id: id });
			res.json({ message: "Post Deleted" });
		} catch (err) {
			return res.status(500).json({ message: err.message });
		}
	},
};
export default postController;
