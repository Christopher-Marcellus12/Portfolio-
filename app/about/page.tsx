import MatrixRainBackground from "../components/MatrixBackground";

export default function AboutPage() {
  return (
    <>
      <MatrixRainBackground />
      <main style={styles.page}>
        <section style={styles.section}>
          <h1 style={styles.title}>About</h1>
          <p style={styles.text}>
            I’m Christopher Marcellus, a Computer Science and Cybersecurity
            student at Hofstra University with interests in full-stack
            development, secure systems, and modern web design.
          </p>
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
    maxWidth: "900px",
    margin: "0 auto",
  },
  title: {
    fontSize: "clamp(2.2rem, 5vw, 4rem)",
    marginBottom: 20,
  },
  text: {
    fontSize: "1.2rem",
    lineHeight: 1.8,
    opacity: 0.92,
  },
};