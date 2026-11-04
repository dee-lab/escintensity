'use client'

import Script from 'next/script'
import Header from './header'

export default function Contact() {
  return (
    <main>
      <Header />

      <section aria-label="Coaching enquiry form" className="bg-white px-4 py-8 md:px-6">
        <div className="mx-auto max-w-4xl">
          <iframe
            data-formsapp-src="https://eu.forms.app/form/6aea5b7bad3926ead03e678c"
            title="ESC Coaching enquiry form"
            className="block w-full border-0"
          />
        </div>
      </section>

      <Script
        src="https://cdn.formsapp.io/embed.js"
        strategy="afterInteractive"
        onReady={() => {
          if (typeof window.formsapp === 'function') {
            new window.formsapp(
              '6aea5b7bad3926ead03e678c',
              'standard',
              {
                width: '100%',
                height: 'formHeight',
              },
              'https://eu.forms.app',
            )
          }
        }}
      />
    </main>
  )
}
