import ParticlesBackground from "./components/ParticlesBackground";
import {
  FaReact,
  FaAngular,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  
} from "react-icons/fa";
import { FaPython, FaJava } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";


import { SiJavascript, SiTypescript, SiMongodb, SiTailwindcss } from "react-icons/si";

import AppleScrollHero from "./components/AppleScrollHero";




const projects = [
  {
    title: "Angular Housing Location Website",
    stack: ["Angular", "TypeScript", "HTML/CSS"],
    description:
      "Built a housing listings site with clean UI, reusable components, and filtering/search to quickly find locations.",
    highlights: [
      "Component-based architecture",
      "Filtering + responsive layout",
      "Clean routing and UI structure",
    ],
    links: {
      demo: "https://christopher-marcellus12.github.io/Angular-app/", // put your live link here
      github: "https://github.com/Christopher-Marcellus12/Angular-app", // put your repo link here
    },
  },
  {
    title: "React Native Trivia Quiz App (API)",
    stack: ["React Native", "JavaScript", "REST API"],
    description:
      "Mobile trivia app that pulls questions from an API, tracks score, and provides instant feedback with smooth UX.",
    highlights: [
      "API-driven questions",
      "Score tracking + game flow",
      "Mobile-first UI",
    ],
    links: {
      demo: "#",
      github: "https://github.com/Christopher-Marcellus12/Quiz-React",
    },
  },
    {
    title: "Personal Budget Tracker App",
    stack: ["JavaScript", "HTML/CSS", "Local Storage"],
    description:
      "Built a personal finance app that allows users to track income and expenses, view balances, and manage spending over time.",
    highlights: [
      "Add, edit, and delete income & expense entries",
      "Persistent data storage using browser local storage",
      "Real-time balance and category breakdown",
    ],
    links: {
      demo: "#", // add live link if hosted
      github: "https://github.com/Christopher-Marcellus12/budget-app", // replace if different
    },
  },

];

export default function Home() {
  return (
    <>
      <ParticlesBackground />

      <main style={styles.page}>
        <AppleScrollHero />

        {/* HERO
        <section style={styles.hero}>
          <h1 style={styles.h1}>Christopher Marcellus</h1>

          <p style={styles.sub}>
            Full-Stack Developer • Building clean, modern web apps & interactive
            experiences
          </p>

          <div style={styles.heroBtns}>
            <a
              href="/Christopher-Marcellus-Resume (CV).pdf"
              style={{ ...styles.btn, ...styles.btnSolid }}
              download
            >
              Download Resume →
            </a>

            <a href="#projects" style={{ ...styles.btn, ...styles.btnSolid }}>
              View Projects
            </a>
            <a href="#contact" style={{ ...styles.btn, ...styles.btnGhost }}>
              Contact
            </a>
          </div>
        </section> */}

                {/* ABOUT ME */}
        <section style={styles.section}>
          <h2 style={styles.h2}>About Me</h2>

          <div style={styles.card}>
            <p style={{ ...styles.desc, marginBottom: 10 }}>
              I’m a graduate of Hofstra University with a Bachelor’s degree in
              Computer Science and hands-on experience building modern web and
              mobile applications. I enjoy creating clean, user-focused
              interfaces backed by solid logic and real-world functionality.
            </p>

            <p style={styles.desc}>
              My background spans frontend frameworks like React, Next.js, and
              Angular, along with APIs, databases, and cybersecurity
              fundamentals. I’m especially interested in building secure,
              scalable software and continuing to grow as a full-stack
              developer.
            </p>
          </div>
        </section>

                {/* EXPERIENCE */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Experience</h2>

          {/* AlphaPrimeTech */}
          <div style={styles.card}>
            <h3 style={styles.h3}>
              Software Engineering Intern — AlphaPrimeTech
            </h3>

            <p style={styles.desc}>
              New York, NY • Summer 2024
            </p>

            <ul style={styles.ul}>
              <li style={styles.li}>
                Collaborated on software development tasks involving frontend
                and backend components in a professional engineering environment.
              </li>
              <li style={styles.li}>
                Assisted with debugging, feature implementation, and improving
                application functionality.
              </li>
              <li style={styles.li}>
                Gained experience working with real-world codebases, version
                control, and team-based development workflows.
              </li>
            </ul>
          </div>

          {/* TheCoderSchool */}
          <div style={{ ...styles.card, marginTop: 14 }}>
            <h3 style={styles.h3}>
              Code Coach — TheCoderSchool
            </h3>

            <p style={styles.desc}>
              Teaching & Mentorship Role
            </p>

            <ul style={styles.ul}>
              <li style={styles.li}>
                Taught students programming fundamentals using Python, Scratch,
                Roblox Lua, Java, and web technologies.
              </li>
              <li style={styles.li}>
                Designed interactive projects and games to reinforce concepts
                such as loops, functions, classes, and problem-solving.
              </li>
              <li style={styles.li}>
                Mentored students one-on-one and in small groups, adapting
                lessons to different learning styles and skill levels.
              </li>
            </ul>
          </div>
        </section>


        {/* PROJECTS */}
        <section id="projects" style={styles.section}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.h2}>Projects</h2>
            <p style={styles.sectionSub}>
              A few projects that show my skills across web, mobile, and
              algorithms.
            </p>
          </div>

          <div style={styles.grid}>
            {projects.map((p) => (
              <article key={p.title} style={styles.card}>
                <div style={styles.cardTop}>
                  <h3 style={styles.h3}>{p.title}</h3>
                  <div style={styles.stackRow}>
                    {p.stack.map((s) => (
                      <span key={s} style={styles.pill}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <p style={styles.desc}>{p.description}</p>

                <ul style={styles.ul}>
                  {p.highlights.map((h) => (
                    <li key={h} style={styles.li}>
                      {h}
                    </li>
                  ))}
                </ul>

                <div style={styles.linksRow}>
                  <a style={styles.link} href={p.links.github}>
                    GitHub →
                  </a>
                  {/* <a style={styles.link} href={p.links.demo}>
                    Live Demo →
                  </a> */}
                </div>
              </article>
            ))}
          </div>
        </section>

                {/* SKILLS */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Skills</h2>
          <p style={styles.sectionSub}>
            Technologies and tools I’ve used across projects, coursework, and certifications.
          </p>

          <div style={{ ...styles.grid, marginTop: 14 }}>
            {/* Frontend */}
            <div style={styles.card}>
              <h3 style={styles.h3}>Frontend</h3>
              <ul style={styles.ul}>
                <li style={styles.li}>React & Next.js</li>
                <li style={styles.li}>Angular</li>
                <li style={styles.li}>HTML, CSS, Tailwind CSS</li>
                <li style={styles.li}>Responsive UI & component-based design</li>
              </ul>
            </div>

            {/* Backend */}
            <div style={styles.card}>
              <h3 style={styles.h3}>Backend</h3>
              <ul style={styles.ul}>
                <li style={styles.li}>Node.js & Express</li>
                <li style={styles.li}>REST APIs</li>
                <li style={styles.li}>Server-side routing & logic</li>
              </ul>
            </div>

            {/* Databases */}
            <div style={styles.card}>
              <h3 style={styles.h3}>Databases</h3>
              <ul style={styles.ul}>
                <li style={styles.li}>MongoDB</li>
                <li style={styles.li}>SQL</li>
                <li style={styles.li}>Local Storage (client-side persistence)</li>
                <li style={styles.li}>Python Flask</li>

              </ul>
            </div>

            {/* Programming */}
            <div style={styles.card}>
              <h3 style={styles.h3}>Programming</h3>
              <ul style={styles.ul}>
                <li style={styles.li}>JavaScript (ES6+)</li>
                <li style={styles.li}>TypeScript</li>
                <li style={styles.li}>Java</li>
                <li style={styles.li}>Object-Oriented Programming (OOP)</li>
              </ul>
            </div>

            {/* Cybersecurity */}
            <div style={styles.card}>
              <h3 style={styles.h3}>Cybersecurity</h3>
              <ul style={styles.ul}>
                <li style={styles.li}>Security fundamentals & risk management</li>
                <li style={styles.li}>Linux & command-line basics</li>
                <li style={styles.li}>SIEM concepts & incident response</li>
              </ul>
            </div>

            {/* Tools */}
            <div  style={styles.card}>
              <h3 style={styles.h3}>Tools</h3>
              <ul style={styles.ul}>
                <li style={styles.li}>Git & GitHub</li>
                <li style={styles.li}>VS Code</li>
                <li style={styles.li}>npm & package management</li>
              </ul>
            </div>
          </div>
        </section>

                            {/* TECH STACK */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Tech Stack</h2>
          <p style={styles.sectionSub}>
            Technologies I’ve used across projects, coursework, and professional experience.
          </p>

          {/* Frameworks & Tools */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: 14,
              marginTop: 14,
            }}
          >
            <div className="icon-hover" style={styles.iconCard} title="Frontend library used for building interactive UIs">
              <FaReact size={32} />
              <span>React</span>
            </div>

            <div className="icon-hover" style={styles.iconCard} title="Framework used for structured, component-based web apps">
              <FaAngular size={32} />
              <span>Angular</span>
            </div>

            <div className="icon-hover" style={styles.iconCard} title="JavaScript runtime used for backend development">
              <FaNodeJs size={32} />
              <span>Node.js</span>
            </div>

            <div className="icon-hover" style={styles.iconCard} title="Utility-first CSS framework for rapid UI development">
              <SiTailwindcss size={32} />
              <span>Tailwind</span>
            </div>

            <div className="icon-hover" style={styles.iconCard} title="NoSQL database used for storing application data">
              <SiMongodb size={32} />
              <span>MongoDB</span>
            </div>

            <div className="icon-hover" style={styles.iconCard} title="Version control for managing and tracking code changes">
              <FaGitAlt size={32} />
              <span>Git</span>
            </div>

            <div className="icon-hover" style={styles.iconCard} title="Code hosting and collaboration platform">
              <FaGithub size={32} />
              <span>GitHub</span>
            </div>

            <div className="icon-hover" style={styles.iconCard} title="Markup language for structuring web pages">
              <FaHtml5 size={32} />
              <span>HTML</span>
            </div>

            <div className="icon-hover" style={styles.iconCard} title="Styling language for responsive layouts and design">
              <FaCss3Alt size={32} />
              <span>CSS</span>
            </div>
          </div>

          {/* Languages */}
          <h3 style={{ ...styles.h3, marginTop: 28 }}>Languages</h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: 14,
              marginTop: 14,
            }}
          >
            <div
              className="icon-hover"
              style={styles.iconCard}
              title="Used for full-stack development, APIs, and web applications"
            >
              <SiJavascript size={32} />
              <span>JavaScript</span>
            </div>

            <div
              className="icon-hover"
              style={styles.iconCard}
              title="Used for type-safe frontend and scalable applications"
            >
              <SiTypescript size={32} />
              <span>TypeScript</span>
            </div>

            <div
              className="icon-hover"
              style={styles.iconCard}
              title="Used for scripting, automation, and computer science coursework"
            >
              <FaPython size={32} />
              <span>Python</span>
            </div>

            <div
              className="icon-hover"
              style={styles.iconCard}
              title="Used for object-oriented programming, algorithms, and data structures"
            >
              <FaJava size={32} />
              <span>Java</span>
            </div>

            <div
              className="icon-hover"
              style={styles.iconCard}
              title="Used for algorithms, performance-focused programming, and coursework"
            >
              <SiCplusplus size={32} />
              <span>C++</span>
            </div>
          </div>
        </section>



        {/* CERTIFICATIONS */}
<section style={styles.section}>
  <h2 style={styles.h2}>Certifications</h2>

  {/* Google Cybersecurity */}
  <div style={styles.card}>
    <h3 style={styles.h3}>
      Google Cybersecurity Professional Certificate
    </h3>
            <a
  href="https://www.coursera.org/account/accomplishments/professional-cert/certificate/1FM4O11UPW4W"
  target="_blank"
  rel="noreferrer"
  style={styles.link}
>
  View Credential →
</a>

    <p style={styles.desc}>
      Issued by Google via Coursera
    </p>

    <ul style={styles.ul}>
      <li style={styles.li}>Security fundamentals & risk management</li>
      <li style={styles.li}>Network security, Linux, and SQL</li>
      <li style={styles.li}>SIEM tools, incident response, and threat analysis</li>
    </ul>
  </div>

  {/* W3Schools */}
  <div style={{ ...styles.card, marginTop: 14 }}>
    <h3 style={styles.h3}>
      Cyber Security Certifications
    </h3>
            <a
  href="https://verify.w3schools.com/1P2ORQ0GE0"
  target="_blank"
  rel="noreferrer"
  style={styles.link}
>
  View Credential →
</a>

    <p style={styles.desc}>
      Issued by W3Schools
    </p>

    <ul style={styles.ul}>
      <li style={styles.li}>HTML & CSS fundamentals</li>
      <li style={styles.li}>JavaScript programming</li>
      <li style={styles.li}>SQL & database basics</li>
      <li style={styles.li}>Web accessibility & best practices</li>
    </ul>
  </div>
</section>



        {/* CONTACT */}
        <section id="contact" style={styles.section}>
          <h2 style={styles.h2}>Contact</h2>
          <p style={styles.sectionSub}>
            Email: <a style={styles.linkInline} href="mailto:Christopherjm625@email.com">Christopherjm625@email.com</a>
          </p>
        </section>
      </main>
    </>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    padding: "48px 22px 80px",
    maxWidth: 1100,
    margin: "0 auto",
    color: "rgba(255,255,255,0.92)",
  },
  hero: {
    padding: "70px 22px",
    borderRadius: 22,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
    backdropFilter: "blur(14px)",
  },
  h1: { margin: 0, fontSize: "clamp(34px, 4vw, 54px)", fontWeight: 800 },
  sub: { marginTop: 12, maxWidth: 720, opacity: 0.8, lineHeight: 1.6 },
  heroBtns: { marginTop: 18, display: "flex", gap: 12, flexWrap: "wrap" },
  btn: {
    padding: "12px 14px",
    borderRadius: 16,
    textDecoration: "none",
    border: "1px solid rgba(255,255,255,0.14)",
  },
  btnSolid: { background: "rgba(255,255,255,0.14)", color: "white" },
  btnGhost: { background: "transparent", color: "rgba(255,255,255,0.9)" },

  section: { marginTop: 22 },
  sectionHeader: { marginBottom: 14 },
  h2: { margin: "0 0 6px 0", fontSize: 26 },
  sectionSub: { margin: 0, opacity: 0.75, lineHeight: 1.6 },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 14,
  },
  card: {
    padding: 18,
    borderRadius: 22,
    background: "rgba(0,0,0,0.24)",
    border: "1px solid rgba(255,255,255,0.12)",
    backdropFilter: "blur(14px)",
    display: "flex",
    flexDirection: "column",
    minHeight: 260,
  },
  cardTop: { marginBottom: 10 },
  h3: { margin: 0, fontSize: 18, lineHeight: 1.3 },
  stackRow: { marginTop: 10, display: "flex", gap: 8, flexWrap: "wrap" },
  pill: {
    fontSize: 12,
    padding: "6px 10px",
    borderRadius: 999,
    background: "rgba(255,255,255,0.10)",
    border: "1px solid rgba(255,255,255,0.12)",
  },
  desc: { margin: "10px 0 10px", opacity: 0.85, lineHeight: 1.6 },

  ul: { margin: "0 0 14px", paddingLeft: 18, opacity: 0.82 },
  li: { marginBottom: 6 },

  linksRow: {
    marginTop: "auto",
    display: "flex",
    justifyContent: "space-between",
    gap: 10,
  },
  link: {
    color: "rgba(255,255,255,0.9)",
    textDecoration: "none",
    opacity: 0.9,
  },
  linkInline: { color: "rgba(255,255,255,0.95)" },
     iconCard: {
    padding: 18,
    borderRadius: 22,
    background: "rgba(0,0,0,0.24)",
    border: "1px solid rgba(255,255,255,0.12)",
    backdropFilter: "blur(14px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    minHeight: 140,
    textAlign: "center",
    color: "rgba(255,255,255,0.92)",
    transition: "transform 0.25s ease, box-shadow 0.25s ease, border 0.25s ease",
  },

  
};
