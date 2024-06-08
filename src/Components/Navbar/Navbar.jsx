import logo from "./Logo.png";
import avatar from "./avatar.png";
import dropDown from "./dropDown.png";

function Navbar() {
	return (
		<div className="navbar bg-lavender">
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
							<div>Product</div>
							<img src={dropDown} alt="dropdown" />
						</div>
						<div className="resources">
							<div>Resources</div>
							<img src={dropDown} alt="dropdown" />
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
