import { cv } from "@/lib/cv";
import Reveal from "@/components/Reveal";
import Tilt from "@/components/Tilt";
import ExperienceExplorer from "@/components/ExperienceExplorer";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import ReactionGame from "@/components/ReactionGame";
import ThemeToggle from "@/components/ThemeToggle";

function SectionHeading({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="space-y-1">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">{title}</h2>
      <p className="text-sm text-slate-600 dark:text-slate-400">{subtitle}</p>
      <div className="h-px w-28 bg-gradient-to-r from-sky-500/70 to-transparent" />
    </div>
  );
}

export default function HomePage() {
  const experienceCount = cv.experience.length;
  const educationCount = cv.education.length;
  const firstSentence = cv.profile.split(".")[0]?.trim();
  const profileExcerpt = firstSentence ? `${firstSentence}.` : cv.profile;

  return (
    <main className="min-h-dvh bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <p className="text-sm font-semibold tracking-wide text-slate-800 dark:text-slate-100">
            Muhammad Zain Asghar
          </p>
          <nav className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
            <a className="transition hover:text-sky-700 dark:hover:text-sky-300" href="#about">
              About
            </a>
            <a className="transition hover:text-sky-700 dark:hover:text-sky-300" href="#experience">
              Experience
            </a>
            <a className="transition hover:text-sky-700 dark:hover:text-sky-300" href="#case-studies">
              Case Studies
            </a>
            <a className="transition hover:text-sky-700 dark:hover:text-sky-300" href="#playground">
              Playground
            </a>
            <ThemeToggle />
          </nav>
        </div>
      </div>

      <div className="relative overflow-hidden" id="about">
        <div className="pointer-events-none absolute inset-0">
          <div className="grid-bg absolute inset-0" />
          <div className="absolute -top-28 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-sky-300/20 blur-3xl" />
          <div className="blob blob--1 absolute -top-24 left-6 h-72 w-72 bg-sky-200/25" />
          <div className="blob blob--2 absolute top-28 -right-10 h-80 w-80 bg-blue-100/35" />
          <div className="blob blob--3 absolute bottom-0 left-0 h-64 w-64 bg-cyan-100/35" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-14 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr,350px] lg:items-start">
            <section className="space-y-6">
              <Reveal>
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl dark:text-slate-100">
                  {cv.name}
                </h1>
              </Reveal>

              <Reveal>
                <p className="max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  {profileExcerpt}
                </p>
              </Reveal>

              <Reveal className="flex flex-wrap gap-3">
                <a
                  className="rounded-xl bg-sky-300 px-4 py-2 text-sm font-medium text-slate-900 shadow-sm transition hover:bg-sky-200 dark:bg-sky-400 dark:text-slate-950 dark:hover:bg-sky-300"
                  href={`mailto:${cv.email}`}
                >
                  Hire me
                </a>
                <a
                  className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
                  href={cv.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </Reveal>

              <Reveal>
                <div className="grid gap-3 sm:grid-cols-3">
                  <Tilt className="rounded-2xl">
                    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                      <div className="text-2xl font-semibold">{experienceCount}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">Industry Roles</div>
                    </div>
                  </Tilt>
                  <Tilt className="rounded-2xl">
                    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                      <div className="text-2xl font-semibold">{educationCount}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">Education Tracks</div>
                    </div>
                  </Tilt>
                  <Tilt className="rounded-2xl">
                    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                      <div className="text-2xl font-semibold">{cv.languages.length}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">Languages</div>
                    </div>
                  </Tilt>
                </div>
              </Reveal>
            </section>

            <aside className="self-start lg:sticky lg:top-20">
              <Reveal>
                <Tilt className="rounded-3xl">
                  <div className="h-full space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-slate-800 dark:text-slate-100">Contact</p>
                      <p className="text-sm text-slate-600 dark:text-slate-300">{cv.location}</p>
                    </div>

                    <div className="grid gap-2">
                      <a
                        className="group flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm transition hover:border-sky-300 dark:border-slate-700 dark:bg-slate-950 dark:hover:border-sky-500"
                        href={`mailto:${cv.email}`}
                      >
                        <span className="text-slate-700 dark:text-slate-200">{cv.email}</span>
                        <span className="text-slate-400 transition group-hover:text-sky-700 dark:group-hover:text-sky-300">
                          →
                        </span>
                      </a>
                      <a
                        className="group flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm transition hover:border-sky-300 dark:border-slate-700 dark:bg-slate-950 dark:hover:border-sky-500"
                        href={`tel:${cv.phone}`}
                      >
                        <span className="text-slate-700 dark:text-slate-200">{cv.phone}</span>
                        <span className="text-slate-400 transition group-hover:text-sky-700 dark:group-hover:text-sky-300">
                          →
                        </span>
                      </a>
                      <a
                        className="group flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm transition hover:border-sky-300 dark:border-slate-700 dark:bg-slate-950 dark:hover:border-sky-500"
                        href={cv.linkedinUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="text-slate-700 dark:text-slate-200">
                          linkedin.com/in/zainasgh4r
                        </span>
                        <span className="text-slate-400 transition group-hover:text-sky-700 dark:group-hover:text-sky-300">
                          →
                        </span>
                      </a>
                    </div>

                    <a
                      className="inline-flex w-full items-center justify-center rounded-lg border border-sky-300 bg-sky-50 px-4 py-2 text-sm font-medium text-sky-700 hover:bg-sky-100 dark:border-sky-600 dark:bg-sky-950/40 dark:text-sky-200 dark:hover:bg-sky-900/50"
                      href="/cv.png"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open CV
                    </a>
                  </div>
                </Tilt>
              </Reveal>
            </aside>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl space-y-16 px-6 pb-20">
        <section className="space-y-5">
          <Reveal>
            <SectionHeading
              title="Professional Summary"
              subtitle="Built from your CV in a clean recruiter-first format."
            />
          </Reveal>
          <Reveal>
            <Tilt className="rounded-3xl">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                <p className="text-slate-700 leading-relaxed dark:text-slate-300">{cv.profile}</p>
              </div>
            </Tilt>
          </Reveal>
        </section>

        <section id="experience" className="space-y-5">
          <Reveal>
            <SectionHeading
              title="Experience Explorer"
              subtitle="Interactive timeline — click a company to inspect responsibilities."
            />
          </Reveal>
          <Reveal>
            <ExperienceExplorer items={cv.experience} />
          </Reveal>
        </section>

        <section className="space-y-5">
          <Reveal>
            <SectionHeading
              title="Education"
              subtitle="Academic history and institutions."
            />
          </Reveal>
          <Reveal>
            <div className="grid gap-4 md:grid-cols-2">
              {cv.education.map((e) => (
                <Tilt key={`${e.range}-${e.degree}`} className="rounded-2xl">
                  <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                    <p className="text-xs text-slate-500 dark:text-slate-400">{e.range}</p>
                    <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
                      {e.degree}
                    </h3>
                    <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">{e.location}</p>
                    <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{e.institution}</p>
                  </article>
                </Tilt>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="space-y-5">
          <Reveal>
            <SectionHeading
              title="Skills Snapshot"
              subtitle="Core stack and tools used in recent roles."
            />
          </Reveal>
          <Reveal>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <div className="flex flex-wrap gap-2 text-sm text-slate-700 dark:text-slate-300">
                {[
                  "React",
                  "Next.js",
                  "Node.js",
                  "Express.js",
                  "NestJS",
                  "MongoDB",
                  "PostgreSQL",
                  "TypeScript",
                  "Vue.js",
                  "React Native",
                  "Puppeteer",
                  "REST APIs",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 dark:border-slate-700 dark:bg-slate-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section id="case-studies" className="space-y-5">
          <Reveal>
            <SectionHeading
              title="Featured Case Studies"
              subtitle="Structured as problem, solution, and impact — the format recruiters scan fastest."
            />
          </Reveal>
          <Reveal>
            <ProjectsShowcase projects={cv.projects} />
          </Reveal>
        </section>

        <section id="playground" className="space-y-5">
          <Reveal>
            <SectionHeading
              title="Interactive Playground"
              subtitle="A mini-game visitors can play directly on your portfolio."
            />
          </Reveal>
          <Reveal>
            <ReactionGame />
          </Reveal>
        </section>

        <section className="space-y-5">
          <Reveal>
            <SectionHeading
              title="Languages & Interests"
              subtitle="Quick personal snapshot."
            />
          </Reveal>
          <Reveal>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                <p className="text-sm font-medium text-slate-800 dark:text-slate-100">Languages</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {cv.languages.map((l) => (
                    <span
                      key={l.label}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                    >
                      {l.label}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                <p className="text-sm font-medium text-slate-800 dark:text-slate-100">Interests</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {cv.interests.map((i) => (
                    <span
                      key={i.label}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                    >
                      {i.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    </main>
  );
}

