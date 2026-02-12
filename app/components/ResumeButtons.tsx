"use client";

import { useState } from "react";
import ResumeModal from "./ResumeModal";

export default function ResumeButtons() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex gap-3">
        <div className="flex flex-wrap items-center justify-center gap-3">
  {/* PRIMARY */}
  <button
    onClick={() => setOpen(true)}
    className="
      rounded-full
      bg-white/90
      px-6 py-2.5
      text-sm font-medium text-black
      backdrop-blur
      transition
      hover:bg-white
      active:scale-[0.98]
    "
  >
    View Resume
  </button>

  {/* SECONDARY */}
  <a
    href="/Christopher-Marcellus-Resume.pdf"
    download
    className="
      rounded-full
      border border-white/20
      px-6 py-2.5
      text-sm font-medium text-white/80
      backdrop-blur
      transition
      hover:border-white/40
      hover:text-white
      active:scale-[0.98]
    "
  >
    Download PDF
  </a>
</div>


        {/* <a
          href="/Christopher-Marcellus-Resume.pdf"
          download
          className="rounded-xl px-4 py-2 font-medium shadow-sm hover:opacity-90"
        >
          Download
        </a> */}
      </div>

      <ResumeModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
