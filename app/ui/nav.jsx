'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_ITEMS = [
  { label: 'Coaching', href: '/#services' },
  { label: 'How it works', href: '/#what-to-expect' },
  { label: 'Client results', href: '/testimonials' },
  { label: 'Meet Joel', href: '/coach' },
]

const NavBar = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const headerRef = useRef(null)
  const menuButtonRef = useRef(null)

  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Reset the mobile menu when switching to desktop.
  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1024px)')

    const handleResize = () => {
      if (desktop.matches) setIsOpen(false)
    }

    desktop.addEventListener('change', handleResize)

    return () => desktop.removeEventListener('change', handleResize)
  }, [])

  // Keep keyboard focus in the open menu and prevent background scrolling.
  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        menuButtonRef.current?.focus()
        return
      }

      if (event.key !== 'Tab') return

      const focusableElements = Array.from(
        headerRef.current?.querySelectorAll('a[href], button:not([disabled])') ?? [],
      ).filter((element) => element.getClientRects().length > 0)

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement?.focus()
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  const isCurrentPage = (href) =>
    !href.includes('#') && (pathname === href || pathname.startsWith(`${href}/`))

  const renderLinks = (mobile = false) =>
    NAV_ITEMS.map((item) => {
      const isCurrent = isCurrentPage(item.href)

      return (
        <li key={item.href}>
          <Link
            href={item.href}
            aria-current={isCurrent ? 'page' : undefined}
            onClick={closeMenu}
            className={[
              'block rounded-sm transition-colors',
              'focus-visible:outline focus-visible:outline-2',
              'focus-visible:outline-offset-4 focus-visible:outline-red-500',
              mobile
                ? 'border-b border-white/10 py-5 text-xl'
                : 'border-b-2 py-2 text-sm font-medium',
              isCurrent
                ? 'border-red-500 text-white'
                : mobile
                  ? 'text-zinc-300 hover:text-white'
                  : 'border-transparent text-zinc-300 hover:border-red-500 hover:text-white',
            ].join(' ')}
          >
            {item.label}
          </Link>
        </li>
      )
    })

  const ctaClasses = [
    'inline-flex min-h-[44px] items-center justify-center',
    'rounded-md bg-red-600 px-5 py-3 text-sm font-semibold text-white',
    'transition-colors hover:bg-red-700',
    'focus-visible:outline focus-visible:outline-2',
    'focus-visible:outline-offset-4 focus-visible:outline-red-500',
  ].join(' ')

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950 text-white"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link
          href="/"
          aria-label="ESC Coaching home"
          onClick={closeMenu}
          className="shrink-0 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-500"
        >
          <Image src="/logo-white.png" width={64} height={64} alt="" priority />
        </Link>

        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {renderLinks()}

            <li>
              <Link href="/contact" className={ctaClasses}>
                Get started
              </Link>
            </li>
          </ul>
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsOpen((open) => !open)}
          className="!inline-flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center gap-2 rounded-md p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-500 lg:!hidden"
        >
          <span className="text-sm font-medium">{isOpen ? 'Close' : 'Menu'}</span>

          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            aria-hidden="true"
            className="h-6 w-6"
          >
            {isOpen ? <path d="m6 6 12 12M6 18 18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!isOpen}
        className={
          isOpen
            ? 'fixed inset-x-0 bottom-0 top-20 overflow-y-auto overscroll-contain border-t border-white/10 bg-zinc-950 px-6 pb-8 lg:hidden'
            : 'hidden'
        }
      >
        <ul className="mx-auto max-w-lg">
          {renderLinks(true)}

          <li className="pt-8">
            <Link href="/contact" onClick={closeMenu} className={`${ctaClasses} w-full`}>
              Get started
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
