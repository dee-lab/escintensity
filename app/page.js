"use client"

import Header from "./ui/sections/header";
import Trainer from "./ui/sections/trainers";
import ClientResults from "./ui/sections/client-results";
import Sponsorship from "./ui/sections/sponsorship";
import Services from "./ui/sections/services";
import Contact from "./ui/sections/contact";

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
        </div>
      </main>
    </>
  );
}



