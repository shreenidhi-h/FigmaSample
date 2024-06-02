import React from "react";
import classes from "./Blog.module.css";
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
		<div className={classes.blogPostCard}>
			<div className={classes.image}>{image}</div>
			<div className={classes.supportingText}>{supportingText}</div>
			<div className={classes.headingElement}>
				<div className={classes.heading}> {heading}</div>
				<div className={classes.icon}>{icon}</div>
			</div>
			<div className={classes.subHeading}>{subHeading}</div>
			<div className={classes.avatar}>{avatar}</div>
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
		<div className={classes.category}>
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
