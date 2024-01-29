"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
	const pathname = usePathname();

	const [isNavOpen, setIsNavOpen] = useState(false);

	const navLinks = [
		{ linkText: "Templates", routePath: "/templates" },
		{ linkText: "Collections", routePath: "/collections" },
		{ linkText: "Support", routePath: "/support" },
	];

	return (
		<div className="bg-gray-900">
			<header className="max-w-[1200px] mx-auto sm:flex sm:justify-between sm:px-4 sm:py-3">
				<div className="flex items-center justify-between px-4 py-3 sm:p-0">
					<Link
						onClick={() => {
							setIsNavOpen(false);
						}}
						href="/"
						className="flex items-center text-white font-semibold text-2xl"
					>
						<Image priority src="/assets/rg_logo.png" width={65} height={65} alt="Readme Generator" />
						<p className="hidden md:block">Readme Generator</p>
					</Link>
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
				<div className={`${isNavOpen ? "block px-5 pt-2 pb-4" : "hidden"} sm:flex sm:p-0 sm:items-center`}>
					{navLinks.map((navLink, index) => (
						<Link
							onClick={() => {
								setIsNavOpen(false);
							}}
							key={index}
							className={`block px-2 py-2 mt-0 sm-mt-0 sm:ml-3 md:ml-6  font-semibold rounded hover:bg-gray-700 hover:text-white link ${
								pathname === navLink.routePath ? "bg-white text-gray-900" : "text-white"
							}`}
							href={navLink.routePath}
						>
							{navLink.linkText}
						</Link>
					))}
					<a
						href="#"
						className="block px-2 md:px-4 py-2 mt-2 md:mt-0 sm:ml-3 md:ml-8 text-white font-semibold rounded bg-green-600 hover:opacity-85"
					>
						Log In
					</a>
				</div>
			</header>
		</div>
	);
};

export default Navbar;
