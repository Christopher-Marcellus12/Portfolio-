"use client";

import { useEffect, useState } from "react";

export default function ReactiveBackground() {
  const [mouse, setMouse] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#07111f]" />

      <div
        className="absolute inset-0 opacity-70"
        style={{
          background: `
            radial-gradient(circle at ${mouse.x}% ${mouse.y}%, rgba(0, 255, 170, 0.16), transparent 18%),
            radial-gradient(circle at ${mouse.x - 8}% ${mouse.y + 10}%, rgba(0, 140, 255, 0.14), transparent 22%),
            linear-gradient(to bottom, rgba(7,17,31,0.92), rgba(4,10,20,0.98))
          `,
          transition: "background 120ms ease-out",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl animate-pulse" />
      <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl animate-pulse" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.35)_100%)]" />
    </div>
  );
}