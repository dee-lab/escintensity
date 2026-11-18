'use client'

import { useEffect } from 'react'

const MEASUREMENT_ID = 'G-24TRKH8CHW'

export default function GoogleAnalytics() {
  useEffect(() => {
    const updateAnalytics = () => {
      const allowed = window.Cookiebot?.consent?.statistics === true

      window[`ga-disable-${MEASUREMENT_ID}`] = !allowed

      if (window.gtag) {
        window.gtag('consent', 'update', {
          analytics_storage: allowed ? 'granted' : 'denied',
          ad_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied',
        })
      }

      if (!allowed || document.getElementById('esc-google-analytics')) {
        return
      }

      window.dataLayer = window.dataLayer || []
      window.gtag =
        window.gtag ||
        function () {
          window.dataLayer.push(arguments)
        }

      window.gtag('consent', 'default', {
        analytics_storage: 'granted',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
      })

      window.gtag('js', new Date())

      window.gtag('config', MEASUREMENT_ID, {
        allow_google_signals: false,
        allow_ad_personalization_signals: false,
      })

      const script = document.createElement('script')
      script.id = 'esc-google-analytics'
      script.async = true
      script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`

      document.head.appendChild(script)
    }

    const events = ['CookiebotOnConsentReady', 'CookiebotOnAccept', 'CookiebotOnDecline']

    events.forEach((event) => {
      window.addEventListener(event, updateAnalytics)
    })

    updateAnalytics()

    return () => {
      events.forEach((event) => {
        window.removeEventListener(event, updateAnalytics)
      })
    }
  }, [])

  return null
}
