import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6'

export default function ProjectCard({ project }) {
  const { title, stack, metrics, bullets, image, github, live } = project

  return (
    <article className="group flex w-[86%] shrink-0 snap-start flex-col overflow-hidden rounded-3xl border border-line bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-[440px] lg:w-[calc((100%-48px)/2.15)]">
      <div className="relative aspect-[16/9] overflow-hidden bg-surface-2">
        {image ? (
          <img
            src={image}
            alt={`${title} screenshot`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <Placeholder title={title} stack={stack} />
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl leading-tight font-extrabold tracking-tight text-ink sm:text-2xl">{title}</h3>

        <div className="mt-4 flex flex-wrap gap-2">
          {metrics.map((m) => (
            <span key={m} className="rounded-lg bg-accent-soft px-2.5 py-1 text-xs font-semibold text-accent">
              {m}
            </span>
          ))}
        </div>

        <ul className="mt-5 flex-1 space-y-2.5">
          {bullets.map((b) => (
            <li key={b} className="flex gap-3 text-sm leading-relaxed text-muted">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {b}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
          {stack.map((s) => (
            <span key={s} className="rounded-md border border-line px-2 py-1 font-mono text-[11px] text-muted">
              {s}
            </span>
          ))}
        </div>

        {(github || live) && (
          <div className="mt-5 flex gap-3">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-line px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
              >
                <FaGithub /> Code
              </a>
            )}
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-ink px-4 py-2 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5"
              >
                <FaArrowUpRightFromSquare /> Live demo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}

// Shown until a screenshot is added: a faux terminal window with the stack.
function Placeholder({ title, stack }) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#1e88e5] to-[#0d2b5c] p-6">
      <div className="w-full max-w-xs rounded-xl bg-[#0b1020]/85 p-4 font-mono text-[11px] text-slate-300 shadow-2xl ring-1 ring-white/10">
        <div className="mb-3 flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <p className="truncate">
          <span className="text-[#fdd835]">❯</span> {title.split(/[—\s]/)[0].toLowerCase()} --run
        </p>
        <p className="mt-1 truncate text-slate-400">stack: [{stack.slice(0, 3).join(', ')}]</p>
        <p className="mt-1 text-[#28c840]">✓ build passing</p>
      </div>
    </div>
  )
}
