import Image from 'next/image'

const SOCIALS = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/syxx.esccoaching/',
    icon: '/Instagram_Logo.png',
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@syxx.esccoaching/',
    icon: '/TikTok_Logo.png',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/syxx.esccoaching/',
    icon: '/Facebook_Logo.png',
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@syxx.esccoaching/',
    icon: '/YouTube_Logo.png',
  },
]

export default function Socials() {
  return (
    <ul aria-label="Social media" className="flex flex-wrap gap-2">
      {SOCIALS.map(({ name, href, icon }) => (
        <li key={name}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} (opens in a new tab)`}
            className="flex h-11 w-11 items-center justify-center rounded-lg transition-colors hover:bg-white/10"
          >
            <Image src={icon} alt="" width={24} height={24} className="h-6 w-6 object-contain" />
          </a>
        </li>
      ))}
    </ul>
  )
}
