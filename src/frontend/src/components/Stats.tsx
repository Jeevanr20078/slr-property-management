import { useEffect, useRef, useState } from "react";

interface StatItem {
  target: number;
  suffix: string;
  label: string;
  sublabel: string;
}

const stats: StatItem[] = [
  {
    target: 25,
    suffix: "+",
    label: "Years of Experience",
    sublabel: "Since 1999",
  },
  {
    target: 2000,
    suffix: "+",
    label: "Happy Clients",
    sublabel: "Families Served",
  },
  {
    target: 100,
    suffix: "%",
    label: "Satisfaction Rate",
    sublabel: "Client Promise",
  },
  {
    target: 1,
    suffix: "",
    label: "City Mastered",
    sublabel: "Bangalore South",
  },
];

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(step);
  }, [active, target, duration]);

  return count;
}

function StatCounter({
  stat,
  active,
  index,
}: {
  stat: StatItem;
  active: boolean;
  index: number;
}) {
  const count = useCountUp(stat.target, 2000, active);
  const displayValue = active ? count : 0;

  return (
    <div
      className="flex flex-col items-center text-center px-6 py-12 relative group"
      style={{ animationDelay: `${index * 0.12}s` }}
    >
      {/* Vertical divider (not on last) */}
      {index < stats.length - 1 && (
        <div
          className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-20 w-px"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(212,168,67,0.25), transparent)",
          }}
        />
      )}

      {/* Top gold accent line */}
      <div
        className="w-10 h-px mb-6 mx-auto transition-all duration-500 group-hover:w-16"
        style={{
          background:
            "linear-gradient(90deg, transparent, #D4A843, transparent)",
        }}
      />

      {/* Number */}
      <div
        className="font-display font-black leading-none mb-3 tabular-nums"
        style={{
          fontSize: "clamp(3.5rem, 7vw, 5.5rem)",
          background:
            "linear-gradient(160deg, #F5D080 0%, #D4A843 45%, #B8861E 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          filter: "drop-shadow(0 0 20px rgba(212,168,67,0.35))",
          letterSpacing: "-0.02em",
        }}
      >
        {stat.target === 1
          ? active
            ? "1"
            : "—"
          : `${displayValue}${stat.suffix}`}
      </div>

      {/* Label */}
      <div className="text-white font-bold text-base sm:text-lg tracking-wide mb-1.5">
        {stat.label}
      </div>

      {/* Sub-label */}
      <div
        className="text-xs tracking-[0.2em] uppercase font-medium"
        style={{ color: "rgba(212,168,67,0.55)" }}
      >
        {stat.sublabel}
      </div>
    </div>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="stats"
      ref={ref}
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0A1628 0%, #081020 50%, #0A1628 100%)",
      }}
    >
      {/* Radial gold glow behind numbers */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(212,168,67,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Top divider */}
      <div className="gold-divider" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section eyebrow */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3">
            <div
              className="h-px w-8"
              style={{ background: "rgba(212,168,67,0.4)" }}
            />
            <span
              className="text-xs font-semibold tracking-[0.3em] uppercase"
              style={{ color: "rgba(212,168,67,0.7)" }}
            >
              Our Numbers Speak
            </span>
            <div
              className="h-px w-8"
              style={{ background: "rgba(212,168,67,0.4)" }}
            />
          </div>
        </div>

        {/* Stats grid — single row on desktop, 2×2 on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <StatCounter
              key={stat.label}
              stat={stat}
              active={active}
              index={i}
            />
          ))}
        </div>

        {/* Bottom tagline */}
        <div className="text-center mt-14">
          <p
            className="text-sm leading-relaxed max-w-lg mx-auto"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            Serving JP Nagar, Banashankari, Jayanagar & all of Bangalore South —
            since 1999
          </p>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="gold-divider" />
    </section>
  );
}
