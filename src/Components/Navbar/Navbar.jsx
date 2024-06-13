import logo from "./Logo.png";
import avatar from "./avatar.png";
import dropDown from "./dropDown.png";

function Navbar() {
	return (
		<div className="mb-24 border-b-gray-100 border-b">
			<div className="flex justify-around items-center p-5">
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
					<div class="mx-auto">
						<details
							class="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg"
							open
						>
							<summary class="text-sm text-slate-900 dark:text-white font-semibold select-none">
								Product
							</summary>
							<div class="mt-3 text-sm text-slate-600 dark:text-slate-400">
								<ul>
									<li>Product-1</li>
									<li>Product-2</li>
									<li>Product-3</li>
								</ul>
							</div>
						</details>
					</div>
					<div class="mx-auto">
						<details
							class="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg"
							open
						>
							<summary class="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
								Resources
							</summary>
							<div class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
								<ul>
									<li>Resource-1</li>
									<li>Resource-2</li>
									<li>Resource-3</li>
								</ul>
							</div>
						</details>
					</div>

					{/* <ul className="ml-8 group/item">
						<div className="flex items-center justify-center">
							<div>Product</div>
							<img src={dropDown} alt="dropdown" />
						</div>
						<li className="group/edit invisible hover:bg-slate-400 group-hover/item:visible">
							Product-1
						</li>
						<li className="group/edit invisible hover:bg-slate-400 group-hover/item:visible">
							Product-2
						</li>
						<li className="group/edit invisible hover:bg-slate-400 group-hover/item:visible">
							Product-3
						</li>
					</ul>

					<div className="ml-8 flex justify-center items-center">
						<div>Resources</div>
						<img src={dropDown} alt="dropdown" />
					</div> */}
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
	);
}

export default Navbar;
