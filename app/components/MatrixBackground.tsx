"use client";

import { useEffect, useRef } from "react";

type Drop = {
  y: number;
  speed: number;
  length: number;
};

export default function MatrixRainBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const fontSize = 18;
    const columnGap = 1.3;

    const chars =
      "アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let columns = 0;
    let drops: Drop[] = [];

    const randomChar = () =>
      chars[Math.floor(Math.random() * chars.length)];

    const setup = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width;
      canvas.height = height;

      columns = Math.floor(width / (fontSize * columnGap));

      drops = Array.from({ length: columns }, () => ({
        y: Math.random() * -height,
        speed: 25 + Math.random() * 20,
        length: 8 + Math.floor(Math.random() * 12),
      }));
    };

    const drawColumn = (x: number, drop: Drop, columnIndex: number) => {
      const center = columns / 2;

      // reduce density near center
      const distanceFromCenter = Math.abs(columnIndex - center) / center;
      const densityMultiplier = 0.25 + distanceFromCenter * 0.75;

      if (Math.random() > densityMultiplier) return;

      for (let j = 0; j < drop.length; j++) {
        const y = drop.y - j * fontSize;
        const char = randomChar();

        if (j === 0) {
          ctx.shadowColor = "#00ff41";
          ctx.shadowBlur = 12;
          ctx.fillStyle = "rgba(200,255,200,0.95)";
        } else if (j < 3) {
          ctx.shadowBlur = 8;
          ctx.fillStyle = `rgba(0,255,120,${0.4 - j * 0.1})`;
        } else {
          ctx.shadowBlur = 0;
          ctx.fillStyle = `rgba(0,255,120,${0.18 - j * 0.01})`;
        }

        ctx.fillText(char, x, y);
      }

      ctx.shadowBlur = 0;
    };

    const draw = () => {
      // smooth cinematic trail
      ctx.fillStyle = "rgba(0,0,0,0.12)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;

      const totalWidth = columns * fontSize * columnGap;
      const startX = (width - totalWidth) / 2;

      for (let i = 0; i < drops.length; i++) {
        const drop = drops[i];
        const x = startX + i * fontSize * columnGap;

        drawColumn(x, drop, i);

        drop.y += drop.speed * 0.016;

        if (drop.y - drop.length * fontSize > height) {
          drops[i] = {
            y: -Math.random() * 300,
            speed: 25 + Math.random() * 20,
            length: 8 + Math.floor(Math.random() * 12),
          };
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    setup();
    draw();

    window.addEventListener("resize", setup);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", setup);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -2,
          background: "#020617",
        }}
      />

      {/* center readability overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -1,
          background:
            "radial-gradient(circle at center, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.6) 100%)",
        }}
      />
    </>
  );
}