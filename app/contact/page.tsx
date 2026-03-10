import MatrixBackground from "../components/MatrixBackground";

export default function ContactPage() {
  return (
    <>
      <MatrixBackground />
      <main style={styles.page}>
        <section style={styles.section}>
          <h1 style={styles.title}>Contact</h1>
          <p style={styles.text}>
            Email:{" "}
            <a href="mailto:Christopherjm625@gmail.com" style={styles.link}>
              Christopherjm625@gmail.com
            </a>
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
  link: {
    color: "white",
  },
};