"use client";

import Header from "./sections/header";
import CoachSection from "./sections/coaches";
import ClientResultsSection from "./sections/client-results";
import SponsorshipSection from "./sections/sponsorship";
import OurServicesSection from "./sections/our-services";
import StartSection from "./sections/start";
import SignupSection from "./sections/signup-form";

export default function HomePage() {
	return (
		<>
			<main>
				<Header />
				<div>
					<OurServicesSection />
					<StartSection />
					<ClientResultsSection />
					<CoachSection />
					<SponsorshipSection />
					<SignupSection />
				</div>
			</main>
		</>
	);
}
