import React, { useState } from "react";
import Menu from "./Menu.png";
import Delete from "./Delete.png";

export const Navmob = () => {
	const [isOpened, setIsOpened] = useState(false);
	return (
		<div className="flex bg-purple-300 p-3 rounded-md justify-center flex-col items-end">
			<img
				src={isOpened ? Delete : Menu}
				onClick={() => setIsOpened(!isOpened)}
			/>

			{isOpened ? (
				<ul className="text-base w-full p-9 font-medium mt-3">
					<li className="hover:text-white">Home</li>
					<li className="hover:text-white">Products</li>
					<li className="hover:text-white">Resources</li>
					<li className="hover:text-white">Pricing</li>
				</ul>
			) : null}
		</div>
	);
};
