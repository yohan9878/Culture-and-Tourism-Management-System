import React from "react";
import MediaCardUser from "../userProductCard";
import LocationCard from "../locationCard/locationCard";
import Headings from "../headings/headings";
import { Carousel } from "antd";
import slider_1 from "../../assets/images/slider/Image-01.jpg";
import slider_2 from "../../assets/images/slider/Image-02.jpg";
import slider_3 from "../../assets/images/slider/Image-03.jpg";
import slider_4 from "../../assets/images/slider/Image-04.jpg";
import CarrierCard from "../carrierCard/carrierCard";

const contentStyle = {
	height: "500px",
	color: "#fff",
	lineHeight: "25px",
	textAlign: "center",
	padding: "10px 150px",
};

const background1 = {
	backgroundImage: `url(${slider_1})`,
	backgroundRepeat: "none",
	backgroundSize: "cover",
	backgroundPosition: "cover",
};

const background2 = {
	backgroundImage: `url(${slider_2})`,
	backgroundRepeat: "none",
	backgroundSize: "cover",
	backgroundPosition: "cover",
};

const background3 = {
	backgroundImage: `url(${slider_3})`,
	backgroundRepeat: "none",
	backgroundSize: "cover",
	backgroundPosition: "cover",
};

const background4 = {
	backgroundImage: `url(${slider_4})`,
	backgroundRepeat: "none",
	backgroundSize: "cover",
	backgroundPosition: "cover",
};

const Home = () => {
	return (
		<div style={{ marginTop: "0px", marginBottom: "-10px" }}>
			<>
				<Carousel
					autoplay
					effect="fade"
					dotPosition="right"
					style={{ marginBottom: "0px", padding: "0px" }}>
					<div>
						<h6 style={{ ...contentStyle, ...background1 }}>
							<b>Sigiriya</b> Lion Rock is an ancient rock
							fortress known for its massive column of rock
							that reaches nearly 200 meters high. The site
							dates back to the reign of King Kasyapa
							(477-495 AD), who chose this site as his new
							capital. He decorated the walls with frescoes,
							and built an impressive palace right on top of
							the rock column, accessible only through the
							mouth of an enormous carved lion.
						</h6>
					</div>
					<div>
						<h6 style={{ ...contentStyle, ...background2 }}>
							<b>The Temple of the Sacred Tooth Relic </b> is
							a world-renowned place of worship, where the
							left Canine tooth of Gautama Buddha is
							enshrined. The temple which is venerated by
							thousands of local & foreign devotees and
							tourists daily was named as a world heritage by
							UNESCO in 1988.
						</h6>
					</div>
					<div>
						<h6 style={{ ...contentStyle, ...background3 }}>
							<b>Bentota</b> is a tourist attraction, with a
							local airport (Bentota River Airport) and a
							handful of world-class hotels. It is a
							destination for watersports. Bentota also
							delivers an ancient art of healing called
							Ayurveda. Bentota is famous for its toddy
							production, an alcoholic beverage made out of
							coconut nectar. It also has a turtle hatchery,
							located on Induruwa beach.
						</h6>
					</div>
					<div>
						<h6 style={{ ...contentStyle, ...background4 }}>
							<b>The Nine Arch Bridge,</b> also known as the
							‘Bridge in the Sky’ was constructed by
							connecting two bog mountains when constructing
							the Badulla – Colombo railway. This bridge is
							300 feet in length, 25 feet in width and 80-100
							feet in height. It is one of the best examples
							of colonial-era railway construction in the
							country.
						</h6>
					</div>
				</Carousel>
			</>
			<Headings heading="Products" />
			<MediaCardUser />
			{/* <Headings heading="Posts" /> */}
			<CarrierCard />
			<LocationCard />
		</div>
	);
};

export default Home;
