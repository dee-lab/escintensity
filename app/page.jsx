'use client'

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
import SponsorshipSection from './sections/sponsorship'
import StartSection from './sections/start'
import ClientQuotes from './sections/client-quotes'
import ServicesPackages from './sections/services-packages'
import TrainingTips from './sections/training-tips'

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

      <TrainingTips />
      <FAQ />
      <StartSection />
      <SponsorshipSection />
    </main>
  )
}
