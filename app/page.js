"use client"
import Image from "next/image";

export default function LandingPage() {
  return (
    <> 
      <main style={{display: "flex", justifyContent: "center", alignContent: "center", flexDirection: "column", alignItems: "center", color: "white", textTransform: "uppercase", letterSpacing: ".2rem", textAlign: "center"}}>
        <Image 
          src="/logo-white.png"
          alt="ESC Intensity logo"
          fill
          objectFit="contain"
        />
        <h1>🚧 Website under construction 🚧</h1>
      </main>
    </>
  );
}



