import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export function Counter({ value, prefix = "", suffix = "", duration = 1.5 }: { value: number; prefix?: string; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(value * eased);
      if (p < 1) requestAnimationFrame(tick);
      else setN(value);
    };
    requestAnimationFrame(tick);
  }, [inView, value, duration]);

  const formatted = value >= 1000 ? Math.round(n).toLocaleString() : value < 10 ? n.toFixed(1) : Math.round(n).toString();
  return (
    <span ref={ref} className="font-mono">
      {prefix}{formatted}{suffix}
    </span>
  );
}
