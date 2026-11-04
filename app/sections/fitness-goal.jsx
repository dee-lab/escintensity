const FITNESS_GOALS = [
  {
    icon: 'monitor_weight_loss',
    title: 'Lose weight',
    description:
      'Work towards sustainable fat loss with training and nutrition that fit your life. Build habits that help you feel more confident.',
  },
  {
    icon: 'exercise',
    title: 'Build strength',
    description:
      'Follow a personalised training programme with clear progression, so you can build muscle, get stronger and recognise your progress.',
  },
  {
    icon: 'route',
    title: 'Road mapping your journey',
    description:
      'Work with Joel to set your goals, understand your starting point and create a realistic plan. Know what to focus on and how to move forward.',
  },
]

export const FitnessGoal = () => {
  return (
    <section
      aria-labelledby="fitness-goals-heading"
      className="bg-white px-6 py-16 text-zinc-950 md:py-16 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold tracking-widest text-zinc-500">
            Your goals, your pace
          </p>

          <h2
            id="fitness-goals-heading"
            className="!text-3xl !normal-case font-bold tracking-tight md:!text-4xl"
          >
            Your fitness journey starts here
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-zinc-600">
            Whether you want to lose weight, get stronger or need a clear direction, Joel will help
            you build a plan around your goals.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {FITNESS_GOALS.map(({ icon, title, description }) => (
            <li key={title} className="rounded-2xl border border-zinc-200 bg-white p-7 lg:p-8">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
                <span aria-hidden="true" className="material-symbols-outlined text-3xl">
                  {icon}
                </span>
              </div>

              <h3 className="!text-xl !normal-case font-semibold">{title}</h3>

              <p className="mt-4 leading-relaxed text-zinc-600">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
