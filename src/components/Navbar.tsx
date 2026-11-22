"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useThemeTransition } from "@/components/ThemeTransitionWave";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#publications", label: "Publications" },
  { href: "#contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const { theme, resolvedTheme } = useTheme();
  const { triggerThemeTransition } = useThemeTransition();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleThemeToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    triggerThemeTransition(centerX, centerY);
  };

  const isDark = (resolvedTheme || theme) === "dark";

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/80 bg-white/80 dark:border-white/10 dark:bg-[#030712]/80 backdrop-blur-xl shadow-xs dark:shadow-none"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="font-mono text-xl font-bold tracking-wider text-cyan-600 dark:text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.4)] transition-all hover:drop-shadow-[0_0_18px_rgba(6,182,212,0.8)]"
        >
          LTD
          <span className="text-purple-600 dark:text-purple-400">.</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => handleNav(l.href)}
                className="font-mono text-sm text-slate-600 dark:text-gray-400 transition-colors hover:text-cyan-600 dark:hover:text-cyan-400"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Theme toggle */}
        <div className="flex items-center gap-3">
          {mounted && (
            <button
              onClick={handleThemeToggle}
              className="relative flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-100/80 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-300 backdrop-blur transition hover:scale-105 hover:border-cyan-500/50 hover:text-cyan-600 dark:hover:border-cyan-400/50 dark:hover:text-cyan-400"
              aria-label="Toggle theme"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-300 md:hidden"
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
              {navLinks.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => handleNav(l.href)}
                    className="w-full py-3 text-left font-mono text-sm text-slate-700 hover:text-cyan-600 dark:text-gray-300 dark:hover:text-cyan-400"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
