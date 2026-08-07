import { useState, useEffect, useRef } from "react";

export function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const [filled, setFilled] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setFilled(true); },
      { threshold: 0.4 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="mb-4 last:mb-0">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm text-white/75 font-medium">{name}</span>
        <span className="text-[11px] text-white/35 font-mono">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/[0.08] overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: filled ? `${level}%` : "0%",
            transitionDelay: `${delay}ms`,
            background: "linear-gradient(90deg, #00d4ff, #8b5cf6)",
          }}
        />
      </div>
    </div>
  );
}
