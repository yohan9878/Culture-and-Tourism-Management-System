import React from "react";
import userSetting from "../../assets/images/admin/—Pngtree—management vector icon_3710720.png";
import locationSetting from "../../assets/images/admin/location.png";
import carrierSetting from "../../assets/images/admin/carrier.png";
import { Link } from "react-router-dom";

const Dashboard = () => {
	return (
		<div
			className="container mt-lg-5 mb-lg-5 bg-light"
			style={{ border: "3px solid gray", borderRadius: "50px" }}>
			<div className="row">
				<div
					className="col-sm-4"
					style={{
						display: "flex",
						justifyContent: "center",
						alignContent: "center",
						alignItems: "center",
						padding: "10px 10px",
					}}>
					<img
						src={userSetting}
						alt=""
						style={{
							position: "initial",
							width: "50px",
							height: "50px",
							margin: "0px 5px",
						}}
					/>
					<Link to="/admin/users">
						<button
							style={{
								backgroundColor: "#5ebc67",
								border: "1px solid #5ebc67",
								color: "white",
								padding: "5px 20px",
								borderRadius: "50px",
							}}>
							User Profile Management
						</button>
					</Link>
				</div>
				<div
					className="col-sm-4"
					style={{
						display: "flex",
						justifyContent: "center",
						alignContent: "center",
						alignItems: "center",
						padding: "10px 10px",
					}}>
					<img
						src={locationSetting}
						alt=""
						style={{
							position: "initial",
							width: "50px",
							height: "50px",
							margin: "0px 5px",
						}}
					/>
					<button
						style={{
							backgroundColor: "#5ebc67",
							border: "1px solid #5ebc67",
							color: "white",
							padding: "5px 20px",
							borderRadius: "50px",
						}}>
						Location Post Management
					</button>
				</div>
				<div
					className="col-sm-4"
					style={{
						display: "flex",
						justifyContent: "center",
						alignContent: "center",
						alignItems: "center",
						padding: "10px 10px",
						margin: "0px 0px",
					}}>
					<img
						src={carrierSetting}
						alt=""
						style={{
							position: "initial",
							width: "50px",
							height: "50px",
							margin: "0px 5px",
						}}
					/>
					<button
						style={{
							backgroundColor: "#5ebc67",
							border: "1px solid #5ebc67",
							color: "white",
							padding: "5px 20px",
							borderRadius: "50px",
						}}>
						Carrier Post Management
					</button>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
