import React, { useState } from "react";
import axios from "axios";
import TextArea from "antd/es/input/TextArea";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import { ImageUploadButton } from "../addProduct/styles";
import { Button, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
	const [location, setLocation] = useState("");
	const [description, setDescription] = useState("");
	const [img, setImg] = useState("");
	const [post, setPost] = React.useState({
		location: "",
		description: "",
		postImg: "",
	});

	let navigate = useNavigate();

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
			console.log(res);
			setImg(res.data.url);
			setPost({
				...post,
				postImg: res.data.url,
			});
			// toast.success(res.data.message);
		} catch (err) {
			// toast.error(err.response.data.msg);
		}
	};

	const onClickAdd = async (e) => {
		e.preventDefault();
		navigate(`/admin/Dashboard`);
		console.log(post);
		if (location === "" || description === "" || post.postImg === "") {
			alert("Fill all the fields");
		} else {
			const payload = {
				location,
				description,
				img: post.postImg,
			};
			try {
				const res = await axios.post(
					"http://localhost:5000/api/post/create",
					payload,
				);
				console.log(res);
				// toast.success(res.data.message);
				toast.success("Post added successfully");
			} catch (err) {
				console.log(err);
				toast.error(err.response.data.message);
			}
		}
	};

	return (
		<>
			<div
				className="container mt-4 mb-4 px-5 py-5"
				style={{ boxShadow: "2px 2px 10px gray" }}>
				<h3>Create Post</h3>
				<br></br>
				<form onSubmit={onClickAdd}>
					<div className="form-group row mb-2">
						<label for="location">Location</label>
						<input
							type="text"
							className="form-control"
							id="location"
							placeholder="Enter Location"
							required
							onChange={(e) => {
								setLocation(e.target.value);
							}}></input>
					</div>

					<div className="form-group row mb-2">
						<label for="description">Description</label>
						<TextArea
							type="text"
							className="form-control"
							id="description"
							placeholder="Description"
							required
							onChange={(e) => {
								setDescription(e.target.value);
							}}></TextArea>
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
