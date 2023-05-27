import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

axios.defaults.baseURL = "https://ctms-api.vercel.app";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root"),
);
