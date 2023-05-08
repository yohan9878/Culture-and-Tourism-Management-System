/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import { ToastContainer, toast } from "react-toastify";
import { Flip } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { DatePicker, Space, Radio, ConfigProvider } from "antd";
import "./register.css";

const Register = () => {
	const navigate = useNavigate();

	function isObjEmpty(obj) {
		return Object.keys(obj).length === 0;
	}

	const options1 = [
		{ label: "Male", value: "male" },
		{ label: "Female", value: "female" },
	];

	const options2 = [
		{ label: "Sri Lankan", value: "SL" },
		{ label: "Forigner", value: "FR" },
	];

	const initialValues = {
		firstname: "",
		lastname: "",
		email: "",
		mobile: "",
		nic: "",
		address: "",
		password: "",
		confirmPassword: "",
	};

	const [formValues, setFormValues] = useState(initialValues);
	const [gender, setGender] = useState("male");
	const [isForigner, setIsForigner] = useState(false);
	const [nationality, setNationality] = useState("SL");
	const [dob, setDob] = useState("");
	const [message, setMessage] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);

	const dateofBirth = dayjs(dob.$d).format("YYYY-MM-DD");

	const onChange1 = ({ target: { value } }) => {
		setGender(value);
	};

	const onChange2 = ({ target: { value } }) => {
		// console.log("value: ", value);
		if (value === "FR") {
			setIsForigner(true);
			setNationality(value);
		} else {
			setIsForigner(false);
			setNationality(value);
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
		// console.log(formValues);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setMessage(validate(formValues));
		setIsSubmit(true);

		const status = isObjEmpty(message);

		// console.log("status: ", status);

		// console.log("message: ", message);

		if (
			!(formValues.password === formValues.confirmPassword) &&
			status
		) {
			toast.error("Passwords does not match");
		} else if (status) {
			const data = {
				firstname: formValues.firstname,
				lastname: formValues.lastname,
				email: formValues.email,
				mobile: formValues.mobile,
				nationality: nationality,
				nic_passport: formValues.nic,
				address_country: formValues.address,
				gender: gender,
				password: formValues.password,
				isForiegner: isForigner,
			};

			// console.log(data);

			try {
				await axios
					.post("http://localhost:5000/api/auth/user", data)
					.then((res) => {
						// console.log(res);
						toast.success(res.data.message);
						setInterval(() => {
							navigate("/auth/login");
							// window.location.reload();
						}, 1700);
					});
			} catch (error) {
				if (
					error.response &&
					error.response.status >= 400 &&
					error.response.status <= 500
				) {
					toast.error(error.response.data.message);
				}
			}
		}
	};

	const validate = (values) => {
		const errors = {};
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
		if (!values.firstname) {
			errors.firstname = "First Name is required !";
		} else if (!values.lastname) {
			errors.lastname = "Last Name is required !";
		} else if (!values.email) {
			errors.email = "Email is required !";
		} else if (!regex.test(values.email)) {
			errors.email = "This is not a valid email !";
		} else if (!values.mobile) {
			errors.mobile = "Mobile Number is required !";
		} else if (!values.mobile.length === 10) {
			errors.mobile = "This is not a valid mobile number !";
		} else if (!values.nic && isForigner) {
			errors.nic = "Passport is required !";
		} else if (!values.nic && !isForigner) {
			errors.nic = "NIC is required !";
		} else if (
			!(values.nic.length === 12 || values.nic.length === 10)
		) {
			errors.nic = "This is not a valid NIC !";
		} else if (!values.address && isForigner) {
			errors.address = "Country is required !";
		} else if (!values.address && !isForigner) {
			errors.address = "Address is required !";
		} else if (!values.password) {
			errors.password = "Password is required !";
		} else if (values.password.length < 8) {
			errors.password = "Password must be more than 5 characters !";
		}

		return errors;
	};

	// useEffect(() => {
	// 	console.log(message);
	// 	if (Object.keys(message).length === 0 && isSubmit) {
	// 		console.log(formValues);
	// 		setMessage(validate(formValues));
	// 	}
	// }, [message]);

	return (
		<div className="wrapper">
			<div className="container main">
				<div
					className="row register-row"
					style={{ backgroundColor: "white" }}>
					<header
						className="h2"
						style={{
							boxShadow: "none",
							marginTop: "25px",
							fontWeight: "700",
							textAlign: "center",
							marginBottom: "10px",
						}}>
						User Register
					</header>
					<div className="col-md-6 side-image-register right">
						<form
						// onSubmit={handleSubmit}
						>
							<div
								className="input-box"
								style={{ marginBottomn: "100px" }}>
								{/* first name */}
								<div className="input-field">
									<input
										type="text"
										className="input"
										id="firstname"
										name="firstname"
										required
										autoComplete="off"
										value={formValues.firstname}
										onChange={handleChange}
										style={{
											marginBottom: "1px",
										}}
									/>
									<label for="firstname">
										{" "}
										First Name{" "}
									</label>
									<p
										style={{
											marginBottom: "15px",
											fontSize: "12px",
											color: "red",
											display: "flex",
											alignItems: "start",
											justifyContent: "start",
											fontWeight: "500",
										}}>
										{message.firstname}
									</p>
								</div>
								{/* last name */}
								<div className="input-field">
									<input
										type="text"
										className="input"
										id="lastname"
										name="lastname"
										required
										autoComplete="off"
										value={formValues.lastname}
										onChange={handleChange}
										style={{
											marginBottom: "1px",
										}}
									/>
									<label for="lastname">
										{" "}
										Last Name{" "}
									</label>
									<p
										style={{
											marginBottom: "15px",
											fontSize: "12px",
											color: "red",
											display: "flex",
											alignItems: "start",
											justifyContent: "start",
											fontWeight: "500",
										}}>
										{message.lastname}
									</p>
								</div>
								{/* email */}
								<div className="input-field">
									<input
										type="email"
										className="input"
										id="email"
										name="email"
										required
										autoComplete="off"
										value={formValues.email}
										onChange={handleChange}
										style={{
											marginBottom: "1px",
										}}
									/>
									<label for="email"> Email </label>
									<p
										style={{
											marginBottom: "15px",
											fontSize: "12px",
											color: "red",
											display: "flex",
											alignItems: "start",
											justifyContent: "start",
											fontWeight: "500",
										}}>
										{message.email}
									</p>
								</div>
								{/* mobile */}
								<div className="input-field">
									<input
										type="text"
										className="input"
										id="mobile"
										name="mobile"
										required
										value={formValues.mobile}
										onChange={handleChange}
										style={{
											marginBottom: "1px",
										}}
									/>
									<label for="mobile"> Mobile </label>
									<p
										style={{
											marginBottom: "15px",
											fontSize: "12px",
											color: "red",
											display: "flex",
											alignItems: "start",
											justifyContent: "start",
											fontWeight: "600",
										}}>
										{message.mobile}
									</p>
								</div>
								{/* nationality */}
								<div
									className="input-box"
									style={{ marginLeft: "10px" }}>
									<label
										for="nationality"
										style={{
											display: "flex",
											justifyContent: "start",
											alignItems: "start",
											alignContent: " start",
											marginBottom: "10px",
										}}>
										{" "}
										Nationality{" "}
									</label>
									<ConfigProvider
										theme={{
											token: {
												colorPrimary: "#5ebc67",
											},
										}}>
										<Radio.Group
											options={options2}
											onChange={onChange2}
											value={nationality}
											name="nationality"
											optionType="button"
											buttonStyle="solid"
											style={{
												marginBottom: "25px",
												display: "flex",
												justifyContent: "start",
												alignItems: "start",
												alignContent: " start",
												color: "#5ebc67",
											}}
										/>
									</ConfigProvider>
								</div>
								{/* nic  */}
								<div className="input-field">
									<input
										type="text"
										className="input"
										id="nic"
										name="nic"
										required
										value={formValues.nic}
										onChange={handleChange}
										style={{
											marginBottom: "0px",
										}}
									/>
									{isForigner ? (
										<label for="nic"> Passport </label>
									) : (
										<label for="nic"> NIC </label>
									)}

									<p
										style={{
											marginBottom: "50px",
											fontSize: "12px",
											color: "red",
											display: "flex",
											alignItems: "start",
											justifyContent: "start",
											fontWeight: "500",
										}}>
										{message.nic}
									</p>
								</div>

								{/* dob */}
								{/* <div className="input-field">
									<ConfigProvider
										theme={{
											token: {
												colorPrimary: "#e94560",
											},
										}}>
										<Space
											direction="vertical"
											style={{ width: "100%" }}>
											<DatePicker
												placeholder="Select Date of Birth"
												style={{
													background:
														"transparent",
													border: "none",
													borderRadius: "0px",
													borderBottom:
														"1px solid #0b3c5d",
													marginTop: "0px",
													width: "100%",
													color: "#265673",
												}}
												className="input"
												name="dob"
												onChange={(date) => {
													setDob(date);
												}}
												value={dob}
											/>
										</Space>
									</ConfigProvider>
								</div> */}
							</div>
						</form>
					</div>
					<div className="col-md-6 right">
						<div className="input-box">
							{/* gender */}
							<div
								className="input-box"
								style={{ marginLeft: "10px" }}>
								<label
									for="gender"
									style={{
										display: "flex",
										justifyContent: "start",
										alignItems: "start",
										alignContent: " start",
										marginBottom: "10px",
									}}>
									{" "}
									Gender{" "}
								</label>
								<ConfigProvider
									theme={{
										token: {
											colorPrimary: "#5ebc67",
										},
									}}>
									<Radio.Group
										options={options1}
										onChange={onChange1}
										value={gender}
										name="gender"
										optionType="button"
										buttonStyle="solid"
										style={{
											marginBottom: "25px",
											display: "flex",
											justifyContent: "start",
											alignItems: "start",
											alignContent: " start",
											color: "#5ebc67",
										}}
									/>
								</ConfigProvider>
							</div>
							{/* address */}
							<div className="input-field">
								<input
									type="text"
									className="input"
									id="address"
									name="address"
									required
									value={formValues.address}
									onChange={handleChange}
									style={{
										marginBottom: "1px",
									}}
								/>
								{isForigner ? (
									<label for="country"> Country </label>
								) : (
									<label for="address"> Address </label>
								)}

								<p
									style={{
										marginBottom: "15px",
										fontSize: "12px",
										color: "red",
										display: "flex",
										alignItems: "start",
										justifyContent: "start",
									}}>
									{message.address}
								</p>
							</div>
							{/* password */}
							<div className="input-field">
								<input
									type="password"
									className="input"
									id="password"
									name="password"
									required
									value={formValues.password}
									onChange={handleChange}
									style={{
										marginBottom: "1px",
									}}
								/>
								<label for="password"> Password </label>
								<small
									id="passwordHelpBlock"
									class="form-text text-muted"
									style={{
										textAlign: "left",
										marginBottom: "2px",
									}}>
									Your password must be 8-20 characters
									long.
								</small>
								<p
									style={{
										marginBottom: "15px",
										fontSize: "12px",
										color: "red",
										display: "flex",
										alignItems: "start",
										justifyContent: "start",
										fontWeight: "500",
									}}>
									{message.password}
								</p>
							</div>
							{/* confirm password */}
							<div className="input-field">
								<input
									type="password"
									className="input"
									id="confirmPassword"
									name="confirmPassword"
									required
									value={formValues.confirmPassword}
									onChange={handleChange}
								/>
								<label for="Cpassword">
									{" "}
									Confirm Password{" "}
								</label>
							</div>

							<div className="input-field">
								<button
									type="submit"
									className="custom-btn btn-15"
									onClick={handleSubmit}>
									Register
								</button>
							</div>
							<div
								className="signin"
								style={{
									marginTop: "10px",
									marginBottom: "30px",
								}}>
								<span>
									Already have an account ?
									<a href="/auth/login"> Login </a>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
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
		</div>
	);
};

export default Register;
