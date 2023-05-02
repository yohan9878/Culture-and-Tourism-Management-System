import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Login from "./components/login/login.jsx";
import Header from "./components/common/header/header.jsx";
import Footer from "./components/common/footer/footer.jsx";

function App() {
	return (
		<>
			<Router>
				<Header />
				<Routes>
					<Route path="/auth/login" element={<Login />} exact />
				</Routes>
				<Footer />
			</Router>
		</>
	);
}

export default App;
