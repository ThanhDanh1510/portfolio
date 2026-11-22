"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { projects, type Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const colorMap: Record<Project["color"], { badge: string; metric: string; border: string; glow: string }> = {
  cyan: {
    badge: "bg-cyan-500/10 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 border-cyan-500/20 dark:border-cyan-800",
    metric: "text-cyan-600 dark:text-cyan-400",
    border: "hover:border-cyan-500/50",
    glow: "hover:shadow-[0_0_32px_rgba(6,182,212,0.18)]",
  },
  purple: {
    badge: "bg-purple-500/10 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border-purple-500/20 dark:border-purple-800",
    metric: "text-purple-600 dark:text-purple-400",
    border: "hover:border-purple-500/50",
    glow: "hover:shadow-[0_0_32px_rgba(167,139,250,0.18)]",
  },
  green: {
    badge: "bg-emerald-500/10 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border-emerald-500/20 dark:border-emerald-800",
    metric: "text-emerald-600 dark:text-emerald-400",
    border: "hover:border-emerald-500/50",
    glow: "hover:shadow-[0_0_32px_rgba(52,211,153,0.18)]",
  },
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeInUp} className="mb-14">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
              // Featured Work
            </p>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white md:text-5xl">Projects</h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {projects.map((p) => {
              const c = colorMap[p.color];
              return (
                <motion.div
                  key={p.title}
                  variants={fadeInUp}
                  className={cn(
                    "group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white/80 dark:border-white/10 dark:bg-white/5 p-6 backdrop-blur transition-all shadow-xs dark:shadow-none",
                    c.border,
                    c.glow
                  )}
                >
                  <div>
                    {/* Header */}
                    <div className="mb-5 flex items-start justify-between gap-2">
                      <span
                        className={cn(
                          "inline-block rounded-full border px-3 py-1 font-mono text-xs",
                          c.badge
                        )}
                      >
                        {p.subtitle}
                      </span>
                      <span className="font-mono text-xs text-slate-500 dark:text-gray-500">{p.year}</span>
                    </div>

                    {/* Title */}
                    <h3 className="mb-3 text-lg font-bold leading-snug text-slate-900 dark:text-white transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
                      {p.title}
                    </h3>

                    {/* Description */}
                    <p className="mb-5 text-sm leading-relaxed text-slate-600 dark:text-gray-400">
                      {p.description}
                    </p>

                    {/* Tags */}
                    <div className="mb-5 flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-slate-200 bg-slate-100/80 dark:border-white/10 dark:bg-white/5 px-2 py-0.5 font-mono text-xs text-slate-600 dark:text-gray-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between border-t border-slate-100 dark:border-white/10 pt-4">
                    <span className={cn("font-mono text-xs font-semibold", c.metric)}>
                      {p.highlight}
                    </span>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 font-mono text-xs text-slate-500 dark:text-gray-400 transition-colors hover:text-cyan-600 dark:hover:text-cyan-400"
                    >
                      GitHub <ArrowUpRight size={12} />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
