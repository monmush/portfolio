"use client";

export const Footer = () => {
  return (
    <div className="p-4 text-center justify-center text-xs text-neutral-500 border-t border-neutral-100">
      <span className="font-semibold">{new Date().getFullYear()} </span>
      &#8212; Developed by Minh Pham &#8226; Based on a template by{" "}
      <a
        href="https://ui.aceternity.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Manu Arora (Aceternity UI)
      </a>
    </div>
  );
};
