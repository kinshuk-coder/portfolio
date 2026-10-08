import { FaEnvelope, FaGithub, FaLinkedin, FaLocationDot, FaPhone } from 'react-icons/fa6'
import { profile } from '../data/portfolio'
import Reveal from './Reveal'

export default function Contact() {
  const items = [
    { icon: FaEnvelope, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: FaPhone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/[^+\d]/g, '')}` },
    { icon: FaLinkedin, label: 'LinkedIn', value: profile.linkedin.replace(/^https?:\/\//, ''), href: profile.linkedin },
    { icon: FaGithub, label: 'GitHub', value: profile.github.replace(/^https?:\/\//, ''), href: profile.github },
  ]

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="overflow-hidden rounded-[2rem] bg-ink p-6 text-bg sm:p-12 md:p-16">
          <div className="grid gap-12 md:grid-cols-2 md:items-end [&>*]:min-w-0">
            <div>
              <h2 className="display text-[2.75rem] sm:text-6xl md:text-7xl">
                Let's build
                <br />
                <span className="text-sun">something.</span>
              </h2>
              <p className="mt-6 max-w-md opacity-70">
                Hiring for a GenAI or software engineer, or just want to talk chess, football and gym splits? My inbox is open.
              </p>
              <p className="mt-4 inline-flex items-center gap-2 text-sm opacity-60">
                <FaLocationDot /> {profile.location}
              </p>
            </div>

            <ul className="grid gap-3">
              {items.map(({ icon: Icon, label, value, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 p-4 transition-colors hover:border-[#fdd835]/60 hover:bg-white/5 dark:border-black/10 dark:hover:bg-black/5"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-sun text-[#0f172a]">
                      <Icon />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs tracking-wide uppercase opacity-50">{label}</span>
                      <span className="block truncate font-medium">{value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
