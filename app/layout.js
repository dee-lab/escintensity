import NavBar from "./ui/sections/global/nav";
import Footer from "./ui/sections/global/footer";
import { Inter } from "next/font/google";
import "./ui/globals.css";
import "./ui/globalIcons.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ESC Intensity",
  description: "Blurb here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
          {children}
        <Footer />
      </body>
    </html>
  );
}
