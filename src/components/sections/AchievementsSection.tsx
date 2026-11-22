"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { achievements } from "@/data/portfolio";
import { Trophy, Sparkles } from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";

export default function AchievementsSection() {
  return (
    <section id="achievements" className="relative py-28 px-6">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[450px] w-[650px] rounded-full bg-cyan-500/5 blur-[140px] dark:bg-cyan-500/10" />
      </div>

      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="mb-14">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-2 w-2 rounded-full bg-cyan-500" />
              <p className="font-mono text-xs uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-semibold">
                {"// Competitions & Honors"}
              </p>
            </div>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white md:text-5xl">
              Honors &amp; Awards
            </h2>
            <p className="mt-3 max-w-2xl text-slate-600 dark:text-gray-400 text-sm">
              Recognized in city-level and national AI competitions for real-time multimodal search,
              agentic system engineering, and competitive machine learning.
            </p>
          </motion.div>

          {/* Timeline Container */}
          <div className="relative ml-6 flex flex-col gap-0 border-l-2 border-slate-200 dark:border-cyan-500/20">
            {achievements.map((a, i) => (
              <motion.div
                key={a.title}
                variants={fadeInUp}
                custom={i}
                className="relative pb-10 pl-8 last:pb-0"
              >
                {/* Timeline milestone node */}
                <div className="absolute -left-[18px] flex h-9 w-9 items-center justify-center rounded-full border-2 border-slate-200 bg-white dark:border-cyan-400/40 dark:bg-slate-950 shadow-md transition-transform hover:scale-110">
                  <Trophy size={14} className="text-cyan-600 dark:text-cyan-400" />
                </div>

                {/* Card with Spotlight */}
                <SpotlightCard
                  spotlightColor="rgba(6, 182, 212, 0.14)"
                  spotlightSize={380}
                  className="p-6 border-slate-200/90 dark:border-white/10"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
                        {a.title}
                      </h3>
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-500 dark:text-cyan-400">
                        <Sparkles size={12} />
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-gray-300">
                      {a.description}
                    </p>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
