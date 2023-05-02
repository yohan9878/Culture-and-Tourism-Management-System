/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Header = () => {
	return (
		// <!-- Navbar -->
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			{/* <!-- Container wrapper --> */}
			<div class="container">
				{/* <!-- Navbar brand --> */}
				<a
					class="navbar-brand me-2 mt-2"
					href="https://mdbgo.com/">
					<img
						src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
						height="16"
						alt="MDB Logo"
						loading="lazy"
						style={{ marginTop: "-8px" }}
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
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li
							class="nav-item"
							style={{ margin: "0px 20px" }}>
							<a class="nav-link" href="/">
								Home
							</a>
						</li>
						<li
							class="nav-item"
							style={{ margin: "0px 20px" }}>
							<a class="nav-link" href="#">
								Locations
							</a>
						</li>
						<li
							class="nav-item"
							style={{ margin: "0px 20px" }}>
							<a class="nav-link" href="#">
								About Us
							</a>
						</li>
						<li
							class="nav-item"
							style={{ margin: "0px 20px" }}>
							<a class="nav-link" href="#">
								Contact Us
							</a>
						</li>
					</ul>
					{/* <!-- Left links --> */}

					<div class="d-flex align-items-center">
						<button
							type="button"
							class="btn btn-link px-3 me-2">
							Login
						</button>
						<button type="button" class="btn btn-primary me-3">
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
