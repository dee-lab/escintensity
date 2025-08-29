import NavBar from "./ui/nav";
import Footer from "./ui/footer";
import { Orbitron, Kanit } from "next/font/google";
import "./ui/globals.css";
import "./ui/globalIcons.css";

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
				<NavBar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
