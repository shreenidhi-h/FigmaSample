import React, { useState } from "react";
import "./Navbar.css";
import logo from "./Logo.png";
import avatar from "./avatar.png";
import dropDown from "./dropDown.png";

function Navbar() {
	return (
		<div className="navbar">
			<div className="header">
				<div className="container">
					<div className="content">
						<img src={logo} alt="Logo" className="logo" />
						<div>
							<a href="https://google.com" target="_blank" className="home">
								Home
							</a>
						</div>
						<div className="product">
							<div>Products</div>
							<img src={dropDown} />
						</div>
						<div className="resources">
							<div>Resources</div>
							<img src={dropDown} />
						</div>
						<div>
							<a href="https://google.com" target="_blank" className="pricing">
								Pricing
							</a>
						</div>
					</div>
					<img src={avatar} alt="Avatar" className="avatar" />
				</div>
			</div>
		</div>
	);
}

export default Navbar;
