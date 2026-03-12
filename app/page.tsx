
"use client";
import { useState } from "react";
import MatrixRainBackground from "./components/MatrixBackground";
import NameScramble from "./components/NameScramble";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Cursor from "./components/Cursor";

export default function Home() {
  const [showResumes, setShowResumes] = useState(false);

  return (
    <>
      <MatrixRainBackground />
      <Cursor />

      <main style={styles.page}>
        <section style={styles.hero}>
          <p style={styles.eyebrow}>
            COMPUTER SCIENCE • CYBERSECURITY • SOFTWARE DEVELOPMENT
          </p>

            <NameScramble />
          
          <p style={styles.subtitle}>
  Computer Science and Cybersecurity graduate from Hofstra University
  building modern web apps, secure systems, and polished user
  experiences.
</p>
<div style={styles.resumeSection}>
  <button
  onClick={() => setShowResumes(!showResumes)}
  style={styles.resumeToggle}
  className="resume-toggle"
>
  View Resumes
</button>

  {showResumes && (
    <div className={`resume-split ${showResumes ? "open" : ""}`}>
      <a
        href="Christopher-Marcellus-Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.resumeButton}
        className="resume-button left"
      >
        Software Engineering
      </a>

      <a
        href="/resumes/cybersecurity-resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.resumeButton}
        className="resume-button right"
      >
        Cybersecurity
      </a>
    </div>
  )}
</div>

<div style={styles.socials}>

  <a
    href="https://github.com/Christopher-marcellus12"
    target="_blank"
    rel="noopener noreferrer"
    style={styles.iconButton}
  >
    <FaGithub />
  </a>

  <a
    href="https://www.linkedin.com/in/christopher-marcellus/"
    target="_blank"
    rel="noopener noreferrer"
    style={styles.iconButton}
  >
    <FaLinkedin />
  </a>

</div>
        </section>
      </main>
    </>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 24px",
    color: "white",
    position: "relative" as const,
    zIndex: 1,
  },
  hero: {
    textAlign: "center" as const,
    maxWidth: "1200px",
  },
  eyebrow: {
    margin: "0 0 18px 0",
    fontSize: "clamp(0.9rem, 1.4vw, 1.4rem)",
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    opacity: 0.75,
  },
  title: {
    margin: "0 0 20px 0",
    fontSize: "clamp(3.2rem, 9vw, 8rem)",
    lineHeight: 1,
    fontWeight: 800,
  },
  subtitle: {
    margin: "0 auto",
    maxWidth: "1100px",
    fontSize: "clamp(1.2rem, 2.1vw, 2.3rem)",
    lineHeight: 1.6,
    opacity: 0.9,
  },
 socials: {
  marginTop: 45,
  display: "flex",
  justifyContent: "center",
  gap: 28,
},

iconButton: {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.8rem",

  width: 55,
  height: 55,

  borderRadius: "50%",

  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.15)",

  backdropFilter: "blur(10px)",

  color: "white",

  transition: "all 0.25s ease",
},
resumeSection: {
  marginTop: 28,
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  gap: 16,
},

resumeToggle: {
  padding: "12px 22px",
  borderRadius: 999,
  border: "1px solid rgba(255,255,255,0.14)",
  background: "rgba(255,255,255,0.08)",
  color: "white",
  fontSize: "1rem",
  fontWeight: 600,
  cursor: "pointer",
  backdropFilter: "blur(10px)",
  transition: "all 0.25s ease",
},

resumeButtons: {
  display: "flex",
  gap: 14,
  flexWrap: "wrap" as const,
  justifyContent: "center",
},

resumeButton: {
  padding: "12px 18px",
  borderRadius: 999,
  border: "1px solid rgba(0,255,120,0.28)",
  background: "rgba(0,0,0,0.35)",
  color: "white",
  textDecoration: "none",
  fontWeight: 600,
  backdropFilter: "blur(10px)",
  transition: "all 0.25s ease",
},
resumeDropdown: {
  display: "flex",
  gap: 14,
  flexWrap: "wrap" as const,
  justifyContent: "center",
  overflow: "hidden",
},
  
};