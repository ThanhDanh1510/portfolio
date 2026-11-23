"use client";

import React, { useState, useRef, useEffect } from "react";
import { CornerDownLeft, Sparkles, Copy, Check } from "lucide-react";

interface CommandLog {
  id: string;
  command: string;
  output: React.ReactNode;
}

const INITIAL_LOGS: CommandLog[] = [
  {
    id: "init-1",
    command: "whoami",
    output: (
      <div className="space-y-1 text-slate-300">
        <p className="font-bold text-cyan-400">Luu Thanh Danh // AI Engineer &amp; ML Researcher</p>
        <p className="text-slate-400">
          • Institution: VNUHCM - University of Science (BSc Data Science, Year 3)
        </p>
        <p className="text-slate-400">
          • Focus: Multimodal Retrieval (BEiT-3, TRAKE DP), Low-Latency Voice Agents (LoRA Soup, vLLM)
        </p>
        <p className="text-slate-400">
          • Publications: Springer CCIS (2026), ECCV Workshops (2026)
        </p>
        <p className="text-slate-400">
          • Honors: HCMC AI Challenge (AIC 2024 &amp; 2025 Winner), Zalo AI Challenge 2026
        </p>
      </div>
    ),
  },
];

const QUICK_COMMANDS = [
  { label: "run aic2026", cmd: "run aic2026", desc: "Simulate Multimodal Video Retrieval" },
  { label: "run lifemate", cmd: "run lifemate", desc: "Simulate Voice-to-Action Agent" },
  { label: "cat skills", cmd: "cat skills", desc: "Display Tech Stack Matrix" },
  { label: "projects", cmd: "projects", desc: "List Featured Production Systems" },
  { label: "publications", cmd: "publications", desc: "View Springer & ECCV Papers" },
  { label: "wishes", cmd: "wishes", desc: "View Birthday Tributes & Guestbook" },
  { label: "help", cmd: "help", desc: "List all terminal commands" },
  { label: "clear", cmd: "clear", desc: "Clear terminal screen" },
];

export default function AITerminal() {
  const [logs, setLogs] = useState<CommandLog[]>(INITIAL_LOGS);
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<string[]>(["whoami"]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const [copied, setCopied] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto scroll to bottom
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  const executeCommand = (cmdStr: string) => {
    const rawCmd = cmdStr.trim();
    const trimmed = rawCmd.toLowerCase();
    if (!trimmed) return;

    setHistory((prev) => [...prev, rawCmd]);
    setHistoryIdx(-1);

    if (trimmed === "clear" || trimmed === "cls") {
      setLogs([]);
      setInputVal("");
      return;
    }

    let outputNode: React.ReactNode = null;

    switch (trimmed) {
      case "help":
      case "?":
        outputNode = (
          <div className="space-y-1.5 text-xs text-slate-300">
            <p className="text-cyan-400 font-semibold">{"// Available Terminal Commands:"}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
              <div>
                <span className="text-emerald-400 font-bold">whoami</span>
                <span className="text-slate-400"> - Bio, research focus &amp; education</span>
              </div>
              <div>
                <span className="text-emerald-400 font-bold">projects</span>
                <span className="text-slate-400"> - Overview of key AI &amp; ML systems</span>
              </div>
              <div>
                <span className="text-emerald-400 font-bold">run aic2026</span>
                <span className="text-slate-400"> - Video retrieval engine test run</span>
              </div>
              <div>
                <span className="text-emerald-400 font-bold">run lifemate</span>
                <span className="text-slate-400"> - Voice-to-Action agent pipeline</span>
              </div>
              <div>
                <span className="text-emerald-400 font-bold">cat skills</span>
                <span className="text-slate-400"> - Core technical competencies matrix</span>
              </div>
              <div>
                <span className="text-emerald-400 font-bold">publications</span>
                <span className="text-slate-400"> - Springer &amp; ECCV paper records</span>
              </div>
              <div>
                <span className="text-emerald-400 font-bold">wishes</span>
                <span className="text-slate-400"> - Birthday guestbook &amp; tributes</span>
              </div>
              <div>
                <span className="text-emerald-400 font-bold">ls</span>
                <span className="text-slate-400"> - Inspect virtual directory files</span>
              </div>
              <div>
                <span className="text-emerald-400 font-bold">contact</span>
                <span className="text-slate-400"> - Direct email, GitHub &amp; ORCID</span>
              </div>
              <div>
                <span className="text-emerald-400 font-bold">date</span>
                <span className="text-slate-400"> - Live Ho Chi Minh City UTC+7 clock</span>
              </div>
              <div>
                <span className="text-emerald-400 font-bold">clear</span>
                <span className="text-slate-400"> - Wipe terminal screen</span>
              </div>
            </div>
          </div>
        );
        break;

      case "whoami":
      case "bio":
      case "about":
      case "cat about":
      case "cat about.md":
      case "cat about.txt":
        outputNode = (
          <div className="space-y-1 text-slate-300">
            <p className="font-bold text-cyan-400">Luu Thanh Danh // AI Engineer &amp; ML Researcher</p>
            <p className="text-slate-400">
              • Institution: VNUHCM - University of Science (BSc Data Science, 3rd Year)
            </p>
            <p className="text-slate-400">
              • Specialization: Multimodal Video Retrieval, Agentic LLM Orchestration, Deep CNNs
            </p>
            <p className="text-slate-400">
              • Published: Springer CCIS (2026) · ECCV Workshops (2026)
            </p>
            <p className="text-slate-400">
              • GitHub:{" "}
              <a
                href="https://github.com/ThanhDanh1510"
                target="_blank"
                rel="noreferrer"
                className="text-cyan-400 underline hover:text-cyan-300"
              >
                https://github.com/ThanhDanh1510
              </a>
            </p>
            <p className="text-slate-400">
              • ORCID:{" "}
              <a
                href="https://orcid.org/0009-0003-5632-6317"
                target="_blank"
                rel="noreferrer"
                className="text-cyan-400 underline hover:text-cyan-300"
              >
                0009-0003-5632-6317
              </a>
            </p>
          </div>
        );
        break;

      case "ls":
      case "dir":
        outputNode = (
          <div className="space-y-1 text-xs font-mono">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-cyan-300">
              <div>
                <span className="text-purple-400 font-bold">projects/</span>
              </div>
              <div>
                <span className="text-emerald-400">about.md</span>
              </div>
              <div>
                <span className="text-emerald-400">skills.json</span>
              </div>
              <div>
                <span className="text-amber-400">publications.bib</span>
              </div>
              <div>
                <span className="text-cyan-400">cv.pdf</span>
              </div>
              <div>
                <span className="text-slate-400">contact.vcf</span>
              </div>
              <div>
                <span className="text-emerald-400 font-bold">aic2026.sh*</span>
              </div>
              <div>
                <span className="text-emerald-400 font-bold">lifemate.py*</span>
              </div>
            </div>
            <p className="text-[11px] text-slate-500 pt-1">
              Hint: use &apos;cat &lt;file&gt;&apos; or &apos;run &lt;script&gt;&apos; to examine contents.
            </p>
          </div>
        );
        break;

      case "projects":
      case "ls projects":
        outputNode = (
          <div className="space-y-2 text-xs font-mono">
            <p className="text-cyan-400 font-bold">{"// Featured Production AI Systems:"}</p>
            <div className="space-y-1.5 pl-1">
              <div className="border-l-2 border-cyan-400 pl-2">
                <p className="font-bold text-white">1. Super Multimodal Video Retrieval Engine (AIC 2026)</p>
                <p className="text-slate-400 text-[11px]">
                  BEiT-3 + Qdrant/Milvus · &lt;1.5s latency across 88,899 keyframes
                </p>
              </div>
              <div className="border-l-2 border-purple-400 pl-2">
                <p className="font-bold text-white">2. Autonomous Voice-to-Action Agent (LifeMate · Zalo AI 2026)</p>
                <p className="text-slate-400 text-[11px]">
                  0 MB VRAM ASR (CPU ONNX) · Qwen3.5 LoRA Soup · 60+ APIs executed
                </p>
              </div>
              <div className="border-l-2 border-emerald-400 pl-2">
                <p className="font-bold text-white">3. Deep Residual Vision Pipeline (Olympic AI 2025)</p>
                <p className="text-slate-400 text-[11px]">
                  ResNet skip-connections · Kaiming init · PyTorch CUDA
                </p>
              </div>
            </div>
          </div>
        );
        break;

      case "run aic2026":
      case "aic2026":
      case "aic":
      case "./aic2026.sh":
        outputNode = (
          <div className="space-y-1 text-xs font-mono">
            <p className="text-cyan-400 font-bold">
              [AIC2026] Initializing Super Multimodal Video Retrieval Engine...
            </p>
            <p className="text-slate-400">
              [+0.012s] Connecting vector indexes: Qdrant (88,899 vectors) &amp; Milvus IVFFlat...
            </p>
            <p className="text-slate-300">
              [+0.045s] Input query:{" "}
              <span className="text-amber-300">&quot;traffic incident at intersection&quot;</span>
            </p>
            <p className="text-slate-400">
              [+0.180s] BEiT-3 Multimodal Embedding: 768-dim dense representation extracted.
            </p>
            <p className="text-slate-400">
              [+0.420s] Hybrid Search: Multi-branch Dense Cosine + Elasticsearch BM25.
            </p>
            <p className="text-slate-400">
              [+0.790s] DANTE Temporal DP (TRAKE) aligned 4 sequence candidate intervals.
            </p>
            <p className="text-slate-400">
              [+1.120s] ViRanker + Jina Dual Reranking via Reciprocal Rank Fusion (RRF)...
            </p>
            <p className="text-emerald-400 font-bold">
              [+1.285s] MATCH FOUND: Top-1 keyframe located at Video_L21_V014 (frame 00:14:22).
            </p>
            <div className="mt-1.5 rounded border border-emerald-500/30 bg-emerald-950/20 p-2 text-[11px] text-emerald-300">
              ✓ Overall Latency: 1.285s (Constraint: &lt;1.50s) | Confidence: 98.6% | Status: 200 OK
            </div>
          </div>
        );
        break;

      case "run lifemate":
      case "lifemate":
      case "python lifemate.py":
      case "./lifemate.py":
        outputNode = (
          <div className="space-y-1 text-xs font-mono">
            <p className="text-purple-400 font-bold">
              [LifeMate] Starting Autonomous Voice-to-Action AI Agent...
            </p>
            <p className="text-slate-400">
              [+0.000s] Audio capture: 16kHz mono Vietnamese speech stream.
            </p>
            <p className="text-slate-400">
              [+0.185s] ASR Inference: Gipformer 1.5 via ONNX Runtime on CPU (0 MB VRAM used!).
            </p>
            <p className="text-slate-300">
              [+0.210s] Transcribed text:{" "}
              <span className="text-purple-300">
                &quot;Bật quạt thông gió và báo cáo nhiệt độ phòng server&quot;
              </span>
            </p>
            <p className="text-slate-400">
              [+0.340s] LLM: Qwen3.5-4B LoRA Soup (5 domain adapters merged, r=160).
            </p>
            <p className="text-slate-400">
              [+0.520s] 4-Tier Guardrail Verification: Passed (Syntax, Security, Role, Schema).
            </p>
            <p className="text-cyan-300">
              [+0.610s] Tool Call: smart_home.set_fan_state(power=True, mode=&quot;ventilation&quot;)
            </p>
            <p className="text-cyan-300">
              [+0.690s] Tool Call: telemetry.get_temperature(zone=&quot;server_room&quot;) -&gt; 22.4°C
            </p>
            <p className="text-emerald-400 font-bold">
              [+0.750s] Agent Response: &quot;Đã bật quạt thông gió. Nhiệt độ phòng server hiện là 22.4°C.&quot;
            </p>
            <div className="mt-1.5 rounded border border-purple-500/30 bg-purple-950/20 p-2 text-[11px] text-purple-200">
              ✓ Accuracy: 625/625 test cases (0% error rate) | vLLM Prefix Caching: HIT
            </div>
          </div>
        );
        break;

      case "cat skills":
      case "cat skills.json":
      case "skills":
        outputNode = (
          <div className="space-y-1.5 text-xs font-mono text-slate-300">
            <p className="text-cyan-400 font-bold">{"// Technical Stack Matrix:"}</p>
            <div className="rounded border border-slate-700 bg-slate-900/60 p-2.5 text-[11px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div>
                  <span className="text-cyan-300 font-bold">[AI &amp; Deep Learning]</span>
                  <p className="text-slate-400">PyTorch, Transformers, Qwen LLM, LoRA/PEFT, BEiT-3, ASR, CNNs</p>
                </div>
                <div>
                  <span className="text-purple-300 font-bold">[CV &amp; Retrieval]</span>
                  <p className="text-slate-400">OpenCV, Qdrant, Milvus, Elasticsearch, Dense+BM25, ViRanker</p>
                </div>
                <div>
                  <span className="text-emerald-300 font-bold">[MLOps &amp; Infra]</span>
                  <p className="text-slate-400">Docker, vLLM, ONNX Runtime, FastAPI, Pydantic, uv, Git</p>
                </div>
                <div>
                  <span className="text-pink-300 font-bold">[Languages &amp; Data]</span>
                  <p className="text-slate-400">Python, C/C++, SQL, TypeScript, Bash, NumPy, Pandas, DuckDB</p>
                </div>
              </div>
            </div>
          </div>
        );
        break;

      case "publications":
      case "cat publications.bib":
      case "papers":
      case "pub":
        outputNode = (
          <div className="space-y-2 text-xs font-mono">
            <p className="text-cyan-400 font-bold">{"// Peer-Reviewed Research Publications:"}</p>
            <div className="space-y-1.5">
              <div className="rounded border border-amber-500/30 bg-amber-950/15 p-2">
                <span className="text-amber-400 font-bold">[Springer CCIS 2026]</span>
                <p className="text-slate-200">
                  Integrated Semantic and Temporal Alignment for Interactive Video Retrieval
                </p>
                <a
                  href="https://doi.org/10.1007/978-981-92-2584-2_8"
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-400 underline text-[11px]"
                >
                  doi: 10.1007/978-981-92-2584-2_8
                </a>
              </div>
              <div className="rounded border border-purple-500/30 bg-purple-950/15 p-2">
                <span className="text-purple-300 font-bold">[ECCV Workshops 2026]</span>
                <p className="text-slate-200">
                  GeoRoute: Geometry-Aware Hybrid Inference for Traffic Future-Frame Prediction
                </p>
                <a
                  href="https://arxiv.org/abs/2608.09493"
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-400 underline text-[11px]"
                >
                  arxiv: 2608.09493
                </a>
              </div>
            </div>
          </div>
        );
        break;

      case "cv":
      case "cat cv":
      case "cat cv.pdf":
      case "resume":
        outputNode = (
          <div className="space-y-1 text-xs font-mono text-slate-300">
            <p className="text-cyan-400 font-bold">{"// Luu Thanh Danh - Curriculum Vitae:"}</p>
            <p className="text-slate-400">Download the full academic &amp; industry CV:</p>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-1.5 text-emerald-400 underline hover:text-emerald-300 font-bold"
            >
              ➔ Download /cv.pdf (PDF Document)
            </a>
          </div>
        );
        break;

      case "contact":
      case "email":
        outputNode = (
          <div className="space-y-1 text-xs font-mono text-slate-300">
            <p className="text-cyan-400 font-bold">{"// Direct Contact Information:"}</p>
            <p>• Email: <a href="mailto:thanhdanh15102006@gmail.com" className="text-emerald-400 underline">thanhdanh15102006@gmail.com</a></p>
            <p>• GitHub: <a href="https://github.com/ThanhDanh1510" target="_blank" rel="noreferrer" className="text-cyan-400 underline">github.com/ThanhDanh1510</a></p>
            <p>• Location: Ho Chi Minh City, Vietnam (UTC+7)</p>
          </div>
        );
        break;

      case "date":
      case "time":
        outputNode = (
          <div className="text-xs font-mono text-cyan-300">
            Ho Chi Minh City Time (Asia/Ho_Chi_Minh):{" "}
            <span className="font-bold text-emerald-400">
              {new Intl.DateTimeFormat("en-US", {
                timeZone: "Asia/Ho_Chi_Minh",
                dateStyle: "full",
                timeStyle: "medium",
              }).format(new Date())}
            </span>
          </div>
        );
        break;

      case "uname":
      case "uname -a":
        outputNode = (
          <div className="text-xs font-mono text-slate-300">
            Linux ai-cluster 6.8.0-ai-research #42-SMP Tue Nov 22 2026 x86_64 GNU/Linux (NVIDIA Driver 550.54.14, CUDA 12.4)
          </div>
        );
        break;

      case "sudo":
      case "sudo rm -rf /":
      case "rm -rf /":
        outputNode = (
          <div className="text-xs font-mono text-rose-400">
            [sudo] Permission denied: You do not have root clearance to wipe Luu Thanh Danh&apos;s AI cluster! 😉
          </div>
        );
        break;

      case "wishes":
      case "tributes":
      case "guestbook":
      case "thanks":
        outputNode = (
          <div className="space-y-2 text-xs font-mono text-slate-300">
            <p className="text-rose-400 font-bold">{"// Tributes & Wishes from Birthday Server (Lv 20):"}</p>
            <p className="text-slate-400 italic">
              &quot;Cảm ơn tất cả anh em, bạn bè và đồng đội đã gửi những lời chúc ấm áp nhất nhân dịp sinh nhật tuổi 20!&quot;
            </p>
            <div className="space-y-1.5 pt-1">
              <div className="rounded border border-rose-500/30 bg-rose-950/20 p-2">
                <span className="text-rose-300 font-bold">[kho]:</span>
                <span className="text-slate-200"> &quot;Keep going and grinding bro, i believe in you&quot;</span>
              </div>
              <div className="rounded border border-cyan-500/30 bg-cyan-950/20 p-2">
                <span className="text-cyan-300 font-bold">[cunis (Sister)]:</span>
                <span className="text-slate-200"> &quot;chúc anh Danh luôn vui vẻ, hạnh phúc, 8386, mãi đẹp trai và bá khí nhó 🥳🎂&quot;</span>
              </div>
              <div className="rounded border border-emerald-500/30 bg-emerald-950/20 p-2">
                <span className="text-emerald-300 font-bold">[Thành Quốc]:</span>
                <span className="text-slate-200"> &quot;chúc bạn Thành Danh tui tuổi 20 thành danh nha 🥳&quot;</span>
              </div>
            </div>
            <p className="text-[11px] text-slate-400 pt-1">
              Xem toàn bộ lời chúc tại section{" "}
              <a href="#tributes" className="text-rose-400 underline">
                #tributes
              </a>{" "}
              hoặc{" "}
              <a
                href="https://lolizabrett-byte.github.io/happy-birthday-danh/"
                target="_blank"
                rel="noreferrer"
                className="text-cyan-400 underline"
              >
                Birthday Server Website ↗
              </a>
            </p>
          </div>
        );
        break;

      default:
        outputNode = (
          <div className="text-xs text-rose-400">
            command not found: <span className="font-bold">{rawCmd}</span>. Type{" "}
            <button
              onClick={() => executeCommand("help")}
              className="text-cyan-400 underline hover:text-cyan-300 cursor-pointer"
            >
              help
            </button>{" "}
            or <span className="text-emerald-300">ls</span> for available commands.
          </div>
        );
    }

    setLogs((prev) => [
      ...prev,
      {
        id: Math.random().toString(36).substring(7),
        command: rawCmd,
        output: outputNode,
      },
    ]);
    setInputVal("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(inputVal);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0) {
        const nextIdx = historyIdx + 1;
        if (nextIdx < history.length) {
          setHistoryIdx(nextIdx);
          setInputVal(history[history.length - 1 - nextIdx]);
        }
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIdx > 0) {
        const nextIdx = historyIdx - 1;
        setHistoryIdx(nextIdx);
        setInputVal(history[history.length - 1 - nextIdx]);
      } else if (historyIdx === 0) {
        setHistoryIdx(-1);
        setInputVal("");
      }
    }
  };

  const copyTerminalText = async () => {
    const raw = logs.map((l) => `$ ${l.command}`).join("\n");
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(raw);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      // Graceful fallback
    }
  };

  return (
    <section id="terminal" className="relative py-16 px-6">
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="mb-6 flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <p className="font-mono text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold">
              {"// Interactive AI Sandbox"}
            </p>
          </div>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white md:text-4xl">
            Live AI Terminal &amp; Workstation
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-gray-400 max-w-lg">
            Interact with simulated AI models, test multimodal video retrieval pipelines, and
            inspect system telemetry live in browser.
          </p>
        </div>

        {/* Terminal Container */}
        <div className="relative overflow-hidden rounded-2xl border border-slate-700/80 bg-[#070d18] shadow-2xl backdrop-blur-xl">
          {/* Mac Header Bar */}
          <div className="flex items-center justify-between border-b border-slate-800 bg-[#0c1424] px-4 py-3">
            {/* Dots */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLogs([])}
                className="h-3 w-3 rounded-full bg-rose-500 hover:opacity-80 transition-opacity cursor-pointer"
                title="Clear screen"
              />
              <div className="h-3 w-3 rounded-full bg-amber-500" />
              <div className="h-3 w-3 rounded-full bg-emerald-500" />
              <span className="ml-2 font-mono text-xs text-slate-400">
                danh@ai-cluster: ~ (zsh)
              </span>
            </div>

            {/* Status & Copy */}
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline-flex items-center gap-1.5 font-mono text-[11px] text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                vLLM 0.6.3 · CUDA 12.4
              </span>
              <button
                onClick={copyTerminalText}
                className="flex items-center gap-1 rounded bg-slate-800/80 px-2 py-1 text-[11px] font-mono text-slate-300 hover:bg-slate-700 transition-colors cursor-pointer"
                title="Copy command history"
              >
                {copied ? <Check size={11} className="text-emerald-400" /> : <Copy size={11} />}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>
          </div>

          {/* Quick-Run Action Chips */}
          <div className="flex flex-wrap items-center gap-2 border-b border-slate-800/80 bg-[#091120] px-4 py-2 text-xs">
            <span className="font-mono text-[11px] text-cyan-400 flex items-center gap-1">
              <Sparkles size={11} /> Quick Run:
            </span>
            {QUICK_COMMANDS.map((item) => (
              <button
                key={item.cmd}
                onClick={() => executeCommand(item.cmd)}
                className="rounded-md border border-cyan-500/25 bg-cyan-950/40 px-2 py-0.5 font-mono text-[11px] text-cyan-300 hover:border-cyan-400 hover:bg-cyan-500/20 transition-all active:scale-95 cursor-pointer"
                title={item.desc}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Terminal Body */}
          <div
            onClick={() => inputRef.current?.focus()}
            className="h-80 overflow-y-auto p-4 font-mono text-xs scrollbar-thin scrollbar-thumb-slate-700 cursor-text"
          >
            {/* Welcome banner */}
            <div className="mb-4 text-slate-400 text-[11px] border-b border-slate-800/60 pb-3">
              <p className="text-cyan-400 font-bold">
                === LUU THANH DANH // AI RESEARCH &amp; SYSTEMS TERMINAL ===
              </p>
              <p className="text-slate-400">
                Type &apos;help&apos;, &apos;ls&apos;, or click any quick-run button above to execute simulated pipelines.
              </p>
            </div>

            {/* Rendered Command Logs */}
            {logs.map((item) => (
              <div key={item.id} className="mb-3.5 space-y-1">
                <div className="flex items-center gap-2 text-emerald-400">
                  <span className="text-cyan-400">danh@cluster:~$</span>
                  <span className="font-bold text-white">{item.command}</span>
                </div>
                <div className="pl-3">{item.output}</div>
              </div>
            ))}

            {/* Input Line */}
            <div className="flex items-center gap-2 pt-1">
              <span className="text-cyan-400">danh@cluster:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type command (e.g. 'run aic2026', 'cat skills', 'help', 'ls')..."
                className="flex-1 bg-transparent text-white outline-none placeholder:text-slate-600 font-mono text-xs"
                autoComplete="off"
                spellCheck={false}
              />
              <button
                onClick={() => executeCommand(inputVal)}
                className="text-slate-400 hover:text-cyan-400 cursor-pointer"
                title="Execute command"
              >
                <CornerDownLeft size={13} />
              </button>
            </div>
            <div ref={terminalEndRef} />
          </div>
        </div>
      </div>
    </section>
  );
}
