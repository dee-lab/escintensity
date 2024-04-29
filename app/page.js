"use client"
import Image from "next/image";

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
        <h1>🚧 Website under construction 🚧</h1>
      </main>
    </>
  );
}



