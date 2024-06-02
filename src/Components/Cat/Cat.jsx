import React from "react";
import styles from "./Cat.module.css";

export const Cat = () => {
	return (
		<div className={styles.catSection}>
			<div className={styles.container}>
				<div className={styles.content}>
					<div className={styles.hST}>
						<div className={styles.heading}>Start your free trial </div>

						<div className={styles.supportingText}>
							Join over 4,000+ startups already growing with Untitled.
						</div>
					</div>
				</div>
				<div className={styles.actions}>
					<div className={styles.button}>
						<button className={styles.buttonHolder1}>
							<div className={styles.btnName1}>Learn more</div>
						</button>
						<button className={styles.buttonHolder2}>
							<div className={styles.btnName2}>Get started</div>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
