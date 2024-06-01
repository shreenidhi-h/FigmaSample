import React from "react";
import "./Navbar.css";
import logo from "./Logo.png";
import avatar from "./avatar.png";

function Navbar() {
	return (
		<div className="navbar">
			<div className="header">
				<div className="container">
					<div className="content">
						<img src={logo} alt="Logo" className="logo" />
						<div className="home">Home</div>
						<div className="products">Products</div>
						<div className="resources">Resources</div>
						<div className="pricing">Pricing</div>
					</div>
					<img src={avatar} alt="Avatar" className="avatar" />
				</div>
			</div>
		</div>
	);
}

export default Navbar;
