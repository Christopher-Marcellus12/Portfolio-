"use client";

import { useEffect, useMemo, useState } from "react";
import type { Project } from "../types/project";

type CyberProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

const neon = "#7efdf2";
const neonSoft = "rgba(126, 253, 242, 0.22)";
const border = "rgba(126, 253, 242, 0.35)";

export default function CyberProjectModal({
  project,
  onClose,
}: CyberProjectModalProps) {
  const [glitchOn, setGlitchOn] = useState(false);

  useEffect(() => {
    if (!project) return;

    let interval: ReturnType<typeof setInterval> | undefined;
    const start = setTimeout(() => {
      setGlitchOn(true);

      const firstReset = setTimeout(() => setGlitchOn(false), 180);

      interval = setInterval(() => {
        setGlitchOn(true);
        setTimeout(() => setGlitchOn(false), 180);
      }, 3500 + Math.random() * 2500);

      return () => clearTimeout(firstReset);
    }, 250);

    return () => {
      clearTimeout(start);
      if (interval) clearInterval(interval);
    };
  }, [project]);

  useEffect(() => {
    if (!project) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [project, onClose]);

  const modalTitle = useMemo(() => project?.title ?? "", [project]);

  if (!project) return null;

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div
        style={styles.modal}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <div style={styles.modalFrame}>
          <div style={styles.modalCornerTop} />
          <div style={styles.modalCornerBottom} />

          <div style={styles.modalHeader}>
            <span style={styles.version}>v.project.001</span>
            <button onClick={onClose} style={styles.closeButton} aria-label="Close modal">
              ✕
            </button>
          </div>

          <div style={styles.modalBody}>
            <p style={styles.modalStatus}>{project.status}</p>

            <h2 id="project-modal-title" style={styles.modalTitle}>
              {modalTitle}
            </h2>

            <p style={styles.modalText}>{project.description}</p>

            <div style={styles.tags}>
              {project.stack.map((item) => (
                <span key={item} style={styles.tag}>
                  {item}
                </span>
              ))}
            </div>

            <div
              style={{
                ...styles.glitchLayer,
                opacity: glitchOn ? 0.3 : 0,
                transform: glitchOn ? "translate(3px, -2px)" : "translate(0, 0)",
              }}
              aria-hidden="true"
            >
              <p style={styles.modalStatus}>{project.status}</p>
              <h2 style={styles.modalTitle}>{modalTitle}</h2>
              <p style={styles.modalText}>{project.description}</p>
            </div>
          </div>

          <div style={styles.modalActions}>
            <button onClick={onClose} style={styles.secondaryButton}>
              Close
            </button>

            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                style={styles.primaryLink}
              >
                GitHub
              </a>
            ) : null}

            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                style={styles.primaryLink}
              >
                Live Demo
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed" as const,
    inset: 0,
    background: "rgba(0, 0, 0, 0.72)",
    backdropFilter: "blur(8px)",
    display: "grid",
    placeItems: "center",
    padding: 24,
    zIndex: 999,
  },
  modal: {
    width: "min(760px, 100%)",
    position: "relative" as const,
  },
  modalFrame: {
    position: "relative" as const,
    overflow: "hidden" as const,
    border: `1px solid ${border}`,
    background:
      "linear-gradient(180deg, rgba(7,11,24,0.98), rgba(8,14,28,0.94))",
    clipPath:
      "polygon(0 18px, 18px 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 0 100%)",
    boxShadow:
      "0 0 0 1px rgba(126,253,242,0.06), 0 0 24px rgba(126,253,242,0.16), 0 30px 60px rgba(0,0,0,0.5)",
    padding: 22,
  },
  modalCornerTop: {
    position: "absolute" as const,
    top: 0,
    right: 0,
    width: 90,
    height: 2,
    background: neon,
    boxShadow: "0 0 14px rgba(126,253,242,0.8)",
  },
  modalCornerBottom: {
    position: "absolute" as const,
    bottom: 0,
    left: 0,
    width: 90,
    height: 2,
    background: neon,
    boxShadow: "0 0 14px rgba(126,253,242,0.8)",
  },
  modalHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  version: {
    color: "rgba(126,253,242,0.65)",
    fontSize: "0.72rem",
    letterSpacing: "0.16em",
    textTransform: "uppercase" as const,
  },
  closeButton: {
    border: `1px solid ${border}`,
    background: "transparent",
    color: "white",
    width: 38,
    height: 38,
    cursor: "pointer",
    fontSize: "1rem",
  },
  modalBody: {
    position: "relative" as const,
    border: `1px solid ${border}`,
    background: "rgba(126,253,242,0.04)",
    padding: 20,
    overflow: "hidden" as const,
  },
  modalStatus: {
    margin: 0,
    marginBottom: 10,
    color: neon,
    fontSize: "0.78rem",
    letterSpacing: "0.22em",
    textTransform: "uppercase" as const,
  },
  modalTitle: {
    margin: 0,
    marginBottom: 16,
    fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
    lineHeight: 1.05,
    textTransform: "uppercase" as const,
    textShadow: "0 0 12px rgba(126,253,242,0.2)",
    color: "white",
  },
  modalText: {
    margin: 0,
    maxWidth: "95%",
    lineHeight: 1.8,
    color: "rgba(255,255,255,0.85)",
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
  glitchLayer: {
    position: "absolute" as const,
    inset: 20,
    color: "#ff6b9f",
    mixBlendMode: "screen" as const,
    pointerEvents: "none" as const,
    filter: "blur(0.35px)",
    transition: "opacity 120ms ease, transform 120ms ease",
  },
  modalActions: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap" as const,
    marginTop: 18,
  },
  secondaryButton: {
    border: `1px solid ${border}`,
    background: "transparent",
    color: "white",
    padding: "13px 18px",
    cursor: "pointer",
    textTransform: "uppercase" as const,
    letterSpacing: "0.12em",
  },
  primaryLink: {
    border: `1px solid ${border}`,
    background: neonSoft,
    color: "white",
    padding: "13px 18px",
    textDecoration: "none",
    textTransform: "uppercase" as const,
    letterSpacing: "0.12em",
    boxShadow: "0 0 14px rgba(126,253,242,0.12)",
  },
};