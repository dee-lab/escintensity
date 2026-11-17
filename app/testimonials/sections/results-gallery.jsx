'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import CLIENT_RESULTS from '../../data/client-results'

const PAGE_SIZE = 12

export default function ResultsGallery() {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const dialogRef = useRef(null)
  const triggerRef = useRef(null)

  const selected = selectedIndex === null ? null : CLIENT_RESULTS[selectedIndex]

  const isOpen = selectedIndex !== null

  useEffect(() => {
    if (!isOpen) return

    const dialog = dialogRef.current
    const previousOverflow = document.body.style.overflow

    if (!dialog.open) dialog.showModal()
    document.body.style.overflow = 'hidden'

    return () => {
      dialog.close()
      document.body.style.overflow = previousOverflow
      triggerRef.current?.focus()
    }
  }, [isOpen])

  useEffect(() => {
    const gallery = document.getElementById('transformations')

    if (!gallery) return

    const updateVisibility = () => {
      const screenHeight = window.innerHeight
      const galleryBounds = gallery.getBoundingClientRect()

      const galleryIsLong = galleryBounds.height > screenHeight * 4
      const scrolledIntoGallery = -galleryBounds.top > screenHeight * 2

      setShowBackToTop(galleryIsLong && scrolledIntoGallery)
    }

    const resizeObserver = new ResizeObserver(updateVisibility)

    resizeObserver.observe(gallery)
    window.addEventListener('scroll', updateVisibility, { passive: true })
    window.addEventListener('resize', updateVisibility)
    updateVisibility()

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('scroll', updateVisibility)
      window.removeEventListener('resize', updateVisibility)
    }
  }, [])

  return (
    <section
      id="transformations"
      aria-labelledby="transformations-heading"
      className="scroll-mt-24 bg-white px-6 py-12 text-zinc-950 md:py-16 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold tracking-widest text-zinc-500">
            Progress in pictures
          </p>

          <h2
            id="transformations-heading"
            tabIndex={-1}
            className="scroll-mt-24 text-3xl font-bold tracking-tight focus:outline-none md:text-4xl"
          >
            Client transformations
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-zinc-600">
            Explore results from the ESC Coaching community. Select an image to take a closer look.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
          {CLIENT_RESULTS.slice(0, visibleCount).map(({ id, image, alt }, index) => (
            <li key={id} className="rounded-2xl border border-zinc-200 bg-white p-2">
              <button
                type="button"
                aria-label={`Enlarge client result ${id}`}
                aria-haspopup="dialog"
                onClick={(event) => {
                  triggerRef.current = event.currentTarget
                  setSelectedIndex(index)
                }}
                className="group block w-full rounded-xl"
              >
                <div className="relative aspect-square">
                  <Image
                    src={image}
                    alt={alt}
                    fill
                    sizes="(min-width: 1280px) 280px, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                    className="object-contain"
                  />
                </div>

                <span className="block py-2 text-xs font-medium text-zinc-600 group-hover:text-red-700">
                  View larger
                </span>
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-8 text-center">
          <p role="status" aria-live="polite" className="text-sm text-zinc-500">
            Showing {Math.min(visibleCount, CLIENT_RESULTS.length)} of {CLIENT_RESULTS.length}{' '}
            results
          </p>

          {visibleCount < CLIENT_RESULTS.length && (
            <button
              type="button"
              onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
              className="mt-5 inline-flex min-h-12 items-center justify-center rounded-md border border-zinc-300 px-7 py-3 font-semibold transition-colors hover:border-zinc-950 hover:bg-zinc-950 hover:text-white"
            >
              Load more results
            </button>
          )}

          <p className="mt-6 text-sm text-zinc-500">
            Every journey is individual. Results and timescales vary.
          </p>
        </div>
      </div>

      {showBackToTop && !isOpen && (
        <button
          type="button"
          onClick={() => {
            const heading = document.getElementById('transformations-heading')

            if (!heading) return

            const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

            heading.focus({ preventScroll: true })
            heading.scrollIntoView({
              behavior: reduceMotion ? 'instant' : 'smooth',
              block: 'start',
            })
          }}
          className="back-to-top-enter fixed bottom-5 right-5 z-30 inline-flex min-h-12 items-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-zinc-800"
        >
          <span aria-hidden="true">↑</span>
          Back to results
        </button>
      )}

      <dialog
        ref={dialogRef}
        aria-labelledby="result-dialog-heading"
        onCancel={() => setSelectedIndex(null)}
        onClose={() => setSelectedIndex(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            setSelectedIndex(null)
          }
        }}
        onKeyDown={(event) => {
          if (event.key === 'ArrowLeft') {
            event.preventDefault()
            moveSelection(-1)
          }

          if (event.key === 'ArrowRight') {
            event.preventDefault()
            moveSelection(1)
          }
        }}
        className="fixed inset-0 m-auto max-h-[95dvh] w-[calc(100%-2rem)] max-w-4xl overflow-y-auto rounded-2xl bg-white p-4 text-zinc-950 shadow-xl backdrop:bg-black/75 md:p-6"
      >
        {selected && (
          <>
            <div className="flex items-center justify-between gap-4">
              <h2 id="result-dialog-heading" className="text-lg font-semibold">
                Client result {selected.id}
              </h2>

              <button
                type="button"
                autoFocus
                onClick={() => setSelectedIndex(null)}
                className="min-h-11 rounded-md px-4 text-sm font-semibold hover:bg-zinc-100"
              >
                Close
              </button>
            </div>

            <div className="relative mt-4 h-[60dvh] md:h-[70dvh]">
              <Image
                key={selected.id}
                src={selected.image}
                alt={selected.alt}
                fill
                sizes="(min-width: 896px) 848px, 95vw"
                className="object-contain"
              />
            </div>

            <div className="mt-4 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => moveSelection(-1)}
                aria-label="Previous client result"
                className="min-h-11 rounded-md border border-zinc-300 px-4 text-sm font-semibold hover:bg-zinc-100"
              >
                Previous
              </button>

              <p aria-live="polite" className="text-sm text-zinc-500">
                {selectedIndex + 1} / {CLIENT_RESULTS.length}
              </p>

              <button
                type="button"
                onClick={() => moveSelection(1)}
                aria-label="Next client result"
                className="min-h-11 rounded-md border border-zinc-300 px-4 text-sm font-semibold hover:bg-zinc-100"
              >
                Next
              </button>
            </div>
          </>
        )}
      </dialog>
    </section>
  )
}
