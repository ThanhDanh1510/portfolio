"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import { skillPillars, type SkillPillar } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const colorMap: Record<SkillPillar["color"], { pill: string; glow: string; border: string }> = {
  cyan: {
    pill: "bg-cyan-500/10 dark:bg-cyan-400/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/20 dark:border-cyan-400/20",
    glow: "hover:shadow-[0_0_16px_rgba(6,182,212,0.25)]",
    border: "border-cyan-500/30 dark:border-cyan-400/30",
  },
  purple: {
    pill: "bg-purple-500/10 dark:bg-purple-400/10 text-purple-700 dark:text-purple-300 border-purple-500/20 dark:border-purple-400/20",
    glow: "hover:shadow-[0_0_16px_rgba(167,139,250,0.25)]",
    border: "border-purple-500/30 dark:border-purple-400/30",
  },
  green: {
    pill: "bg-emerald-500/10 dark:bg-emerald-400/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20 dark:border-emerald-400/20",
    glow: "hover:shadow-[0_0_16px_rgba(52,211,153,0.25)]",
    border: "border-emerald-500/30 dark:border-emerald-400/30",
  },
  pink: {
    pill: "bg-pink-500/10 dark:bg-pink-400/10 text-pink-700 dark:text-pink-300 border-pink-500/20 dark:border-pink-400/20",
    glow: "hover:shadow-[0_0_16px_rgba(244,114,182,0.25)]",
    border: "border-pink-500/30 dark:border-pink-400/30",
  },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeInUp} className="mb-14 text-center">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
              // Tech Stack
            </p>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white md:text-5xl">Skills</h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {skillPillars.map((pillar) => {
              const c = colorMap[pillar.color];
              return (
                <motion.div
                  key={pillar.label}
                  variants={scaleIn}
                  className={cn(
                    "rounded-2xl border bg-white/80 dark:bg-white/5 p-6 backdrop-blur transition-all shadow-xs dark:shadow-none",
                    "hover:bg-slate-50 dark:hover:bg-white/8",
                    c.glow,
                    c.border
                  )}
                >
                  <div className="mb-5 flex items-center gap-3">
                    <span className="text-2xl">{pillar.icon}</span>
                    <h3 className="font-semibold text-slate-900 dark:text-white">{pillar.label}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {pillar.skills.map((skill) => (
                      <span
                        key={skill}
                        className={cn(
                          "rounded-full border px-3 py-1 font-mono text-xs transition-all hover:scale-105",
                          c.pill
                        )}
                      >
                        {skill}
                      </span>
                    ))}
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
