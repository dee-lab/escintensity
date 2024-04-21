"use client"

import Header from "./ui/header";
import Trainer from "./ui/trainers";
import ClientResults from "./ui/client-results";
import Sponsorship from "./ui/sponsorship";
import Services from "./ui/services";
import Contact from "./ui/contact";
import Footer from "./ui/footer";

export default function Home() {
  return (
    <> 
      <main>
        <Header />
        <div>
          <Services />
          <Contact />
          <ClientResults />
          <Trainer/>
          <Sponsorship />
          <Footer />
        </div>
      </main>
    </>
  );
}



