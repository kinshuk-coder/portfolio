import { FaBrain, FaCubes, FaDatabase, FaMagnifyingGlass, FaMicrochip, FaNetworkWired, FaRobot, FaSitemap } from 'react-icons/fa6'
import {
  SiCplusplus,
  SiDocker,
  SiFastapi,
  SiGit,
  SiHuggingface,
  SiLangchain,
  SiMongodb,
  SiPytest,
  SiPython,
  SiRender,
  SiSqlite,
  SiUv,
  SiVercel,
} from 'react-icons/si'
import { skills } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const icons = {
  python: SiPython,
  cpp: SiCplusplus,
  fastapi: SiFastapi,
  docker: SiDocker,
  mongodb: SiMongodb,
  git: SiGit,
  sqlite: SiSqlite,
  pytest: SiPytest,
  uv: SiUv,
  vercel: SiVercel,
  render: SiRender,
  llm: FaBrain,
  langchain: SiLangchain,
  huggingface: SiHuggingface,
  rag: FaMagnifyingGlass,
  agent: FaRobot,
  dsa: FaSitemap,
  oops: FaCubes,
  os: FaMicrochip,
  dbms: FaDatabase,
  network: FaNetworkWired,
}

export default function Skills() {
  return (
    <section id="skills" className="bg-surface-2/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading dark="Tech" accent="Stack" subtitle="The languages, tools and fundamentals I reach for every day." />

        <div className="grid gap-5 md:grid-cols-2">
          {skills.map((group, i) => (
            <Reveal
              key={group.group}
              style={{ transitionDelay: `${(i % 2) * 80}ms` }}
              className="rounded-3xl border border-line bg-surface p-6 sm:p-7"
            >
              <div className="mb-5 flex items-center justify-between">
                <h3 className="font-display text-lg font-extrabold tracking-tight text-ink">{group.group}</h3>
                <span className="font-mono text-xs text-muted">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => {
                  const Icon = icons[item.icon]
                  return (
                    <li
                      key={item.name}
                      className="inline-flex items-center gap-2 rounded-xl border border-line bg-bg px-3 py-2 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
                    >
                      {Icon ? (
                        <Icon className="text-base text-accent" aria-hidden />
                      ) : (
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                      )}
                      {item.name}
                    </li>
                  )
                })}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
