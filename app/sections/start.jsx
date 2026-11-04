import Link from 'next/link'

const StartSection = () => {
  return (
    <section
      aria-labelledby="get-started-heading"
      className="bg-zinc-100 px-6 py-16 text-center text-zinc-950 md:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-2xl">
        <p className="mb-4 text-sm font-semibold tracking-widest text-zinc-500">Your next step</p>

        <h2
          id="get-started-heading"
          className="!text-3xl !normal-case font-bold tracking-tight md:!text-4xl"
        >
          Let’s make a plan for your goals.
        </h2>

        <p className="mt-5 text-lg leading-relaxed text-zinc-600">
          Tell Joel where you’re starting, what you want to achieve and where you need support.
          Together, you can explore how online coaching could work for you.
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-md bg-red-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600"
        >
          Get started
        </Link>
      </div>
    </section>
  )
}

export default StartSection
