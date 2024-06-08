import React from "react";
import styles from "./Simple.module.css";
import content from "./Content.png";

import { FeatureSectionText } from "../FeatureSectionText/FeatureSectionText";

export const FeatureSection = () => {
	return (
		<div className="bg-orange-500">
			<div className={styles.conatiner1}>
				<div className={styles.content1}></div>
				<div className={styles.hSt}>
					<div className={styles.hbadge}>
						<div className={styles.badge}>Features </div>

						<div className={styles.heading}>
							Cutting-edge features for advanced analytics
						</div>
						<div className={styles.sText}>
							Powerful, self-serve product and growth analytics to help you
							convert, engage, and retain more users. Trusted by over 4,000
							startups.
						</div>
					</div>
				</div>
			</div>
			<div className={styles.conatiner2}>
				<div className={styles.content2}>
					<img src={content} alt="content" className={styles.image} />
				</div>
				<div className={styles.content3}>
					<FeatureSectionText />
				</div>
			</div>
		</div>
	);
};
