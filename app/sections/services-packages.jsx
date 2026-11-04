import Link from 'next/link'

const COACHING_OPTIONS = [
  {
    icon: 'smartphone',
    label: 'Flexible support',
    title: 'Online coaching',
    description:
      'A personalised training programme built around your goals, experience and routine, with guidance from Joel as you progress.',
    action: 'Ask about online coaching',
    featured: true,
  },
  {
    icon: 'groups',
    label: 'Shared encouragement',
    title: 'ESC Community',
    description:
      'Connect with others on their fitness journeys and find support and motivation to help you keep showing up.',
    action: 'Ask about the community',
    featured: false,
  },
]

export const ServicesPackages = () => {
  return (
    <section aria-label="Coaching options" className="bg-white px-6 pb-10 text-zinc-950 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <ul className="grid gap-6 md:grid-cols-2">
          {COACHING_OPTIONS.map(({ icon, label, title, description, action, featured }) => (
            <li
              key={title}
              className={[
                'flex flex-col rounded-2xl border p-7 lg:p-8',
                featured ? 'border-red-600 bg-white' : 'border-zinc-200 bg-zinc-50',
              ].join(' ')}
            >
              <span
                aria-hidden="true"
                className="material-symbols-outlined mb-5 self-start text-3xl text-red-600"
              >
                {icon}
              </span>

              <p className="text-sm font-medium text-zinc-500">{label}</p>

              <h3 className="mt-2 !text-2xl !normal-case font-semibold">{title}</h3>

              <p className="mb-7 mt-4 flex-1 leading-relaxed text-zinc-600">{description}</p>

              <Link
                href="/contact"
                className={[
                  'inline-flex min-h-[48px] items-center justify-center',
                  'rounded-md px-5 py-3 text-center text-sm font-semibold',
                  'transition-colors focus-visible:outline',
                  'focus-visible:outline-2 focus-visible:outline-offset-4',
                  'focus-visible:outline-red-600',
                  featured
                    ? 'bg-red-600 text-white hover:bg-red-700'
                    : 'border border-zinc-300 hover:border-zinc-950 hover:bg-zinc-950 hover:text-white',
                ].join(' ')}
              >
                {action}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ServicesPackages
