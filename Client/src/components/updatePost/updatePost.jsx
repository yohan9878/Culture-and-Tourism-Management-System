import React, { useState } from "react";
import axios from "axios";
import TextArea from "antd/es/input/TextArea";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import { ImageUploadButton } from "../addProduct/styles";
import { Button, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function UpdatePost() {
	const [location, setLocation] = useState("");
	const [description, setDescription] = useState("");
	const [img, setImg] = useState();
	const params = useParams();
	const postId = params.id;
	const [post, setPost] = React.useState({
		location: "",
		description: "",
		postImg: "",
	});
	let navigate = useNavigate();

	const UpdatePost = (id) => {
		navigate(`/locations`);
	};

	const onClickAdd = async (e) => {
		navigate(`/locations`);
		e.preventDefault();
		console.log(post);
		if (
			post.location === "" ||
			post.description === "" ||
			post.postImg === ""
		) {
			alert("Fill all the fields");
		} else {
			try {
				const res = await axios.put(
					`http://localhost:5000/api/post/update/${postId}`,
					post,
				);
				console.log(res);
				// toast.success(res.data.message);
				toast.success("Post Updated successfully");
			} catch (err) {
				console.log(err);
				toast.error(err.response.data.message);
			}
		}
	};
	React.useState(() => {
		fetchData();
	});

	async function fetchData() {
		const response = await axios.get(
			`http://localhost:5000/api/post/get/${postId}`,
		);
		setPost(response.data.data);
	}
	const handleImage = async (e) => {
		e.preventDefault();
		try {
			const file = e.target.files[0];
			if (!file) return alert("File not exist.");
			if (file.size > 1024 * 1024)
				// 1mb
				return alert("Size too large!");
			if (file.type !== "image/jpeg" && file.type !== "image/png")
				// 1mb
				return alert("File format is incorrect.");
			let formData = new FormData();
			formData.append("file", file);

			const res = await axios.post(
				"http://localhost:5000/api/postImageUpload",
				formData,
				{
					headers: {
						"content-type": "multipart/form-data",
					},
				},
			);
			setImg(res.data.url);
			setPost({
				...post,
				postImg: res.data.url,
			});
			toast.success(res.data.message);
		} catch (err) {
			toast.error(err.response.data.msg);
		}
	};

	const onChangeInput = (e) => {
		setPost({
			...post,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<>
			<div
				className="container mt-4 mb-4 px-5 py-5"
				style={{ boxShadow: "2px 2px 10px gray" }}>
				<h3>Update Post</h3>
				<br></br>
				<form onSubmit={onClickAdd}>
					<div className="form-group row mb-2">
						<label for="location">Location</label>

						<TextField
							id="outlined-size-small"
							value={post.location}
							size="small"
							onChange={(e) => onChangeInput(e)}
							name="location"
						/>
					</div>

					<div className="form-group row mb-2">
						<label for="description">Description</label>

						<TextArea
							id="outlined-size-small"
							value={post.description}
							size="small"
							onChange={(e) => onChangeInput(e)}
							name="description"
						/>
					</div>

					<Grid
						container
						direction="row"
						justifyContent="flex-start">
						<Grid item xs={1} sx={{ background: "white" }}>
							<label for="description">Post Image</label>
						</Grid>
						<Grid item xs={5} sx={{ background: "white" }}>
							<ImageUploadButton component="label">
								<input
									type="file"
									hidden
									onChange={handleImage}
								/>
								<Box
									sx={{
										position: "relative",
										minHeight: 200,
										minWidth: 200,
									}}>
									{img || post.postImg ? (
										<img
											alt="forum_post"
											src={post.postImg || img}
											style={{
												height: 200,
												width: 200,
												objectFit: "cover",
											}}
										/>
									) : (
										<ImageOutlinedIcon
											sx={{
												position: "absolute",
												top: "50%",
												left: "50%",
												transform:
													"translate(-50%, -50%)",
												minHeight: 200,
												minWidth: 200,
											}}
										/>
									)}
								</Box>
							</ImageUploadButton>
						</Grid>
					</Grid>

					<br />

					<button
						type="submit"
						class="btn btn-primary"
						style={{
							backgroundColor: "#5ebc67",
							border: "none",
						}}>
						Update Post
					</button>
				</form>
			</div>
		</>
	);
}
