'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CLIENT_RESULTS = [
  {
    image: '/slider/image-1.png',
    alt: 'Client transformation — before and after comparison 1',
  },
  {
    image: '/slider/image-2.png',
    alt: 'Client transformation — before and after comparison 2',
  },
  {
    image: '/slider/image-3.jpg',
    alt: 'Client transformation — before and after comparison 3',
  },
  {
    image: '/slider/image-4.png',
    alt: 'Client transformation — before and after comparison 4',
  },
  {
    image: '/slider/image-5.jpg',
    alt: 'Client transformation — before and after comparison 5',
  },
]

const ClientResultsSection = () => {
  const [showAll, setShowAll] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const dialogRef = useRef(null)
  const triggerRef = useRef(null)

  const visibleResults = showAll ? CLIENT_RESULTS : CLIENT_RESULTS.slice(0, 3)

  useEffect(() => {
    if (!selectedImage) return

    const dialog = dialogRef.current
    const previousOverflow = document.body.style.overflow

    dialog.showModal()
    document.body.style.overflow = 'hidden'

    return () => {
      dialog.close()
      document.body.style.overflow = previousOverflow
    }
  }, [selectedImage])

  const closeViewer = () => {
    setSelectedImage(null)
    triggerRef.current?.focus()
  }

  return (
    <section
      aria-labelledby="client-results-heading"
      className="bg-zinc-100 px-6 py-10 text-zinc-950 md:py-16 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold tracking-widest text-zinc-500">
            Every Session Counts
          </p>

          <h2
            id="client-results-heading"
            className="!text-3xl !normal-case font-bold tracking-tight md:!text-4xl"
          >
            Real people. Personal progress.
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-zinc-600">
            Everyone starts somewhere different. Explore some of the transformations from the ESC
            Coaching community.
          </p>
        </div>

        <ul
          id="transformation-gallery"
          className="mt-10 grid grid-cols-1 items-start gap-5 md:grid-cols-3"
        >
          {visibleResults.map((result) => (
            <li
              key={result.image}
              className="min-w-0 rounded-xl border border-zinc-200 bg-white p-2"
            >
              <button
                type="button"
                aria-label={`Enlarge ${result.alt.toLowerCase()}`}
                onClick={(event) => {
                  triggerRef.current = event.currentTarget
                  setSelectedImage(result)
                }}
                className="group !block !w-full cursor-zoom-in rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={result.image}
                    alt={result.alt}
                    fill
                    sizes="(min-width: 1152px) 350px, (min-width: 768px) 33vw, 100vw"
                    className="object-contain"
                  />
                </div>

                <span className="block py-3 text-center text-sm font-medium text-zinc-600 group-hover:text-red-700">
                  View larger
                </span>
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col items-center gap-5">
          {CLIENT_RESULTS.length > 3 && (
            <button
              type="button"
              aria-expanded={showAll}
              aria-controls="transformation-gallery"
              onClick={() => setShowAll((current) => !current)}
              className="!inline-flex min-h-[48px] cursor-pointer items-center justify-center rounded-md border border-zinc-300 px-7 py-3 font-semibold transition-colors hover:border-zinc-950 hover:bg-zinc-950 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600"
            >
              {showAll ? 'Show fewer' : 'View all transformations'}
            </button>
          )}

          <p className="text-center text-sm text-zinc-500">
            Every journey is individual. Results and timescales vary.
          </p>

          <Link
            href="/testimonials"
            className="rounded-sm font-semibold underline decoration-red-600 decoration-2 underline-offset-4 hover:text-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600"
          >
            Read client stories
          </Link>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby="transformation-viewer-heading"
        onCancel={(event) => {
          event.preventDefault()
          closeViewer()
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closeViewer()
          }
        }}
        className="fixed inset-0 m-auto max-h-[95dvh] w-[94vw] max-w-4xl overflow-y-auto rounded-xl border-0 bg-white p-4 text-zinc-950 shadow-xl backdrop:bg-black/75 md:p-6"
      >
        {selectedImage && (
          <>
            <div className="mb-4 flex items-center justify-between gap-4">
              <h2
                id="transformation-viewer-heading"
                className="!text-lg !normal-case font-semibold"
              >
                Client transformation
              </h2>

              <button
                type="button"
                autoFocus
                onClick={closeViewer}
                className="!inline-flex min-h-[44px] cursor-pointer items-center justify-center rounded-md border border-zinc-300 px-4 py-2 text-sm font-semibold hover:bg-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Close
              </button>
            </div>

            <div className="relative h-[70dvh]">
              <Image
                src={selectedImage.image}
                alt={selectedImage.alt}
                fill
                sizes="(min-width: 960px) 848px, 90vw"
                className="object-contain"
              />
            </div>
          </>
        )}
      </dialog>
    </section>
  )
}

export default ClientResultsSection
