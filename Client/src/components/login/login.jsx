/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Flip } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";

const Login = () => {
	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const data = {
		email: email,
		password: password,
	};

	const handleLogin = async (req, res) => {
		try {
			await axios
				.post("http://localhost:5000/api/auth/", data)
				.then((res) => {
					console.log(res.data);
					toast.success(res.data.message);
					localStorage.setItem("login", true);
					localStorage.setItem("_id", res.data.userData._id);
					localStorage.setItem(
						"name",
						res.data.userData.firstname +
							" " +
							res.data.userData.lastname,
					);
					localStorage.setItem("role", res.data.Role);
					if (res.data.Role === "user") {
						setInterval(() => {
							navigate("/");
							window.location.reload();
						}, 1700);
					} else {
						setInterval(() => {
							navigate("/auth/register");
							window.location.reload();
						}, 1700);
					}
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
	};

	return (
		<div class="wrapper">
			<div class="container main">
				<div className="row login-row">
					<div className="col-md-6 side-image">
						<div className="image-overlay">
							<div className="text">
								<header
									className="h2"
									style={{ color: "white" }}>
									Sri Lanka
								</header>
								<br />
								<p>
									Sri Lankan culture is a blend of local
									customs, religions, and colonial
									influences that date back centuries.
									The country is famous for its tea
									plantations, ancient Buddhist temples,
									and scenic beaches. The people of Sri
									Lanka are known for their hospitality
									and welcoming nature. The country has a
									rich history and cultural heritage that
									can be seen in the numerous festivals
									and traditional events that take place
									throughout the year. Sri Lanka's
									tourism industry has been growing
									steadily over the years, attracting
									visitors from all over the world to
									experience its unique culture, natural
									beauty, and warm hospitality.
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-6 right">
						<div className="input-box">
							<header className="h2">User Login</header>
							<div className="input-field">
								<input
									type="text"
									className="input"
									id="email"
									required
									autocomplete="off"
									onChange={(e) =>
										setEmail(e.target.value)
									}
								/>
								<label for="email">Email</label>
							</div>
							<div className="input-field">
								<input
									type="password"
									className="input"
									id="password"
									required
									onChange={(e) =>
										setPassword(e.target.value)
									}
								/>
								<label for="password">Password</label>
							</div>
							<div className="input-field">
								<button
									type="submit"
									className="custom-btn btn-15"
									onClick={handleLogin}>
									Login
								</button>
							</div>
							<div className="signin">
								<span>
									Don't have an account?{" "}
									<a href="/auth/register"> Register</a>
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

export default Login;
