/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import {
	MDBCol,
	MDBContainer,
	MDBRow,
	MDBCard,
	MDBCardText,
	MDBCardBody,
	MDBCardImage,
	MDBBtn,
	MDBIcon,
	MDBListGroup,
	MDBListGroupItem,
} from "mdb-react-ui-kit";
import avatar from "../../assets/images/avatar2.png";
import axios from "axios";
import "./profile.css";

export default function ProfilePage() {
	const username = localStorage.getItem("name");

	const [firstname, setFirstName] = useState("");
	const [lastname, setLastname] = useState("");
	const [email, setEmail] = useState("");
	const [mobile, setMobile] = useState("");
	const [nic_passport, setNic_passport] = useState("");
	const [nationality, setNatioanality] = useState("");
	const [address_country, setAddress_country] = useState("");
	const [gender, setGender] = useState("");

	const id = window.location.pathname.split("/")[2];

	const image = localStorage.getItem("image");

	useEffect(() => {
		const fetchUser = async () => {
			const res = await axios.get(
				`http://localhost:5000/api/user/${id}`,
			);
			// console.log(res.data);
			setFirstName(res.data.data.firstname);
			setLastname(res.data.data.lastname);
			setEmail(res.data.data.email);
			setMobile(res.data.data.mobile);
			setNic_passport(res.data.data.nic_passport);
			setNatioanality(res.data.data.nationality);
			setAddress_country(res.data.data.address_country);
			setGender(res.data.data.gender);
		};

		fetchUser();
	}, []);

	return (
		<section style={{ backgroundColor: "#eee" }}>
			<MDBContainer className="py-5">
				<MDBRow>
					<MDBCol lg="4">
						<MDBCard className="mb-4">
							<MDBCardBody
								className="text-center"
								style={{
									marginBottom: "20px",
									marginTop: "20px",
								}}>
								<div className="row">
									<div className="col-md-4">
										<MDBCardImage
											src={image}
											alt="avatar"
											className="rounded-circle"
											style={{
												width: "100px",
												height: "100px",
												objectFit: "cover",
											}}
											fluid
										/>
									</div>
									<div
										className="col-md-8"
										style={{ marginTop: "10px" }}>
										<p
											className="text-muted mb-1"
											style={{ fontSize: "16px" }}>
											Hello
										</p>
										<p
											className="text-muted mb-4"
											style={{ fontSize: "18px" }}>
											{username}
										</p>
										<div className="d-flex justify-content-center mb-2">
											<button className="btn btn-sm resetBtn">
												Reset Password
											</button>
											<button
												className="btn btn-sm editBtn"
												style={{
													marginLeft: "10px",
												}}>
												Edit Profile
											</button>
										</div>
									</div>
								</div>
							</MDBCardBody>
						</MDBCard>
						<MDBCard className="mb-4 mb-lg-0">
							<MDBCardBody className="p-0">
								<MDBListGroup flush className="rounded-3">
									<MDBListGroupItem className="d-flex justify-content-start align-items-start p-3">
										<MDBIcon
											fas
											icon="globe fa-lg text-warning"
										/>
										<MDBCardText>
											<b>Telephone :</b> &nbsp;
											{mobile}
										</MDBCardText>
									</MDBListGroupItem>
									<MDBListGroupItem className="d-flex justify-content-start align-items-start p-3">
										<MDBIcon
											fab
											icon="github fa-lg"
											style={{ color: "#333333" }}
										/>
										<MDBCardText>
											<b>Email :</b> &nbsp;
											{email}
										</MDBCardText>
									</MDBListGroupItem>
								</MDBListGroup>
							</MDBCardBody>
						</MDBCard>
					</MDBCol>
					<MDBCol lg="8">
						<MDBCard className="mb-4">
							<MDBCardBody>
								<MDBRow>
									<MDBCol sm="3">
										<MDBCardText>
											First Name
										</MDBCardText>
									</MDBCol>
									<MDBCol sm="9">
										<MDBCardText className="text-muted">
											{firstname}
										</MDBCardText>
									</MDBCol>
								</MDBRow>
								<hr />
								<MDBRow>
									<MDBCol sm="3">
										<MDBCardText>
											Last Name
										</MDBCardText>
									</MDBCol>
									<MDBCol sm="9">
										<MDBCardText className="text-muted">
											{lastname}
										</MDBCardText>
									</MDBCol>
								</MDBRow>
								<hr />
								<MDBRow>
									<MDBCol sm="3">
										<MDBCardText>
											Nationality
										</MDBCardText>
									</MDBCol>
									<MDBCol sm="9">
										<MDBCardText className="text-muted">
											{nationality}
										</MDBCardText>
									</MDBCol>
								</MDBRow>
								<hr />
								<MDBRow>
									<MDBCol sm="3">
										<MDBCardText>
											Address / Country
										</MDBCardText>
									</MDBCol>
									<MDBCol sm="9">
										<MDBCardText className="text-muted">
											{address_country}
										</MDBCardText>
									</MDBCol>
								</MDBRow>
								<hr />
								<MDBRow>
									<MDBCol sm="3">
										<MDBCardText>
											NIC / Passport
										</MDBCardText>
									</MDBCol>
									<MDBCol sm="9">
										<MDBCardText className="text-muted">
											{nic_passport}
										</MDBCardText>
									</MDBCol>
								</MDBRow>
								<hr />
								<MDBRow>
									<MDBCol sm="3">
										<MDBCardText>Gender</MDBCardText>
									</MDBCol>
									<MDBCol sm="9">
										<MDBCardText className="text-muted">
											{gender}
										</MDBCardText>
									</MDBCol>
								</MDBRow>
							</MDBCardBody>
						</MDBCard>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		</section>
	);
}
