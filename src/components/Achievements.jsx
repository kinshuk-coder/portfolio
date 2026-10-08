import { FaArrowUpRightFromSquare, FaStar } from 'react-icons/fa6'
import { SiCodechef, SiLeetcode } from 'react-icons/si'
import { achievements } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const icons = { codechef: SiCodechef, leetcode: SiLeetcode }

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading dark="Competitive" accent="Coding" subtitle="Sharpening problem solving one contest at a time." />

        <div className="grid gap-5 md:grid-cols-[1.4fr_1fr]">
          {achievements.map((a, i) => {
            const Icon = icons[a.icon]
            const featured = i === 0
            return (
              <Reveal
                key={a.platform}
                style={{ transitionDelay: `${i * 100}ms` }}
                className={`relative flex flex-col overflow-hidden rounded-3xl p-7 sm:p-8 ${
                  featured ? 'bg-ink text-bg' : 'border border-line bg-surface text-ink'
                }`}
              >
                {Icon && (
                  <Icon aria-hidden className="pointer-events-none absolute -right-6 -bottom-6 text-[9rem] opacity-[0.07]" />
                )}
                <div className="flex items-center gap-3">
                  {Icon && <Icon className="text-2xl" />}
                  <span className="font-display text-lg font-extrabold">{a.platform}</span>
                </div>

                <p className="display mt-6 flex items-center gap-3 text-4xl sm:text-5xl">
                  {a.headline}
                  {featured && <FaStar className="text-3xl text-sun" />}
                </p>

                <dl className={`mt-8 grid gap-6 ${a.stats.length > 1 ? 'grid-cols-3' : 'grid-cols-1'}`}>
                  {a.stats.map((s) => (
                    <div key={s.label}>
                      <dt className={`text-xs font-medium tracking-wide uppercase ${featured ? 'opacity-60' : 'text-muted'}`}>
                        {s.label}
                      </dt>
                      <dd className={`display mt-1 text-3xl sm:text-4xl ${featured ? 'text-sun' : 'text-accent'}`}>{s.value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-auto pt-8">
                  {a.url ? (
                    <a
                      href={a.url}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline ${
                        featured ? 'text-sun' : 'text-accent'
                      }`}
                    >
                      View profile <FaArrowUpRightFromSquare className="text-xs" />
                    </a>
                  ) : (
                    <span className={`text-sm ${featured ? 'opacity-50' : 'text-muted'}`}>Profile link coming soon</span>
                  )}
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
