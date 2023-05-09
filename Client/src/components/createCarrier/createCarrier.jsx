import React, { useState } from "react";
import axios from "axios";
import TextArea from "antd/es/input/TextArea";

export default function CreateCarrier() {
	const [serialNo, setSerialNo] = useState("");
	const [type, setType] = useState("");
	console.log("🚀 ~ file: addDevice.js:9 ~ AddDevice ~ type:", type);
	const [location, setLocation] = useState("");
	const [image, setImage] = useState("");
	const [status, setStatus] = useState("");
	console.log(
		"🚀 ~ file: addDevice.js:12 ~ AddDevice ~ status:",
		status,
	);

	const handleChange = (event) => {
		setStatus(event.target.value);
	};

	const handleImageChange = (event) => {
		const file = event.target.files[0];
		const reader = new FileReader();

		reader.onload = (event) => {
			setImage(event.target.result);
		};

		reader.readAsDataURL(file);
	};

	function sendData(e) {
		e.preventDefault();

		const newDevice = {
			serialNo,
			type,
			location,
			image,
			status,
		};

		axios
			.post("http://localhost:8070/device/add", newDevice)
			.then(() => {
				alert("Device added");
			})
			.catch((err) => {
				alert(err);
			});
		console.log(newDevice.status);
	}

	return (
		<>
			<div
				className="container mt-4 mb-4 px-5 py-5"
				style={{ boxShadow: "2px 2px 10px gray" }}>
				<h3>Update Carrier Post</h3>
				<br></br>
				<form onSubmit={sendData}>
					<div className="form-group row mb-2">
						<label for="serialNo">Title</label>
						<input
							type="text"
							className="form-control"
							id="serialNo"
							placeholder="Title"
							value="Junior Software Developer"
							required
							onChange={(e) => {
								setSerialNo(e.target.value);
							}}></input>
					</div>

					<div className="form-group row mb-2">
						<label for="serialNo">Description</label>
						<TextArea
							type="text"
							className="form-control"
							id="serialNo"
							placeholder="Description"
							value="In the junior software developer role, you
							will help create programs and participate
							in test runs. You will be expected to have
							an in-depth knowledge of common programming
							languages. You will also be part of a
							paired programming group to complete tasks
							with senior developers."
							required
							onChange={(e) => {
								setSerialNo(e.target.value);
							}}></TextArea>
					</div>

					<div className="form-group row mb-2">
						<label for="serialNo">
							Educational Requirements
						</label>
						<input
							type="text"
							className="form-control"
							id="serialNo"
							placeholder="Educational Requirements"
							required
							value="A/L passed | O/L passed"
							onChange={(e) => {
								setSerialNo(e.target.value);
							}}></input>
					</div>

					<div className="form-group row mb-2">
						<label for="serialNo">Experience Level</label>
						<input
							type="text"
							className="form-control"
							id="serialNo"
							placeholder="Experience Level"
							required
							value="Minimum 2 year +"
							onChange={(e) => {
								setSerialNo(e.target.value);
							}}></input>
					</div>

					<label className="mb-3" for="image">
						Select Image
					</label>
					<br></br>
					<input
						type="file"
						id="image"
						onChange={handleImageChange}
						required
					/>
					{image && (
						<div>
							<img src={image} alt="Selected" />
						</div>
					)}

					<br></br>
					<br></br>
					<button
						type="submit"
						class="btn btn-primary"
						style={{
							backgroundColor: "#5ebc67",
							border: "none",
						}}>
						Update Carrier Post
					</button>
				</form>
			</div>
		</>
	);
}
