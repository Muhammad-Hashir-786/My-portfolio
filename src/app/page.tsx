import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/reveal";
import Navbar from "@/components/navbar";
import ContactForm from "@/components/contacts";

const skills = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
  "MongoDB", "Tailwind CSS", "REST APIs", "Git",
];

const projects = [
  {
    title: "WorkNest",
    description: "A multitenant Saas web app that allow user to create their own workspace and manage their team members, projects, tasks and more.",
    tags: ["Next.js", "MongoDB"],
    liveUrl: "https://worknest-silverloft.vercel.app/",
    repoUrl: "https://github.com/your-username/project-one",
  },
  {
    title: "We-Sale",
    description: "A modern e-commerce platform built with React and Tailwind CSS.",
    tags: ["React", "Tailwind"],
    liveUrl: "https://we-sale.vercel.app/",
    repoUrl: "https://github.com/your-username/project-two",
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white [background:radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(239,68,68,0.12),transparent)]">
      <Navbar />
      {/* Hero */}
      <section id="home" className="mx-auto my-24 flex max-w-5xl flex-col items-center justify-center gap-10 px-6 py-24">
        <Reveal>
          <div className="relative flex items-center justify-center">
            <div className="absolute h-[22rem] w-[22rem] rounded-full bg-red-600/25 blur-3xl motion-safe:animate-[glow-pulse_4s_ease-in-out_infinite] sm:h-[24rem] sm:w-[24rem]" />
            <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-red-500/70 bg-zinc-900 shadow-[0_0_40px_rgba(239,68,68,0.35)] motion-safe:animate-[float-slow_6s_ease-in-out_infinite] sm:h-80 sm:w-80">
              <Image
                src="/hashir.png"
                alt="Muhammad Hashir portrait"
                width={500}
                height={500}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Reveal>

        <div className="flex max-w-2xl flex-col items-center text-center">
          <Reveal delay={100}>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-zinc-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
              </span>
              Available for freelance work
            </span>
          </Reveal>

          <Reveal delay={150}>
            <p className="mb-3 font-mono text-sm font-medium uppercase tracking-[0.25em] text-red-500">
              FULL STACK MERN DEVELEPOR
            </p>
          </Reveal>

          <Reveal delay={250}>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Muhammad Hashir
            </h1>
          </Reveal>

          <Reveal delay={350}>
            <h2 className="mt-4 text-lg text-zinc-300 sm:text-xl">
              Building fully responsive and functional websites &amp; web apps.
            </h2>
          </Reveal>

          <Reveal delay={450}>
            <p className="mt-5 text-base leading-7 text-zinc-400">
              I design and build complete web applications — from data models and APIs
              to the interfaces people use — as a full-stack developer and Co-Founder
              of SilverLoft. Currently studying Software Engineering at COMSATS
              University Islamabad.
            </p>
          </Reveal>

          <Reveal delay={550}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#projects"
                className="rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-red-500 active:scale-95"
              >
                View Projects
              </a>
              <a
                href="mailto:your.email@example.com"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:border-white/40 hover:bg-white/5 active:scale-95"
              >
                Get in Touch
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-t border-white/10 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h3 className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
              Tech Stack
            </h3>
          </Reveal>
          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <Reveal key={skill} delay={i * 60}>
                <span className="inline-block rounded-full border border-white/10 bg-zinc-900 px-4 py-2 text-sm text-zinc-300 transition-colors duration-200 hover:border-red-500/40 hover:text-white">
                  {skill}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-t border-white/10 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h3 className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
              Projects
            </h3>
          </Reveal>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal key={project.title} delay={i * 120}>
                <div className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-zinc-950 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]">
                  <div>
                    <h4 className="text-lg font-semibold">{project.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      className="rounded-full bg-red-600 px-4 py-2 text-xs font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-red-500 active:scale-95"
                    >
                      View Project
                    </Link>
                    <Link
                      href={project.repoUrl}
                      target="_blank"
                      className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white transition-all duration-200 hover:scale-105 hover:border-white/40 hover:bg-white/5 active:scale-95"
                    >
                      Source Code
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* Contact */}
      <footer id="contact" className="border-t border-white/10 px-6 py-16 text-center">
        <Reveal>
          <h3 className="text-2xl font-bold">Let&apos;s work together</h3>
          <p className="mt-3 text-zinc-400">
            Open to freelance work and new opportunities.
          </p>

          <ContactForm />

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:pablotraveler786@gmail.com"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:border-white/40 hover:bg-white/5 active:scale-95"
            >
              Email Me
            </a>
            <a
              href="https://github.com/Muhammad-Hashir-786"
              target="_blank"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:border-white/40 hover:bg-white/5 active:scale-95"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-hashir-3a3a80412/"
              target="_blank"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:border-white/40 hover:bg-white/5 active:scale-95"
            >
              LinkedIn
            </a>
          </div>
        </Reveal >
      </footer >
    </main >
  );
}