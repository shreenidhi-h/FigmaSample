import logo from "./Logo.png";
import avatar from "./avatar.png";
import dropDown from "./dropDown.png";
import { Navmob } from "./Navmob";
function Navbar() {
	return (
		<>
			<div className="mb-24 border-b-gray-100 border-b max-sm:hidden">
				<div className="flex justify-between items-center p-5">
					<div className="flex mx-24 justify-evenly items-center text-uda font-semibold text-base">
						<img src={logo} alt="Logo" />
						<div>
							<a
								href="https://google.com"
								target="_blank"
								className="hover:text-blue-400 ml-8"
							>
								Home
							</a>
						</div>
						<div className="group/item relative ml-8">
							<div className="flex items-center justify-center">
								<div>Product</div>
								<img src={dropDown} alt="dropdown" />
							</div>
							<ul className="fixed">
								<li className="group/edit  invisible hover:bg-slate-400 group-hover/item:visible">
									Product-1
								</li>
								<li className="group/edit  invisible hover:bg-slate-400 group-hover/item:visible">
									Product-2
								</li>
								<li className="group/edit  invisible hover:bg-slate-400 group-hover/item:visible">
									Product-3
								</li>
							</ul>
						</div>
						<div className="group/item relative ml-8">
							<div className="flex items-center justify-center">
								<div>Resources</div>
								<img src={dropDown} alt="dropdown" />
							</div>
							<ul className="fixed">
								<li className="group/edit  invisible hover:bg-slate-400 group-hover/item:visible">
									Resources-1
								</li>
								<li className="group/edit  invisible hover:bg-slate-400 group-hover/item:visible">
									Resources-2
								</li>
								<li className="group/edit  invisible hover:bg-slate-400 group-hover/item:visible">
									Resources-3
								</li>
							</ul>
						</div>
						<div>
							<a
								href="https://google.com"
								target="_blank"
								className="hover:text-blue-400 ml-8"
							>
								Pricing
							</a>
						</div>
					</div>
					<div>
						<img src={avatar} alt="Avatar" className="rounded-full mx-24" />
					</div>
				</div>
			</div>
			<div className="sm:hidden flex justify-center flex-col items-center mx-3">
				<div className="w-full  flex  justify-between my-4 items-center">
					<img src={logo} className=""></img>
					<Navmob />
				</div>
				<div className="flex justify-center mb-20  items-center h-px w-full bg-gray-200"></div>
			</div>
		</>
	);
}

export default Navbar;
