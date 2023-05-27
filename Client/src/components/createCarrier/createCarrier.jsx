import React, { useState } from "react";
import axios from "axios";
import TextArea from "antd/es/input/TextArea";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function CreateCarrier() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [educationalReq, setEducationalReq] = useState("");
	const [experience, setexperience] = useState("");

	let navigate = useNavigate();

	function sendData(e) {
		e.preventDefault();
		navigate(`/admin/Dashboard`);

		const newCareer = {
			title,
			description,
			educationalReq,
			experience,
		};

		axios
			.post("http://localhost:5000/api/career/create", newCareer)
			.then(() => {
				// alert("Career added");
				toast.success("Career added successfully");
			})
			.catch((err) => {
				// alert(err);
				toast.error(err.response.data.message);
			});
		console.log(newCareer.status);
	}

	return (
		<>
			<div
				className="container mt-4 mb-4 px-5 py-5"
				style={{ boxShadow: "2px 2px 10px gray" }}>
				<h3>Career Post</h3>
				<br></br>
				<form onSubmit={sendData}>
					<div className="form-group row mb-2">
						<label for="title">Title</label>
						<input
							type="text"
							className="form-control"
							id="title"
							placeholder="title"
							// value="Junior Software Developer"
							required
							onChange={(e) => {
								setTitle(e.target.value);
							}}></input>
					</div>

					<div className="form-group row mb-2">
						<label for="descripton">Description</label>
						<TextArea
							type="text"
							className="form-control"
							id="descripton"
							placeholder="Description"
							required
							onChange={(e) => {
								setDescription(e.target.value);
							}}></TextArea>
					</div>

					<div className="form-group row mb-2">
						<label for="educationalReq">
							Educational Requirements
						</label>
						<input
							type="text"
							className="form-control"
							id="educationalReq"
							placeholder="Educational Requirements"
							required
							onChange={(e) => {
								setEducationalReq(e.target.value);
							}}></input>
					</div>

					<div className="form-group row mb-2">
						<label for="experience">Experience Level</label>
						<input
							type="text"
							className="form-control"
							id="experience"
							placeholder="Experience Level"
							required
							onChange={(e) => {
								setexperience(e.target.value);
							}}></input>
					</div>

					<br></br>
					<br></br>
					<button
						type="submit"
						class="btn btn-primary"
						style={{
							backgroundColor: "#5ebc67",
							border: "none",
						}}>
						Create Career
					</button>
				</form>
			</div>
		</>
	);
}
