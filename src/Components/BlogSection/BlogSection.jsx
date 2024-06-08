import React from "react";
import { Helper } from "../Helper/Helper";

export const BlogSection = () => {
	return (
		<div className="py-24 flex flex-col justify-center items-center">
			<div className="px-8 text-left w-full">
				<div className="flex justify-between items-center">
					<div className="flex flex-col justify-center items-start">
						<div className="text-lavender text-base font-semibold text-left mb-5">
							Our blog
						</div>
						<div className="text-4xl text-coal font-semibold text-left mb-5">
							Lastest blog posts
						</div>
						<div className="text-uda text-xl font-normal text-left mb-5">
							Tool and strategies modern teams need to help their companies
							grow.
						</div>
					</div>
					<div className="actions">
						<button className="px-5 py-3 rounded-lg border border-solid border-lightpurple bg-lightpurple shadow-sm shadow-coal">
							<div className="text-base text-white font-semibold text-left">
								View all posts
							</div>
						</button>
					</div>
				</div>
			</div>
			<div className="container2 px-8">
				<Helper />
			</div>
		</div>
	);
};
