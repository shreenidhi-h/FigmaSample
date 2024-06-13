import arrow from "./arrow.png";
import FeaturedIcon7 from "./FeaturedIcon7.png";
import FeaturedIcon8 from "./FeaturedIcon8.png";
import FeaturedIcon9 from "./FeaturedIcon9.png";

function FeatureItem({ icon, heading, subHeading, links }) {
	return (
		<div className="m-5">
			<div className="mt-16 flex justify-center items-center">{icon}</div>
			<div className="font-semibold text-xl text-coal text-center">
				{heading}
			</div>
			<div className="text-base text-uda text-center font-normal">
				{subHeading}
			</div>
			<div className="text-base font-semibold text-left text-lavender">
				{links}
			</div>
		</div>
	);
}
const FeatureItems = [
	{
		icon: <img src={FeaturedIcon7} alt="logo" />,
		heading: "Share team inboxes",
		subHeading:
			"Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
		links: (
			<div className="flex items-center justify-center mt-2">
				<a href="https://www.zysk.tech/" target="_blank" className="atext">
					Learn more
				</a>
				<img src={arrow} className="arrow" />
			</div>
		),
	},
	{
		icon: <img src={FeaturedIcon8} alt="logo" />,
		heading: "Deliver instant answers",
		subHeading:
			"An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
		links: (
			<div className="flex items-center justify-center mt-2">
				<a href="https://www.zysk.tech/" target="_blank" className="atext">
					Learn more
				</a>
				<img src={arrow} className="arrow" />
			</div>
		),
	},
	{
		icon: <img src={FeaturedIcon9} alt="logo" />,
		heading: "Manage your team with reports",
		subHeading:
			"Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
		links: (
			<div className="flex items-center justify-center mt-2">
				<a href="https://www.zysk.tech/" target="_blank" className="atext">
					Learn more
				</a>
				<img src={arrow} className="arrow" />
			</div>
		),
	},
];
export const FeatureSectionText = () => {
	return (
		<div className="grid grid-cols-3 place-items-center">
			{FeatureItems.map((item) => (
				<FeatureItem
					icon={item.icon}
					heading={item.heading}
					subHeading={item.subHeading}
					links={item.links}
				/>
			))}
		</div>
	);
};
