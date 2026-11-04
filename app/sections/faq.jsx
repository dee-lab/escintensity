import Link from 'next/link'

const QUESTIONS = [
  {
    question: 'How does online coaching work?',
    answer:
      'Joel builds a training plan around your goals, experience and routine. You follow the plan in your own time, with check-ins and remote support to review your progress, answer questions and make adjustments.',
  },
  {
    question: 'Is online coaching suitable for beginners?',
    answer:
      'Yes. You don’t need to be experienced or already in shape to get started. Joel will help you understand your training and build confidence, with a plan that reflects your starting point.',
  },
  {
    question: 'How much does coaching cost?',
    answer:
      'The cost depends on the coaching option you choose. Get in touch to discuss the support you’re looking for and confirm the price and what’s included before signing up.',
  },
  {
    question: 'How often will I need to train?',
    answer:
      'Your training schedule will depend on your goals, experience and available time. Joel will work with you to create a realistic routine you can stay consistent with.',
  },
  {
    question: 'Do I need a gym membership?',
    answer:
      'Not necessarily. Tell Joel what space and equipment you have available so you can discuss a suitable plan, whether you train at home or in a gym.',
  },
  {
    question: 'What if I’m nervous about getting started?',
    answer:
      'You can start with a conversation. A consultation gives you the chance to talk through your goals, ask questions and get to know Joel’s approach before deciding whether coaching is right for you.',
  },
]

export const FAQ = () => {
  return (
    <section
      id="faqs"
      aria-labelledby="faq-heading"
      className="scroll-mt-20 bg-white px-6 py-16 text-zinc-950 md:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="mb-4 text-sm font-semibold tracking-widest text-zinc-500">
            Before you get started
          </p>

          <h2
            id="faq-heading"
            className="!text-3xl !normal-case font-bold tracking-tight md:!text-4xl"
          >
            Your questions, answered
          </h2>
        </div>

        <div className="mt-10 divide-y divide-zinc-200 border-y border-zinc-200">
          {QUESTIONS.map(({ question, answer }) => (
            <details key={question} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-sm py-6 text-left font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600 [&::-webkit-details-marker]:hidden">
                <span>{question}</span>

                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  className="h-5 w-5 shrink-0 text-red-600"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" className="group-open:hidden" />
                </svg>
              </summary>

              <p className="max-w-2xl pb-6 leading-relaxed text-zinc-600">{answer}</p>
            </details>
          ))}
        </div>

        <p className="mt-8 text-center text-zinc-600">
          Have another question?{' '}
          <Link
            href="/contact"
            className="rounded-sm font-semibold text-zinc-950 underline decoration-red-600 decoration-2 underline-offset-4 hover:text-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600"
          >
            Ask Joel
          </Link>
        </p>
      </div>
    </section>
  )
}
