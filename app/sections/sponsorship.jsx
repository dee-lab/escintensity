import Image from 'next/image'

const PARTNERS = [
  {
    name: 'Liberty Supplements',
    image: '/liberty-supplements.png',
    alt: 'Syxx wearing Liberty Supplements merchandise',
    href: 'https://www.libertysupplements.co.uk/discount/ESC10',
    code: 'ESC10',
  },
]

const SponsorshipSection = () => {
  return (
    <section
      aria-labelledby="partners-heading"
      className="bg-white px-6 py-12 text-zinc-950 lg:px-8"
    >
      <div className="mx-auto max-w-xl">
        <h2
          id="partners-heading"
          className="text-center text-3xl font-bold normal-case tracking-tight md:text-4xl"
        >
          Our partner
        </h2>

        <ul className="mx-auto mt-8 max-w-xs">
          {PARTNERS.map(({ name, image, alt, href, code }) => (
            <li key={name} className="flex flex-col items-center gap-5 text-center">
              <Image
                src={image}
                alt={alt}
                width={500}
                height={500}
                sizes="192px"
                className="h-auto w-48 shrink-0 rounded-2xl"
              />

              <div>
                <h3 className="text-xl font-semibold">{name}</h3>

                <p className="mt-2 text-zinc-600">
                  Use code <span className="font-bold text-red-600">{code}</span> for 10% off
                </p>

                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex min-h-[44px] items-center font-semibold underline underline-offset-4 hover:text-red-700"
                >
                  Shop {name}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default SponsorshipSection
