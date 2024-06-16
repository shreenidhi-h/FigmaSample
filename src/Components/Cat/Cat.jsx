import React from "react";

export const Cat = () => {
	return (
		<div className="py-24 bg-lightblue flex flex-col justify-center items-center">
			<div className="text-center max-sm:mx-5 flex flex-col justify-center items-center">
				<div className="text-4xl tracking-tight font-semibold text-coal mb-4">
					Start your free trial
				</div>
				<div className="text-xl tracking-tight mt-4 mb-12 font-normal text-center text-uda">
					Join over 4,000+ startups already growing with Untitled.
				</div>
			</div>
			<div className="max-sm:hidden flex justify-center items-center">
				<button className="rounded-lg px-5 py-3 bg-white border-slate-300 border hover:shadow-sm hover:shadow-coal mr-4">
					<div className=" text-slate-700 text-base tetxt-center font-semibold">
						Learn more
					</div>
				</button>
				<button
					className="rounded-lg px-5 py-3 bg-lightpurple font-semibold text-center hover:shadow-sm hover:shadow-coal hover:bg-violet-300
				text-white  hover:text-violet-800 text-base"
				>
					Get started
				</button>
			</div>
			<div className="sm:hidden w-full px-3 flex flex-col items-center">
				<button
					className="rounded-lg py-3 w-full mb-4 bg-lightpurple font-semibold text-center hover:shadow-sm hover:shadow-coal hover:bg-violet-300
				text-white  hover:text-violet-800 text-base"
				>
					Get started
				</button>
				<button
					className="rounded-lg py-3 w-full bg-white border-slate-300 border hover:shadow-sm hover:shadow-coal
				 text-slate-700 text-base text-center font-semibold"
				>
					Learn more
				</button>
			</div>
		</div>
	);
};
