import { useState, useEffect } from "react";

export function useScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const fn = () => {
      const d = document.documentElement;
      setPct((d.scrollTop / (d.scrollHeight - d.clientHeight)) * 100 || 0);
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return pct;
}
