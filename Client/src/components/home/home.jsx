import React from "react";
import SliderHome from "../slider/slider";
import FlashCard from "../productCard";
import MediaCardUser from "../userProductCard";
import LocationCard from "../locationCard/locationCard";
import Heading from "../headings/headings";
import data from "../../Data";
import Headings from "../headings/headings";

const Home = () => {
	return (
		<div style={{ marginTop: "0px", marginBottom: "-10px" }}>
			<SliderHome />
			<Headings heading="Products" />
			<MediaCardUser />
			<Headings heading="Locations" />
			<LocationCard />
		</div>
	);
};

export default Home;
