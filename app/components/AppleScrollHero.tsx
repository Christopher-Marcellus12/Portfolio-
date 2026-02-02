"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AppleScrollHero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const frame1Ref = useRef<HTMLDivElement | null>(null);
  const frame2Ref = useRef<HTMLDivElement | null>(null);
  const frame3Ref = useRef<HTMLDivElement | null>(null);
  const fadeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Respect reduced motion
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const section = sectionRef.current;
    const f1 = frame1Ref.current;
    const f2 = frame2Ref.current;
    const f3 = frame3Ref.current;
    const fade = fadeRef.current;

    if (!section || !f1 || !f2 || !f3) return;

    // Initial states
    gsap.set([f1, f2, f3], { autoAlpha: 0, y: 18 });
    gsap.set(f1, { autoAlpha: 1, y: 0 });

    // 👇 Tune this: longer = smoother Apple feel
    const PIN_SCROLL = 320; // percent-ish feel (used in end below)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: `+=${PIN_SCROLL}%`, // 🔥 tuned for a smoother feel
        scrub: 1,               // 🔥 adds smoothing (Apple-ish)
        pin: true,
        anticipatePin: 1,
      },
    });

    // Frame 1 -> Frame 2 -> Frame 3
    tl.to(f1, { autoAlpha: 0, y: -18, duration: 0.35 }, 0.15)
      .to(f2, { autoAlpha: 1, y: 0, duration: 0.35 }, 0.28)
      .to(f2, { autoAlpha: 0, y: -18, duration: 0.35 }, 0.58)
      .to(f3, { autoAlpha: 1, y: 0, duration: 0.35 }, 0.72);

    // Smooth transition into next section:
    // fade overlay intensifies near the end so it doesn't "snap" into About
    if (fade) {
      gsap.set(fade, { opacity: 0 });
      tl.to(fade, { opacity: 1, duration: 0.4 }, 0.86);
    }

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        height: "100vh",
        borderRadius: 22,
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.12)",
        background: "rgba(255,255,255,0.06)",
        backdropFilter: "blur(14px)",
      }}
    >
      {/* Background fade that helps transition into the next section */}
      <div
        ref={fadeRef}
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0) 55%, rgba(0,0,0,0.55) 100%)",
          opacity: 0,
        }}
      />

      {/* Frames */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "grid",
          placeItems: "center",
          padding: 24,
          textAlign: "center",
          color: "rgba(255,255,255,0.92)",
        }}
      >
        <div ref={frame1Ref} style={{ position: "absolute", maxWidth: 900 }}>
          <h1 style={{ margin: 0, fontSize: "clamp(34px, 5vw, 64px)", fontWeight: 800 }}>
            Christopher Marcellus
          </h1>
          <p style={{ marginTop: 12, opacity: 0.82, lineHeight: 1.6 }}>
            Graduate of Hofstra University (B.S. Computer Science)
          </p>
        </div>

        <div ref={frame2Ref} style={{ position: "absolute", maxWidth: 900 }}>
          <h2 style={{ margin: 0, fontSize: "clamp(28px, 4.5vw, 56px)", fontWeight: 800 }}>
            Full-Stack Developer
          </h2>
          <p style={{ marginTop: 12, opacity: 0.82, lineHeight: 1.6 }}>
            Building clean, modern web apps with strong fundamentals.
          </p>
        </div>

        <div ref={frame3Ref} style={{ position: "absolute", maxWidth: 900 }}>
          <h2 style={{ margin: 0, fontSize: "clamp(28px, 4.5vw, 56px)", fontWeight: 800 }}>
            Security-aware mindset
          </h2>
          <p style={{ marginTop: 12, opacity: 0.82, lineHeight: 1.6 }}>
            Interested in secure, scalable software and great user experiences.
          </p>
        </div>
      </div>

      {/* Persistent CTA buttons (always visible during pinned scroll) */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 18,
          display: "flex",
          justifyContent: "center",
          gap: 12,
          flexWrap: "wrap",
          padding: "0 16px",
        }}
      >
        <a
          href="/Christopher-Marcellus-Resume.pdf"
          download
          style={{
            padding: "12px 14px",
            borderRadius: 16,
            textDecoration: "none",
            border: "1px solid rgba(255,255,255,0.14)",
            background: "rgba(255,255,255,0.14)",
            color: "rgba(255,255,255,0.95)",
          }}
        >
          Download Resume →
        </a>

        <a
          href="#projects"
          style={{
            padding: "12px 14px",
            borderRadius: 16,
            textDecoration: "none",
            border: "1px solid rgba(255,255,255,0.14)",
            background: "rgba(255,255,255,0.14)",
            color: "rgba(255,255,255,0.95)",
          }}
        >
          View Projects
        </a>

        <a
          href="#contact"
          style={{
            padding: "12px 14px",
            borderRadius: 16,
            textDecoration: "none",
            border: "1px solid rgba(255,255,255,0.14)",
            background: "transparent",
            color: "rgba(255,255,255,0.92)",
          }}
        >
          Contact
        </a>
      </div>

      {/* Scroll cue (subtle Apple vibe) */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 74,
          display: "flex",
          justifyContent: "center",
          opacity: 0.65,
          fontSize: 13,
          letterSpacing: 0.4,
        }}
      >
        Scroll ↓
      </div>
    </section>
  );
}
