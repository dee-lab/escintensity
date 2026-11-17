import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-zinc-100 px-6 py-12 text-zinc-950 md:py-16 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-4 text-sm font-semibold tracking-widest text-zinc-500">
          The ESC Coaching community
        </p>

        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Real people. Personal progress.
        </h1>

        <p className="mt-5 text-lg leading-relaxed text-zinc-600">
          Explore client transformations and hear what working with Syxx has meant to the people
          behind the progress.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link
            href="#transformations"
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700"
          >
            View transformations
          </Link>

          <Link
            href="#client-stories"
            className="inline-flex min-h-12 items-center justify-center rounded-md border border-zinc-300 px-6 py-3 font-semibold hover:bg-white"
          >
            Read client stories
          </Link>
        </div>
      </div>
    </header>
  )
}
