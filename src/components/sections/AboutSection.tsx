"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";

const stats = [
  { value: "2", label: "Research Publications", sublabel: "Springer CCIS · ECCV Workshops" },
  { value: "3", label: "Major Production Systems", sublabel: "Multimodal Video · Voice Agent · CNNs" },
  { value: "10+", label: "ML & Systems Frameworks", sublabel: "PyTorch · vLLM · ONNX · Qdrant" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28 px-6">
      {/* Background ambient mesh */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[400px] w-[600px] rounded-full bg-cyan-500/5 blur-[140px] dark:bg-cyan-500/10" />
      </div>

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
              <div className="flex items-center gap-2 mb-3">
                <span className="h-2 w-2 rounded-full bg-cyan-500" />
                <p className="font-mono text-xs uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-semibold">
                  {"// About Me"}
                </p>
              </div>
              <h2 className="text-4xl font-black text-slate-900 dark:text-white md:text-5xl">
                Who I Am
              </h2>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-base leading-relaxed text-slate-600 dark:text-gray-300"
            >
              I&apos;m a third-year BSc Data Science student at{" "}
              <span className="font-bold text-slate-900 dark:text-white">
                VNUHCM - University of Science
              </span>
              , specializing in deep learning, multimodal retrieval, and autonomous LLM agents. I
              build production-grade ML pipelines and have published original research at Springer
              and ECCV.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-base leading-relaxed text-slate-600 dark:text-gray-300"
            >
              My work spans from real-time multimodal video retrieval engines indexing 88,899+
              keyframes with sub-1.5s latency, to autonomous offline Voice-to-Action agents with
              zero-GPU-overhead ASR and LoRA Soup fine-tuning. I care deeply about both the{" "}
              <span className="font-semibold text-cyan-600 dark:text-cyan-400">
                mathematical foundations
              </span>{" "}
              and the{" "}
              <span className="font-semibold text-purple-600 dark:text-purple-400">
                engineering craft
              </span>{" "}
              behind AI systems.
            </motion.p>

            {/* Education card with SpotlightCard */}
            <motion.div variants={fadeInUp}>
              <SpotlightCard
                spotlightColor="rgba(6, 182, 212, 0.16)"
                spotlightSize={350}
                className="p-6 border-slate-200/90 dark:border-white/10"
              >
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-400">
                      <GraduationCap size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white">
                        VNUHCM - University of Science
                      </p>
                      <p className="font-mono text-xs text-cyan-600 dark:text-cyan-400 font-semibold">
                        BSc in Data Science · 3rd-Year Student
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-gray-400">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-slate-400 dark:text-gray-500" />
                      Ho Chi Minh City, Vietnam
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-slate-400 dark:text-gray-500" />
                      Sep 2024 – 2028 (Exp.) · Junior
                    </span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {[
                      "Data Structures & Algorithms",
                      "Linear Algebra",
                      "Probability & Statistics",
                      "Optimization",
                      "C/C++",
                      "Deep Learning",
                    ].map((c) => (
                      <span
                        key={c}
                        className="rounded-full border border-slate-200 bg-slate-100/90 dark:border-white/10 dark:bg-white/5 px-3 py-0.5 font-mono text-xs text-slate-700 dark:text-gray-300 font-medium"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          </div>

          {/* Right column — stats with SpotlightCards */}
          <div className="flex flex-col justify-center gap-6">
            {stats.map((s, i) => (
              <motion.div key={s.label} variants={fadeInUp} custom={i}>
                <SpotlightCard
                  spotlightColor="rgba(6, 182, 212, 0.18)"
                  spotlightSize={320}
                  className="p-6 border-slate-200/90 dark:border-white/10"
                >
                  <div className="flex items-center gap-6">
                    <div className="text-5xl font-black text-cyan-600 dark:text-cyan-400 drop-shadow-[0_0_14px_rgba(6,182,212,0.4)]">
                      {s.value}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white text-base">
                        {s.label}
                      </p>
                      <p className="font-mono text-xs text-slate-500 dark:text-gray-400 mt-0.5">
                        {s.sublabel}
                      </p>
                    </div>
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
