"use client"
import Image from "next/image";

export default function WaitList() {
  return (
    <> 
      <main style={{display: "flex", justifyContent: "center", alignContent: "center", flexDirection: "column", alignItems: "center", color: "white", textTransform: "uppercase", letterSpacing: ".2rem", textAlign: "center"}}>
        
        <h1>ESC Community Wait List</h1>
        <h2>coming soon</h2>
        <Image 
          src="/logo-white.png"
          width={300}
          height={300}
          alt="ESC Intensity logo"
        />
      </main>
    </>
  );
}



