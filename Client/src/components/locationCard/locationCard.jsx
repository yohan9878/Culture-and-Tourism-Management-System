import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Test from "../../assets/images/slider/Image-01.jpg";
import axios from "axios";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import { Flip } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Headings from "../headings/headings";

export default function LocationCard() {
	let navigate = useNavigate();

	const login = localStorage.getItem("login");

	const UpdatePost = (id) => {
		navigate(`/updatePost/${id}`);
	};

	const [post, setPost] = React.useState([]);

	useEffect(() => {
		const getPost = async () => {
			await axios
				.get(`http://localhost:5000/api/post/getAll`)
				.then((res) => {
					console.log(res);
					setPost(res.data.data);
				})
				.catch((err) => {
					console.log(
						"🚀 ~ file: index.jsx:252 ~ getAllCategory ~ err",
						err.massage,
					);
				});
		};

		getPost();
	}, []);

	const handleRead = () => {
		if (!login) {
			toast.warning(
				"Server Error: You should login to the system first !",
			);
		}
	};

	const handleDelete = (id) => {
		console.log(
			"🚀 ~ file: allDevices.js:27 ~ handleDelete ~ id:",
			id,
		);

		axios
			.delete(`http://localhost:5000/api/post/delete/${id}`)
			.then((res) => {
				console.log(
					"🚀 ~ file: allDevices.js:31 ~ axios.delete ~ res:",
					res,
				);
				// alert("post removed");
				toast.success("Post Removed");
			})
			.catch((err) => {
				// alert(err.message);
				toast.error(err.response.message);
			});
	};

	return (
		<>
			<Headings heading="Posts" />
			<Grid
				container
				spacing={3}
				sx={{ mx: "30px", marginBottom: "30px" }}
				style={{ width: "90%" }}>
				{post.map((post) => (
					<Grid
						item
						xs={3}
						direction="row"
						key={post._id}
						style={{ width: "100%" }}>
						<Card sx={{ maxWidth: 345 }}>
							<CardMedia
								sx={{ height: 160 }}
								image={post.img}
							/>
							<CardContent>
								<Typography
									gutterBottom
									variant="h5"
									component="div">
									{post.location}
								</Typography>

								<Typography
									variant="body2"
									color="text.secondary">
									{post.description}
								</Typography>
							</CardContent>

							<CardActions>
								<Button
									size="small"
									onClick={() => UpdatePost(post._id)}
									sx={{
										marginLeft: "55%",
										color: "#5ebc67",
									}}>
									Edit
								</Button>
								<Button
									size="small"
									onClick={() => handleDelete(post._id)}
									sx={{
										marginLeft: "55%",
										color: "red",
									}}>
									Remove
								</Button>
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
			<ToastContainer
				position="top-right"
				autoClose={1000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				transition={Flip}
				pauseOnHover={false}
				theme="colored"
			/>
		</>
	);
}
