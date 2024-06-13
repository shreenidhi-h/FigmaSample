import React from "react";
import Content from "./Content.png";
import iconbtn from "./iconbtn.png";
import { Toggle } from "../Toggle/Toggle";

function Section() {
	return (
		<div className="flex justify-center flex-col items-center">
			<div className="container-one flex justify-center flex-col items-center">
				<Toggle />
				<div className="flex justify-center flex-col items-center">
					<div className="flex justify-center items-center flex-wrap">
						<div className="text-6xl font-semibold text-center tracking-tight text-coal mb-8 mt-4">
							Beautiful analytics to grow smarter
						</div>
						<div className="text-xl font-normal text-center text-uda">
							Powerful, self-serve product and growth analytics to help you
							convert, engage, and retain more users. Trusted by over 4,000
							startups.
						</div>
					</div>
				</div>
				<div className="my-10 flex items-center justify-center">
					<button className="py-4 px-7 rounded-lg border items-center flex border-gray-300 hover:shadow-sm hover:shadow-coal">
						<div>
							<img src={iconbtn} />
						</div>

						<div className="ml-3 text-lg items-end text-slate-700 font-semibold text-left">
							Demo
						</div>
					</button>
					<button className="ml-3 py-4 px-7 rounded-lg border bg-lightpurple shadow-sm shadow-coal border-lavender hover:shadow-sm hover:shadow-coal hover:bg-purple-300">
						<div className="text-white font-semibold text-left text-lg ">
							Sign up
						</div>
					</button>
				</div>
			</div>
			<div className="">
				<img src={Content} alt="Content" className="content-img" />
			</div>
		</div>
	);
}

export default Section;
