import * as React from "react";

type HeaderProps = {
  title?: string;
  className?: string;
};

export const Header: React.FC<HeaderProps> = ({
  title = "ANJANA784",
  className = "",
}) => {
  return (
    <header
      className={[
        "pointer-events-none w-full fixed z-50",
        // tweak height to match your screenshot
        "h-24 md:h-[110px]",
        "select-none",
        className,
      ].join(" ")}
      aria-label="Site header"
    >
      {/* Decorative line */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1000 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="hdrStroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#b9a58c" stopOpacity="0.8" />
            <stop offset="0.2" stopColor="#d7c8b6" stopOpacity="0.95" />
            <stop offset="0.5" stopColor="#e2d6c7" stopOpacity="0.95" />
            <stop offset="0.8" stopColor="#d7c8b6" stopOpacity="0.95" />
            <stop offset="1" stopColor="#b9a58c" stopOpacity="0.8" />
          </linearGradient>

          {/* soft glow */}
          <filter id="hdrGlow" x="-20%" y="-50%" width="140%" height="200%">
            <feGaussianBlur stdDeviation="1.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Left segment (gap in the middle for the title) */}
        <path
          d="
            M 40 26
            L 255 26
            L 310 68
            L 470 68
          "
          fill="none"
          stroke="url(#hdrStroke)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#hdrGlow)"
        />

        {/* Right segment */}
        <path
          d="
            M 530 68
            L 690 68
            L 745 26
            L 960 26
          "
          fill="none"
          stroke="url(#hdrStroke)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#hdrGlow)"
        />

        {/* small center tick */}
        <path
          d="M 500 68 L 500 86"
          fill="none"
          stroke="url(#hdrStroke)"
          strokeWidth="2"
          strokeLinecap="round"
          filter="url(#hdrGlow)"
        />
      </svg>

      {/* Center title */}
      <div className="absolute left-1/2 top-[18px] -translate-x-1/2 cursor-pointer">
        <div
          className="text-[12px] md:text-[13px] font-medium tracking-[0.45em] text-[#d8a15a]"
          style={{
            textShadow:
              "0 0 10px rgba(216,161,90,0.25), 0 0 24px rgba(216,161,90,0.15)",
          }}
        >
          {title}
        </div>
      </div>
    </header>
  );
};
