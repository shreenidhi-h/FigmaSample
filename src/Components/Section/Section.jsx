import React from "react";
import Content from "./Content.png";
import iconbtn from "./iconbtn.png";
import { Toggle } from "../Toggle/Toggle";
import screen from "./Screen.png";
function Section() {
	return (
		<>
			<div className="flex justify-center flex-col items-center max-sm:px-3">
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
					<div className="my-10 flex items-center justify-center max-sm:hidden">
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
					<div className="my-6 sm:hidden mx-2 flex flex-col items-center justify-center">
						<button className="bg-lightpurple mt-4 mb-3 py-3 px-40 font-semibold text-base text-white rounded-lg border-lavender hover:shadow-sm hover:shadow-coal hover:bg-purple-900">
							Sign up
						</button>
						<button className="rounded-lg py-3 px-40 border items-center flex border-gray-300 hover:shadow-sm hover:shadow-coal">
							<div>
								<img src={iconbtn} />
							</div>
							<div className="text-slate-700 ml-2 text-base font-semibold text-left ">
								Demo
							</div>
						</button>
					</div>
					<div className="max-sm:hidden">
						<img src={Content} alt="Content" className="content-img" />
					</div>
					<div className="sm:hidden mx-2">
						<img src={screen} />
					</div>
				</div>
			</div>
			<div className="flex mx-32 justify-center items-center h-px bg-gray-200 max-sm:hidden"></div>
		</>
	);
}

export default Section;
