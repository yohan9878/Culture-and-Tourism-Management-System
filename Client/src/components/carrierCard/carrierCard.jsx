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
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CarrierCard() {
	let navigate = useNavigate();

	const [career, setCareer] = React.useState([]);

	useEffect(() => {
		const getCareers = async () => {
			await axios
				.get(`http://localhost:5000/api/career/getAll`)
				.then((res) => {
					console.log(res);
					setCareer(res.data.data);
				})
				.catch((err) => {
					console.log(
						"🚀 ~ file: index.jsx:252 ~ getAllCategory ~ err",
						err.massage,
					);
				});
		};

		getCareers();
	}, []);

	const handleDelete = (id) => {
		console.log(
			"🚀 ~ file: allDevices.js:27 ~ handleDelete ~ id:",
			id,
		);

		axios
			.delete(`http://localhost:5000/api/career/delete/${id}`)
			.then((res) => {
				console.log(
					"🚀 ~ file: carrierCard.js:31 ~ axios.delete ~ res:",
					res,
				);
				// alert("career removed");
				toast.success("Career Removed");
			})
			.catch((err) => {
				alert(err.message);
				toast.error(err.response.message);
			});
	};

	return (
		<>
			<Headings heading="Careers" />

			<Grid
				container
				spacing={3}
				sx={{ mx: "30px", marginBottom: "30px" }}
				style={{ width: "90%" }}>
				{career.map((career) => (
					<Grid
						item
						xs={3}
						direction="row"
						key={career._id}
						style={{ width: "100%" }}>
						<Card sx={{ maxWidth: 345 }}>
							<CardContent>
								<Typography
									gutterBottom
									variant="h5"
									component="div">
									{career.title}
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
									{career.educationalReq}
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
									{career.experience}
								</Typography>
								<Typography
									variant="body2"
									color="text.secondary">
									{career.description}
								</Typography>
							</CardContent>

							<CardActions>
								<Button
									size="small"
									variant="contained"
									onClick={() =>
										handleDelete(career._id)
									}
									sx={{
										marginLeft: "70%",
										background: "red",
									}}>
									Remove
								</Button>
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
		</>
	);
}
