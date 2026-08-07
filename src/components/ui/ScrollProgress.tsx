import { useScrollProgress } from "../../hooks/useScrollProgress";

export function ScrollProgress() {
  const pct = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-[100] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-cyan-400 via-white-500 to-cyan-500 transition-all duration-75"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
