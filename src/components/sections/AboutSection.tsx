"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const stats = [
  { value: "2", label: "Publications", sublabel: "Springer CCIS · ECCV" },
  { value: "3", label: "Major Projects", sublabel: "CV · NLP · MLOps" },
  { value: "10+", label: "ML Tools", sublabel: "Prod-ready stack" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-16 lg:grid-cols-2"
        >
          {/* Left column */}
          <div className="flex flex-col gap-8">
            <motion.div variants={fadeInUp}>
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
                // About Me
              </p>
              <h2 className="text-4xl font-black text-slate-900 dark:text-white md:text-5xl">
                Who I Am
              </h2>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-base leading-relaxed text-slate-600 dark:text-gray-400"
            >
              I&apos;m a third-year BSc Data Science student at{" "}
              <span className="font-semibold text-slate-900 dark:text-white">VNUHCM - University of Science</span>, specializing in
              deep learning, multimodal retrieval, and autonomous LLM agents. I build
              production-grade ML pipelines and have published research at Springer
              and ECCV.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-base leading-relaxed text-slate-600 dark:text-gray-400"
            >
              My work spans from real-time multimodal video retrieval engines indexing
              88,899+ keyframes with sub-1.5s latency, to autonomous offline Voice-to-Action agents with zero-GPU-overhead ASR and LoRA Soup fine-tuning. I care deeply about both the{" "}
              <span className="font-medium text-cyan-600 dark:text-cyan-400">mathematical foundations</span> and
              the <span className="font-medium text-purple-600 dark:text-purple-400">engineering craft</span> behind AI systems.
            </motion.p>

            {/* Education card */}
            <motion.div
              variants={fadeInUp}
              className="rounded-2xl border border-slate-200 bg-white/80 dark:border-white/10 dark:bg-white/5 p-6 backdrop-blur shadow-xs dark:shadow-none"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/10 dark:bg-cyan-400/10 text-cyan-600 dark:text-cyan-400">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">VNUHCM - University of Science</p>
                  <p className="font-mono text-xs text-cyan-600 dark:text-cyan-400">BSc in Data Science · 3rd-Year Student</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-gray-400">
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-slate-400 dark:text-gray-600" />
                  Ho Chi Minh City, Vietnam
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} className="text-slate-400 dark:text-gray-600" />
                  Sep 2024 – 2028 (Exp.) · Junior
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Data Structures & Algorithms", "Linear Algebra", "Probability & Statistics", "Optimization", "C/C++", "Deep Learning"].map(
                  (c) => (
                    <span
                      key={c}
                      className="rounded-full border border-slate-200 bg-slate-100/80 dark:border-white/10 dark:bg-white/5 px-3 py-1 font-mono text-xs text-slate-700 dark:text-gray-400"
                    >
                      {c}
                    </span>
                  )
                )}
              </div>
            </motion.div>
          </div>

          {/* Right column — stats */}
          <div className="flex flex-col justify-center gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                variants={fadeInUp}
                custom={i}
                className="group flex items-center gap-6 rounded-2xl border border-slate-200 bg-white/80 dark:border-white/10 dark:bg-white/5 p-6 backdrop-blur transition-all hover:border-cyan-500/40 hover:bg-slate-50 dark:hover:border-cyan-400/30 dark:hover:bg-white/8 shadow-xs dark:shadow-none"
              >
                <div className="text-5xl font-black text-cyan-600 dark:text-cyan-400 drop-shadow-[0_0_12px_rgba(6,182,212,0.4)]">
                  {s.value}
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">{s.label}</p>
                  <p className="font-mono text-xs text-slate-500 dark:text-gray-500">{s.sublabel}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
