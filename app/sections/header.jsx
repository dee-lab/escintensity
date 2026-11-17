import Link from 'next/link'

const Header = () => {
  return (
    <header className="relative isolate overflow-hidden bg-zinc-950 text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[url('/fitness-500x510.jpg')] bg-cover bg-right-top grayscale md:bg-[url('/fitness1080x450.png')]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-zinc-950 via-zinc-950/85 to-zinc-950/40"
      />

      <div className="mx-auto flex min-h-[560px] max-w-7xl items-center px-6 py-20 md:min-h-[640px] lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-semibold tracking-widest text-zinc-300">
            Online fitness coaching with Syxx
          </p>

          <h1 className="!text-4xl !normal-case font-bold leading-tight tracking-tight sm:!text-5xl lg:!text-6xl">
            Align Your Mindset With Your Goal &amp;{' '}
            <span className="text-red-500">Transform Your Body</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-300 md:text-xl">
            Build strength, confidence and lasting habits with personalised training, nutrition
            guidance and support that fits your life.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-[48px] items-center justify-center rounded-md bg-red-600 px-7 py-3 font-semibold text-white transition-colors hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-500"
            >
              Get started
            </Link>

            {/* TODO: UNCOMMENT THIS */}
            {/* <Link
              href="/testimonials"
              className="inline-flex min-h-[48px] items-center justify-center rounded-md border border-white/30 px-7 py-3 font-semibold text-white transition-colors hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              See client results
            </Link> */}
          </div>

          <p className="mt-8 text-sm text-zinc-400">Every Session Counts. Your goals, your pace.</p>
        </div>
      </div>
    </header>
  )
}

export default Header
