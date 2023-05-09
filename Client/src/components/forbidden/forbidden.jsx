import React, { useState } from "react";

const ForbiddenPage = () => {
	const role = localStorage.getItem("role");

	let [location, setLocation] = useState("");

	if (role === "admin") {
		location = "/supplier";
	} else {
		location = "/";
	}

	return (
		<div>
			<div
				class="d-flex align-items-center justify-content-center mt-lg-4 mb-lg-4"
				style={{ height: "500px" }}>
				<div class="text-center">
					<h1 class="display-1 fw-bold">401</h1>
					<p class="fs-3">
						{" "}
						<span class="text-danger">Opps!</span> Page not
						found.
					</p>
					<p class="lead">
						You are unauthorized to view this page content.
					</p>
					<a
						href={location}
						class="btn btn-primary"
						style={{
							backgroundColor: "#5ebc67",
							border: "1px solid #5ebc67",
							color: "white",
						}}>
						Go Home
					</a>
				</div>
			</div>
		</div>
	);
};

export default ForbiddenPage;
