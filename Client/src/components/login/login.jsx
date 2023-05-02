/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./login.css";

const Login = () => {
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
								/>
								<label for="email">Email</label>
							</div>
							<div className="input-field">
								<input
									type="password"
									className="input"
									id="password"
									required
								/>
								<label for="password">Password</label>
							</div>
							<div className="input-field">
								<button
									type="submit"
									className="custom-btn btn-15">
									Login
								</button>
							</div>
							<div className="signin">
								<span>
									Don't have an account?{" "}
									<a href="#"> Register</a>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
