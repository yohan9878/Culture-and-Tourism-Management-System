import React from "react";
import SliderHome from "../Slider/Slider";
import FlashCard from "../productCard";
import MediaCardUser from "../userProductCard";
import SliderHome from "../slider/slider";
import LocationCard from "../locationCards/cards";
import Heading from "../headings/headings";
import data from "../../Data";


const Home = () => {
	return (
		<div style={{ marginTop: "0px", marginBottom: "-10px" }}>
			<SliderHome />
          <div style={{ marginTop: "30px", marginBottom: "-10px" ,marginLeft:"45%"}}>
                 <h3>Products</h3>	 
		  </div>
		  <hr color="black" style={{ marginTop: "30px" ,marginRight:"25%",marginLeft:"25%"}}></hr>
		  <div style={{ marginTop: "30px",marginBottom: "30px"  ,marginRight:"15px",marginLeft:"15px"}}>
			<MediaCardUser/>
		  </div>
		</div>
	);
};

export default Home;
