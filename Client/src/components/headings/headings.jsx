/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdb-react-ui-kit";

const Headings = ({ heading }) => {
	return (
		<section style={{ backgroundColor: "#eee", marginTop: "-10px" }}>
			<div className="pt-4 pb-3 mx-3">
				<div className="row">
					<div className="col-lg-12">
						<MDBBreadcrumb
							className="bg-light rounded-5 p-3"
							style={{
								border: "solid 3px #5ebc67",
							}}>
							<MDBBreadcrumbItem
								active
								style={{
									fontSize: "20px",
									paddingLeft: "30px",
									textTransform: "uppercase",
								}}>
								{heading}
							</MDBBreadcrumbItem>
						</MDBBreadcrumb>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Headings;
