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

	const UpdateProduct = (id) => {
		navigate(`/updateProduct/${id}`);
	};

	const [product, setProduct] = React.useState([]);

	useEffect(() => {
		const getPrducts = async () => {
			await axios
				.get(`http://localhost:5000/api/product/getAll`)
				.then((res) => {
					console.log(res);
					setProduct(res.data.data);
				})
				.catch((err) => {
					console.log(
						"🚀 ~ file: index.jsx:252 ~ getAllCategory ~ err",
						err.massage,
					);
				});
		};

		getPrducts();
	});

	const handleRead = () => {
		if (!login) {
			toast.warning(
				"Server Error: You should login to the system first !",
			);
		}
	};

	return (
		<>
			<Grid
				container
				spacing={3}
				sx={{ mx: "30px", marginBottom: "30px" }}
				style={{ width: "90%" }}>
				{/* {product.map((product) => ( */}
				<Grid
					item
					xs={3}
					direction="row"
					key={product._id}
					style={{ width: "100%" }}>
					<Card sx={{ maxWidth: 345 }}>
						<CardMedia
							sx={{ height: 160 }}
							image="https://cdn.britannica.com/33/153533-050-89461AB3/Sigiriya-rock-pillar-ruins-top-palace-Sri.jpg"
							title="green iguana"
						/>
						<CardContent>
							<Typography
								gutterBottom
								variant="h5"
								component="div">
								Sigiriya
							</Typography>
							{/* <Typography
								gutterBottom
								variant="h6"
								component="div">
								
							</Typography> */}
							<Typography
								variant="body2"
								color="text.secondary">
								Sigiriya, also called Lion Rock or Lion
								Mountain, site in central Sri Lanka
								consisting of the ruins of an ancient
								stronghold that was built in the late 5th
								century CE on a remarkable monolithic rock
								pillar. The rock, which is so steep that
								its top overhangs the sides, rises to an
								elevation of 1,144 feet (349 metres) above
								sea level and is some 600 feet (180 metres)
								above the surrounding plain
							</Typography>
						</CardContent>
						<CardActions>
							<Button
								size="small"
								variant="contained"
								onClick={handleRead}
								sx={{
									// marginLeft: "60%",
									background: "#5ebc67",
								}}>
								Read More
							</Button>
						</CardActions>
					</Card>
				</Grid>
				{/* ))} */}
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
