
import ProjectsBackground from "../components/ProjectsBackground";
const projects = [
  {
    title: "Angular Housing Location Website",
    description:
      "Built a housing listings site with reusable components, filtering, and a clean responsive UI.",
  },
  {
    title: "React Native Trivia Quiz App",
    description:
      "Built a mobile trivia app using API-driven questions, score tracking, and interactive game flow.",
  },
  {
    title: "Personal Budget Tracker App",
    description:
      "Created a budgeting app with income and expense tracking and persistent local storage.",
  },
  {
  title: "SOC Telemetry Simulator",
  description:
    "Developed a cybersecurity lab that simulates Security Operations Center (SOC) telemetry using Wazuh SIEM and Docker containers. Implemented simulated attack logs, real-time monitoring, and log analysis to demonstrate threat detection, event correlation, and incident response workflows."
},
];

export default function ProjectsPage() {
  return (
    <>
      <ProjectsBackground />
      <main style={styles.page}>
        <section style={styles.section}>
          <h1 style={styles.title}>Projects</h1>

          <div style={styles.grid}>
            {projects.map((project) => (
              <div key={project.title} style={styles.card}>
                <h2 style={styles.cardTitle}>{project.title}</h2>
                <p style={styles.cardText}>{project.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
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
    maxWidth: "1100px",
    margin: "0 auto",
  },
  title: {
    fontSize: "clamp(2.2rem, 5vw, 4rem)",
    marginBottom: 24,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 16,
  },
  card: {
  padding: 20,
  borderRadius: 20,
  background: "rgba(15, 23, 42, 0.72)",
  border: "1px solid rgba(148, 163, 184, 0.18)",
  backdropFilter: "blur(10px)",
  boxShadow: "0 10px 30px rgba(0,0,0,0.28)",
},
  cardTitle: {
    marginTop: 0,
    marginBottom: 12,
    fontSize: "1.25rem",
  },
  cardText: {
    margin: 0,
    lineHeight: 1.7,
    opacity: 0.9,
  },
};