import React from "react";
import logos from "./Logos.png";

const Sps = () => {
	return (
		<>
			<div className="flex justify-center items-center px-8 flex-col">
				<div className="text-base font-medium text-uda">
					Join 4,000+ companies already growing
				</div>
				<img src={logos} alt="logos"></img>
			</div>
		</>
	);
};

export default Sps;
