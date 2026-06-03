import { useEffect, useState } from "react";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav
        className={`flex items-center gap-1 rounded-full px-2 py-2 transition-all duration-500 ${
          scrolled
            ? `
              border border-white/40
              bg-white/70
              backdrop-blur-1xl
              shadow-[0_10px_40px_rgba(25,25,25,0.08)]
              `
            : "bg-transparent"
        }`}
        aria-label="Primary"
      >
        {/* Logo */}
        <a
          href="#top"
          className="ml-2 mr-3 inline-flex items-center gap-2 rounded-full px-2 py-1 text-sm font-medium tracking-tight"
        >
          <span
            className="grid h-7 w-7 place-items-center rounded-full text-[10px] font-semibold text-white shadow-md"
            style={{
              background:
                "linear-gradient(135deg, #111111 0%, #2b2b2b 100%)",
            }}
          >
            SR
          </span>

          <span className="text-xl font-black tracking-tight text-zinc-900 uppercase">
            Syed<span className="text-cyan-600">Rizwan</span>
          </span>
        </a>

        {/* Navigation */}
        <ul className="hidden items-center gap-1 sm:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="
                  rounded-full
                  px-3
                  py-1.5
                  text-sm
                  font-medium
                  text-charcoal
                  transition-all
                  duration-300
                  hover:bg-black/5
                  hover:text-ink
                "
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="
            ml-1
            inline-flex
            items-center
            gap-1.5
            rounded-full
            px-4
            py-2
            text-sm
            font-medium
            text-white
            shadow-lg
            transition-all
            duration-300
            hover:scale-[1.03]
            hover:shadow-xl
          "
          style={{
            background:
              "linear-gradient(135deg,#111111 0%,#2b2b2b 50%,#111111 100%)",
          }}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span
              className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
              style={{
                animation: "pulse-dot 1.8s ease-in-out infinite",
              }}
            />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>

          Let's talk
        </a>
      </nav>
    </header>
  );
}