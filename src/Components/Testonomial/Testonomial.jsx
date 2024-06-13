import React from "react";
import companylogo from "./companylogo.png";
import Avatar from "./Avatar.png";

export const Testonomial = () => {
	return (
		<div
			className="bg-gray-50 text-center
			flex items-center justify-center flex-col"
		>
			<div className="mt-24">
				<img src={companylogo} alt="company logo" />
			</div>
			<div className="mt-4 text-center text-5xl text-coal tracking-tight font-medium">
				We’ve been using Untitled to kick start every new project and can’t
				imagine working without it.
			</div>
			<div className="my-8 flex flex-col justify-between items-center">
				<img src={Avatar} alt="avatar" />
				<div className="flex flex-col justify-between items-center mt-1">
					<div className="text-lg font-semibold mt-3 text-coal">Candice Wu</div>
					<div className="text-base text-center text-uda font-normal">
						Product Manager, Sisyphus
					</div>
				</div>
			</div>
		</div>
	);
};
