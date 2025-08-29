"use client";

import Script from "next/script";

export default function Contact() {
	return (
		<main>
			<div formsappId='68b1749e131e1632cebcfd14'></div>
			<Script
				src='https://forms.app/cdn/embed.js'
				type='text/javascript'
				async
				defer
				onload="new formsapp('68b1749e131e1632cebcfd14', 'standard', {'width':'100vw','height':'100vh','opacity':0}, 'https://c96uct7k.forms.app');"
			></Script>
		</main>
	);
}
