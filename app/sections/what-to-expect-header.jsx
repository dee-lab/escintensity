const COACHING_STEPS = [
  {
    number: '01',
    title: 'Start with you',
    description:
      'Talk through your goals, experience and routine with Syxx. Together, identify your starting point and what you want to work towards.',
  },
  {
    number: '02',
    title: 'Build your plan',
    description:
      'Get a personalised training plan with clear direction. Learn proper technique and understand how to progress at a pace that works for you.',
  },
  {
    number: '03',
    title: 'Keep moving forward',
    description:
      'Review your progress with Syxx, ask questions and adjust your plan as you go. Get the encouragement and accountability to stay consistent.',
  },
]

export const WhatToExpectHeader = () => {
  return (
    <section
      id="what-to-expect"
      aria-labelledby="how-it-works-heading"
      className="scroll-mt-20 bg-zinc-100 px-6 py-16 text-zinc-950 md:py-16 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold tracking-widest text-zinc-500">How it works</p>

          <h2
            id="how-it-works-heading"
            className="!text-3xl !normal-case font-bold tracking-tight md:!text-4xl"
          >
            A clear plan. Support along the way.
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-zinc-600">
            You bring your goals. Syxx brings the guidance, structure and support to help you work
            towards them.
          </p>
        </div>

        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {COACHING_STEPS.map(({ number, title, description }) => (
            <li key={number} className="border-t border-zinc-200 pt-6">
              <span aria-hidden="true" className="text-sm font-bold tracking-widest text-red-500">
                {number}
              </span>

              <h3 className="mt-4 !text-xl !normal-case font-semibold">{title}</h3>

              <p className="mt-4 leading-relaxed text-zinc-600">{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
