import Script from 'next/script'
import NavBar from './ui/nav'
import Footer from './ui/footer'
import { Kanit } from 'next/font/google'
import './ui/globals.css'
import './ui/globalIcons.css'
import GoogleAnalytics from './ui/google-analytics'

const kanit = Kanit({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  metadataBase: new URL('https://www.esc-coaching.com/'),

  title: {
    default: 'ESC Coaching | Online Fitness Coaching with Syxx',
    template: '%s | ESC Coaching',
  },

  description:
    'Build strength, confidence and lasting habits with Syxx at ESC Coaching. Personalised online training, nutrition guidance and accountability.',

  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'ESC Coaching',
    title: 'ESC Coaching | Online Fitness Coaching with Syxx',
    description:
      'Personalised training, nutrition guidance and accountability to help you work towards your goals with Syxx, also known as Joel.',
  },

  icons: {
    icon: [
      {
        url: '/favicon-96x96.png',
        type: 'image/png',
        sizes: '96x96',
      },
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
    shortcut: '/favicon.ico',
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },

  manifest: '/site.webmanifest',

  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <body className={kanit.className}>
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="010f9f87-8729-4866-b0d1-5380ba7052c7"
          strategy="beforeInteractive"
        />
        <GoogleAnalytics />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
