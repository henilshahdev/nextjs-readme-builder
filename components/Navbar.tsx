"use client";

import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);

	return (
		<div className="bg-gray-900">
			<header className="max-w-[1200px] mx-auto sm:flex sm:justify-between sm:px-4 sm:py-3">
				<div className="flex items-center justify-between px-4 py-3 sm:p-0">
					<div className="flex items-center text-white font-semibold text-2xl">
						<Image priority src="/assets/rg_logo.png" width={65} height={65} alt="Readme Generator" />
						<p className="hidden md:block">Readme Generator</p>
					</div>
					<div className="sm:hidden me-2">
						<button
							onClick={() => {
								setIsNavOpen(!isNavOpen);
							}}
							type="button"
							className="hover:cursor-pointer"
						>
							<Image
								className="fill-current mt-2"
								src="/assets/menu-outline.svg"
								width={40}
								height={40}
								alt="menu icon"
							/>
						</button>
					</div>
				</div>
				<div className={`${isNavOpen ? "block px-4 pt-2 pb-4" : "hidden"} sm:flex sm:p-0 sm:items-center`}>
					<a
						href="#"
						className="block px-2 py-2 mt-1 sm-mt-0 text-white font-semibold rounded hover:bg-gray-700"
					>
						Templates
					</a>
					<a
						href="#"
						className="block px-2 py-2 mt-1 sm-mt-0 sm:ml-3 text-white font-semibold rounded hover:bg-gray-700"
					>
						Collections
					</a>
					<a
						href="#"
						className="block px-2 py-2 mt-1 sm-mt-0 sm:ml-3 text-white font-semibold rounded hover:bg-gray-700"
					>
						Support
					</a>
					<a
						href="#"
						className="block px-2 py-2 mt-1 sm-mt-0 sm:ml-3 text-white font-semibold rounded hover:bg-gray-700"
					>
						About
					</a>
					<a
						href="#"
						className="block px-2 py-2 mt-1 sm-mt-0 sm:ml-3 text-white font-semibold rounded bg-green-600 hover:opacity-85"
					>
						Log In
					</a>
				</div>
			</header>
		</div>
	);
};

export default Navbar;
