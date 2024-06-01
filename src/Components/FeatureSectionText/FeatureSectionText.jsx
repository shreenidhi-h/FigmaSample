import arrow from "./arrow.png";
import FeaturedIcon7 from "./FeaturedIcon7.png";
import FeaturedIcon8 from "./FeaturedIcon8.png";
import FeaturedIcon9 from "./FeaturedIcon9.png";
import styles from "../FeatureSections/Simple.module.css";

function FeatureItem({ icon, heading, subHeading, links }) {
	return (
		<div>
			<div className={styles.featureText}>
				<div className={styles.icon}>{icon}</div>
				<div className={styles.heading}>{heading}</div>
				<div className={styles.subheading}>{subHeading}</div>
				<div className={styles.links}>{links}</div>
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
			<div className={styles.linkstyle}>
				<a
					href="https://www.zysk.tech/"
					target="_blank"
					className={styles.atext}
				>
					Learn more
				</a>
				<img src={arrow} className={styles.arrow} />
			</div>
		),
	},
	{
		icon: <img src={FeaturedIcon8} alt="logo" />,
		heading: "Deliver instant answers",
		subHeading:
			"An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
		links: (
			<div className={styles.linkstyle}>
				<a
					href="https://www.zysk.tech/"
					target="_blank"
					className={styles.atext}
				>
					Learn more
				</a>
				<img src={arrow} className={styles.arrow} />
			</div>
		),
	},
	{
		icon: <img src={FeaturedIcon9} alt="logo" />,
		heading: "Manage your team with reports",
		subHeading:
			"Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
		links: (
			<div className={styles.linkstyle}>
				<a
					href="https://www.zysk.tech/"
					target="_blank"
					className={styles.atext}
				>
					Learn more
				</a>
				<img src={arrow} className={styles.arrow} />
			</div>
		),
	},
];
export const FeatureSectionText = () => {
	return (
		<div>
			{FeatureItems.map((item) => (
				<FeatureItem
					icon={item.icon}
					heading={item.heading}
					subHeading={item.subHeading}
					link={item.links}
				/>
			))}
		</div>
	);
};
