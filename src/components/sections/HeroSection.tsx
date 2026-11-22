"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, ExternalLink, Sparkles, RotateCcw, BookOpen, Cpu } from "lucide-react";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { personalInfo } from "@/data/portfolio";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import FlipCard from "@/components/FlipCard";

const ROLES = personalInfo.roles;

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  // Typing animation
  useEffect(() => {
    const target = ROLES[roleIndex];

    if (typing) {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % ROLES.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  const scrollDown = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-[100dvh] w-full items-center overflow-hidden px-6 py-20">
      {/* Animated background orbs */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/8 blur-[120px]" />
        <div className="absolute right-1/4 top-2/3 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/8 blur-[120px]" />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(6,182,212,1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Left: Text content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 dark:border-cyan-400/20 dark:bg-cyan-400/5 px-4 py-1.5 font-mono text-xs text-cyan-700 dark:text-cyan-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-500 dark:bg-cyan-400" />
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl font-black tracking-tight text-slate-900 dark:text-white md:text-6xl lg:text-7xl"
          >
            {personalInfo.name.split(" ").map((word, i) => (
              <span
                key={i}
                className={cn(
                  "block",
                  i === personalInfo.name.split(" ").length - 1 &&
                    "text-transparent [-webkit-text-stroke:1px_rgba(6,182,212,0.8)] dark:[-webkit-text-stroke:1px_rgba(6,182,212,0.6)]"
                )}
              >
                {word}
              </span>
            ))}
          </motion.h1>

          <motion.div variants={fadeInUp} className="h-10">
            <p className="font-mono text-xl text-cyan-600 dark:text-cyan-400 md:text-2xl">
              {displayed}
              <span className="animate-[blink_1s_step-end_infinite] text-cyan-500 dark:text-cyan-300">|</span>
            </p>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="max-w-md text-base leading-relaxed text-slate-600 dark:text-gray-400"
          >
            {personalInfo.bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
            <button
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              className="group relative overflow-hidden rounded-full border border-cyan-500/40 bg-cyan-500/10 dark:border-cyan-400/30 dark:bg-cyan-400/10 px-7 py-3 font-mono text-sm text-cyan-700 dark:text-cyan-300 transition-all hover:border-cyan-500 hover:bg-cyan-500/20 dark:hover:border-cyan-400/60 dark:hover:bg-cyan-400/20 hover:shadow-[0_0_24px_rgba(6,182,212,0.25)]"
            >
              View Projects
            </button>
            <a
              href="/cv.pdf"
              download
              className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-300 px-7 py-3 font-mono text-sm transition-all hover:border-slate-300 hover:bg-slate-200/80 dark:hover:border-white/20 dark:hover:bg-white/10"
            >
              <ArrowDown size={14} />
              Download CV
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={fadeInUp} className="flex items-center gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 font-mono text-xs text-slate-500 dark:text-gray-500 transition-colors hover:text-cyan-600 dark:hover:text-cyan-400"
            >
              <Mail size={14} />
              {personalInfo.email}
            </a>
            <span className="text-slate-300 dark:text-gray-700">·</span>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-slate-500 dark:text-gray-500 transition-colors hover:text-cyan-600 dark:hover:text-cyan-400"
            >
              <GitHubIcon size={14} />
              GitHub
            </a>
            <span className="text-slate-300 dark:text-gray-700">·</span>
            <a
              href={personalInfo.orcid}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-slate-500 dark:text-gray-500 transition-colors hover:text-cyan-600 dark:hover:text-cyan-400"
            >
              <ExternalLink size={14} />
              ORCID
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Interactive 3D FlipCard */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="flex h-[520px] w-full items-center justify-center"
        >
          <FlipCard
            axis="y"
            flipOnClick
            draggable
            dragDistance={0}
            tilt
            tiltMax={14}
            glare
            glareOpacity={0.24}
            hoverScale={1.03}
            perspective={1100}
            stiffness={170}
            damping={20}
            width={340}
            height={470}
            radius={24}
            background="#0d1829"
            color="#f5f5f5"
            shadow
            shadowColor="#06b6d4"
            shadowOpacity={0.3}
            front={
              <div className="relative h-full w-full overflow-hidden rounded-[24px] border border-cyan-400/30 bg-slate-900 select-none">
                {/* Avatar Image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/avatar.jpg"
                  alt="Luu Thanh Danh"
                  className="h-full w-full object-cover"
                />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-slate-950/70 px-3 py-1 font-mono text-[11px] text-cyan-300 backdrop-blur-md">
                    <span className="h-2 w-2 animate-ping rounded-full bg-cyan-400" />
                    HCMUS · Data Science
                  </span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-slate-950/70 text-cyan-400 backdrop-blur-md">
                    <Sparkles size={13} />
                  </span>
                </div>

                {/* Bottom info glass overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-5 pt-12 backdrop-blur-xs">
                  <p className="font-mono text-xs uppercase tracking-wider text-cyan-400">
                    AI / ML Engineer
                  </p>
                  <h3 className="text-xl font-bold text-white drop-shadow">
                    Luu Thanh Danh
                  </h3>
                  <div className="mt-2 flex items-center justify-between border-t border-white/10 pt-2 text-[11px] font-mono text-gray-400">
                    <span>2024 – 2028</span>
                    <span className="flex items-center gap-1 text-cyan-300">
                      <RotateCcw size={10} className="animate-spin" style={{ animationDuration: '6s' }} /> Click or drag to flip
                    </span>
                  </div>
                </div>
              </div>
            }
            back={
              <div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-[24px] border border-purple-500/40 bg-gradient-to-b from-slate-950 via-[#0a1426] to-slate-950 p-6 select-none">
                {/* Header */}
                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div>
                      <span className="font-mono text-xs font-semibold text-cyan-400">
                        RESEARCH &amp; SYSTEMS
                      </span>
                      <h4 className="text-lg font-bold text-white">Profile Highlights</h4>
                    </div>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 font-mono text-xs font-bold">
                      LTD
                    </span>
                  </div>

                  {/* Highlights List */}
                  <div className="mt-4 space-y-3 font-mono text-xs">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                      <p className="flex items-center gap-1.5 font-bold text-cyan-300">
                        <BookOpen size={13} /> Publications (2026)
                      </p>
                      <p className="mt-1 text-[11px] text-gray-400">
                        • Springer CCIS: Interactive Video Retrieval
                        <br />
                        • ECCV Workshops: GeoRoute Diffusion
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                      <p className="flex items-center gap-1.5 font-bold text-purple-300">
                        <Cpu size={13} /> AIC 2026 Multimodal
                      </p>
                      <p className="mt-1 text-[11px] text-gray-400">
                        88,899+ Keyframes · Qdrant &amp; Milvus · &lt;1.5s latency
                      </p>
                    </div>
                  </div>

                  {/* Skills tags */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {["PyTorch", "Transformers", "BEiT-3", "CUDA", "FastAPI"].map(t => (
                      <span key={t} className="rounded-md border border-cyan-500/20 bg-cyan-500/5 px-2 py-0.5 text-[10px] text-cyan-300 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="border-t border-white/10 pt-3 flex items-center justify-between text-[11px] font-mono text-gray-400">
                  <span className="text-cyan-400 font-semibold">HCMUS Science</span>
                  <span className="flex items-center gap-1 text-purple-300">
                    <RotateCcw size={11} /> Flip to photo
                  </span>
                </div>
              </div>
            }
          />
        </motion.div>
      </div>

      {/* Scroll down indicator */}
      <button
        onClick={scrollDown}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-400 dark:text-gray-600 transition-colors hover:text-cyan-600 dark:hover:text-cyan-400"
        aria-label="Scroll down"
      >
        <ArrowDown size={22} />
      </button>
    </section>
  );
}
