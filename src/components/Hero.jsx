import { FaEnvelope, FaGithub, FaLinkedin, FaLocationDot } from 'react-icons/fa6'
import { profile } from '../data/portfolio'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      {/* soft grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(var(--line)_1px,transparent_1px),linear-gradient(90deg,var(--line)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-[1.25fr_1fr]">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-medium text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Open to {profile.openTo.join(' & ')} roles
          </p>

          <h1 className="display text-[3.4rem] sm:text-7xl lg:text-[5.5rem]">
            <span className="text-ink">Hello!</span>
            <br />
            <span className="text-accent">I'm a {profile.role}.</span>
          </h1>

          <p className="mt-6 text-lg font-semibold text-ink">
            I'm {profile.name}
            <span className="ml-3 inline-flex items-center gap-1 text-sm font-normal text-muted">
              <FaLocationDot /> {profile.location}
            </span>
          </p>
          <p className="mt-1 font-mono text-sm text-accent">{profile.focus}</p>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{profile.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-xl bg-ink px-6 py-3 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5"
            >
              View projects
            </a>
            <IconLink href={profile.github} label="GitHub" icon={<FaGithub />} />
            <IconLink href={profile.linkedin} label="LinkedIn" icon={<FaLinkedin />} />
            <IconLink href={`mailto:${profile.email}`} label="Email" icon={<FaEnvelope />} />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[19rem] lg:max-w-sm">
          <div aria-hidden className="absolute -inset-4 -z-0 rotate-3 rounded-[2.5rem] bg-sun/70" />
          <img
            src={profile.heroImage}
            alt={profile.name}
            className="relative aspect-[6/7] w-full rounded-[2rem] object-cover object-[55%_30%] shadow-2xl"
          />
          <div className="absolute -bottom-5 -left-4 rounded-2xl border border-line bg-surface px-4 py-3 font-mono text-xs shadow-lg sm:-left-8">
            <span className="text-accent">$</span> <span className="text-ink">uvicorn app:main</span>
            <div className="text-green-600 dark:text-green-400">✓ serving on :8000</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function IconLink({ href, label, icon }) {
  return (
    <a
      href={href}
      target={href.startsWith('mailto:') ? undefined : '_blank'}
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface px-5 py-3 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
    >
      {icon} {label}
    </a>
  )
}
