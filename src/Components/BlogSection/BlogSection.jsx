import React from "react";
import styles from "./BlogSection.module.css";

export const BlogSection = () => {
	return (
		<div className={styles.blogSection}>
			<div className={styles.container}>
				<div className={styles.content}>
					<div className={styles.hSt}>
						<div className={styles.hsubheading}>
							<div className={styles.subheading}>Our blog</div>
							<div className={styles.heading}>Lastest blog posts</div>
						</div>
						<div className={styles.sText}>
							Tool and strategies modern teams need to help their companies
							grow.
						</div>
					</div>
					<div className={styles.actions}>
						<button className={styles.button}>
							<div className={styles.btnText}>View all posts</div>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
