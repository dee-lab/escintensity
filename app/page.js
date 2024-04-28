"use client"

import Header from "./ui/sections/header";
import CoachSection from "./ui/sections/coaches";
import ClientResultsSection from "./ui/sections/client-results";
import SponsorshipSection from "./ui/sections/sponsorship";
import OurServicesSection from "./ui/sections/our-services";
import StartSection from "./ui/sections/start";

export default function HomePage() {
  return (
    <> 
      <main>
        <Header />
        <div>
          <OurServicesSection />
          <StartSection />
          <ClientResultsSection />
          <CoachSection/>
          <SponsorshipSection />
        </div>
      </main>
    </>
  );
}



