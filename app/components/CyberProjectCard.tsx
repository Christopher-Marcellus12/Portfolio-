"use client";

import { useState, useRef, type CSSProperties, type MouseEvent } from "react";
import type { Project } from "../types/project";

type CyberProjectCardProps = {
  project: Project;
  onOpen: () => void;
};

const neon = "#7efdf2";
const border = "rgba(126, 253, 242, 0.35)";
const panel = "rgba(9, 14, 28, 0.82)";


export default function CyberProjectCard({
  project,
  onOpen,
}: CyberProjectCardProps) {
  const [cardStyle, setCardStyle] = useState<CSSProperties>(styles.card);
  const [glitchStyle, setGlitchStyle] = useState<CSSProperties>(styles.glitchOverlay);

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 8;
    const rotateX = -((y - centerY) / centerY) * 8;

    setCardStyle({
      ...styles.card,
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)`,
      boxShadow:
        "0 25px 50px rgba(0,0,0,0.7), 0 0 30px rgba(126,253,242,0.22)",
    });
  };

  let glitchInterval: any;
  const glitchRef = useRef<any>(null);

const handleMouseEnter = () => {
    
  glitchRef.current = setInterval(() => {
    setGlitchStyle({
      ...styles.glitchOverlay,
      opacity: 1.90,
      transform: `translate(${Math.random() * 10 - 5}px, ${
        Math.random() * 10 - 5
      }px)`,
    });

    setTimeout(() => {
      setGlitchStyle(styles.glitchOverlay);
    }, 90);
  }, 400);
};

const handleMouseLeave = () => {
  if (glitchRef.current) {
    clearInterval(glitchRef.current);
    glitchRef.current = null;
  }

  setCardStyle(styles.card);
  setGlitchStyle(styles.glitchOverlay);
};
  return (
    <article
      style={cardStyle}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={styles.cardGlow} />
      <div style={glitchStyle} aria-hidden="true">
        <p style={styles.cardStatus}>{project.status}</p>
        <h2 style={styles.cardTitle}>{project.title}</h2>
      </div>

      <div style={styles.cardInner}>
        <p style={styles.cardStatus}>{project.status}</p>
        <h2 style={styles.cardTitle}>{project.title}</h2>
        <p style={styles.cardText}>{project.description}</p>

        <div style={styles.tags}>
          {project.stack.map((item) => (
            <span key={item} style={styles.tag}>
              {item}
            </span>
          ))}
        </div>

        <button
          style={styles.cyberButton}
          onClick={onOpen}
          aria-label={`View details for ${project.title}`}
        >
          <span style={styles.buttonBackdrop} />
          <span style={styles.buttonText}>View Details</span>
        </button>
      </div>
    </article>
  );
}

const styles = {
  card: {
    position: "relative" as const,
    overflow: "hidden" as const,
    border: `1px solid ${border}`,
    background: panel,
    clipPath:
      "polygon(0 14px, 14px 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%)",
    boxShadow:
      "0 0 0 1px rgba(126,253,242,0.04), 0 10px 30px rgba(0,0,0,0.45), 0 0 18px rgba(126,253,242,0.08)",
    backdropFilter: "blur(10px)",
    transition: "transform 0.18s ease, box-shadow 0.18s ease",
    cursor: "pointer",
    transformStyle: "preserve-3d" as const,
    willChange: "transform",
  },
  cardGlow: {
    position: "absolute" as const,
    inset: 0,
    background:
      "linear-gradient(135deg, rgba(126,253,242,0.08), transparent 35%, transparent 70%, rgba(126,253,242,0.06))",
    pointerEvents: "none" as const,
  },
 glitchOverlay: {
  position: "absolute" as const,
  inset: 0,
  padding: 22,
  opacity: 0,
  pointerEvents: "none" as const,
  color: "#ff2a6d", // 🔥 stronger pink/red
  mixBlendMode: "screen" as const,
  filter: "blur(0.6px)", // stronger blur
  transition: "opacity 0.08s ease, transform 0.08s ease",
  textShadow: "2px 0 red, -2px 0 cyan",
},
  cardInner: {
    position: "relative" as const,
    padding: 22,
    zIndex: 1,
  },
  cardStatus: {
    margin: 0,
    marginBottom: 10,
    color: neon,
    fontSize: "0.72rem",
    letterSpacing: "0.22em",
    textTransform: "uppercase" as const,
  },
  cardTitle: {
    marginTop: 0,
    marginBottom: 12,
    fontSize: "1.3rem",
    lineHeight: 1.2,
    color: "white",
  },
  cardText: {
    margin: 0,
    lineHeight: 1.75,
    color: "rgba(255,255,255,0.82)",
  },
  tags: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: 10,
    marginTop: 18,
  },
  tag: {
    border: `1px solid ${border}`,
    color: neon,
    background: "rgba(126,253,242,0.08)",
    fontSize: "0.72rem",
    letterSpacing: "0.06em",
    padding: "7px 10px",
    textTransform: "uppercase" as const,
  },
  cyberButton: {
    position: "relative" as const,
    marginTop: 22,
    width: "100%",
    border: `1px solid ${border}`,
    background: "rgba(126,253,242,0.08)",
    color: "white",
    padding: "14px 16px",
    cursor: "pointer",
    textTransform: "uppercase" as const,
    letterSpacing: "0.12em",
    fontWeight: 700,
    clipPath:
      "polygon(0 10px, 10px 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)",
    overflow: "hidden" as const,
    boxShadow: "0 0 18px rgba(126,253,242,0.12)",
  },
  buttonBackdrop: {
    position: "absolute" as const,
    inset: 0,
    background:
      "linear-gradient(90deg, rgba(126,253,242,0.22), rgba(126,253,242,0.04))",
    pointerEvents: "none" as const,
  },
  buttonText: {
    position: "relative" as const,
    zIndex: 1,
  },
};