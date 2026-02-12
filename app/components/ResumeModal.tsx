"use client";

import { useEffect, useRef } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  pdfPath?: string;
};

export default function ResumeModal({
  open,
  onClose,
  pdfPath = "/Christopher-Marcellus-Resume.pdf",
}: Props) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleCancel = (e: Event) => {
      e.preventDefault();
      onClose();
    };

    dialog.addEventListener("cancel", handleCancel);
    return () => dialog.removeEventListener("cancel", handleCancel);
  }, [onClose]);

  return (
    <dialog
      ref={dialogRef}
      className="w-[min(1000px,92vw)] rounded-2xl p-0 shadow-2xl backdrop:bg-black/60"
      onClose={onClose}
    >
      <div className="flex items-center justify-between border-b px-4 py-3">
        <div className="font-semibold">Resume</div>
        <div className="flex items-center gap-2">
          <a
            href={pdfPath}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg px-3 py-1.5 text-sm hover:bg-black/5"
          >
            Open in new tab
          </a>
          <button
            onClick={onClose}
            className="rounded-lg px-3 py-1.5 text-sm hover:bg-black/5"
          >
            Close
          </button>
        </div>
      </div>

      <div className="h-[80vh] bg-white">
        <iframe
          title="Resume PDF"
          src={pdfPath}
          className="h-full w-full"
        />
      </div>
    </dialog>
  );
}
