/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdb-react-ui-kit";

const Headings = ({ heading }) => {
	return (
		<section className="bg-white" style={{ marginTop: "-10px" }}>
			<div className="pt-4 pb-3 mx-5">
				<div className="row">
					<div className="col-lg-12">
						<MDBBreadcrumb
							className="bg-white rounded-5 p-3"
							style={{
								borderBottom: "solid 3px #e5e5e5",
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
