"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Search, Play, Pause, Activity, Sparkles, CheckCircle2 } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { projects, type Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import SpotlightCard from "@/components/SpotlightCard";

// Mockup 1: AIC 2026 Keyframe Retrieval Engine
function AICKeyframeMockup() {
  const queries = [
    {
      text: "traffic incident at intersection",
      latency: "1.18s",
      frames: [
        { time: "00:14:22", score: "98.6%", tag: "Dense Hit", rank: "#1" },
        { time: "00:14:38", score: "94.2%", tag: "BM25 Sparse", rank: "#2" },
        { time: "00:15:02", score: "91.8%", tag: "TRAKE DP", rank: "#3" },
      ],
    },
    {
      text: "red delivery drone near building",
      latency: "1.04s",
      frames: [
        { time: "00:08:45", score: "97.2%", tag: "Dense Hit", rank: "#1" },
        { time: "00:09:02", score: "93.5%", tag: "ViRanker", rank: "#2" },
        { time: "00:09:18", score: "90.4%", tag: "TRAKE DP", rank: "#3" },
      ],
    },
    {
      text: "pedestrian running with umbrella",
      latency: "1.22s",
      frames: [
        { time: "00:23:19", score: "96.8%", tag: "Dense Hit", rank: "#1" },
        { time: "00:23:35", score: "92.7%", tag: "BM25 Sparse", rank: "#2" },
        { time: "00:24:01", score: "89.6%", tag: "ViRanker", rank: "#3" },
      ],
    },
  ];
  const [queryIdx, setQueryIdx] = useState(0);
  const activeQuery = queries[queryIdx];

  return (
    <div className="mt-4 mb-4 rounded-2xl border border-cyan-500/25 bg-slate-950/70 p-3.5 text-xs font-mono text-slate-200 dark:bg-black/60">
      {/* Search Bar Input */}
      <div className="flex items-center justify-between gap-2 rounded-lg border border-cyan-500/30 bg-cyan-950/30 px-3 py-2 text-cyan-300">
        <div className="flex items-center gap-2 overflow-hidden truncate">
          <Search size={13} className="text-cyan-400 shrink-0" />
          <span className="text-[11px] text-cyan-200/90 truncate">
            query: &ldquo;{activeQuery.text}&rdquo;
          </span>
        </div>
        <button
          onClick={() => setQueryIdx((i) => (i + 1) % queries.length)}
          className="shrink-0 rounded bg-cyan-500/20 px-1.5 py-0.5 text-[10px] text-cyan-300 hover:bg-cyan-500/30 transition-colors cursor-pointer"
          title="Try next sample query"
        >
          cycle
        </button>
      </div>

      {/* Latency & Match Info */}
      <div className="mt-2.5 flex items-center justify-between text-[10px] text-slate-400">
        <span className="flex items-center gap-1 text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Latency: {activeQuery.latency} (sub-1.5s)
        </span>
        <span className="text-cyan-300">88,899 vectors · RRF #1</span>
      </div>

      {/* 3 Keyframe Cards */}
      <div className="mt-2.5 grid grid-cols-3 gap-2">
        {activeQuery.frames.map((frame, i) => (
          <div
            key={i}
            className={cn(
              "relative overflow-hidden rounded-lg border p-1.5 transition-all",
              i === 0
                ? "border-cyan-400/60 bg-cyan-500/10 shadow-[0_0_12px_rgba(6,182,212,0.25)]"
                : "border-slate-800 bg-slate-900/60 text-slate-400"
            )}
          >
            {/* Visual thumbnail mockup */}
            <div className="relative h-10 w-full rounded bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-400 via-transparent to-transparent" />
              {i === 0 && (
                <div className="absolute inset-1.5 border border-dashed border-cyan-400/70 rounded-xs flex items-center justify-center">
                  <span className="text-[9px] font-bold text-cyan-300">TARGET</span>
                </div>
              )}
              <span className="text-[9px] font-mono text-slate-400">{frame.time}</span>
            </div>
            <div className="mt-1 flex items-center justify-between text-[9px]">
              <span className={i === 0 ? "text-cyan-300 font-bold" : "text-slate-400"}>
                {frame.rank} {frame.score}
              </span>
              <span className="text-[8px] text-slate-400">{frame.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Mockup 2: LifeMate Voice-to-Action Audio Waveform & Agent Pipeline
function LifeMateWaveformMockup() {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div className="mt-4 mb-4 rounded-2xl border border-purple-500/25 bg-slate-950/70 p-3.5 text-xs font-mono text-slate-200 dark:bg-black/60">
      {/* Waveform Header & Control */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 transition-colors cursor-pointer"
            title={isPlaying ? "Pause Waveform" : "Play Waveform"}
          >
            {isPlaying ? <Pause size={10} /> : <Play size={10} />}
          </button>
          <span className="text-[11px] text-purple-300 font-medium">Vietnamese Audio Stream</span>
        </div>
        <span className="rounded-full bg-purple-500/15 border border-purple-500/30 px-2 py-0.5 text-[9px] text-purple-300">
          0 MB VRAM ASR
        </span>
      </div>

      {/* Dynamic Audio Waveform Bars */}
      <div className="mt-3 flex h-9 items-center justify-between gap-0.5 px-1 rounded-lg bg-slate-900/60 border border-purple-500/20">
        {[
          40, 65, 85, 30, 95, 70, 50, 100, 75, 45, 90, 60, 80, 55, 95, 70, 40, 85, 60, 35,
          75, 50, 65, 30,
        ].map((val, idx) => (
          <motion.div
            key={idx}
            className="w-1 rounded-full bg-gradient-to-t from-purple-500 to-cyan-400"
            animate={
              isPlaying
                ? {
                    height: [`${val * 0.25}%`, `${val}%`, `${val * 0.4}%`],
                  }
                : { height: "20%" }
            }
            transition={{
              duration: 1.1,
              repeat: Infinity,
              repeatType: "mirror",
              delay: (idx * 0.04) % 0.6,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Pipeline Flow */}
      <div className="mt-3 flex items-center justify-between text-[9px] text-slate-300 border-t border-purple-500/20 pt-2.5">
        <span className="text-purple-300">Gipformer ONNX</span>
        <span className="text-slate-400">➔</span>
        <span className="text-cyan-300">Qwen3.5 LoRA</span>
        <span className="text-slate-400">➔</span>
        <span className="text-emerald-400 flex items-center gap-1 font-bold">
          <CheckCircle2 size={10} /> 60+ API Exec
        </span>
      </div>
    </div>
  );
}

// Mockup 3: Olympic AI ConvNet Skip-Connection
function ConvNetSkipConnectionMockup() {
  const [pulse, setPulse] = useState(0);

  return (
    <div className="mt-4 mb-4 rounded-2xl border border-emerald-500/25 bg-slate-950/70 p-3.5 text-xs font-mono text-slate-200 dark:bg-black/60">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-[11px] text-emerald-300 font-medium">
          <Activity size={12} className="text-emerald-400" />
          Residual Block [F(X) + X]
        </span>
        <button
          onClick={() => setPulse((p) => p + 1)}
          className="rounded bg-emerald-500/20 px-2 py-0.5 text-[10px] text-emerald-300 hover:bg-emerald-500/30 transition-colors cursor-pointer active:scale-95 flex items-center gap-1"
          title="Trigger feedforward signal pulse"
        >
          <Sparkles size={10} /> pulse
        </button>
      </div>

      {/* SVG Skip Connection Visual Diagram */}
      <div className="mt-2.5 rounded-lg bg-slate-900/70 border border-emerald-500/20 p-2 overflow-hidden">
        <svg
          viewBox="0 0 320 86"
          className="w-full h-auto"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Identity Skip Connection Path (curved line above) */}
          <path
            d="M 44 56 L 44 20 Q 44 14 52 14 L 244 14 Q 252 14 252 20 L 252 44"
            stroke="rgba(52, 211, 153, 0.5)"
            strokeWidth="1.5"
            strokeDasharray="3 3"
          />
          {/* Skip Connection Label */}
          <text
            x="148"
            y="11"
            textAnchor="middle"
            fill="#34d399"
            fontSize="8"
            fontFamily="monospace"
            fontWeight="bold"
          >
            Identity Shortcut (Skip): + X
          </text>

          {/* Animated Pulse along Skip Connection */}
          <motion.circle
            key={pulse}
            r="3.5"
            fill="#06b6d4"
            initial={{ cx: 44, cy: 56, opacity: 0 }}
            animate={{
              cx: [44, 44, 148, 252, 252],
              cy: [56, 14, 14, 14, 44],
              opacity: [0, 1, 1, 1, 0],
            }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
          />

          {/* Main Feedforward Path */}
          {/* Input X */}
          <g>
            <rect
              x="8"
              y="44"
              width="44"
              height="24"
              rx="5"
              fill="rgba(52, 211, 153, 0.15)"
              stroke="rgba(52, 211, 153, 0.4)"
              strokeWidth="1"
            />
            <text
              x="30"
              y="59"
              textAnchor="middle"
              fill="#6ee7b7"
              fontSize="9"
              fontFamily="monospace"
              fontWeight="bold"
            >
              Input X
            </text>
          </g>

          {/* Arrow 1 */}
          <path d="M 54 56 L 70 56" stroke="#34d399" strokeWidth="1.5" />

          {/* Conv Block 1 */}
          <g>
            <rect
              x="72"
              y="44"
              width="68"
              height="24"
              rx="5"
              fill="rgba(6, 182, 212, 0.15)"
              stroke="rgba(6, 182, 212, 0.4)"
              strokeWidth="1"
            />
            <text
              x="106"
              y="55"
              textAnchor="middle"
              fill="#67e8f9"
              fontSize="8"
              fontFamily="monospace"
              fontWeight="bold"
            >
              Conv 3x3
            </text>
            <text
              x="106"
              y="63"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="6.5"
              fontFamily="monospace"
            >
              BN + LeakyReLU
            </text>
          </g>

          {/* Arrow 2 */}
          <path d="M 142 56 L 158 56" stroke="#06b6d4" strokeWidth="1.5" />

          {/* Conv Block 2 */}
          <g>
            <rect
              x="160"
              y="44"
              width="68"
              height="24"
              rx="5"
              fill="rgba(6, 182, 212, 0.15)"
              stroke="rgba(6, 182, 212, 0.4)"
              strokeWidth="1"
            />
            <text
              x="194"
              y="55"
              textAnchor="middle"
              fill="#67e8f9"
              fontSize="8"
              fontFamily="monospace"
              fontWeight="bold"
            >
              Conv 3x3
            </text>
            <text
              x="194"
              y="63"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="6.5"
              fontFamily="monospace"
            >
              BN
            </text>
          </g>

          {/* Arrow 3 */}
          <path d="M 230 56 L 240 56" stroke="#06b6d4" strokeWidth="1.5" />

          {/* Addition Node (+) */}
          <g>
            <circle
              cx="252"
              cy="56"
              r="11"
              fill="rgba(52, 211, 153, 0.25)"
              stroke="#34d399"
              strokeWidth="1.5"
            />
            <text
              x="252"
              y="60"
              textAnchor="middle"
              fill="#a7f3d0"
              fontSize="12"
              fontFamily="monospace"
              fontWeight="bold"
            >
              +
            </text>
          </g>

          {/* Arrow 4 to Output */}
          <path d="M 265 56 L 275 56" stroke="#34d399" strokeWidth="1.5" />

          {/* Output Node */}
          <g>
            <rect
              x="276"
              y="44"
              width="38"
              height="24"
              rx="5"
              fill="rgba(52, 211, 153, 0.15)"
              stroke="rgba(52, 211, 153, 0.4)"
              strokeWidth="1"
            />
            <text
              x="295"
              y="55"
              textAnchor="middle"
              fill="#6ee7b7"
              fontSize="8"
              fontFamily="monospace"
              fontWeight="bold"
            >
              F(x)+x
            </text>
            <text
              x="295"
              y="63"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="6"
              fontFamily="monospace"
            >
              ReLU
            </text>
          </g>
        </svg>
      </div>

      {/* Training Telemetry */}
      <div className="mt-2.5 flex items-center justify-between text-[10px] border-t border-emerald-500/20 pt-2 text-slate-400">
        <span className="text-emerald-400 font-bold">Loss: 0.042 (converged)</span>
        <span className="text-cyan-300">Val Acc: 94.8%</span>
        <span className="text-slate-400">Kaiming Init · smooth=0.05</span>
      </div>
    </div>
  );
}

const colorMap: Record<
  Project["color"],
  {
    badge: string;
    metric: string;
    border: string;
    glow: string;
    spotlight: string;
  }
> = {
  cyan: {
    badge:
      "bg-cyan-500/10 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border-cyan-500/30 dark:border-cyan-700",
    metric: "text-cyan-600 dark:text-cyan-400",
    border: "hover:border-cyan-500/60",
    glow: "hover:shadow-[0_0_36px_rgba(6,182,212,0.22)]",
    spotlight: "rgba(6, 182, 212, 0.18)",
  },
  purple: {
    badge:
      "bg-purple-500/10 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border-purple-500/30 dark:border-purple-700",
    metric: "text-purple-600 dark:text-purple-400",
    border: "hover:border-purple-500/60",
    glow: "hover:shadow-[0_0_36px_rgba(167,139,250,0.22)]",
    spotlight: "rgba(167, 139, 250, 0.18)",
  },
  green: {
    badge:
      "bg-emerald-500/10 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-500/30 dark:border-emerald-700",
    metric: "text-emerald-600 dark:text-emerald-400",
    border: "hover:border-emerald-500/60",
    glow: "hover:shadow-[0_0_36px_rgba(52,211,153,0.22)]",
    spotlight: "rgba(52, 211, 153, 0.18)",
  },
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-28 px-6">
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
          <motion.div variants={fadeInUp} className="mb-14">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-2 w-2 rounded-full bg-cyan-500" />
              <p className="font-mono text-xs uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
                {"// Featured AI & ML Systems"}
              </p>
            </div>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white md:text-5xl">
              Projects &amp; Systems
            </h2>
            <p className="mt-3 max-w-2xl text-slate-600 dark:text-gray-400 text-sm">
              Production-grade multimodal search architectures, autonomous low-latency voice
              agents, and deep convolutional vision backbones.
            </p>
          </motion.div>

          {/* 3 Bento Project Cards */}
          <div className="grid grid-cols-1 gap-7 lg:grid-cols-3">
            {projects.map((p, idx) => {
              const c = colorMap[p.color];
              return (
                <motion.div key={p.title} variants={fadeInUp} className="h-full">
                  <SpotlightCard
                    spotlightColor={c.spotlight}
                    spotlightSize={420}
                    className={cn(
                      "h-full flex flex-col justify-between border-slate-200/90 dark:border-white/10",
                      c.border,
                      c.glow
                    )}
                  >
                    <div>
                      {/* Card Header */}
                      <div className="mb-4 flex items-start justify-between gap-2">
                        <span
                          className={cn(
                            "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-xs font-semibold",
                            c.badge
                          )}
                        >
                          <Sparkles size={11} />
                          {p.subtitle}
                        </span>
                        <span className="font-mono text-xs font-medium text-slate-500 dark:text-gray-400">
                          {p.year}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="mb-2.5 text-lg font-bold leading-snug text-slate-900 dark:text-white transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
                        {p.title}
                      </h3>

                      {/* Interactive Visual Mockup Demo */}
                      {idx === 0 && <AICKeyframeMockup />}
                      {idx === 1 && <LifeMateWaveformMockup />}
                      {idx === 2 && <ConvNetSkipConnectionMockup />}

                      {/* Description */}
                      <p className="mb-4 text-xs leading-relaxed text-slate-600 dark:text-gray-300/90">
                        {p.description}
                      </p>

                      {/* Tags */}
                      <div className="mb-5 flex flex-wrap gap-1.5">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-slate-200 bg-slate-100/90 dark:border-white/10 dark:bg-white/5 px-2.5 py-0.5 font-mono text-[11px] text-slate-700 dark:text-gray-300 font-medium"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="flex items-center justify-between border-t border-slate-200/80 dark:border-white/10 pt-4 mt-auto">
                      <span className={cn("font-mono text-xs font-bold", c.metric)}>
                        {p.highlight}
                      </span>
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 font-mono text-xs font-semibold text-slate-700 transition-all hover:border-cyan-500 hover:text-cyan-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-300 dark:hover:border-cyan-400 dark:hover:text-cyan-400"
                      >
                        Code <ArrowUpRight size={13} />
                      </a>
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
