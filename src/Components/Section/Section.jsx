import React from "react";
import Content from "./Content.png";
import { useState } from "react";
import iconbtn from "./iconbtn.png";

function Section() {
	const [selectedDiv, setSelectedDiv] = useState(0);

	let toggleCheck = selectedDiv == 0 ? " themelight" : "";
	let toggleCheck2 = selectedDiv == 1 ? " themelight" : "";

	return (
		<div className="section flex justify-center flex-col items-center bg-slate-400">
			<div className="container-one">
				<div className="contentsec">
					<div className="heading-s">
						<div className="h-badge">
							<div className="badge-group">
								<div className="badge">
									<div
										className={`textNew${toggleCheck}`}
										onClick={() => {
											setSelectedDiv(0);
										}}
									>
										New feature
									</div>
								</div>
								<div className="dashboardText">
									<div
										className={`dashboard${toggleCheck2}`}
										onClick={() => {
											setSelectedDiv(1);
										}}
									>
										Check out the team dashboard
									</div>
								</div>
							</div>

							<div className="heading-element">
								<div className="heading">
									Beautiful analytics to grow smarter
								</div>
								<div className="supporting-text">
									Powerful, self-serve product and growth analytics to help you
									convert, engage, and retain more users. Trusted by over 4,000
									startups.
								</div>
							</div>
						</div>
					</div>
					<div className="actions">
						<button className="button1">
							<img src={iconbtn} />

							<div className="btnText1">Demo</div>
						</button>
						<button className="button2">
							<div className="btnText2">Sign up</div>
						</button>
					</div>
				</div>
			</div>
			<div className="container-two">
				<img src={Content} alt="Content" className="content-img" />
			</div>
		</div>
	);
}

export default Section;
