"use client";

import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = async (engine: Engine) => {
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "#070b1a" },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            repulse: { distance: 120, duration: 0.4 },
            push: { quantity: 4 },
          },
        },
        particles: {
          number: { value: 70, density: { enable: true, area: 900 } },
          color: { value: "#8ab4ff" },
          links: { enable: true, distance: 150, opacity: 0.35, width: 1 },
          move: { enable: true, speed: 1.2, outModes: { default: "out" } },
          opacity: { value: 0.6 },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
    />
  );
}
