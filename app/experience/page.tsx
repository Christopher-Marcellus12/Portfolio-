import Link from "next/link";
import { ArrowRight, Briefcase, CalendarDays, MapPin } from "lucide-react";
import ReactiveBackground from "../components/ReactiveBackground";

const experiences = [
  {
    title: "Software Engineering Intern",
    company: "AlphaPrimeTech",
    location: "New York, NY",
    period: "May 2024 – Aug 2024",
    summary:
      "Supported software development by improving features, debugging issues, and contributing to collaborative development workflows.",
    bullets: [
      "Built and refined application features for internal and client-facing software.",
      "Worked with team members to troubleshoot bugs and improve usability.",
      "Tested updates and supported delivery across the development cycle.",
    ],
    skills: ["React", "JavaScript", "HTML", "CSS", "Git"],
  },
  {
    title: "Code Coach",
    company: "theCoderSchool",
    location: "New York",
    period: "2024 – Present",
    summary:
      "Teach students programming through project-based lessons in game development, scripting, and core computer science concepts.",
    bullets: [
      "Guided students in building projects with Scratch, Python, Roblox Studio, and web tools.",
      "Explained loops, conditionals, functions, variables, and object-oriented programming.",
      "Adapted lessons for different age groups and skill levels.",
    ],
    skills: ["Python", "Scratch", "Roblox", "JavaScript", "Teaching"],
  },
  {
    title: "Lead Event Coordinator",
    company: "New York Party Works",
    location: "Deer Park, NY",
    period: "May 2024 – Present",
    summary:
      "Managed event coordination in fast-paced settings, strengthening leadership, communication, and organization skills.",
    bullets: [
      "Coordinated event setup and on-site execution.",
      "Worked with team members and clients to maintain smooth operations.",
      "Handled multiple responsibilities in time-sensitive environments.",
    ],
    skills: ["Leadership", "Communication", "Operations"],
  },
  {
    title: "Sales Associate",
    company: "H&M",
    location: "Garden City, NY",
    period: "Sep 2022 – Nov 2023",
    summary:
      "Provided customer support and contributed to daily store operations in a fast-moving retail environment.",
    bullets: [
      "Assisted customers with purchases and product questions.",
      "Supported store organization and day-to-day operations.",
      "Built strong teamwork and customer service skills.",
    ],
    skills: ["Customer Service", "Teamwork", "Problem Solving"],
  },
];

function SkillTag({ skill }: { skill: string }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-white/70">
      {skill}
    </span>
  );
}

export default function ExperiencePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07111f] text-white">
      <ReactiveBackground />

      <section className="relative z-10 border-b border-white/10 px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/70">
              Experience
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
              Building through software, teaching, and real-world leadership.
            </h1>
          </div>

          <div className="lg:pl-8">
            <p className="text-base leading-8 text-white/65 sm:text-lg">
              A cleaner, more modern look at the roles where I built technical skills,
              taught students, collaborated with teams, and solved problems.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-14 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl space-y-6">
          {experiences.map((job, index) => (
            <article
              key={`${job.company}-${job.title}`}
              className="grid gap-0 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-sm lg:grid-cols-[260px_1fr]"
            >
              <div className="border-b border-white/10 bg-white/[0.03] p-6 lg:border-b-0 lg:border-r lg:border-r-white/10">
                <div className="flex items-center gap-2 text-sm font-medium text-cyan-200">
                  <Briefcase className="h-4 w-4" />
                  <span>{job.company}</span>
                </div>

                <div className="mt-6 space-y-3 text-sm text-white/60">
                  <div className="flex items-start gap-2">
                    <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                    <span>{job.period}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                    <span>{job.location}</span>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <SkillTag key={skill} skill={skill} />
                  ))}
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-cyan-300/45">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-[2rem]">
                      {job.title}
                    </h2>
                  </div>
                </div>

                <p className="mt-5 max-w-3xl text-base leading-8 text-white/68">
                  {job.summary}
                </p>

                <ul className="mt-6 space-y-4 text-[15px] leading-7 text-white/78 sm:text-base">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300/80" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 px-6 pb-20 pt-4 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl rounded-[28px] border border-white/10 bg-black/30 px-6 py-8 text-white backdrop-blur-md sm:px-8 sm:py-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/60">
                Continue Exploring
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                See the projects behind the experience.
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
                Visit my projects page and resume for a deeper look at what I’ve built
                and how I approach technical work.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:translate-y-[-1px] hover:bg-cyan-200"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/resume"
                className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View Resume
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}