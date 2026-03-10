import MatrixBackground from "../components/MatrixBackground";

export default function CertificationsPage() {
  return (
    <>
      <MatrixBackground />
      <main style={styles.page}>
        <section style={styles.section}>
          <h1 style={styles.title}>Certifications</h1>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Google Cybersecurity Professional Certificate</h2>
            <p style={styles.cardText}>Issued by Google via Coursera</p>
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Cyber Security Certification</h2>
            <p style={styles.cardText}>Issued by W3Schools</p>
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
    fontSize: "1.25rem",
  },
  cardText: {
    margin: 0,
    lineHeight: 1.7,
    opacity: 0.9,
  },
};