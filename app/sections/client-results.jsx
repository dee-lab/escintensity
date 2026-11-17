import Image from 'next/image'
import Link from 'next/link'
import CLIENT_RESULTS from '../data/client-results'

export default function ClientResultsSection() {
  const FEATURED_RESULTS = [
    {
      id: 'featured-1',
      image: '/client-results/featured/result-1.png',
      alt: 'ESC Coaching client before and after comparison 1',
    },
    {
      id: 'featured-2',
      image: '/client-results/featured/result-2.png',
      alt: 'ESC Coaching client before and after comparison 2',
    },
    {
      id: 'featured-3',
      image: '/client-results/featured/result-3.png',
      alt: 'ESC Coaching client before and after comparison 3',
    },
  ]
  return (
    <section
      aria-labelledby="client-results-heading"
      className="bg-zinc-100 px-6 py-12 text-zinc-950 md:py-16 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold tracking-widest text-zinc-500">
            Every Session Counts
          </p>

          <h2 id="client-results-heading" className="text-3xl font-bold tracking-tight md:text-4xl">
            Real people. Personal progress.
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-zinc-600">
            Different starting points. Individual goals. Explore the progress made by the ESC
            Coaching community.
          </p>
        </div>

        <ul className="mx-auto mt-10 grid max-w-sm gap-6 md:max-w-none md:grid-cols-3">
          {FEATURED_RESULTS.map(({ id, image, alt }) => (
            <li
              key={id}
              className="overflow-hidden rounded-2xl border border-zinc-200 bg-white p-2"
            >
              <Link
                href="/testimonials#transformations"
                className="block rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600"
              >
                <div className="relative aspect-square">
                  <Image
                    src={image}
                    alt={alt}
                    fill
                    sizes="(min-width: 768px) 360px, 384px"
                    className="object-contain"
                  />
                </div>
                <span className="sr-only">Explore all client results</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-8 text-center">
          <p className="mb-6 text-sm text-zinc-500">
            Every journey is individual. Results and timescales vary.
          </p>

          <Link
            href="/testimonials#transformations"
            className="inline-flex min-h-12 items-center justify-center rounded-md border border-zinc-300 px-7 py-3 font-semibold transition-colors hover:border-zinc-950 hover:bg-zinc-950 hover:text-white"
          >
            Explore all client results
          </Link>
        </div>
      </div>
    </section>
  )
}
