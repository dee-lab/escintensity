import Link from 'next/link'
import Signup from './components/sign-up-form'
import Socials from './components/socials'

const FOOTER_LINKS = [
  { label: 'Coaching', href: '/#services' },
  { label: 'How it works', href: '/#what-to-expect' },
  { label: 'Client results', href: '/testimonials' },
  { label: 'Meet Syxx', href: '/coach' },
  // { label: 'Training tips', href: '/#training-tips' },
  { label: 'FAQs', href: '/#faqs' },
  { label: 'Get started', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-zinc-950 px-6 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 py-10 lg:grid-cols-2 lg:gap-16 lg:py-12">
          <div className="min-w-0 max-w-lg">
            <Signup label="Be part of the ESC community" buttonText="Sign up" />
          </div>

          <div className="min-w-0">
            <nav aria-label="Footer">
              <ul className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm text-zinc-300 sm:grid-cols-3">
                {FOOTER_LINKS.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="inline-flex min-h-11 items-center rounded-sm transition-colors hover:text-white"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-6">
              <p className="mb-2 text-sm font-semibold text-zinc-400">Follow Syxx</p>
              <Socials />
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-sm text-zinc-400 sm:text-left">
          © {new Date().getFullYear()} ESC Coaching. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
