"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, BookOpen, Copy, Check, ChevronDown, ChevronUp, Award } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { publications } from "@/data/portfolio";
import SpotlightCard from "@/components/SpotlightCard";
import { cn } from "@/lib/utils";

export default function PublicationsSection() {
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);
  const [expandedAbstracts, setExpandedAbstracts] = useState<Record<number, boolean>>({});

  const handleCopyBibtex = async (bibtex: string, idx: number) => {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(bibtex);
        setCopiedIdx(idx);
        setTimeout(() => {
          setCopiedIdx((current) => (current === idx ? null : current));
        }, 2200);
      }
    } catch {
      // Graceful fallback if clipboard access is denied
    }
  };

  const toggleAbstract = (idx: number) => {
    setExpandedAbstracts((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <section id="publications" className="relative py-28 px-6">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[450px] w-[650px] rounded-full bg-amber-500/5 blur-[150px] dark:bg-amber-500/10" />
      </div>

      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="mb-14">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-2 w-2 rounded-full bg-amber-500" />
              <p className="font-mono text-xs uppercase tracking-widest text-amber-600 dark:text-amber-400 font-semibold">
                {"// Peer-Reviewed Research"}
              </p>
            </div>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white md:text-5xl">
              Publications
            </h2>
            <p className="mt-3 max-w-2xl text-slate-600 dark:text-gray-400 text-sm">
              Original research contributions in cross-modal alignment, large-scale video retrieval,
              and geometry-conditioned generative video diffusion.
            </p>
          </motion.div>

          {/* Publications List */}
          <div className="flex flex-col gap-6">
            {publications.map((pub, i) => {
              const isCopied = copiedIdx === i;
              const isExpanded = !!expandedAbstracts[i];
              const isSpringer = pub.badgeType === "springer";

              return (
                <motion.div key={pub.title} variants={fadeInUp} custom={i}>
                  <SpotlightCard
                    spotlightColor={
                      isSpringer ? "rgba(245, 158, 11, 0.16)" : "rgba(168, 85, 247, 0.16)"
                    }
                    spotlightSize={450}
                    className="p-7 border-slate-200/90 dark:border-white/10"
                  >
                    <div>
                      {/* Top Meta Bar */}
                      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                        <div className="flex flex-wrap items-center gap-2">
                          {/* Conference / Venue Badge */}
                          <span
                            className={cn(
                              "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1 font-mono text-xs font-semibold shadow-xs",
                              isSpringer
                                ? "border-amber-500/40 bg-amber-500/10 text-amber-700 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-300"
                                : "border-purple-500/40 bg-purple-500/10 text-purple-700 dark:border-purple-500/30 dark:bg-purple-500/10 dark:text-purple-300"
                            )}
                          >
                            <Award size={12} />
                            {pub.venue}
                          </span>
                          <span className="rounded-full border border-slate-200 bg-slate-100/90 px-3 py-1 font-mono text-xs text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-400 font-medium">
                            {pub.year}
                          </span>
                        </div>

                        {/* External Links */}
                        <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                          {pub.doi && (
                            <a
                              href={pub.doi}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-100/80 px-2.5 py-1 text-slate-700 hover:border-amber-500 hover:text-amber-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-300 dark:hover:border-amber-400 dark:hover:text-amber-400 transition-colors"
                            >
                              <BookOpen size={12} />
                              DOI <ArrowUpRight size={11} />
                            </a>
                          )}
                          {pub.arxiv && (
                            <a
                              href={pub.arxiv}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-100/80 px-2.5 py-1 text-slate-700 hover:border-purple-500 hover:text-purple-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-300 dark:hover:border-purple-400 dark:hover:text-purple-400 transition-colors"
                            >
                              <BookOpen size={12} />
                              arXiv <ArrowUpRight size={11} />
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Paper Title */}
                      <h3 className="mb-3 text-xl font-bold leading-snug text-slate-900 dark:text-white transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
                        {pub.title}
                      </h3>

                      {/* Brief description */}
                      <p className="text-sm leading-relaxed text-slate-600 dark:text-gray-300 mb-4">
                        {pub.description}
                      </p>

                      {/* Abstract Accordion Container */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden mb-4"
                          >
                            <div className="rounded-xl border border-slate-200/80 bg-slate-50/90 dark:border-white/10 dark:bg-slate-900/60 p-4 text-xs leading-relaxed text-slate-700 dark:text-gray-300">
                              <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-1.5">
                                Abstract:
                              </p>
                              <p className="italic">{pub.abstract}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Actions: BibTeX Copy & Abstract Toggle */}
                      <div className="flex flex-wrap items-center gap-3 border-t border-slate-200/70 dark:border-white/10 pt-4">
                        {/* 1-Click BibTeX Copy Button */}
                        <button
                          onClick={() => handleCopyBibtex(pub.bibtex, i)}
                          className={cn(
                            "inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 font-mono text-xs font-semibold transition-all active:scale-95",
                            isCopied
                              ? "border-emerald-500 bg-emerald-500/15 text-emerald-700 dark:text-emerald-300"
                              : "border-slate-200 bg-slate-100/90 text-slate-700 hover:border-cyan-500 hover:text-cyan-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-300 dark:hover:border-cyan-400 dark:hover:text-cyan-400"
                          )}
                          title="Copy citation in BibTeX format"
                        >
                          {isCopied ? (
                            <>
                              <Check size={13} className="text-emerald-500" />
                              <span>Copied BibTeX!</span>
                            </>
                          ) : (
                            <>
                              <Copy size={13} />
                              <span>Copy BibTeX</span>
                            </>
                          )}
                        </button>

                        {/* Abstract Accordion Button */}
                        <button
                          onClick={() => toggleAbstract(i)}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-transparent px-3 py-1.5 font-mono text-xs text-slate-600 hover:border-slate-300 hover:text-slate-900 dark:border-white/10 dark:text-gray-400 dark:hover:border-white/20 dark:hover:text-gray-200 transition-colors"
                        >
                          <span>{isExpanded ? "Hide Abstract" : "View Abstract"}</span>
                          {isExpanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                        </button>
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
