import React from "react";
import content from "./Content.png";
import Iphone from "./Iphone.png";

import { FeatureSectionText } from "../FeatureSectionText/FeatureSectionText";

export const FeatureSection = () => {
	return (
		<div className="sm:mx-32 max-sm:mx-5 text-center flex flex-col justify-center items-center py-24">
			<div className="text-sm font-medium text-lavender border border-solid py-1 px-3 mb-4 border-purple-200 bg-purple-50 rounded-2xl">
				Features
			</div>

			<div className="text-4xl mb-5 font-semibold tracking-tight text-center">
				Cutting-edge features for advanced analytics
			</div>
			<div className="text-xl font-normal text-uda mb-16">
				Powerful, self-serve product and growth analytics to help you convert,
				engage, and retain more users. Trusted by over 4,000 startups.
			</div>
			<img src={content} alt="content" className="items-center max-sm:hidden" />
			<img src={Iphone} alt="content" className="items-center sm:hidden" />
			<div className="flex items-center justify-center text-center">
				<FeatureSectionText />
			</div>
		</div>
	);
};
