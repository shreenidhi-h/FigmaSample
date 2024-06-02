import React from "react";
import styles from "./Footer.module.css";
import logo from "./Logo.png";
import Divider from "../SectionDivider/Divider";

export const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.content}>
					<div className={styles.text}>
						<div className={styles.column1}>
							<p className={styles.product}>Produt</p>
							<a
								href="https://google.com"
								target="_blank"
								className={styles.footerElement}
							>
								Overview
							</a>
							<a
								href="https://google.com"
								target="_blank"
								className={styles.footerElement}
							>
								Features
							</a>
							<div className={styles.new}>
								<a
									href="https://google.com"
									target="_blank"
									className={styles.footerElement}
								>
									Solutions
								</a>
								<p className={styles.newElement}>New</p>
							</div>
							<a
								href="https://google.com"
								target="_blank"
								className={styles.footerElement}
							>
								Tutorials
							</a>
							<a
								href="https://google.com"
								target="_blank"
								className={styles.footerElement}
							>
								Pricing
							</a>
							<a
								href="https://google.com"
								target="_blank"
								className={styles.footerElement}
							>
								Releases
							</a>
						</div>
					</div>
					<div className={styles.text}>
						<div className={styles.column2}>
							<p className={styles.product}>Company</p>
							<a
								href="https://google.com"
								target="_blank"
								className={styles.footerElement}
							>
								About us
							</a>
							<a
								href="https://google.com"
								target="_blank"
								className={styles.footerElement}
							>
								Carrers
							</a>
							<a
								href="https://google.com"
								target="_blank"
								className={styles.footerElement}
							>
								Press
							</a>
							<a
								href="https://google.com"
								target="_blank"
								className={styles.footerElement}
							>
								News
							</a>
							<a
								href="https://google.com"
								target="_blank"
								className={styles.footerElement}
							>
								Media Kit
							</a>
							<a
								href="https://google.com"
								target="_blank"
								className={styles.footerElement}
							>
								Contact
							</a>
						</div>
					</div>
					<div className={styles.text}>
						<div className={styles.column3}>
							<p className={styles.product}>Resources</p>
							<a
								href="https://google.com"
								target="_blank"
								className={styles.footerElement}
							>
								Blog
							</a>
							<a
								href="https://google.com"
								target="_blank"
								className={styles.footerElement}
							>
								Newsletter
							</a>
							<a
								href="https://google.com"
								target="_blank"
								className={styles.footerElement}
							>
								Events
							</a>
							<a
								href="https://google.com"
								target="_blank"
								className={styles.footerElement}
							>
								Help centre
							</a>
							<a
								href="https://google.com"
								target="_blank"
								className={styles.footerElement}
							>
								Tutorials
							</a>
							<a
								href="https://google.com"
								target="_blank"
								className={styles.footerElement}
							>
								Support
							</a>
						</div>
					</div>
					<div className={styles.text}>
						<div className={styles.column4}>
							<p className={styles.product}>Usecases</p>
							<a
								href="https://google.com"
								target="_blank"
								className={styles.footerElement}
							>
								Startups
							</a>
							<a
								href="https://google.com"
								target="_blank"
								className={styles.footerElement}
							>
								Enterprise
							</a>
							<a
								href="https://google.com"
								target="_blank"
								className={styles.footerElement}
							>
								Government
							</a>
							<a
								href="https://google.com"
								target="_blank"
								className={styles.footerElement}
							>
								SaaS centre
							</a>
							<a
								href="https://google.com"
								target="_blank"
								className={styles.footerElement}
							>
								Marketplaces
							</a>
							<a
								href="https://google.com"
								target="_blank"
								className={styles.footerElement}
							>
								Ecommerce
							</a>
						</div>
					</div>
					<div className={styles.text}>
						<div className={styles.column5}>
							<p className={styles.product}>Social</p>
							<a
								href="https://google.com"
								target="_blank"
								className={styles.footerElement}
							>
								Twitter
							</a>
							<a
								href="https://google.com"
								target="_blank"
								className={styles.footerElement}
							>
								LinkedIn
							</a>
							<a
								href="https://google.com"
								target="_blank"
								className={styles.footerElement}
							>
								Facebook
							</a>
							<a
								href="https://google.com"
								target="_blank"
								className={styles.footerElement}
							>
								GitHub
							</a>
							<a
								href="https://google.com"
								target="_blank"
								className={styles.footerElement}
							>
								AngleList
							</a>
							<a
								href="https://google.com"
								target="_blank"
								className={styles.footerElement}
							>
								Dribble
							</a>
						</div>
					</div>
					<div className={styles.text}>
						<div className={styles.column6}>
							<p className={styles.product}>Legal</p>
							<a
								href="https://google.com"
								target="_blank"
								className={styles.footerElement}
							>
								Terms
							</a>
							<a
								href="https://google.com"
								target="_blank"
								className={styles.footerElement}
							>
								Priacy
							</a>
							<a
								href="https://google.com"
								target="_blank"
								className={styles.footerElement}
							>
								Cookies
							</a>
							<a
								href="https://google.com"
								target="_blank"
								className={styles.footerElement}
							>
								Licenses
							</a>
							<a
								href="https://google.com"
								target="_blank"
								className={styles.footerElement}
							>
								Settings
							</a>
							<a
								href="https://google.com"
								target="_blank"
								className={styles.footerElement}
							>
								Contact
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.container2}>
				<div className={styles.content2}>
					<img src={logo} alt="logo" />
					<div className={styles.footerText}>
						© 2077 Untitled UI. All rights reserved.
					</div>
				</div>
			</div>
		</div>
	);
};
