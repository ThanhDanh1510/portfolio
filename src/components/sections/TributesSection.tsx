"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Sparkles,
  ExternalLink,
  MessageSquareHeart,
  Cake,
  Gamepad2,
  Quote,
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import {
  tributeWishes,
  featuredLetter,
  birthdayServerUrl,
} from "@/data/portfolio";
import SpotlightCard from "@/components/SpotlightCard";
import { cn } from "@/lib/utils";

export default function TributesSection() {
  const [lovedWishes, setLovedWishes] = useState<Record<string, boolean>>({});

  const toggleLove = (id: string) => {
    setLovedWishes((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="tributes" className="relative py-28 px-6">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[520px] w-[750px] rounded-full bg-rose-500/5 blur-[160px] dark:bg-rose-500/10" />
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
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
                  <p className="font-mono text-xs uppercase tracking-widest text-rose-600 dark:text-rose-400 font-semibold">
                    {"// Gratitude & Community"}
                  </p>
                </div>
                <h2 className="text-4xl font-black text-slate-900 dark:text-white md:text-5xl">
                  Tributes &amp; Wishes
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-gray-400">
                  Những lời chúc may mắn, ấm áp và tiếp lửa đam mê từ bạn bè, đồng đội nhân dịp sinh nhật tuổi 20 (Level 20), được lưu giữ từ{" "}
                  <span className="font-semibold text-slate-900 dark:text-white">Sổ lưu bút Danh&apos;s Birthday Server</span>.
                </p>
              </div>

              {/* Direct Link to Birthday Server */}
              <a
                href={birthdayServerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 dark:border-rose-400/20 dark:bg-rose-500/10 px-5 py-2.5 font-mono text-xs font-semibold text-rose-700 dark:text-rose-300 transition-all hover:border-rose-500 hover:bg-rose-500/20 hover:shadow-[0_0_24px_rgba(244,63,94,0.25)] hover:scale-105"
              >
                <Cake size={15} className="text-rose-500 animate-bounce" />
                <span>Ghé thăm Birthday Server</span>
                <ExternalLink size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </motion.div>

          {/* Featured Hero Card: Letter from Kho */}
          <motion.div variants={fadeInUp} className="mb-10">
            <SpotlightCard
              spotlightColor="rgba(244, 63, 94, 0.18)"
              className="border-rose-500/30 dark:border-rose-500/25 bg-gradient-to-br from-white/90 via-slate-50/80 to-rose-50/40 dark:from-white/[0.06] dark:via-[#0c1222]/80 dark:to-rose-950/20"
            >
              <div className="flex flex-col gap-6">
                {/* Header of Letter */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/80 dark:border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-rose-500 to-cyan-500 text-white font-black text-sm shadow-md">
                      kho
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-slate-900 dark:text-white text-base">
                          {featuredLetter.author}
                        </h3>
                        <span className="rounded-full bg-rose-500/10 border border-rose-500/20 px-2 py-0.5 font-mono text-[10px] text-rose-600 dark:text-rose-400">
                          {featuredLetter.role}
                        </span>
                      </div>
                      <p className="font-mono text-xs text-slate-500 dark:text-gray-400 flex items-center gap-1.5 mt-0.5">
                        <Gamepad2 size={13} className="text-cyan-500" />
                        {featuredLetter.serverMeta}
                      </p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 font-mono text-xs text-cyan-700 dark:text-cyan-300">
                    <Sparkles size={12} className="text-cyan-400" />
                    Special Featured Letter
                  </span>
                </div>

                {/* Letter Body */}
                <div className="space-y-3 font-sans text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  {featuredLetter.lines.map((line, idx) => (
                    <p
                      key={idx}
                      className={cn(
                        "rounded-xl p-3 backdrop-blur-xs transition-colors",
                        idx === 0 || idx === featuredLetter.lines.length - 1
                          ? "bg-rose-500/10 dark:bg-rose-500/10 border border-rose-500/20 font-medium text-slate-900 dark:text-rose-200"
                          : "bg-white/50 dark:bg-white/[0.03] border border-slate-100 dark:border-white/5"
                      )}
                    >
                      {line}
                    </p>
                  ))}
                </div>

                {/* Footer of Letter */}
                <div className="flex items-center justify-between border-t border-slate-200/80 dark:border-white/10 pt-4 text-xs font-mono text-slate-500 dark:text-gray-400">
                  <span className="flex items-center gap-1 text-rose-500">
                    <Heart size={13} className="fill-rose-500" /> Tri ân từ Lưu Thành Danh
                  </span>
                  <span>Roblox &amp; Real Life Duos</span>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Wishes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {tributeWishes.map((w) => {
              const isLoved = lovedWishes[w.id];
              const initial = w.name.trim().charAt(0).toUpperCase() || "?";

              return (
                <motion.div key={w.id} variants={fadeInUp}>
                  <SpotlightCard
                    spotlightColor={w.color ? `${w.color}25` : "rgba(6, 182, 212, 0.16)"}
                    className="h-full flex flex-col justify-between hover:border-slate-300 dark:hover:border-white/20"
                  >
                    <div>
                      {/* Top Header */}
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <div className="flex items-center gap-3">
                          <div
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-mono text-sm font-bold text-white shadow-xs"
                            style={{ backgroundColor: w.color || "#06b6d4" }}
                          >
                            {initial}
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                              {w.name}
                            </h4>
                            <div className="flex items-center gap-2 mt-0.5">
                              {w.tag && (
                                <span className="rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-2 py-0.2 font-mono text-[10px] text-slate-600 dark:text-gray-400">
                                  {w.tag}
                                </span>
                              )}
                              <span className="font-mono text-[10px] text-slate-400 dark:text-gray-500">
                                {w.date}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Interactive Love Button */}
                        <button
                          onClick={() => toggleLove(w.id)}
                          className={cn(
                            "flex h-8 w-8 items-center justify-center rounded-full border transition-all cursor-pointer",
                            isLoved
                              ? "border-rose-500 bg-rose-500/20 text-rose-500 scale-110 shadow-[0_0_12px_rgba(244,63,94,0.4)]"
                              : "border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 text-slate-400 hover:text-rose-500 hover:border-rose-500/40"
                          )}
                          title={isLoved ? "Loved!" : "Send love"}
                          aria-label="Send love"
                        >
                          <Heart
                            size={14}
                            className={cn("transition-transform", isLoved && "fill-rose-500 scale-110")}
                          />
                        </button>
                      </div>

                      {/* Message Content */}
                      <div className="relative mb-4">
                        <Quote
                          size={18}
                          className="absolute -top-1 -left-1 text-slate-300 dark:text-white/10 pointer-events-none"
                        />
                        <p className="pl-4 text-xs leading-relaxed text-slate-700 dark:text-slate-300 font-sans italic">
                          &ldquo;{w.message}&rdquo;
                        </p>
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="flex items-center justify-between border-t border-slate-100 dark:border-white/5 pt-3 mt-2 text-[10px] font-mono text-slate-400 dark:text-gray-500">
                      <span className="flex items-center gap-1">
                        <MessageSquareHeart size={11} className="text-rose-400" />
                        Sổ lưu bút Lv 20
                      </span>
                      {isLoved && (
                        <span className="text-rose-500 font-semibold animate-pulse">
                          ❤️ Thank you!
                        </span>
                      )}
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
