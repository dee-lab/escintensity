'use client'

import Link from 'next/link'
import Signup from './components/sign-up-form'
import Socials from './components/socials'

const FOOTER_LINKS = [
  { label: 'Coaching', href: '/#services' },
  { label: 'How it works', href: '/#what-to-expect' },
  { label: 'Client results', href: '/testimonials' },
  { label: 'Meet Joel', href: '/coach' },
  { label: 'Training tips', href: '/#training-tips' },
  { label: 'FAQs', href: '/#faqs' },
  { label: 'Get started', href: '/contact' },
]

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-zinc-950 px-6 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 py-12 lg:grid-cols-2 lg:gap-16">
          <div className="min-w-0">
            <Signup label="Be part of the ESC community:" buttonText="Sign up" />
          </div>

          <div className="flex flex-col gap-8 lg:items-end">
            <nav aria-label="Footer navigation">
              <ul className="flex flex-wrap gap-x-6 gap-y-4 lg:justify-end">
                {FOOTER_LINKS.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="rounded-sm text-sm text-zinc-300 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-500"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <Socials />
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-sm text-zinc-400 md:text-left">
          © {new Date().getFullYear()} ESC Coaching. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
