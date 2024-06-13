import React from "react";
import logos from "./Logos.png";
import logowrap from "./LogoWrap.png";

const Sps = () => {
	return (
		<>
			<div className="flex justify-center items-center mt-24 flex-col">
				<div className="text-base font-medium text-uda mb-10">
					Join 4,000+ companies already growing
				</div>
				<div className="mb-24 max-sm:hidden">
					<img src={logos} alt="logos"></img>
				</div>
				<div className="sm:hidden mb-24">
					<img src={logowrap} alt="logos"></img>
				</div>
			</div>
		</>
	);
};

export default Sps;
