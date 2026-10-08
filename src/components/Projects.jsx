import { useEffect, useMemo, useRef, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'
import { projects } from '../data/portfolio'
import ProjectCard from './ProjectCard'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function Projects() {
  const categories = useMemo(() => [...new Set(projects.map((p) => p.category))], [])
  const [filter, setFilter] = useState('All')
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)
  const track = useRef(null)

  const visible = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  const updateEdges = () => {
    const el = track.current
    if (!el) return
    setAtStart(el.scrollLeft <= 4)
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4)
  }

  useEffect(() => {
    track.current?.scrollTo({ left: 0 })
    updateEdges()
    window.addEventListener('resize', updateEdges)
    return () => window.removeEventListener('resize', updateEdges)
  }, [filter])

  const scrollBy = (dir) => {
    const el = track.current
    const card = el?.querySelector('article')
    if (!card) return
    el.scrollBy({ left: dir * (card.offsetWidth + 24), behavior: 'smooth' })
  }

  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading dark="Featured" accent="Projects" subtitle="Swipe through some of the systems I've designed, measured and shipped." />

        <Reveal className="mb-6 flex flex-wrap items-center justify-between gap-4">
          {categories.length > 1 ? (
            <div className="flex gap-2" role="tablist">
              {['All', ...categories].map((c) => (
                <button
                  key={c}
                  role="tab"
                  aria-selected={filter === c}
                  onClick={() => setFilter(c)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    filter === c ? 'bg-ink text-bg' : 'border border-line bg-surface text-muted hover:text-ink'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          ) : (
            <span className="text-sm font-medium text-muted">
              {projects.length} projects · {categories[0]}
            </span>
          )}

          <div className="flex gap-2">
            <ArrowButton onClick={() => scrollBy(-1)} disabled={atStart} label="Previous project">
              <FaArrowLeft />
            </ArrowButton>
            <ArrowButton onClick={() => scrollBy(1)} disabled={atEnd} label="Next project">
              <FaArrowRight />
            </ArrowButton>
          </div>
        </Reveal>

        <Reveal>
          <div
            ref={track}
            onScroll={updateEdges}
            className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-px-4 px-4 pb-6 sm:-mx-6 sm:scroll-px-6 sm:px-6"
          >
            {visible.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function ArrowButton({ onClick, disabled, label, children }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className="grid h-11 w-11 place-items-center rounded-full border border-line bg-surface text-ink transition-all hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-line disabled:hover:text-ink"
    >
      {children}
    </button>
  )
}
