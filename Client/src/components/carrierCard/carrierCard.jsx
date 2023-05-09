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
import { useNavigate } from "react-router-dom";
import Headings from "../headings/headings";

export default function CarrierCard() {
	let navigate = useNavigate();

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

	return (
		<>
			<Headings heading="Carriers" />

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
							image="https://www.ziprecruiter.com/svc/fotomat/public-ziprecruiter/uploads/job_description_template/Junior_Software_Developer.jpg"
							title="green iguana"
						/>
						<CardContent>
							<Typography
								gutterBottom
								variant="h5"
								component="div">
								Junior Software Developer
							</Typography>
							<Typography
								gutterBottom
								variant="h6"
								component="div">
								Educational requirements
							</Typography>
							<Typography
								variant="body2"
								color="text.secondary">
								( A/L passed / O/L passed )
							</Typography>
							<Typography
								gutterBottom
								variant="h6"
								component="div">
								Experience level
							</Typography>
							<Typography
								variant="body2"
								color="text.secondary"
								style={{ marginBottom: "10px" }}>
								Minimum 2 year +
							</Typography>
							<Typography
								variant="body2"
								color="text.secondary">
								In the junior software developer role, you
								will help create programs and participate
								in test runs. You will be expected to have
								an in-depth knowledge of common programming
								languages. You will also be part of a
								paired programming group to complete tasks
								with senior developers.
							</Typography>
						</CardContent>
						<CardActions>
							<Button
								size="small"
								variant="contained"
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
		</>
	);
}
