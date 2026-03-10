import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { Orbitron } from "next/font/google";
import { Fredoka } from "next/font/google";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Christopher Marcellus Portfolio",
  description: "Computer Science and Cybersecurity portfolio",
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/certifications", label: "Certifications" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={orbitron.className} style={styles.body}>
        <nav style={styles.nav}>
          <div style={styles.navInner}>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link" style={styles.navLink}>
              {link.label}
              </Link>
            ))}
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}

const styles = {
  body: {
    margin: 0,
    minHeight: "100vh",
    background: "#000",
  },
  nav: {
    position: "fixed" as const,
    top: 20,
    left: 24,
    zIndex: 50,
  },
  navInner: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap" as const,
    alignItems: "center",
  },
  navLink: {
    color: "rgba(255,255,255,0.92)",
    textDecoration: "none",
    fontWeight: 600,
    fontSize: 15,
    padding: "8px 12px",
    borderRadius: 999,
    background: "rgba(0,0,0,0.35)",
    border: "1px solid rgba(255,255,255,0.1)",
    backdropFilter: "blur(8px)",
  },
};