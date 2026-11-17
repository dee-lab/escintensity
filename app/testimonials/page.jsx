import Header from './sections/header'
import ResultsGallery from './sections/results-gallery'
import { ClientTestimonials } from './sections'

export const metadata = {
  title: 'Client Results & Testimonials',
  description:
    'Explore ESC Coaching client transformations and testimonials. See their progress and hear about their experience of online coaching with Syxx.',
  alternates: {
    canonical: '/testimonials',
  },
  openGraph: {
    title: 'Client Results & Testimonials | ESC Coaching',
    description:
      'Real people. Personal progress. Explore client transformations and read their coaching stories.',
    url: '/testimonials',
  },
}

export default function TestimonialsPage() {
  return (
    <main>
      <Header />
      <ResultsGallery />

      <header
        id="client-stories"
        className="scroll-mt-24 bg-zinc-100 px-6 py-12 text-center text-zinc-950 md:py-16 lg:px-8"
      >
        <div className="mx-auto max-w-2xl">
          <p className="mb-4 text-sm font-semibold tracking-widest text-zinc-500">
            In their own words
          </p>

          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            The stories behind the progress
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-zinc-600">
            Hear how coaching has helped clients build confidence, find their routine and work
            towards their goals.
          </p>
        </div>
      </header>

      <ClientTestimonials />
    </main>
  )
}
