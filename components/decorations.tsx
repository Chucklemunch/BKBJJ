import type { SVGProps } from "react";

export function PawPrint(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden {...props}>
      <ellipse cx="16" cy="22" rx="8" ry="6.2" />
      <circle cx="7" cy="13" r="3" />
      <circle cx="16" cy="8.5" r="3" />
      <circle cx="25" cy="13" r="3" />
    </svg>
  );
}

export function Sunburst({ size = 480 }: { size?: number }) {
  const rays = Array.from({ length: 24 });
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className="block"
      aria-hidden
    >
      <defs>
        <radialGradient id="sunCore" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--color-gold-bright)" stopOpacity="0.9" />
          <stop offset="60%" stopColor="var(--color-gold)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="var(--color-gold)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <g transform="translate(100 100)">
        {rays.map((_, i) => (
          <polygon
            key={i}
            points="0,-90 4,0 0,90 -4,0"
            fill="var(--color-gold)"
            opacity={i % 2 ? 0.1 : 0.18}
            transform={`rotate(${(i * 360) / rays.length})`}
          />
        ))}
        <circle r="60" fill="url(#sunCore)" />
      </g>
    </svg>
  );
}

export function ClawDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 text-gold ${className}`}>
      <span className="h-px flex-1 gold-rule" />
      <svg viewBox="0 0 80 24" className="h-5 w-20 text-gold" aria-hidden>
        <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
          <path d="M6 18 Q 14 2 22 18" />
          <path d="M22 18 Q 30 2 38 18" />
          <path d="M38 18 Q 46 2 54 18" />
          <path d="M54 18 Q 62 2 70 18" />
        </g>
      </svg>
      <span className="h-px flex-1 gold-rule" />
    </div>
  );
}

export function Bubbles() {
  const dots = Array.from({ length: 14 }, (_, i) => ({
    left: 6 + i * 6.5 + (i % 3) * 2,
    size: 6 + (i % 5) * 4,
    delay: (i * 0.4) % 5,
    duration: 6 + (i % 4),
  }));
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {dots.map((d, i) => (
        <span
          key={i}
          className="absolute bottom-0 block rounded-full bubble"
          style={{
            left: `${d.left}%`,
            width: d.size,
            height: d.size,
            background:
              "radial-gradient(circle at 30% 30%, rgba(255,236,170,0.9), rgba(227,179,65,0.2))",
            border: "1px solid rgba(227,179,65,0.5)",
            animationDelay: `${d.delay}s`,
            animationDuration: `${d.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
