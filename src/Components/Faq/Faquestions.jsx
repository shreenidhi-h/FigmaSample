import React from "react";
import styles from "./Faq.module.css";
import avatarGroup from "./avatarGroup.png";
import { FaqWrapper } from "./FaqWrapper";

export const Faq = () => {
	return (
		<div className={styles.faq}>
			<div className={styles.conatiner1}>
				<div className={styles.content1}>
					<div className={styles.hSt}>
						<div className={styles.heading}>Frequently asked questions</div>
						<div className={styles.sText}>
							Everything you need to know about the product and billing.
						</div>
					</div>
				</div>
			</div>
			<div className={styles.conatiner2}>
				<FaqWrapper />
				<div />

				<div className={styles.conatiner3}>
					<div className={styles.content3}>
						<div className={styles.avatarGroup}>
							<img src={avatarGroup} />
						</div>
						<div className={styles.hst1}>
							<div className={styles.heading1}>Still have questions?</div>
							<div className={styles.stext2}>
								Can’t find the answer you’re looking for? Please chat to our
								friendly team.
							</div>
						</div>
						<div className={styles.actions}>
							<button className={styles.btn}>
								<div className={styles.btnText}>Get in touch</div>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
