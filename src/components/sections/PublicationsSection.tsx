"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { publications } from "@/data/portfolio";

export default function PublicationsSection() {
  return (
    <section id="publications" className="py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeInUp} className="mb-14">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
              // Research
            </p>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white md:text-5xl">Publications</h2>
          </motion.div>

          <div className="flex flex-col gap-6">
            {publications.map((pub, i) => (
              <motion.div
                key={pub.title}
                variants={fadeInUp}
                custom={i}
                className="group rounded-2xl border border-slate-200 bg-white/80 dark:border-white/10 dark:bg-white/5 p-7 backdrop-blur transition-all hover:border-cyan-500/40 hover:bg-slate-50 dark:hover:border-cyan-400/30 dark:hover:bg-white/8 shadow-xs dark:shadow-none"
              >
                <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 dark:border-cyan-800 dark:bg-cyan-950 px-3 py-1 font-mono text-xs text-cyan-700 dark:text-cyan-300">
                      {pub.venue}
                    </span>
                    <span className="rounded-full border border-slate-200 bg-slate-100/80 dark:border-white/10 dark:bg-white/5 px-3 py-1 font-mono text-xs text-slate-600 dark:text-gray-400">
                      {pub.year}
                    </span>
                  </div>
                  <div className="flex gap-3">
                    {pub.doi && (
                      <a
                        href={pub.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 font-mono text-xs text-slate-500 dark:text-gray-400 transition-colors hover:text-cyan-600 dark:hover:text-cyan-400"
                      >
                        <BookOpen size={13} />
                        DOI <ArrowUpRight size={11} />
                      </a>
                    )}
                    {pub.arxiv && (
                      <a
                        href={pub.arxiv}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 font-mono text-xs text-slate-500 dark:text-gray-400 transition-colors hover:text-cyan-600 dark:hover:text-cyan-400"
                      >
                        <BookOpen size={13} />
                        arXiv <ArrowUpRight size={11} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="mb-3 text-lg font-bold text-slate-900 dark:text-white transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
                  {pub.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-gray-400">{pub.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
