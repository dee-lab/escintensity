import Image from 'next/image'
import Link from 'next/link'

export const CoachSection = () => {
  return (
    <section
      aria-labelledby="meet-syxx-heading"
      className="bg-white px-6 py-12 text-zinc-950 md:py-16 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl bg-zinc-200">
          <Image
            src="/Joel-coach.jpg"
            alt="Syxx, also known as Joel, your online fitness coach"
            width={410}
            height={546}
            sizes="(min-width: 1024px) 512px, 100vw"
            className="h-auto w-full"
          />
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold tracking-widest text-zinc-500">
            Meet your coach
          </p>

          <h2
            id="meet-syxx-heading"
            className="!text-3xl !normal-case font-bold tracking-tight md:!text-4xl"
          >
            Syxx to most. Joel to some.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600">
            The person behind ESC Coaching. Get to know Syxx, his experience and what shapes his
            approach to helping you reach your goals.
          </p>

          <Link
            href="/coach"
            className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-md border border-zinc-300 px-7 py-3 font-semibold transition-colors hover:border-zinc-950 hover:bg-zinc-950 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600"
          >
            Meet Syxx
          </Link>
        </div>
      </div>
    </section>
  )
}
