import Image from 'next/image'
import Link from 'next/link'
import CLIENTS from './client-data'

const ClientTestimonials = () => {
  return (
    <>
      <div>
        {CLIENTS.map((client, index) => (
          <section
            key={client.name}
            aria-labelledby={`client-heading-${index}`}
            className={`px-6 py-12 text-zinc-950 md:py-20 lg:px-8 ${
              index % 2 === 0 ? 'bg-white' : 'bg-zinc-100'
            }`}
          >
            <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-2 lg:gap-16">
              <div className={`min-w-0 ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                <div className="mx-auto max-w-md overflow-hidden rounded-2xl border border-zinc-200 bg-white p-3">
                  <Image
                    src={client.image}
                    alt={`Fitness progress photos shared by ${client.name}`}
                    width={500}
                    height={500}
                    sizes="(min-width: 768px) 448px, 100vw"
                    className="h-auto w-full rounded-xl"
                  />
                </div>
              </div>

              <div className={`min-w-0 ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                <p className="mb-3 text-sm font-semibold tracking-widest text-zinc-500">
                  Client story
                </p>

                <h2
                  id={`client-heading-${index}`}
                  className="!text-2xl !normal-case font-bold tracking-tight md:!text-3xl"
                >
                  {client.name}
                </h2>

                <figure className="mt-6">
                  <blockquote className="border-l-2 border-red-600 pl-6 text-lg leading-relaxed text-zinc-600">
                    <p>“{client.testimonial}”</p>
                  </blockquote>

                  <figcaption className="sr-only">{client.name}, ESC Coaching client</figcaption>
                </figure>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section
        aria-labelledby="results-cta-heading"
        className="bg-zinc-950 px-6 py-16 text-center text-white md:py-20 lg:px-8"
      >
        <div className="mx-auto max-w-2xl">
          <h2
            id="results-cta-heading"
            className="!text-3xl !normal-case font-bold tracking-tight md:!text-4xl"
          >
            What would progress look like for you?
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-zinc-300">
            Talk to Joel about your goals and explore how online coaching could fit into your life.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-md bg-red-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-500"
          >
            Get started
          </Link>
        </div>
      </section>
    </>
  )
}

export default ClientTestimonials
