/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import "./card.css";

const LocationCard = ({ title, cover, content }) => {
	return (
		<section style={{ backgroundColor: "#eee", marginTop: "-10px" }}>
			<div className="pb-4 mx-3">
				<Col md="4" style={{ padding: "0 30px" }}>
					<Card className="cardHolder">
						<Card.Body
							style={{
								backgroundImage: `url(${cover})`,
								opacity: "0.8",
								backgroundRepeat: "none",
								backgroundSize: "cover",
								backgroundPosition: "cover",
							}}>
							<Card.Title
								className="bg-dark"
								style={{
									color: "#fff",
									border: "2px solid #fff",
									padding: "10px 10px",
								}}>
								{title}
							</Card.Title>
							<Card.Text style={{ color: "#fff" }}>
								{content}
							</Card.Text>

							<Button variant="primary">Read More</Button>
						</Card.Body>
					</Card>
				</Col>
			</div>
		</section>
	);
};

export default LocationCard;
