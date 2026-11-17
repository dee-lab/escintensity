'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'

const Signup = ({ label = 'Be part of the ESC community', buttonText = 'Sign up' }) => {
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    window.ml_webform_success_30297441 = () => {
      setIsSuccess(true)
    }

    return () => {
      delete window.ml_webform_success_30297441
    }
  }, [])

  return (
    <>
      <div
        id="mlb2-30297441"
        className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-30297441"
      >
        <div className="ml-form-embedWrapper embedForm">
          <div className="ml-form-embedBody row-form" hidden={isSuccess}>
            <h2 className="!text-xl !normal-case font-semibold">{label}</h2>

            <p
              id="newsletter-description"
              className="mt-3 max-w-lg text-sm leading-relaxed text-zinc-400"
            >
              Get training and nutrition tips, community stories and special offers from ESC
              Coaching. Unsubscribe at any time.
            </p>

            <form
              className="ml-block-form mt-5"
              action="https://assets.mailerlite.com/jsonp/927700/forms/164233595473364218/subscribe"
              method="post"
              target="_blank"
              data-code=""
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
                <div className="ml-form-formContent min-w-0 flex-1">
                  <div className="ml-form-fieldRow ml-last-item">
                    <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                      <label htmlFor="newsletter-email" className="sr-only">
                        Email address
                      </label>

                      <input
                        id="newsletter-email"
                        name="fields[email]"
                        type="email"
                        autoComplete="email"
                        placeholder="Enter your email"
                        aria-describedby="newsletter-description"
                        required
                        className="form-control !block !box-border !min-h-[48px] !w-full rounded-md border border-zinc-600 bg-white px-4 py-3 text-base text-zinc-950 placeholder:text-zinc-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
                      />
                    </div>
                  </div>
                </div>

                <input type="hidden" name="ml-submit" value="1" />
                <input type="hidden" name="anticsrf" value="true" />

                <div className="ml-form-embedSubmit shrink-0">
                  <button
                    type="submit"
                    className="primary !inline-flex !box-border min-h-[48px] w-full cursor-pointer items-center justify-center rounded-md bg-red-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-500"
                  >
                    {buttonText}
                  </button>

                  <button
                    type="button"
                    disabled
                    className="loading rounded-md bg-zinc-800 px-6 py-3 text-zinc-300"
                    style={{ display: 'none' }}
                  >
                    Signing up…
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div role="status" aria-live="polite">
            {isSuccess && (
              <div className="ml-form-successBody row-success">
                <h2 className="!text-xl !normal-case font-semibold">Almost there!</h2>

                <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                  Check your inbox and confirm your email address to finish signing up for the ESC
                  newsletter.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Script
        id="mailerlite-webforms"
        src="https://groot.mailerlite.com/js/w/webforms.min.js?v176e10baa5e7ed80d35ae235be3d5024"
        strategy="afterInteractive"
      />
    </>
  )
}

export default Signup
