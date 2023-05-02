/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
	BsFacebook,
	BsTwitter,
	BsGoogle,
	BsInstagram,
	BsLinkedin,
	BsGithub,
} from "react-icons/bs";

const Footer = () => {
	return (
		// <!-- Footer -->
		<footer class="text-center text-lg-start bg-light text-muted">
			{/* <!-- Section: Social media --> */}
			<section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
				{/* <!-- Left --> */}
				<div class="me-5 d-none d-lg-block">
					<span>Get connected with us on social networks:</span>
				</div>
				{/* <!-- Left --> */}

				{/* <!-- Right --> */}
				<div>
					<a href="" class="me-4 text-reset">
						<BsFacebook />
					</a>
					<a href="" class="me-4 text-reset">
						<BsTwitter />
					</a>
					<a href="" class="me-4 text-reset">
						<BsGoogle />
					</a>
					<a href="" class="me-4 text-reset">
						<BsInstagram />
					</a>
					<a href="" class="me-4 text-reset">
						<BsLinkedin />
					</a>
					<a href="" class="me-4 text-reset">
						<BsGithub />
					</a>
				</div>
				{/* <!-- Right --> */}
			</section>
			{/* <!-- Section: Social media --> */}

			{/* <!-- Section: Links  --> */}
			<section class="">
				<div class="container text-center text-md-start mt-5">
					{/* <!-- Grid row --> */}
					<div class="row mt-3">
						{/* <!-- Grid column --> */}
						<div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
							{/* <!-- Content --> */}
							<h6 class="text-uppercase fw-bold mb-4">
								Travel Bee
							</h6>
							<p>
								Here you can use rows and columns to
								organize your footer content. Lorem ipsum
								dolor sit amet, consectetur adipisicing
								elit.
							</p>
						</div>
						{/* <!-- Grid column --> */}

						{/* <!-- Grid column --> */}
						<div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
							{/* <!-- Links --> */}
							<h6 class="text-uppercase fw-bold mb-4">
								Products
							</h6>
							<p>
								<a href="#!" class="text-reset">
									Angular
								</a>
							</p>
							<p>
								<a href="#!" class="text-reset">
									React
								</a>
							</p>
							<p>
								<a href="#!" class="text-reset">
									Vue
								</a>
							</p>
							<p>
								<a href="#!" class="text-reset">
									Laravel
								</a>
							</p>
						</div>
						{/* <!-- Grid column --> */}

						{/* <!-- Grid column --> */}
						<div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
							{/* <!-- Links --> */}
							<h6 class="text-uppercase fw-bold mb-4">
								Useful links
							</h6>
							<p>
								<a href="#!" class="text-reset">
									Pricing
								</a>
							</p>
							<p>
								<a href="#!" class="text-reset">
									Settings
								</a>
							</p>
							<p>
								<a href="#!" class="text-reset">
									Orders
								</a>
							</p>
							<p>
								<a href="#!" class="text-reset">
									Help
								</a>
							</p>
						</div>
						{/* <!-- Grid column --> */}

						{/* <!-- Grid column --> */}
						<div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
							{/* <!-- Links --> */}
							<h6 class="text-uppercase fw-bold mb-4">
								Contact
							</h6>
							<p>
								<i class="fas fa-home me-3"></i> New York,
								NY 10012, US
							</p>
							<p>
								<i class="fas fa-envelope me-3"></i>
								info@example.com
							</p>
							<p>
								<i class="fas fa-phone me-3"></i> + 01 234
								567 88
							</p>
							<p>
								<i class="fas fa-print me-3"></i> + 01 234
								567 89
							</p>
						</div>
						{/* <!-- Grid column --> */}
					</div>
					{/* <!-- Grid row --> */}
				</div>
			</section>
			{/* <!-- Section: Links  --> */}

			{/* <!-- Copyright --> */}
			<div
				class="text-center p-4"
				style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
				© 2023 Copyright:
				<a
					class="text-reset fw-bold"
					href="http://localhost:3000/">
					{" "}
					TravelBee.com
				</a>
			</div>
			{/* <!-- Copyright --> */}
		</footer>
		// <!-- Footer -->
	);
};

export default Footer;
