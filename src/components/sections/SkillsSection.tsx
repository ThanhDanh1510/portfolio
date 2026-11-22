"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { skillPillars, type SkillPillar } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import SpotlightCard from "@/components/SpotlightCard";
import { Cpu, Eye, Server, Database, Sparkles, Filter } from "lucide-react";

const MARQUEE_TECH = [
  "PyTorch",
  "vLLM",
  "BEiT-3",
  "Qdrant",
  "Milvus",
  "Docker",
  "FastAPI",
  "ONNX Runtime",
  "LoRA Soup",
  "CUDA",
  "OpenCV",
  "Elasticsearch",
  "uv",
  "DuckDB",
  "Qwen3.5",
  "ResNet",
  "Transformers",
  "Scikit-Learn",
];

const categoryIcons: Record<string, React.ReactNode> = {
  "AI & Deep Learning": <Cpu size={16} className="text-cyan-500" />,
  "Computer Vision & NLP": <Eye size={16} className="text-purple-500" />,
  "MLOps & Frameworks": <Server size={16} className="text-emerald-500" />,
  "Data & Languages": <Database size={16} className="text-pink-500" />,
};

const colorMap: Record<
  SkillPillar["color"],
  { pill: string; glow: string; border: string; spotlight: string; accentText: string }
> = {
  cyan: {
    pill: "bg-cyan-500/10 dark:bg-cyan-400/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/30 dark:border-cyan-400/20 hover:border-cyan-500 hover:bg-cyan-500/20",
    glow: "hover:shadow-[0_0_24px_rgba(6,182,212,0.2)]",
    border: "border-cyan-500/30 dark:border-cyan-400/30",
    spotlight: "rgba(6, 182, 212, 0.16)",
    accentText: "text-cyan-600 dark:text-cyan-400",
  },
  purple: {
    pill: "bg-purple-500/10 dark:bg-purple-400/10 text-purple-700 dark:text-purple-300 border-purple-500/30 dark:border-purple-400/20 hover:border-purple-500 hover:bg-purple-500/20",
    glow: "hover:shadow-[0_0_24px_rgba(167,139,250,0.2)]",
    border: "border-purple-500/30 dark:border-purple-400/30",
    spotlight: "rgba(167, 139, 250, 0.16)",
    accentText: "text-purple-600 dark:text-purple-400",
  },
  green: {
    pill: "bg-emerald-500/10 dark:bg-emerald-400/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/30 dark:border-emerald-400/20 hover:border-emerald-500 hover:bg-emerald-500/20",
    glow: "hover:shadow-[0_0_24px_rgba(52,211,153,0.2)]",
    border: "border-emerald-500/30 dark:border-emerald-400/30",
    spotlight: "rgba(52, 211, 153, 0.16)",
    accentText: "text-emerald-600 dark:text-emerald-400",
  },
  pink: {
    pill: "bg-pink-500/10 dark:bg-pink-400/10 text-pink-700 dark:text-pink-300 border-pink-500/30 dark:border-pink-400/20 hover:border-pink-500 hover:bg-pink-500/20",
    glow: "hover:shadow-[0_0_24px_rgba(244,114,182,0.2)]",
    border: "border-pink-500/30 dark:border-pink-400/30",
    spotlight: "rgba(244, 114, 182, 0.16)",
    accentText: "text-pink-600 dark:text-pink-400",
  },
};

const CATEGORIES = [
  "All",
  "AI & Deep Learning",
  "Computer Vision & NLP",
  "MLOps & Frameworks",
  "Data & Languages",
] as const;

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredPillars =
    selectedCategory === "All"
      ? skillPillars
      : skillPillars.filter((p) => p.label === selectedCategory);

  return (
    <section id="skills" className="relative py-28 px-6 overflow-hidden">
      {/* Background ambient mesh */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[400px] w-[600px] rounded-full bg-purple-500/5 blur-[130px] dark:bg-purple-500/10" />
      </div>

      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="mb-10 text-center">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-2 w-2 rounded-full bg-cyan-500" />
              <p className="font-mono text-xs uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-semibold">
                {"// Technical Competencies"}
              </p>
            </div>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white md:text-5xl">
              Skills &amp; Tech Stack
            </h2>
            <p className="mt-3 text-sm text-slate-600 dark:text-gray-400 max-w-xl mx-auto">
              Specialized in deep learning foundations, high-throughput vector retrieval,
              and resource-constrained model serving.
            </p>
          </motion.div>

          {/* Infinite Tech Marquee Ticker */}
          <motion.div variants={fadeInUp} className="mb-12 relative w-full overflow-hidden">
            {/* Fade Gradients at Edges */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-20 bg-gradient-to-r from-slate-50 to-transparent dark:from-[#030712]" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-20 bg-gradient-to-l from-slate-50 to-transparent dark:from-[#030712]" />

            <div className="flex select-none py-2 border-y border-slate-200/80 dark:border-white/10 bg-slate-50/50 dark:bg-white/[0.02] overflow-hidden">
              <div className="animate-marquee flex items-center">
                <div className="flex shrink-0 items-center gap-3 pr-3">
                  {MARQUEE_TECH.map((item, idx) => (
                    <span
                      key={`track1-${item}-${idx}`}
                      className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/90 bg-white dark:border-white/10 dark:bg-white/5 px-3.5 py-1 font-mono text-xs text-slate-700 dark:text-slate-300 shadow-xs"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex shrink-0 items-center gap-3 pr-3" aria-hidden="true">
                  {MARQUEE_TECH.map((item, idx) => (
                    <span
                      key={`track2-${item}-${idx}`}
                      className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/90 bg-white dark:border-white/10 dark:bg-white/5 px-3.5 py-1 font-mono text-xs text-slate-700 dark:text-slate-300 shadow-xs"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Category Filter Pills */}
          <motion.div variants={fadeInUp} className="mb-10 flex flex-wrap items-center justify-center gap-2">
            <span className="hidden sm:inline-flex items-center gap-1 text-xs font-mono text-slate-500 dark:text-gray-400 mr-2">
              <Filter size={12} /> Filter:
            </span>
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={cn(
                    "relative rounded-full px-4 py-1.5 font-mono text-xs transition-all",
                    active
                      ? "bg-cyan-600 text-white shadow-md shadow-cyan-500/25 dark:bg-cyan-500 dark:text-slate-950 font-bold"
                      : "border border-slate-200 bg-white/80 text-slate-700 hover:border-slate-300 dark:border-white/10 dark:bg-white/5 dark:text-gray-300 dark:hover:border-white/20"
                  )}
                >
                  {cat}
                </button>
              );
            })}
          </motion.div>

          {/* Filtered Skill Pillars Grid */}
          <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {filteredPillars.map((pillar) => {
                const c = colorMap[pillar.color];
                return (
                  <motion.div
                    key={pillar.label}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                  >
                    <SpotlightCard
                      spotlightColor={c.spotlight}
                      spotlightSize={380}
                      className={cn(
                        "h-full rounded-2xl border bg-white/85 dark:bg-white/[0.04] p-6 backdrop-blur transition-all",
                        c.border,
                        c.glow
                      )}
                    >
                      <div>
                        {/* Header */}
                        <div className="mb-5 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{pillar.icon}</span>
                            <div>
                              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                                {pillar.label}
                              </h3>
                              <p className={cn("text-[11px] font-mono", c.accentText)}>
                                {pillar.skills.length} core technologies
                              </p>
                            </div>
                          </div>
                          <div className="rounded-full bg-slate-100 p-2 dark:bg-white/5">
                            {categoryIcons[pillar.label] ?? <Sparkles size={16} />}
                          </div>
                        </div>

                        {/* Skills List */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {pillar.skills.map((skill) => (
                            <span
                              key={skill}
                              className={cn(
                                "rounded-full border px-3 py-1 font-mono text-xs font-medium transition-all hover:scale-105",
                                c.pill
                              )}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </SpotlightCard>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
