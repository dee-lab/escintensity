"use client"

import NavBar from "./ui/nav";
import Header from "./ui/header";
import Trainer from "./ui/trainers";
import ImageCarousel from "./ui/carousel";
import Sponsorship from "./ui/sponsorship";
import Subscribe from "./ui/subscribe";
import Footer from "./ui/footer";

export default function Home() {
  return (
    <>  
      <NavBar />
      <main>
        <Header />
        <div>
          <Trainer/>
          <ImageCarousel />
          <Sponsorship />
          <Footer />
        </div>
      </main>
    </>
  );
}



