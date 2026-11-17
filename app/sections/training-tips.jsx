'use client'

import { useState } from 'react'

const VIDEOS = [
  { id: '2dVqdcVxHcM', title: 'Training tip 1' },
  { id: 'Ia47dPgAwr4', title: 'Training tip 2' },
  { id: 'DOS8aorwtCM', title: 'Training tip 3' },
]

const VideoCard = ({ id, title }) => {
  const [isPlaying, setIsPlaying] = useState(false)

  const useFallback = (event) => {
    const image = event.currentTarget
    const fallback = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`

    if (image.src !== fallback) {
      image.src = fallback
    }
  }

  return (
    <li
      className={`overflow-hidden rounded-2xl border border-zinc-200 bg-white ${
        isPlaying ? 'block' : 'flex'
      } md:block`}
    >
      <div
        className={`relative aspect-[9/16] shrink-0 bg-black ${
          isPlaying ? 'w-full' : 'w-24 sm:w-28'
        } md:w-full`}
      >
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
            className="group absolute inset-0 block h-full w-full overflow-hidden focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-[-4px] focus-visible:outline-red-500"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
              alt=""
              loading="lazy"
              width={1280}
              height={720}
              onLoad={(event) => {
                if (event.currentTarget.naturalWidth === 120) {
                  useFallback(event)
                }
              }}
              onError={useFallback}
              className="absolute inset-0 h-full w-full object-cover"
            />

            <span
              aria-hidden="true"
              className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/35"
            />

            <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition-colors group-hover:bg-red-700 md:h-14 md:w-14">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="ml-0.5 h-5 w-5 md:h-6 md:w-6"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
          </button>
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-center p-4 md:p-5">
        <h3 className="text-lg font-semibold normal-case text-zinc-950">{title}</h3>

        <button
          type="button"
          onClick={() => setIsPlaying((playing) => !playing)}
          className="mt-2 inline-flex min-h-11 items-center self-start rounded-sm text-sm font-semibold text-red-700 hover:text-red-800"
        >
          {isPlaying ? 'Close video' : 'Watch video'}
        </button>

        <a
          href={`https://www.youtube.com/shorts/${id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center self-start rounded-sm text-sm text-zinc-600 underline underline-offset-4 hover:text-zinc-950"
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
            Learn with Syxx
          </p>

          <h2
            id="training-tips-heading"
            className="text-3xl font-bold normal-case tracking-tight md:text-4xl"
          >
            Training tips you can put into practice
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-zinc-600">
            Short videos from Syxx to help you understand your training and approach your next
            session with confidence.
          </p>
        </div>

        <ul className="mx-auto mt-10 grid max-w-md items-start gap-4 md:max-w-[800px] md:grid-cols-3 md:gap-5">
          {VIDEOS.map((video) => (
            <VideoCard key={video.id} {...video} />
          ))}
        </ul>
      </div>
    </section>
  )
}
