import React from "react";
import Image1 from "./Image.png";
import avatar1 from "./Avatar1.png";
import IconWrap1 from "./IconWrap1.png";
import Image2 from "./Image2.png";
import avatar2 from "./Avatar2.png";
import IconWrap2 from "./IconWrap2.png";
import Image3 from "./Image3.png";
import avatar3 from "./Avatar3.png";
import IconWrap3 from "./IconWrap3.png";

const HelperItem = ({
	image,
	supportingText,
	heading,
	icon,
	subHeading,
	avatar,
}) => {
	return (
		<div className="max-sm:mb-12 flex justify-center items-left mx-5 flex-col w-fit">
			<div className="image">{image}</div>
			<div className="text-lavender text-left font-semibold text-sm mt-4 mb-1">
				{supportingText}
			</div>
			<div className="flex justify-between w-full items-center">
				<div className="heading text-2xl text-left font-semibold text-coal mb-2">
					{heading}
				</div>
				<div className="icon">{icon}</div>
			</div>
			<div className="text-base text-uda font-normal text-left flex-wrap mb-4">
				{subHeading}
			</div>
			<div className="avatar">{avatar}</div>
		</div>
	);
};

const HelperItems = [
	{
		image: <img src={Image1} />,
		supportingText: "Design",
		heading: "UX review presentations",
		icon: <img src={IconWrap1} />,

		subHeading:
			"How do you create compelling presentations that wow your colleagues and impress your managers?",
		avatar: <img src={avatar1} />,
	},
	{
		image: <img src={Image2} />,
		supportingText: "Product",
		heading: "Migrating to Linear 101",
		icon: <img src={IconWrap2} />,

		subHeading:
			"Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
		avatar: <img src={avatar2} />,
	},
	{
		image: <img src={Image3} />,
		supportingText: "Software Engineering",
		heading: "Building your API stack",
		icon: <img src={IconWrap3} />,

		subHeading:
			"The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
		avatar: <img src={avatar3} />,
	},
];

export const Helper = () => {
	return (
		<div className="sm:px-28  grid items-center place-items-center sm:grid-cols-3 max-sm:grid-cols-1">
			{HelperItems.map((item) => (
				<HelperItem
					image={item.image}
					supportingText={item.supportingText}
					heading={item.heading}
					icon={item.icon}
					subHeading={item.subHeading}
					avatar={item.avatar}
				/>
			))}
		</div>
	);
};
