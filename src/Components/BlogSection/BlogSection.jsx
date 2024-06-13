import React from "react";
import { Helper } from "../Helper/Helper";

export const BlogSection = () => {
	return (
		<div className="py-24 flex flex-col justify-center items-center">
			<div className="flex px-32 justify-between w-full items-center">
				<div className="flex flex-col justify-center text-left items-start">
					<div className="text-lavender text-base font-semibold text-left mb-5">
						Our blog
					</div>
					<div className="text-4xl text-coal font-semibold text-left mb-5">
						Lastest blog posts
					</div>
					<div className="text-uda text-xl font-normal text-left mb-5">
						Tool and strategies modern teams need to help their companies grow.
					</div>
				</div>
				<div className="actions">
					<button
						className="px-5 py-3 rounded-lg border border-solid border-lightpurple bg-lightpurple hover:bg-violet-300  shadow-sm shadow-coal
							text-base text-white hover:text-violet-800 font-semibold text-left"
					>
						View all posts
					</button>
				</div>
			</div>
			<Helper />
		</div>
	);
};
