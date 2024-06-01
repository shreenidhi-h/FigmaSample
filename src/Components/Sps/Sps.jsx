import React from "react";
import logos from "./Logos.png";
import "./Sps.css";

const Sps = () => {
	return (
		<>
			<div className="container-sps">
				<div className="content-sps">
					<div className="text">Join 4,000+ companies already growing</div>
					<img src={logos} alt="logos" className="logos"></img>
				</div>
			</div>
		</>
	);
};

export default Sps;
