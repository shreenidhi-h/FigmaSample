import { FeatureText } from "../FeatureText/FeatureText";
import React from "react";

export const Features = () => {
	return (
		<div className="py-24">
			<div className=" flex-col items-center justify-center px-8">
				<div className="text-base font-bold mb-3 text-lavender text-center">
					Features
				</div>
				<div className="font-semibold text-4xl text-coal text-center tracking-tight">
					Analytics that feels like it’s from the future
				</div>
				<div className="mt-5 mb-11 text-uda text-center font-normal text-xl">
					Powerful, self-serve product and growth analytics to help you convert,
					engage, and retain more users. Trusted by over 4,000 startups.
				</div>
			</div>

			<div className="px-8">
				<div className="flex items-center justify-center text-center">
					<FeatureText />
				</div>
			</div>
		</div>
	);
};
