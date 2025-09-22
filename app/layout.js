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
			<body className={kanit.className}>
				<Script
					id='CookieDeclaration'
					src='https://consent.cookiebot.com/010f9f87-8729-4866-b0d1-5380ba7052c7/cd.js'
					strategy='beforeInteractive'
					async
				></Script>

				<NavBar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
