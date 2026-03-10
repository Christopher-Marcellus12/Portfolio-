import MatrixBackground from "../components/MatrixBackground";

export default function SkillsPage() {
  return (
    <>
      <MatrixBackground />
      <main style={styles.page}>
        <section style={styles.section}>
          <h1 style={styles.title}>Skills</h1>

          <div style={styles.grid}>
            <div style={styles.card}>
              <h2 style={styles.cardTitle}>Frontend</h2>
              <p style={styles.cardText}>React, Next.js, Angular, HTML, CSS, Tailwind CSS</p>
            </div>

            <div style={styles.card}>
              <h2 style={styles.cardTitle}>Backend</h2>
              <p style={styles.cardText}>Node.js, Express, REST APIs</p>
            </div>

            <div style={styles.card}>
              <h2 style={styles.cardTitle}>Languages</h2>
              <p style={styles.cardText}>JavaScript, TypeScript, Python, Java, C++</p>
            </div>

            <div style={styles.card}>
              <h2 style={styles.cardTitle}>Database & Tools</h2>
              <p style={styles.cardText}>MongoDB, SQL, Git, GitHub, VS Code</p>
            </div>
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
    background: "rgba(0,0,0,0.4)",
    border: "1px solid rgba(255,255,255,0.1)",
    backdropFilter: "blur(10px)",
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