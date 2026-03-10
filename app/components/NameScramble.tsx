"use client";

import { useEffect, useState } from "react";
import { Fredoka } from "next/font/google";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const firstName = "Christopher";
const lastName = "Marcellus";
const finalText = `${firstName} ${lastName}`;

const matrixChars =
  "アァカサタナハマヤャラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&*@!?<>";

export default function NameScramble() {
  const [displayText, setDisplayText] = useState(finalText);

  useEffect(() => {
    let frame = 0;

    const interval = setInterval(() => {
      const next = finalText
        .split("")
        .map((char, index) => {
          if (char === " ") return " ";

          if (index < frame) {
            return finalText[index];
          }

          return matrixChars[Math.floor(Math.random() * matrixChars.length)];
        })
        .join("");

      setDisplayText(next);
      frame += 0.35;

      if (frame >= finalText.length) {
        clearInterval(interval);
        setDisplayText(finalText);
      }
    }, 45);

    return () => clearInterval(interval);
  }, []);

  const firstLine = displayText.slice(0, firstName.length);
  const secondLine = displayText.slice(firstName.length + 1);

  return (
        <div className={`hero-title ${fredoka.className}`} aria-label={finalText}>
      <div>
        {firstLine.split("").map((letter, i) => (
          <span
            key={`first-${i}`}
            className="floating-letter"
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            {letter}
          </span>
        ))}
      </div>

      <div>
        {secondLine.split("").map((letter, i) => (
          <span
            key={`last-${i}`}
            className="floating-letter"
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
}