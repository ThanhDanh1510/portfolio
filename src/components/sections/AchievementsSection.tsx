"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { achievements } from "@/data/portfolio";
import { Trophy } from "lucide-react";

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeInUp} className="mb-14">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
              // Honors
            </p>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white md:text-5xl">
              Achievements
            </h2>
          </motion.div>

          <div className="relative ml-6 flex flex-col gap-0 border-l border-slate-200 dark:border-white/10">
            {achievements.map((a, i) => (
              <motion.div
                key={a.title}
                variants={fadeInUp}
                custom={i}
                className="relative pb-10 pl-8 last:pb-0"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[17px] flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white dark:border-white/10 dark:bg-[#030712] shadow-xs">
                  <Trophy size={13} className="text-cyan-600 dark:text-cyan-400" />
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white/80 dark:border-white/10 dark:bg-white/5 p-6 backdrop-blur transition-all hover:border-cyan-500/30 hover:bg-slate-50 dark:hover:border-cyan-400/20 dark:hover:bg-white/8 shadow-xs dark:shadow-none">
                  <h3 className="mb-2 font-bold text-slate-900 dark:text-white">{a.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-gray-400">{a.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
