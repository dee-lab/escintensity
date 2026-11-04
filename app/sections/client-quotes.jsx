import Link from 'next/link'
import CLIENTS from '../testimonials/sections/client-data'

const FEATURED_QUOTES = [
  {
    name: "Daniel O'Connell",
    theme: 'Fits around real life',
    excerpt:
      'We discussed what my goals were and he created a meal & workout plan that I could achieve within my busy family & work life.',
  },
  {
    name: 'Sarah King',
    theme: 'Confidence to train',
    excerpt:
      'He has given me the confidence to train hard by myself and taught me a whole new style of training,',
  },
  {
    name: 'Nora Csaszar',
    theme: 'More than physical progress',
    excerpt: 'He helped me transform my physique and mindset as well.',
  },
]

const ClientQuotes = () => {
  return (
    <section
      aria-labelledby="client-quotes-heading"
      className="bg-zinc-100 px-6 py-16 text-zinc-950 md:py-16 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold tracking-widest text-zinc-500">
            From the ESC community
          </p>

          <h2
            id="client-quotes-heading"
            className="!text-3xl !normal-case font-bold tracking-tight md:!text-4xl"
          >
            In their own words
          </h2>
        </div>

        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {FEATURED_QUOTES.map(({ name, theme, excerpt }) => {
            const client = CLIENTS.find((client) => client.name === name)

            if (!client) return null

            return (
              <li
                key={name}
                className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-7 lg:p-8"
              >
                <h3 className="!text-lg !normal-case font-semibold">{theme}</h3>

                <figure className="mt-5 flex flex-1 flex-col">
                  <blockquote className="flex-1 text-lg leading-relaxed text-zinc-600">
                    <p>“{excerpt}”</p>
                  </blockquote>

                  <figcaption className="mt-6 border-t border-zinc-100 pt-5 font-semibold">
                    {client.name}
                    <span className="mt-1 block text-sm font-normal text-zinc-500">
                      ESC Coaching client
                    </span>
                  </figcaption>
                </figure>
              </li>
            )
          })}
        </ul>

        <div className="mt-8 text-center">
          <Link
            href="/testimonials"
            className="rounded-sm font-semibold underline decoration-red-600 decoration-2 underline-offset-4 hover:text-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600"
          >
            Read the full client stories
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ClientQuotes
