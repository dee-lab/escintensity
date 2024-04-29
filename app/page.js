"use client"
import Image from "next/image";
import { size } from "./toggle/ui/components/button";

export default function LandingPage() {
  return (
    <> 
      <main style={{display: "flex", justifyContent: "center", alignContent: "center", flexDirection: "column", alignItems: "center", color: "white", textTransform: "uppercase", letterSpacing: ".2rem", textAlign: "center"}}>
      <Image 
          src="/logo-white.png"
          width={400}
          height={400}
          alt="ESC Intensity logo"
        />
        <div style={{fontSize:"1.5rem", paddingBottom: "24px"}}>West London Online Coaches</div>
        <h1>🚧 Website under construction 🚧</h1>
      </main>
    </>
  );
}



