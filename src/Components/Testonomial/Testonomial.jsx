import React from "react";
import styles from "./Testonomial.module.css";
import companylogo from "./companylogo.png";
import Avatar from "./Avatar.png";

export const Testonomial = () => {
	return (
		<div className={styles.testonomial}>
			<div className={styles.container}>
				<div className={styles.content}>
					<div className={styles.quoteA}>
						<div className={styles.logo}>
							<img src={companylogo} alt="company logo" />
						</div>
						<div className={styles.quote}>
							We’ve been using Untitled to kick start every new project and
							can’t imagine working without it.
						</div>
						<div className={styles.avatarT}>
							<div className={styles.avatar}>
								<img src={Avatar} alt="avatar" />
							</div>
							<div className={styles.textS}>
								<div className={styles.text}>Candice Wu</div>
								<div className={styles.st}>Product Manager, Sisyphus</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
