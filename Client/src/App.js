import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Login from "./components/login/login.jsx";
import Header from "./components/common/header/header.jsx";
import Footer from "./components/common/footer/footer.jsx";
import Home from "./components/home/home.jsx";
import Register from "./components/register/register.jsx";
import Profile from "./components/profile/profile.jsx";
import "react-toastify/dist/ReactToastify.css";
import "react-tooltip/dist/react-tooltip.css";
import "./app.css";

function App() {
	return (
		<>
			<Router>
				<Header />
				<Routes>
					<Route path="/auth/register" element={<Register />} />
					<Route path="/" element={<Home />} />{" "}
					<Route path="/auth/login" element={<Login />} exact />
					<Route path="/user/:id" element={<Profile />} exact />
				</Routes>
				<Footer />
			</Router>
		</>
	);
}

export default App;
