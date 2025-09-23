"use client";

import Socials from "./components/socials";

const Footer = () => {
	return (
		<footer className=' bg-zinc-950 text-white flex flex-col px-4'>
			<Socials />
			<div className='text-center md:text-left py-11 px-9'>
				<ul className='flex flex-row gap-8 justify-center lg:justify-end'>
					<li>Copyright © 2025 ESC Coaching</li>
					{/* <li>Terms and Conditions</li>
					<li>Privacy Policy</li>
					<li>Cookie Policy</li> */}
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
