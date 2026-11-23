"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState, useCallback } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { useThemeTransition } from "@/components/ThemeTransitionWave";

const navLinks = [
  { href: "#about", label: "About", id: "about" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#terminal", label: "Terminal", id: "terminal" },
  { href: "#publications", label: "Publications", id: "publications" },
  { href: "#tributes", label: "Tributes", id: "tributes" },
  { href: "#contact", label: "Contact", id: "contact" },
  { href: "/blog", label: "Blog", id: "blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, resolvedTheme } = useTheme();
  const { triggerThemeTransition } = useThemeTransition();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const isHome = pathname === "/";
  const isBlog = pathname?.startsWith("/blog");

  // Smooth top scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const currentActive = isBlog ? "blog" : activeSection;

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);

    // Scrollspy Intersection Observer on Home Page
    const sectionIds = ["about", "skills", "projects", "terminal", "publications", "achievements", "tributes", "contact"];
    const observers: IntersectionObserver[] = [];

    if (isHome) {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                // If in achievements, map to publications or maintain state
                setActiveSection(id === "achievements" ? "publications" : id);
              }
            });
          },
          { rootMargin: "-30% 0px -50% 0px", threshold: 0 }
        );

        observer.observe(el);
        observers.push(observer);
      });
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
      observers.forEach((obs) => obs.disconnect());
    };
  }, [isHome]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent, href: string, id: string) => {
      setOpen(false);
      if (isHome && href.startsWith("#")) {
        e.preventDefault();
        setActiveSection(id);
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: "smooth" });
      }
    },
    [isHome]
  );

  const handleThemeToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    triggerThemeTransition(centerX, centerY);
  };

  const isDark = (resolvedTheme || theme) === "dark";

  return (
    <>
      {/* Top subtle neon scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 origin-left z-50 pointer-events-none shadow-[0_0_8px_rgba(6,182,212,0.8)]"
        style={{ scaleX }}
      />

      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-slate-200/80 bg-white/85 dark:border-white/10 dark:bg-[#030712]/85 backdrop-blur-xl shadow-xs dark:shadow-none"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-1.5 font-mono text-xl font-bold tracking-wider text-cyan-600 dark:text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.4)] transition-all hover:drop-shadow-[0_0_18px_rgba(6,182,212,0.8)]"
          >
            <span>LTD</span>
            <span className="text-purple-600 dark:text-purple-400">.</span>
            <span className="hidden sm:inline-flex items-center text-[10px] font-normal text-slate-400 dark:text-gray-500 border border-slate-200 dark:border-white/10 rounded px-1.5 py-0.5 ml-1">
              AI / ML
            </span>
          </Link>

          {/* Desktop Nav Links with Sliding Active Pill */}
          <ul className="hidden items-center gap-1 md:flex rounded-full border border-slate-200/80 bg-slate-100/60 p-1 dark:border-white/10 dark:bg-white/[0.03] backdrop-blur-md">
            {navLinks.map((l) => {
              const isActive = currentActive === l.id;
              const targetHref = isHome ? l.href : (l.href.startsWith("#") ? `/${l.href}` : l.href);

              return (
                <li key={l.href} className="relative">
                  <Link
                    href={targetHref}
                    onClick={(e) => handleNavClick(e, l.href, l.id)}
                    className={`relative inline-block px-3.5 py-1.5 font-mono text-xs transition-colors ${
                      isActive
                        ? "font-semibold text-cyan-700 dark:text-cyan-300"
                        : "text-slate-600 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="navbar-active-pill"
                        className="absolute inset-0 rounded-full border border-cyan-500/30 bg-cyan-500/15 shadow-xs dark:border-cyan-400/30 dark:bg-cyan-400/10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{l.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Controls: Theme & Mobile Toggle */}
          <div className="flex items-center gap-3">
            {mounted && (
              <button
                onClick={handleThemeToggle}
                className="relative flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-100/90 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-300 backdrop-blur transition hover:scale-105 hover:border-cyan-500/50 hover:text-cyan-600 dark:hover:border-cyan-400/50 dark:hover:text-cyan-400 cursor-pointer"
                aria-label="Toggle theme"
                title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setOpen((o) => !o)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-300 md:hidden cursor-pointer"
              aria-label="Menu"
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </nav>

        {/* Mobile drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-b border-slate-200 bg-white/95 dark:border-white/10 dark:bg-[#030712]/95 backdrop-blur-xl md:hidden"
            >
              <ul className="flex flex-col gap-1 px-6 pb-6 pt-2">
                {navLinks.map((l) => {
                  const isActive = currentActive === l.id;
                  const targetHref = isHome ? l.href : (l.href.startsWith("#") ? `/${l.href}` : l.href);

                  return (
                    <li key={l.href}>
                      <Link
                        href={targetHref}
                        onClick={(e) => handleNavClick(e, l.href, l.id)}
                        className={`block w-full py-2.5 font-mono text-sm ${
                          isActive
                            ? "font-bold text-cyan-600 dark:text-cyan-400"
                            : "text-slate-700 hover:text-cyan-600 dark:text-gray-300 dark:hover:text-cyan-400"
                        }`}
                      >
                        {l.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
