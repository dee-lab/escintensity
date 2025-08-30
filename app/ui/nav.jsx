"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import BurgerMenuIcon from "./components/burger-menu";
import styles from "./styles";

const NAVITEMS = [
	{ label: "What to expect", link: "./what-to-expect" },
	{ label: "Services", link: "./services" },
	{
		label: "Who we are",
		link: "./coaches",
		children: [
			{ label: "Coach Joel", link: "./joel" },
			{ label: "Coach Craig", link: "./craig" },
		],
	},
	{ label: "Testimonials", link: "./testimonials" },
	{ label: "Get in touch", link: "./contact" },
	// {label: "Free Downloads", link: "./downloads"},
	// {label: "Merch", link: "./merch"},
	// {label: "Podcast", link: "./podcast"},
];

const NavItems = ({ setIsChecked, isChecked }) => {
	// const [dropdownOpen, setDropdownOpen] = useState(false);
	// const dropdownRef = useRef(null);

	// const handleClickOutside = (event) => {
	// 	// If the dropdownRef exists and the click is NOT inside the dropdown
	// 	if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
	// 		setDropdownOpen(false);
	// 	}
	// };

	// useEffect(() => {
	// 	document.addEventListener("click", handleClickOutside);
	// 	return () => document.removeEventListener("click", handleClickOutside);
	// }, []); // Cleanup on unmount

	const renderNavItem = (item) => {
		// if (item.children) {
		// 	return (
		// 		<li
		// 			key={item.label}
		// 			ref={dropdownRef}
		// 			className={`${
		// 				styles.navItem
		// 			} relative inline-block focus:outline-none focus-visible:ring w-auto ${
		// 				dropdownOpen ? "bg-red-800" : "bg-zinc-950"
		// 			}`}
		// 		>
		// 			<button
		// 				className='dropbtn flex align-middle items-center justify-between px-4'
		// 				onClick={() => setDropdownOpen(true)}
		// 				dropdownOpen={dropdownOpen}
		// 				aria-haspopup='true'
		// 				aria-expanded={dropdownOpen}
		// 			>
		// 				{item.label}
		// 				<span
		// 					className={`material-symbols-outlined ${
		// 						dropdownOpen ? "-rotate-180" : "-rotate-0"
		// 					}`}
		// 				>
		// 					expand_more
		// 				</span>
		// 			</button>
		// 			{dropdownOpen && (
		// 				<ul
		// 					className={`${
		// 						dropdownOpen ? "inline-block md:absolute" : "hidden"
		// 					} dropdown-content top-14 left-0 w-full`}
		// 					dropdownOpen={dropdownOpen}
		// 					aria-hidden={!dropdownOpen}
		// 				>
		// 					{item.children.map((child) => (
		// 						<li
		// 							key={child.label}
		// 							className={`${styles.navItem} bg-zinc-950 py-4`}
		// 						>
		// 							<Link href={child.link} className={`${styles.navLink}`}>
		// 								{child.label}
		// 							</Link>
		// 						</li>
		// 					))}
		// 				</ul>
		// 			)}
		// 		</li>
		// 	);
		// }

		return (
			<li key={item.label} className={`${styles.navItem}`}>
				<Link
					href={item.link}
					className={`${styles.navLink}`}
					onClick={() => setIsChecked(!isChecked)}
				>
					{item.label}
				</Link>
			</li>
		);
	};

	return (
		<nav>
			<ul className={`${styles.navList}`}>{NAVITEMS.map(renderNavItem)}</ul>
		</nav>
	);
};

const NavBar = () => {
	const [isChecked, setIsChecked] = useState(false);

	return (
		<div className={`${styles.navBar} flex justify-between items-center`}>
			<Link href='/'>
				<Image
					src='/logo-white.png'
					width={60}
					height={60}
					alt='ESC Intensity logo'
					className='pl-2 block lg:hidden'
				/>
				<Image
					src='/logo-white.png'
					width={100}
					height={100}
					alt='ESC Intensity logo'
					className='pl-2 hidden lg:block'
				/>
			</Link>
			<div className='navbar h-14 lg:hidden'>
				<BurgerMenuIcon setIsChecked={setIsChecked} isChecked={isChecked} />
				<section className='navScreen w-screen'>
					<NavItems setIsChecked={setIsChecked} isChecked={isChecked} />
				</section>
			</div>
			<div className='hidden lg:block'>
				<NavItems />
			</div>
		</div>
	);
};

export default NavBar;
