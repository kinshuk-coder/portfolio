import Reveal from './Reveal'

// Renders "Featured" + "Projects" as one tight two-tone word (pass `spaced` to separate them).
export default function SectionHeading({ dark, accent, subtitle, spaced = false }) {
  return (
    <Reveal className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
      <h2 className="display text-[2.75rem] sm:text-6xl md:text-7xl">
        <span className="inline-block text-ink">{dark}</span>
        {spaced && ' '}
        <span className="inline-block text-accent">{accent}</span>
      </h2>
      {subtitle && <p className="max-w-sm text-base text-muted md:text-right">{subtitle}</p>}
    </Reveal>
  )
}
