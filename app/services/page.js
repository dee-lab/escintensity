'use client'

import Header from "./sections/header";
import Packages from "./sections/packages";
// import ComparisonTable from "./sections/comparison-chart";

export default function ServicePage() {
  return (
    <main>
      <Header />
      <Packages />
      {/* <ComparisonTable /> */}
    </main>
  )
}