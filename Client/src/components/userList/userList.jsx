import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsFillEyeFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Tooltip } from "react-tooltip";
import { Radio, ConfigProvider } from "antd";
import { ToastContainer, toast } from "react-toastify";
import { Flip } from "react-toastify";
import "./userList.css";
import { Link } from "react-router-dom";

const UserList = () => {
	const [users, setUsers] = useState([]);
	const [show, setShow] = useState(false);

	const loggedID = localStorage.getItem("_id");

	const [showEdit, setShowEdit] = useState(false);
	const [showDelete, setShowDelete] = useState(false);

	const [firstname, setFirstName] = useState("");
	const [lastname, setLastname] = useState("");
	const [email, setEmail] = useState("");
	const [mobile, setMobile] = useState("");
	const [nic_passport, setNic_passport] = useState("");
	const [nationality, setNatioanality] = useState("");
	const [address_country, setAddress_country] = useState("");
	const [gender, setGender] = useState("");
	const [nation, setNation] = useState(nationality);
	const [isForigner, setIsForigner] = useState(false);
	const [error, setError] = useState("");
	const [image, setImage] = useState("");

	console.log(nationality);

	const [_id, setID] = useState("");
	const [delId, setDelID] = useState("");

	const options1 = [
		{ label: "Male", value: "Male" },
		{ label: "Female", value: "Female" },
	];

	const options2 = [
		{ label: "Sri Lankan", value: "Sri Lankan" },
		{ label: "Forigner", value: "Foriegner" },
	];

	const onChange1 = ({ target: { value } }) => {
		setGender(value);
	};

	const onChange2 = ({ target: { value } }) => {
		// console.log("value: ", value);
		if (value === "Foriegner") {
			setIsForigner(true);
			setNatioanality(value);
		} else {
			setIsForigner(false);
			setNatioanality(value);
		}
	};

	// const [id, setID] = useState("");

	// console.log(id);

	const handleClose = () => {
		setShow(false);
		setShowEdit(false);
		setShowDelete(false);
	};
	const handleShow = async (id) => {
		await axios.get("/api/user/" + id).then((res) => {
			setFirstName(res.data.data.firstname);
			setLastname(res.data.data.lastname);
			setEmail(res.data.data.email);
			setMobile(res.data.data.mobile);
			setNic_passport(res.data.data.nic_passport);
			setNatioanality(res.data.data.nationality);
			setAddress_country(res.data.data.address_country);
			setGender(res.data.data.gender);
			setImage(res.data.data.url);
		});
		setShow(true);
	};

	const handleEditShow = async (id) => {
		await axios.get("/api/user/" + id).then((res) => {
			setFirstName(res.data.data.firstname);
			setLastname(res.data.data.lastname);
			setEmail(res.data.data.email);
			setMobile(res.data.data.mobile);
			setNic_passport(res.data.data.nic_passport);
			setNatioanality(res.data.data.nationality);
			setAddress_country(res.data.data.address_country);
			setGender(res.data.data.gender);
		});
		setShowEdit(true);
	};

	const updateUser = async () => {
		const data = {
			firstname: firstname,
			lastname: lastname,
			email: email,
			mobile: mobile,
			nationality: nationality,
			nic_passport: nic_passport,
			address_country: address_country,
			gender: gender,
			isForiegner: isForigner,
		};
		await axios.put("/api/user/update/" + _id, data).then((res) => {
			toast.success(res.data.message);
			console.log(res.data.data);
			localStorage.setItem(
				"name",
				res.data.firstname + " " + res.data.lastname,
			);
			setShowEdit(false);
			setInterval(() => {
				window.location.reload();
			}, 1700);
		});
	};

	const handleDeleteShow = () => {
		setShowDelete(true);
	};

	const handleDelete = async () => {
		if (delId === loggedID) {
			toast.error("Already logged as this user. Cannot Delete !");
			setShowDelete(false);
		} else {
			await axios.delete("/api/user/delete/" + delId).then((res) => {
				toast.success(res.data.message);
				setShowDelete(false);
				setInterval(() => {
					window.location.reload();
				}, 1700);
			});
		}
	};

	// user email search
	const getUserDataEmail = async (searchFilter) => {
		const UserFilterModel = {
			searchFilter: searchFilter,
		};

		const response = await axios.post(
			"/api/user/email/filter",
			UserFilterModel,
		);
		// console.log(response.data);
		setUsers(response.data.data);

		if (response.data.data.length === 0) {
			setError("Cannot find this email. Please check again !");
		} else {
			setError("");
		}
	};

	// onInput condition
	const onSearchTextChanged = (searchFilter) => {
		getUserDataEmail(searchFilter);
	};

	useEffect(() => {
		getUserDataEmail();
	}, []);

	return (
		<div className="mx-4 my-4">
			<div
				class="row"
				style={{
					marginBottom: "10px",
					marginLeft: "1px",
				}}>
				<div class="col-sm-3 px-0">
					<input
						type="text"
						class="form-control rounded-0 bg-light searchTxt"
						placeholder="Enter email to search"
						onInput={(e) =>
							onSearchTextChanged(e.target.value)
						}
						style={{ border: "1px solid #eee" }}
					/>
					<div
						style={{
							marginTop: "3px",
							color: "red",
							fontSize: "12px",
						}}>
						{error}
					</div>
				</div>
				<div class="col-sm-2 px-4">
					<Link to="/auth/register">
						<button
							data-mdb-ripple-color="green"
							type="button"
							class="btn btn-light rounded-0 search"
							style={{
								border: "1px solid #eee",
								fontWeight: "normal",
								color: "white",
								backgroundColor: "#5ebc67",
							}}>
							<AiFillPlusCircle /> Add New User
						</button>
					</Link>
				</div>
			</div>
			<table
				border="2"
				class="table table-bordered table-striped table-hover align-middle mb-0 bg-white rounded-4">
				<thead class="thead-dark">
					<tr>
						<th>Name</th>
						<th>Mobile</th>
						<th>NIC / Passport</th>
						<th>Role</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{users.map((value) => (
						<tr>
							<td>
								<div
									style={{
										display: "flex",
										alignItems: "center",
									}}>
									<img
										src={value.url}
										alt=""
										style={{
											width: "45px",
											height: "45px",
											borderRadius: "50px",
											position: "initial",
											objectFit: "cover",
										}}
										class="avatarImg"
									/>
									<div class="ms-3">
										<p class="fw-bold mb-1">
											{value.firstname +
												" " +
												value.lastname}
										</p>
										<p class="text-muted mb-0">
											{value.email}
										</p>
									</div>
								</div>
							</td>
							<td>{value.mobile}</td>
							<td>{value.nic_passport}</td>
							<td>
								{value.isAdmin ? (
									<span
										class="badge badge-success rounded-pill d-inline px-2 py-1"
										id="role"
										style={{
											backgroundColor: `#cc0000`,
										}}>
										Admin
									</span>
								) : (
									<span
										class="badge badge-success rounded-pill d-inline px-3"
										id="role"
										style={{
											backgroundColor: `#198754`,
										}}>
										User
									</span>
								)}
							</td>
							<td>
								<div className="btn-group">
									<button
										type="button"
										class="btn btn-sm btn-rounded view"
										onClick={() => {
											handleShow(value._id);
										}}>
										<BsFillEyeFill
											data-tooltip-id="tooltip"
											data-tooltip-content="View"
											data-tooltip-place="bottom"
										/>
									</button>
									<button
										type="button"
										class="btn btn-sm btn-rounded update"
										onClick={() => {
											handleEditShow(value._id);
											setID(value._id);
										}}>
										<FiEdit
											data-tooltip-id="tooltip"
											data-tooltip-content="Edit"
											data-tooltip-place="bottom"
										/>
									</button>
									<button
										type="button"
										class="btn btn-sm btn-rounded delete"
										onClick={() => {
											handleDeleteShow();
											setDelID(value._id);
										}}>
										<MdDelete
											data-tooltip-id="tooltip"
											data-tooltip-content="Delete"
											data-tooltip-place="bottom"
										/>
									</button>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			{/* view details */}
			<Modal show={show} onHide={handleClose}>
				<Modal.Header
					closeButton
					style={{ backgroundColor: "#5ebc67", color: "white" }}>
					<img
						src={image}
						alt=""
						style={{
							width: "50px",
							height: "50px",
							objectFit: "cover",
							borderRadius: "100px",
							position: "initial",
							marginRight: "20px",
							border: "2px solid white",
						}}
					/>
					<Modal.Title>{firstname + " " + lastname}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group
							className="mb-3"
							controlId="exampleForm.ControlInput1">
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type="email"
								autoFocus
								disabled
								value={email}
							/>
						</Form.Group>
						<Form.Group
							className="mb-3"
							controlId="exampleForm.ControlTextarea1">
							<Form.Label>Mobile</Form.Label>
							<Form.Control
								type="text"
								autoFocus
								disabled
								value={mobile}
							/>
						</Form.Group>
						<Form.Group
							className="mb-3"
							controlId="exampleForm.ControlTextarea1">
							<Form.Label>Nationality</Form.Label>
							<Form.Control
								type="text"
								autoFocus
								disabled
								value={nationality}
							/>
						</Form.Group>
						<Form.Group
							className="mb-3"
							controlId="exampleForm.ControlTextarea1">
							<Form.Label>NIC</Form.Label>
							<Form.Control
								type="text"
								autoFocus
								disabled
								value={nic_passport}
							/>
						</Form.Group>
						<Form.Group
							className="mb-3"
							controlId="exampleForm.ControlTextarea1">
							<Form.Label>Address</Form.Label>
							<Form.Control
								type="text"
								autoFocus
								disabled
								value={address_country}
							/>
						</Form.Group>
						<Form.Group
							className="mb-3"
							controlId="exampleForm.ControlTextarea1">
							<Form.Label>Gender</Form.Label>
							<Form.Control
								type="text"
								autoFocus
								disabled
								value={gender}
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
			</Modal>
			{/* edit details */}
			<Modal show={showEdit} onHide={handleClose}>
				<Modal.Header
					closeButton
					style={{ backgroundColor: "#ffc107", color: "white" }}>
					<Modal.Title>Edit User Details</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group
							className="mb-3"
							controlId="exampleForm.ControlInput1">
							<Form.Label>First Name</Form.Label>
							<Form.Control
								type="text"
								autoFocus
								value={firstname}
								onChange={(e) =>
									setFirstName(e.target.value)
								}
							/>
						</Form.Group>
						<Form.Group
							className="mb-3"
							controlId="exampleForm.ControlInput1">
							<Form.Label>Last Name</Form.Label>
							<Form.Control
								type="text"
								autoFocus
								value={lastname}
								onChange={(e) =>
									setLastname(e.target.value)
								}
							/>
						</Form.Group>
						<Form.Group
							className="mb-3"
							controlId="exampleForm.ControlInput1">
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type="email"
								autoFocus
								disabled
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</Form.Group>
						<Form.Group
							className="mb-3"
							controlId="exampleForm.ControlTextarea1">
							<Form.Label>Mobile</Form.Label>
							<Form.Control
								type="text"
								autoFocus
								value={mobile}
								onChange={(e) => setMobile(e.target.value)}
							/>
						</Form.Group>
						<Form.Group
							className="mb-3"
							controlId="exampleForm.ControlTextarea1">
							<Form.Label>Nationality</Form.Label>
							<ConfigProvider
								theme={{
									token: {
										colorPrimary: "#ffc107",
									},
								}}>
								<Radio.Group
									options={options2}
									onChange={onChange2}
									value={nationality}
									name="nationality"
									optionType="button"
									buttonStyle="solid"
									style={{
										marginBottom: "10px",
										display: "flex",
										justifyContent: "start",
										alignItems: "start",
										alignContent: " start",
										color: "#ffc107",
									}}
								/>
							</ConfigProvider>
						</Form.Group>
						<Form.Group
							className="mb-3"
							controlId="exampleForm.ControlTextarea1">
							<Form.Label>NIC</Form.Label>
							<Form.Control
								type="text"
								autoFocus
								value={nic_passport}
								onChange={(e) =>
									setNic_passport(e.target.value)
								}
							/>
						</Form.Group>
						<Form.Group
							className="mb-3"
							controlId="exampleForm.ControlTextarea1">
							<Form.Label>Address</Form.Label>
							<Form.Control
								type="text"
								autoFocus
								value={address_country}
								onChange={(e) =>
									setAddress_country(e.target.value)
								}
							/>
						</Form.Group>
						<Form.Group
							className="mb-3"
							controlId="exampleForm.ControlTextarea1">
							<Form.Label>Gender</Form.Label>
							<ConfigProvider
								theme={{
									token: {
										colorPrimary: "#ffc107",
									},
								}}>
								<Radio.Group
									options={options1}
									onChange={onChange1}
									value={gender}
									name="gender"
									optionType="button"
									buttonStyle="solid"
									style={{
										marginBottom: "25px",
										display: "flex",
										justifyContent: "start",
										alignItems: "start",
										alignContent: " start",
										color: "#ffc107",
									}}
								/>
							</ConfigProvider>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					{/* <Button variant="secondary" onClick={handleClose}>
						Close
					</Button> */}
					<Button
						variant="primary"
						style={{
							backgroundColor: "#ffc107",
							color: "white",
							border: "1px solid #ffc107",
						}}
						onClick={updateUser}>
						Update Details
					</Button>
				</Modal.Footer>
			</Modal>
			{/* <!-- Modal Delete --> */}
			<Modal
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
				backdrop="static"
				show={showDelete}
				onHide={handleClose}>
				<Modal.Header
					closeButton
					style={{ backgroundColor: "#d11a2a", color: "white" }}>
					<Modal.Title>Delete User</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Are you sure you want to delete this user ?
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Cancel
					</Button>
					<Button
						variant="primary"
						onClick={handleDelete}
						style={{
							backgroundColor: "#d11a2a",
							border: "1px solid #d11a2a",
							color: "white",
						}}>
						Delete
					</Button>
				</Modal.Footer>
			</Modal>
			<Tooltip
				id="tooltip"
				style={{
					color: "#53a65b",
					zIndex: "10",
					backgroundColor: "#e5e5e5",
					fontSize: "12px",
				}}
			/>
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

export default UserList;
