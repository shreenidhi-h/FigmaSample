import React from "react";
import { useState } from "react";
import Arrow from "./arrow.png";

export const Toggle = () => {
	const [selectedDiv, setSelectedDiv] = useState(0);

	return (
		<div className="flex border py-1 px-1 pr-1 rounded-2xl items-center justify-evenly bg-purple-50 border-purple-200 mb-4">
			<div
				className={`rounded-xl text-center font-medium text-lavender text-sm ${
					selectedDiv === 0 ? "border-solid px-2 bg-white border" : ""
				}`}
				onClick={() => {
					setSelectedDiv(0);
				}}
			>
				New feature
			</div>

			<div
				className={`rounded-xl ml-2 text-center font-medium text-lavender text-sm flex justify-between items-center ${
					selectedDiv === 1
						? " border-purple-300 px-2 border-solid bg-white border"
						: ""
				}`}
				onClick={() => {
					setSelectedDiv(1);
				}}
			>
				Check out the team dashboard
				<img src={Arrow} className="ml-1" />
			</div>
		</div>
	);
};
