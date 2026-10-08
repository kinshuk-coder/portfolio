import { FaChessKnight, FaDumbbell, FaFutbol, FaGamepad } from 'react-icons/fa6'
import { hobbies } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const styles = {
  chess: { Icon: FaChessKnight, tile: 'bg-[#0f172a] text-white', tilt: '-rotate-2' },
  gaming: { Icon: FaGamepad, tile: 'bg-[#1e88e5] text-white', tilt: 'rotate-1' },
  gym: { Icon: FaDumbbell, tile: 'bg-[#fdd835] text-[#0f172a]', tilt: '-rotate-1' },
  football: { Icon: FaFutbol, tile: 'bg-[#16a34a] text-white', tilt: 'rotate-2' },
}

export default function Hobbies() {
  return (
    <section id="hobbies" className="bg-surface-2/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading dark="Beyond" accent="Code" subtitle="What I'm up to when I'm away from the terminal." />

        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {hobbies.map((h, i) => {
            const { Icon, tile, tilt } = styles[h.icon] ?? styles.chess
            return (
              <Reveal key={h.name} style={{ transitionDelay: `${i * 80}ms` }}>
                <div
                  className={`group flex h-full flex-col rounded-3xl p-5 sm:p-6 ${tile} ${tilt} transition-transform duration-300 hover:rotate-0 hover:-translate-y-1`}
                >
                  <Icon className="text-4xl transition-transform duration-300 group-hover:scale-110 sm:text-5xl" aria-hidden />
                  <h3 className="display mt-8 text-2xl sm:text-3xl">{h.name}</h3>
                  <p className="mt-2 text-sm leading-snug opacity-80">{h.blurb}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
