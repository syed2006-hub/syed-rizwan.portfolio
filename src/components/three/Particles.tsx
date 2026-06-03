import { useEffect, useRef } from "react";

export function Particles({ count = 60 }: { count?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.innerHTML = "";
    for (let i = 0; i < count; i++) {
      const dot = document.createElement("span");
      const size = Math.random() * 2 + 0.5;
      dot.style.cssText = `position:absolute;left:${Math.random() * 100}%;top:${Math.random() * 100}%;width:${size}px;height:${size}px;border-radius:9999px;background:rgba(17,17,17,${0.08 + Math.random() * 0.18});filter:blur(${Math.random() < 0.3 ? 1 : 0}px);animation:float-y ${6 + Math.random() * 8}s ease-in-out ${Math.random() * -10}s infinite;`;
      el.appendChild(dot);
    }
  }, [count]);
  return <div ref={ref} aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden" />;
}
