"use client";

import { useMemo, useState } from "react";
import ProjectsBackground from "../components/ProjectsBackground";
import CyberProjectCard from "../components/CyberProjectCard";
import CyberProjectModal from "../components/CyberProjectModal";
import type { Project } from "../types/project";

const projects: Project[] = [
  {
    title: "Angular Housing Location Website",
    description:
      "Built a housing listings site with reusable components, filtering, and a clean responsive UI.",
    stack: ["Angular", "TypeScript", "CSS"],
    status: "DEPLOYED",
  },
  {
    title: "React Native Trivia Quiz App",
    description:
      "Built a mobile trivia app using API-driven questions, score tracking, and interactive game flow.",
    stack: ["React Native", "API", "JavaScript"],
    status: "COMPLETE",
  },
  {
    title: "Personal Budget Tracker App",
    description:
      "Created a budgeting app with income and expense tracking and persistent local storage.",
    stack: ["React", "Local Storage", "JavaScript"],
    status: "COMPLETE",
  },
  {
    title: "SOC Telemetry Simulator",
    description:
      "Developed a cybersecurity lab that simulates Security Operations Center (SOC) telemetry using Wazuh SIEM and Docker containers. Implemented simulated attack logs, real-time monitoring, and log analysis to demonstrate threat detection, event correlation, and incident response workflows.",
    stack: ["Wazuh", "Docker", "SIEM", "Cybersecurity"],
    status: "SECURITY LAB",
  },
  {
    title: "Bug Tracker",
    description:
      "Developed a cybersecurity lab that simulates Security Operations Center (SOC) telemetry using Wazuh SIEM and Docker containers. Implemented simulated attack logs, real-time monitoring, and log analysis to demonstrate threat detection, event correlation, and incident response workflows.",
    stack: ["?", "?", "?", "?"],
    status: "PENDING",
  },

  // Add more projects below
];

const PROJECTS_PER_PAGE = 3;

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);

  const currentProjects = useMemo(() => {
    const start = (currentPage - 1) * PROJECTS_PER_PAGE;
    const end = start + PROJECTS_PER_PAGE;
    return projects.slice(start, end);
  }, [currentPage]);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    setSelectedProject(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <ProjectsBackground />

      <main style={styles.page}>
        <section style={styles.section}>
          <div style={styles.headerRow}>
            <p style={styles.eyebrow}>PROJECT ARCHIVE</p>
            <h1 style={styles.title}>Projects</h1>
            <p style={styles.subtitle}>
              A futuristic showcase of software, mobile, and cybersecurity work.
            </p>
          </div>

          <div style={styles.grid}>
            {currentProjects.map((project) => (
              <CyberProjectCard
                key={project.title}
                project={project}
                onOpen={() => setSelectedProject(project)}
              />
            ))}
          </div>

          {totalPages > 1 && (
            <div style={styles.paginationWrapper}>
              <button
                style={{
                  ...styles.pageButton,
                  ...(currentPage === 1 ? styles.pageButtonDisabled : {}),
                }}
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Prev
              </button>

              {Array.from({ length: totalPages }, (_, index) => {
                const page = index + 1;
                const isActive = page === currentPage;

                return (
                  <button
                    key={page}
                    style={{
                      ...styles.pageButton,
                      ...(isActive ? styles.activePageButton : {}),
                    }}
                    onClick={() => goToPage(page)}
                  >
                    {page}
                  </button>
                );
              })}

              <button
                style={{
                  ...styles.pageButton,
                  ...(currentPage === totalPages ? styles.pageButtonDisabled : {}),
                }}
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </section>
      </main>

      <CyberProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "120px 24px 60px",
    color: "white",
    position: "relative" as const,
    zIndex: 1,
  },
  section: {
    maxWidth: "1150px",
    margin: "0 auto",
  },
  headerRow: {
    marginBottom: 28,
  },
  eyebrow: {
    margin: 0,
    marginBottom: 10,
    color: "#7efdf2",
    letterSpacing: "0.28em",
    fontSize: "0.76rem",
    textTransform: "uppercase" as const,
    textShadow: "0 0 12px rgba(126,253,242,0.45)",
  },
  title: {
    fontSize: "clamp(2.4rem, 6vw, 4.4rem)",
    margin: 0,
    lineHeight: 1,
    textTransform: "uppercase" as const,
    letterSpacing: "0.04em",
    textShadow: "0 0 18px rgba(126,253,242,0.18)",
  },
  subtitle: {
    marginTop: 14,
    marginBottom: 0,
    maxWidth: 700,
    color: "rgba(255,255,255,0.75)",
    lineHeight: 1.7,
    fontSize: "1rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 20,
  },
  paginationWrapper: {
    marginTop: 32,
    display: "flex",
    flexWrap: "wrap" as const,
    justifyContent: "center",
    gap: 12,
  },
  pageButton: {
    minWidth: 48,
    padding: "12px 16px",
    border: "1px solid rgba(126, 253, 242, 0.35)",
    background: "rgba(9, 14, 28, 0.82)",
    color: "white",
    cursor: "pointer",
    textTransform: "uppercase" as const,
    letterSpacing: "0.08em",
    clipPath:
      "polygon(0 10px, 10px 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)",
    boxShadow: "0 0 12px rgba(126,253,242,0.08)",
    transition: "all 0.2s ease",
  },
  activePageButton: {
    background: "rgba(126, 253, 242, 0.18)",
    color: "#7efdf2",
    boxShadow: "0 0 18px rgba(126,253,242,0.2)",
  },
  pageButtonDisabled: {
    opacity: 0.45,
    cursor: "not-allowed",
  },
};