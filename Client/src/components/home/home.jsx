import React from "react";
import MediaCardUser from "../userProductCard";
import LocationCard from "../locationCard/locationCard";
import Headings from "../headings/headings";
// import SliderHome from "../slider/slider";

const Home = () => {
	return (
		<div style={{ marginTop: "0px", marginBottom: "-10px" }}>
			{/* <SliderHome /> */}
			<Headings heading="Products" />
			<MediaCardUser />
			<Headings heading="Locations" />
			<LocationCard />
		</div>
	);
};

export default Home;
