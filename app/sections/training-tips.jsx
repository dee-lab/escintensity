'use client'

import { useState } from 'react'

const VIDEOS = [
  { id: '2dVqdcVxHcM', title: 'Training tip 1' },
  { id: 'Ia47dPgAwr4', title: 'Training tip 2' },
  { id: 'DOS8aorwtCM', title: 'Training tip 3' },
]

const VideoCard = ({ id, title }) => {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <li className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
      <div className="relative aspect-[9/16] bg-black">
        {isPlaying ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&playsinline=1`}
            title={title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute inset-0 h-full w-full border-0"
          />
        ) : (
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            aria-label={`Play ${title}`}
            className="group !absolute !inset-0 !block !h-full !w-full cursor-pointer overflow-hidden focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-[-4px] focus-visible:outline-red-500"
          >
            {/* Native image keeps external thumbnail setup simple. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
              alt=""
              loading="lazy"
              width={1280}
              height={720}
              onLoad={(event) => {
                const image = event.currentTarget

                if (image.naturalWidth === 120) {
                  image.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
                }
              }}
              onError={(event) => {
                const image = event.currentTarget
                const fallback = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`

                if (image.src !== fallback) {
                  image.src = fallback
                }
              }}
              className="absolute inset-0 h-full w-full object-cover"
            />

            <span
              aria-hidden="true"
              className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/35"
            />

            <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition-colors group-hover:bg-red-700">
                <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-7 w-7">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
          </button>
        )}
      </div>

      <div className="p-5">
        <h3 className="!text-lg !normal-case font-semibold text-zinc-950">{title}</h3>

        <a
          href={`https://www.youtube.com/shorts/${id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block rounded-sm text-sm text-zinc-600 underline underline-offset-4 hover:text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600"
        >
          Watch on YouTube
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </li>
  )
}

export default function TrainingTips() {
  return (
    <section
      id="training-tips"
      aria-labelledby="training-tips-heading"
      className="scroll-mt-20 bg-zinc-100 px-6 py-12 text-zinc-950 md:py-16 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold tracking-widest text-zinc-500">
            Learn with Joel
          </p>

          <h2
            id="training-tips-heading"
            className="!text-3xl !normal-case font-bold tracking-tight md:!text-4xl"
          >
            Training tips you can put into practice
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-zinc-600">
            Short videos from Joel to help you understand your training and approach your next
            session with confidence.
          </p>
        </div>

        <ul className="mx-auto mt-10 grid max-w-[260px] gap-5 md:max-w-[800px] md:grid-cols-3">
          {VIDEOS.map((video) => (
            <VideoCard key={video.id} {...video} />
          ))}
        </ul>
      </div>
    </section>
  )
}
