import Header from './header'
import ContactForm from './coaching-form'

export const metadata = {
  title: 'Apply for Coaching',
  description:
    'Apply for coaching with Syxx at ESC Coaching. Share your goals and take the next step towards a free consultation about coaching options and pricing.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Apply for Coaching | ESC Coaching',
    description:
      'Tell Syxx about your goals and take the next step towards finding the right coaching for you.',
    url: '/contact',
  },
}

export default function Contact() {
  return (
    <main>
      <Header />
      <ContactForm />
    </main>
  )
}
