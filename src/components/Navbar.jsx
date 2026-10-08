import { useEffect, useState } from 'react'
import { FaBars, FaMoon, FaSun, FaXmark } from 'react-icons/fa6'
import { profile } from '../data/portfolio'
import useTheme from '../hooks/useTheme'

const links = [
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#hobbies', label: 'Beyond Code' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dark, toggleTheme] = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'border-b border-line bg-surface/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="display text-xl text-ink" aria-label="Back to top">
          KN<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-muted transition-colors hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={toggleTheme}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="grid h-10 w-10 place-items-center rounded-full text-muted transition-colors hover:bg-surface-2 hover:text-ink"
          >
            {dark ? <FaSun /> : <FaMoon />}
          </button>
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-sun px-4 py-2 text-xs font-extrabold tracking-[0.2em] text-[#0f172a] shadow-[0_6px_20px_-6px_rgba(253,216,53,0.9)] transition-transform hover:-translate-y-0.5 sm:px-6"
          >
            RESUME
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full text-ink lg:hidden"
          >
            {open ? <FaXmark size={20} /> : <FaBars size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-line px-4 py-3 lg:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 font-medium text-ink hover:bg-surface-2"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
