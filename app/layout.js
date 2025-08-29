import NavBar from "./ui/nav";
import Footer from "./ui/footer";
import { Orbitron, Kanit } from "next/font/google";
import "./ui/globals.css";
import "./ui/globalIcons.css";
import Script from "next/script";

// const orbitron = Orbitron({
//   // weight: '400',
//   subsets: ['latin'],
// })

const kanit = Kanit({
	weight: "400",
	subsets: ["latin"],
});

export const metadata = {
	title: "ESC Intensity",
	description: "West London Online Coaches",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<head>
				<Script
					id='Cookiebot'
					src='https://consent.cookiebot.com/uc.js'
					data-cbid='010f9f87-8729-4866-b0d1-5380ba7052c7'
					data-blockingmode='auto'
					type='text/javascript'
				></Script>
			</head>
			<body className={kanit.className}>
				<NavBar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
