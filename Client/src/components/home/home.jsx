import React from "react";
import SliderHome from "../slider/slider";
import LocationCard from "../locationCards/cards";
import Heading from "../headings/headings";
import data from "../../Data";

const Home = () => {
	return (
		<div style={{ marginTop: "0px", marginBottom: "-10px" }}>
			<SliderHome />
			{/* <Heading heading="Places to Visit" />
			<LocationCard
				title="Sigiriya"
				cover="https://thumbs.dreamstime.com/b/sigiriya-rock-fortress-sri-lanka-consider-as-th-wonder-world-52535800.jpg"
				content="Sigiriya is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka. It is a site of historical and archaeological significance that is dominated by a massive column of granite rock approximately 180 m (590 ft) high."
			/> */}
		</div>
	);
};

export default Home;
