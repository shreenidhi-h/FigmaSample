import styles from "./Features.module.css";
import { FeatureText } from "../FeatureText/FeatureText";
import React from "react";

export const Features = () => {
	console.log("rendered features");
	return (
		<div className={styles.features}>
			<div className={styles.container1}>
				<div className={styles.content}>
					<div className={styles.hStext}>
						<div className={styles.hSubheading}>
							<div className={styles.subheading}>Features</div>
							<div className={styles.heading}>
								Analytics that feels like it’s from the future
							</div>
						</div>
						<div className={styles.stext}>
							Powerful, self-serve product and growth analytics to help you
							convert, engage, and retain more users. Trusted by over 4,000
							startups.
						</div>
					</div>
				</div>
			</div>

			<div className={styles.container2}>
				<div className={styles.content1}>
					<FeatureText />
				</div>
			</div>
		</div>
	);
};
