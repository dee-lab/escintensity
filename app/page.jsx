import Header from './sections/header'
import {
  WhatToExpectHeader,
  FAQ,
  FitnessGoal,
  ServicesHeader,
  ServicesComparisonTable,
  CoachSection,
} from './sections'
import ClientResultsSection from './sections/client-results'
// import SponsorshipSection from './sections/sponsorship'
import StartSection from './sections/start'
import ClientQuotes from './sections/client-quotes'
import ServicesPackages from './sections/services-packages'
// import TrainingTips from './sections/training-tips'

export const metadata = {
  title: {
    absolute: 'ESC Coaching | Online Fitness Coaching with Syxx',
  },
  description:
    'Reach your fitness goals with online coach Syxx. Explore personalised training, nutrition support, client transformations and practical training tips.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ESC Coaching | Online Fitness Coaching with Syxx',
    description:
      'Personalised training, nutrition guidance and accountability to help you work towards your goals.',
    url: '/',
  },
}

export default function HomePage() {
  return (
    <main>
      <Header />
      <ClientQuotes />
      <FitnessGoal />
      <WhatToExpectHeader />
      <CoachSection />
      <ClientResultsSection />

      <ServicesHeader />
      <ServicesPackages />
      <ServicesComparisonTable />

      {/* <TrainingTips /> */}
      <FAQ />
      <StartSection />
      {/* <SponsorshipSection /> */}
    </main>
  )
}
