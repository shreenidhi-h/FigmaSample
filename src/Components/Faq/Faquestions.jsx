import React from "react";
import avatarGroup from "./avatarGroup.png";
import { FaqWrapper } from "./FaqWrapper";

export const Faq = () => {
	return (
		<div className="flex flex-col justify-center items-center mx-24">
			<div className="flex justify-center flex-col items-center">
				<div className="text-4xl font-semibold txt-coal mb-5 text-center tracking-tight">
					Frequently asked questions
				</div>
				<div className="text-center text-uda mb-5 text-xl font-normal">
					Everything you need to know about the product and billing.
				</div>
			</div>
			<div>
				<FaqWrapper />
			</div>

			<div className=" w-full rounded-2xl bg-gray-50 flex flex-col justify-center items-center">
				<img src={avatarGroup} className="my-6" />
				<div className="text-coal text-xl font-semibold text-center">
					Still have questions?
				</div>
				<div className="text-uda mt-4 mb-6 text-center text-lg font-normal">
					Can’t find the answer you’re looking for? Please chat to our friendly
					team.
				</div>
				<button
					className="bg-lightpurple w-fit rounded-lg border px-5 py-4 hover:bg-violet-300 shadow-sm hover:text-violet-800 shadow-coal 
					font-semibold text-white mb-7 text-base text-center"
				>
					Get in touch
				</button>
			</div>
		</div>
	);
};
