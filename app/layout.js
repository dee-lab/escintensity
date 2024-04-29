import { Kanit } from "next/font/google";
import "./ui/globals.css";
import "./ui/globalIcons.css";

const kanit = Kanit({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: "ESC Intensity",
  description: "Blurb here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={kanit.className}>
        {children}
      </body>
    </html>
  );
}
