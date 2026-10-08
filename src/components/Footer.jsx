import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa6'
import { profile } from '../data/portfolio'

export default function Footer() {
  const socials = [
    { href: profile.github, label: 'GitHub', Icon: FaGithub },
    { href: profile.linkedin, label: 'LinkedIn', Icon: FaLinkedin },
    { href: `mailto:${profile.email}`, label: 'Email', Icon: FaEnvelope },
  ]

  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-muted sm:flex-row sm:px-6">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React & Tailwind.
        </p>
        <div className="flex gap-2">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-surface-2 hover:text-ink"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
