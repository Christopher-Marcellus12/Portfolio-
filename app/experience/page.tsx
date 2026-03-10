import MatrixBackground from "../components/MatrixBackground";

export default function ExperiencePage() {
  return (
    <>
      <MatrixBackground />
      <main style={styles.page}>
        <section style={styles.section}>
          <h1 style={styles.title}>Experience</h1>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Software Engineering Intern — AlphaPrimeTech</h2>
            <p style={styles.cardText}>New York, NY • Summer 2024</p>
            <p style={styles.cardText}>
              Collaborated on development tasks, debugging, and improving
              application functionality while working with real-world codebases
              and team workflows.
            </p>
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Code Coach — theCoderSchool</h2>
            <p style={styles.cardText}>Teaching & Mentorship</p>
            <p style={styles.cardText}>
              Taught students programming with Python, Scratch, Java, Roblox Lua,
              and web technologies through interactive coding projects.
            </p>
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
    maxWidth: "1000px",
    margin: "0 auto",
  },
  title: {
    fontSize: "clamp(2.2rem, 5vw, 4rem)",
    marginBottom: 24,
  },
  card: {
    padding: 20,
    borderRadius: 20,
    background: "rgba(0,0,0,0.4)",
    border: "1px solid rgba(255,255,255,0.1)",
    backdropFilter: "blur(10px)",
    marginBottom: 16,
  },
  cardTitle: {
    marginTop: 0,
    marginBottom: 10,
    fontSize: "1.3rem",
  },
  cardText: {
    margin: "0 0 10px 0",
    lineHeight: 1.7,
    opacity: 0.9,
  },
};