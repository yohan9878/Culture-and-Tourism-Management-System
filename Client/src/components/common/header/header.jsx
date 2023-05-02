/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../../../assets/images/logo-no-background.png";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
	return (
		// <!-- Navbar -->
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			{/* <!-- Container wrapper --> */}
			<div class="container">
				{/* <!-- Navbar brand --> */}
				<a
					class="navbar-brand me-2"
					href="http://localhost:3000/"
					style={{ marginRight: "50px" }}>
					<img
						src={logo}
						alt="CTMS Logo"
						loading="lazy"
						style={{
							marginTop: "-18px",
							width: "120px",
							marginRight: "50px",
						}}
					/>
				</a>

				{/* <!-- Toggle button --> */}
				<button
					class="navbar-toggler"
					type="button"
					data-mdb-toggle="collapse"
					data-mdb-target="#navbarButtonsExample"
					aria-controls="navbarButtonsExample"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<i class="fas fa-bars"></i>
				</button>

				{/* <!-- Collapsible wrapper --> */}
				<div
					class="collapse navbar-collapse"
					id="navbarButtonsExample">
					{/* <!-- Left links --> */}
					<ul
						class="navbar-nav me-auto mb-2 mb-lg-0"
						style={{ marginLeft: "50px" }}>
						<li
							class="nav-item"
							style={{ margin: "0px 10px" }}>
							<a class="nav-link" href="/">
								Home
							</a>
						</li>
						<li
							class="nav-item"
							style={{ margin: "0px 10px" }}>
							<a class="nav-link" href="#">
								Locations
							</a>
						</li>
						<li
							class="nav-item"
							style={{ margin: "0px 10px" }}>
							<a class="nav-link" href="#">
								About Us
							</a>
						</li>
						<li
							class="nav-item"
							style={{ margin: "0px 10px" }}>
							<a class="nav-link" href="#">
								Contact Us
							</a>
						</li>
					</ul>
					{/* <!-- Left links --> */}

					<div class="d-flex align-items-center">
						<Link to="/auth/login">
							<button
								type="button"
								class="btn btn-sm btn-link px-3 me-2 text-uppercase loginBtn">
								Login
							</button>
						</Link>
						<button
							type="button"
							class="btn btn-sm btn-primary text-uppercase me-3 registerBtn">
							Sign up for free
						</button>
					</div>
				</div>
				{/* <!-- Collapsible wrapper --> */}
			</div>
			{/* <!-- Container wrapper --> */}
		</nav>
	);
};

export default Header;
