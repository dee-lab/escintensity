import Image from 'next/image'
import Link from 'next/link'

const COACH_IMAGES = {
  portrait: {
    src: '/Joel-coach.jpg',
    alt: "Syxx's, also known as Joel, lifestyle transformation coach",
  },
  client: {
    src: '/Joel-transformation.png',
    alt: "Syxx's before and after transformation",
  },
}

const SPECIALISMS = [
  'Body fat reduction',
  'Muscular development',
  'Bodybuilding',
  'Lifestyle coaching',
  'Online coaching',
  'Tailored nutrition plans',
]

export const metadata = {
  title: 'Meet Syxx',
  description:
    'Meet Syxx, also known as Joel, the coach behind ESC Coaching. Discover his experience and approach to training, nutrition and lasting lifestyle changes.',
  alternates: {
    canonical: '/coach',
  },
  openGraph: {
    title: 'Meet Syxx | ESC Coaching',
    description:
      'Get to know Syxx, also known as Joel, and his approach to helping you build strength, confidence and lasting habits.',
    url: '/coach',
  },
}

export default function CoachJoel() {
  return (
    <main className="bg-white text-zinc-950">
      <section aria-labelledby="coach-heading" className="px-6 py-12 md:py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-4 text-sm font-semibold tracking-widest text-zinc-500">
              Meet your coach
            </p>

            <h1
              id="coach-heading"
              className="text-4xl font-bold normal-case tracking-tight md:text-6xl"
            >
              I’m Syxx.
              <span className="mt-2 block text-zinc-500">Also known as Joel.</span>
            </h1>

            <p className="mt-6 text-xl font-medium">Lifestyle transformation coach</p>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-600">
              I’m a Level 3 qualified fitness coach with over 17 years’ experience training and
              coaching people with different goals, starting points and lifestyles.
            </p>

            <p className="mt-4 max-w-xl text-lg leading-relaxed text-zinc-600">
              My approach combines personalised training, nutrition guidance and accountability to
              help you build confidence and work towards lasting change.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-md bg-red-600 px-7 py-3 font-semibold text-white transition-colors hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600"
            >
              Get started
            </Link>
          </div>

          <div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl bg-zinc-200">
            <Image
              src={COACH_IMAGES.portrait.src}
              alt={COACH_IMAGES.portrait.alt}
              width={410}
              height={546}
              priority
              sizes="(min-width: 432px) 384px, calc(100vw - 48px)"
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      <section
        aria-labelledby="experience-heading"
        className="bg-zinc-100 px-6 py-12 md:py-16 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl lg:order-1">
            <Image
              src="/Joel-comp.jpg"
              alt="Syxx posing at a bodybuilding competition"
              fill
              sizes="(min-width: 432px) 384px, calc(100vw - 48px)"
              className="object-cover object-center"
            />
          </div>

          <div className="order-1 lg:order-2">
            <p className="mb-4 text-sm font-semibold tracking-widest text-zinc-500">
              Experience behind the coaching
            </p>

            <h2
              id="experience-heading"
              className="text-3xl font-bold normal-case tracking-tight md:text-4xl"
            >
              I’ve been on the journey too.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-zinc-600">
              I’ve been through my own physique transformations, including competitive bodybuilding.
              That experience has shaped how I train and how I support my clients.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-zinc-600">
              I understand that progress comes with challenges. My role is to help you work through
              them, understand your training and keep moving towards your goals.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="approach-heading" className="px-6 py-12 md:py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-4 text-sm font-semibold tracking-widest text-zinc-500">
              Your goals, your pace
            </p>

            <h2
              id="approach-heading"
              className="text-3xl font-bold normal-case tracking-tight md:text-4xl"
            >
              Coaching built around you.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-zinc-600">
              Whether you’re getting started or ready for your next challenge, I believe the right
              guidance, support and accountability can make a difference.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-zinc-600">
              We’ll work on your training, habits and mindset together, with a plan that reflects
              your goals and fits your life.
            </p>

            <h3 className="mt-8 text-xl font-semibold">Specialist areas</h3>

            <ul className="mt-4 flex flex-wrap gap-3">
              {SPECIALISMS.map((specialism) => (
                <li
                  key={specialism}
                  className="rounded-full border border-zinc-300 px-4 py-2 text-sm text-zinc-700"
                >
                  {specialism}
                </li>
              ))}
            </ul>
          </div>

          <div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-zinc-200 bg-white p-3">
            <Image
              src={COACH_IMAGES.client.src}
              alt={COACH_IMAGES.client.alt}
              width={410}
              height={410}
              sizes="(min-width: 432px) 358px, calc(100vw - 74px)"
              className="h-auto w-full rounded-xl"
            />
          </div>
        </div>
      </section>

      <section aria-label="Client feedback" className="bg-zinc-100 px-6 py-12 md:py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          <figure className="rounded-2xl border border-zinc-200 bg-white p-6 md:p-8">
            <blockquote className="text-lg leading-relaxed text-zinc-600">
              <p>
                “Syxx has been pivotal to the way that I have not only changed and made my body
                healthier, but also the way that I now look at fitness and nutrition.”
              </p>
            </blockquote>

            <figcaption className="mt-6 font-semibold">Ludwig A.</figcaption>
          </figure>

          <figure className="rounded-2xl border border-zinc-200 bg-white p-6 md:p-8">
            <blockquote className="text-lg leading-relaxed text-zinc-600">
              <p>
                “Signing up with Syxx was the best decision I could have made for my fitness goals.”
              </p>
            </blockquote>

            <figcaption className="mt-6 font-semibold">Sarah King</figcaption>
          </figure>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/testimonials"
            className="inline-flex min-h-[48px] items-center rounded-sm font-semibold underline decoration-red-600 decoration-2 underline-offset-4 hover:text-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600"
          >
            Read more client stories
          </Link>
        </div>
      </section>

      <section
        aria-labelledby="get-started-heading"
        className="bg-white px-6 py-12 text-center text-zinc-950 md:py-16 lg:px-8"
      >
        <div className="mx-auto max-w-2xl">
          <h2
            id="get-started-heading"
            className="text-3xl font-bold normal-case tracking-tight md:text-4xl"
          >
            Let’s talk about your goals.
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-zinc-600">
            Tell me where you’re starting and what you want to achieve. We can explore how coaching
            could work for you.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-md bg-red-600 px-7 py-3 font-semibold text-white transition-colors hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600"
          >
            Get started
          </Link>
        </div>
      </section>
    </main>
  )
}
