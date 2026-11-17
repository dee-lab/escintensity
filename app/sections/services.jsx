import data from './services-data'

export const ServicesHeader = () => {
  return (
    <header
      id="services"
      className="scroll-mt-20 bg-white px-6 pb-8 pt-16 text-zinc-950 md:pt-20 lg:px-8"
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-4 text-sm font-semibold tracking-widest text-zinc-500">
          Coaching with Syxx
        </p>

        <h2 className="!text-3xl !normal-case font-bold tracking-tight md:!text-4xl">
          Find your way forward
        </h2>

        <p className="mt-5 text-lg leading-relaxed text-zinc-600">
          Support for your training, your goals and the life around them. Explore how you can work
          with Syxx.
        </p>
      </div>
    </header>
  )
}

const PACKAGES = [
  { key: 'online', label: 'Online coaching' },
  { key: 'community', label: 'ESC Community' },
]

export const ServicesComparisonTable = () => {
  return (
    <section
      aria-labelledby="comparison-heading"
      className="bg-white px-6 pb-16 pt-0 text-zinc-950 md:pb-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="comparison-heading"
            className="!text-2xl !normal-case font-semibold tracking-tight"
          >
            Compare what’s included
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-zinc-600">
            Compare the support available with each coaching option.
          </p>
        </div>

        <div
          role="region"
          aria-labelledby="comparison-heading"
          aria-describedby="comparison-scroll-hint"
          tabIndex={0}
          className="mt-6 rounded-2xl border border-zinc-200 bg-white lg:mt-10"
        >
          <table className="w-full table-fixed border-separate border-spacing-0 text-sm">
            <caption className="sr-only">Features included in each ESC Coaching option</caption>

            <thead>
              <tr>
                <th
                  scope="col"
                  className="sticky top-20 z-20 w-1/3 rounded-tl-2xl bg-zinc-100 px-3 py-5 text-left font-semibold"
                >
                  Support and features
                </th>

                {PACKAGES.map(({ key, label }) => (
                  <th
                    key={key}
                    scope="col"
                    className="sticky top-20 z-20 bg-zinc-100 px-3 py-5 text-center font-semibold last:rounded-tr-2xl"
                  >
                    {label}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="[&>tr:last-child>th]:rounded-bl-2xl [&>tr:last-child>td:last-child]:rounded-br-2xl">
              {data.map((item) => (
                <tr key={item.service} className="border-t border-zinc-200 even:[&>*]:bg-zinc-50">
                  <th
                    scope="row"
                    className="break-words px-3 py-5 text-left font-medium text-zinc-700 md:px-6"
                  >
                    {item.service}
                  </th>

                  {PACKAGES.map(({ key }) => (
                    <td key={key} className="px-4 py-5 text-center">
                      <span
                        aria-hidden="true"
                        className={`material-symbols-outlined ${
                          item[key] ? 'text-green-700' : 'text-zinc-400'
                        }`}
                      >
                        {item[key] ? 'check' : 'remove'}
                      </span>

                      <span className="sr-only">{item[key] ? 'Included' : 'Not included'}</span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
