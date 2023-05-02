import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Login from "./components/login/login.jsx";
import "./components/login/login.css";

function App() {
	return (
		<>
			<div class="wrapper">
				<div class="container main">
					<Login />
				</div>{" "}
			</div>{" "}
		</>
	);
}

export default App;
