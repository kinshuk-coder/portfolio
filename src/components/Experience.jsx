import { FaBookOpen, FaBriefcase, FaGraduationCap } from 'react-icons/fa6'
import { coursework, experience } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading dark="Experience &" accent="Education" spaced subtitle="Where I've been building, and where I learned the fundamentals." />

        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          {/* timeline */}
          <ol className="relative border-l-2 border-line pl-8 sm:pl-10">
            {experience.map((e, i) => {
              const Icon = e.type === 'education' ? FaGraduationCap : FaBriefcase
              const current = /present/i.test(e.period)
              return (
                <Reveal as="li" key={e.role + e.org} style={{ transitionDelay: `${i * 80}ms` }} className="relative pb-10 last:pb-0">
                  <span
                    className={`absolute top-0 -left-[3.05rem] grid h-10 w-10 place-items-center rounded-full border-4 border-bg sm:-left-[3.55rem] ${
                      current ? 'bg-accent text-white' : 'bg-surface-2 text-ink'
                    }`}
                  >
                    <Icon className="text-sm" />
                  </span>

                  <div className="rounded-3xl border border-line bg-surface p-6 transition-shadow hover:shadow-lg sm:p-7">
                    <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                      <div className="min-w-0">
                        <h3 className="font-display text-xl leading-tight font-extrabold tracking-tight text-ink">{e.role}</h3>
                        <p className="mt-1 font-semibold text-accent">
                          {e.org}
                          {e.location && <span className="font-normal text-muted"> · {e.location}</span>}
                        </p>
                      </div>
                      {e.period && (
                        <span
                          className={`shrink-0 rounded-full px-3 py-1 font-mono text-xs font-semibold ${
                            current ? 'bg-sun text-[#0f172a]' : 'bg-surface-2 text-muted'
                          }`}
                        >
                          {e.period}
                        </span>
                      )}
                    </div>

                    <ul className="mt-4 space-y-2">
                      {e.bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-sm leading-relaxed text-muted">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {b}
                        </li>
                      ))}
                    </ul>

                    {e.tags.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {e.tags.map((t) => (
                          <span key={t} className="rounded-md border border-line px-2 py-1 font-mono text-[11px] text-muted">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Reveal>
              )
            })}
          </ol>

          {/* coursework */}
          <Reveal className="h-fit rounded-3xl bg-ink p-6 text-bg sm:p-7 lg:sticky lg:top-24">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-sun text-[#0f172a]">
                <FaBookOpen />
              </span>
              <h3 className="font-display text-lg font-extrabold">Relevant Coursework</h3>
            </div>
            <p className="mt-2 text-xs opacity-60">DeepLearning.AI &amp; Harvard</p>
            <ul className="mt-5 space-y-3">
              {coursework.map((c) => (
                <li key={c} className="flex gap-3 text-sm leading-snug">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sun" />
                  <span className="opacity-90">{c}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
