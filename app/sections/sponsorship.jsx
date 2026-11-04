import Image from 'next/image'

const SPONSORS = [
  {
    name: 'Liberty Supplements',
    logo: '/logo-liberty-supplements.png',
  },
  {
    name: 'Powerstone',
    logo: '/logo-power-stone.png',
  },
  {
    name: 'Source Performance',
    logo: '/logo-source-performance.png',
  },
]

const SponsorshipSection = () => {
  return (
    <section
      aria-labelledby="sponsors-heading"
      className="border-t border-white/10 bg-white px-6 py-12 text-white lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          id="sponsors-heading"
          className="text-center !text-lg !normal-case font-semibold text-zinc-300"
        >
          Sponsors
        </h2>

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-6 md:gap-x-2">
          {SPONSORS.map(({ name, logo }) => (
            <li key={name} className="w-36">
              <Image
                src={logo}
                alt={`${name} logo`}
                width={200}
                height={200}
                sizes="(min-width: 768px) 176px, 144px"
                className="h-24 w-full object-contain md:h-28"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default SponsorshipSection
