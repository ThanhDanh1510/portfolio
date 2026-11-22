import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

const posts: Record<
  string,
  { title: string; date: string; tags: string[]; content: string }
> = {
  "multimodal-retrieval": {
    title: "Building a Real-Time Multimodal Video Retrieval Engine",
    date: "October 1, 2026",
    tags: ["Multimodal AI", "Vector Search", "Qdrant", "BEiT-3"],
    content: `
## Overview

For the HCMC AI Challenge 2026, we engineered a real-time multimodal search platform capable of indexing **88,899+ video keyframes** from 130+ hours of video footage.

## The Core Problem

Known-Item Search (KIS) in video archives requires understanding both **visual semantics** and **temporal relationships** — a challenge no single model handles well alone.

## Architecture

Our system uses a **hybrid dense-sparse retrieval** approach:

- **Dense retrieval**: Multi-branch vector search via Qdrant and Milvus, using Microsoft BEiT-3 vision-language embeddings
- **Sparse retrieval**: Elasticsearch BM25 for lexical matching
- **Reranking**: Dual rerankers (ViRanker + Jina) fused via weighted Reciprocal Rank Fusion (RRF)

## Temporal Reasoning with DANTE

For multi-step queries ("show me X happening before Y"), we formulated the **DANTE temporal dynamic programming algorithm** (TRAKE) to align query events with video temporal structure.

## Results

- Sub-1.5s end-to-end latency
- Handles KIS, Visual QA, and temporal event sequence retrieval
- Containerized via Docker Compose, served via modular FastAPI services

## Code

The full system is open-source on [GitHub](https://github.com/ThanhDanh1510/Super-Image-Retrieval-System-for-AIC2026).
    `,
  },
  "hello-world": {
    title: "Hello World — Starting My AI Journey",
    date: "September 1, 2026",
    tags: ["Personal", "AI", "HCMUS"],
    content: `
## Who Am I?

Hi! I'm **Luu Thanh Danh**, a third-year BSc Data Science student at VNUHCM - University of Science (HCMUS) in Ho Chi Minh City.

## What I Build

I specialize in building production-grade AI systems:

- **Multimodal retrieval** — combining vision, language, and temporal reasoning
- **Computer vision** — deep learning pipelines for classification and detection
- **ML engineering** — end-to-end systems with proper MLOps practices

## What This Blog Will Cover

- Technical deep dives into projects I'm working on
- Notes on papers I find interesting
- Systems engineering lessons from building real AI products
- The occasional personal reflection

## Currently Working On

The **HCMC AI Challenge 2026** — a real-time video retrieval engine using hybrid vector search. More on that in the next post!

Let's connect on [GitHub](https://github.com/ThanhDanh1510) or via [email](mailto:thanhdanh15102006@gmail.com).
    `,
  },
};

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  // Simple markdown-ish rendering (paragraphs + headings)
  const renderContent = (content: string) => {
    return content
      .trim()
      .split(/\n\n+/)
      .map((block, i) => {
        if (block.startsWith("## ")) {
          return (
            <h2
              key={i}
              className="mb-4 mt-10 text-2xl font-bold text-slate-900 dark:text-white first:mt-0"
            >
              {block.replace("## ", "")}
            </h2>
          );
        }
        if (block.startsWith("- ")) {
          const items = block.split("\n").filter((l) => l.startsWith("- "));
          return (
            <ul key={i} className="mb-4 list-none space-y-2">
              {items.map((item, j) => (
                <li key={j} className="flex items-start gap-2 text-slate-700 dark:text-gray-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500 dark:bg-cyan-400" />
                  <span
                    dangerouslySetInnerHTML={{
                      __html: item
                        .replace("- ", "")
                        .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-slate-900 dark:text-white">$1</strong>')
                        .replace(
                          /\[(.*?)\]\((.*?)\)/g,
                          '<a href="$2" class="text-cyan-600 dark:text-cyan-400 hover:underline" target="_blank">$1</a>'
                        ),
                    }}
                  />
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p
            key={i}
            className="mb-4 leading-relaxed text-slate-600 dark:text-gray-400"
            dangerouslySetInnerHTML={{
              __html: block
                .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-slate-900 dark:text-white">$1</strong>')
                .replace(
                  /\[(.*?)\]\((.*?)\)/g,
                  '<a href="$2" class="text-cyan-600 dark:text-cyan-400 hover:underline" target="_blank">$1</a>'
                ),
            }}
          />
        );
      });
  };

  return (
    <main className="min-h-screen px-6 py-28">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/blog"
          className="mb-12 flex items-center gap-2 font-mono text-sm text-slate-500 dark:text-gray-500 transition-colors hover:text-cyan-600 dark:hover:text-cyan-400"
        >
          <ArrowLeft size={14} />
          All posts
        </Link>

        <div className="mb-4 flex flex-wrap gap-2">
          {post.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-cyan-500/20 bg-cyan-500/10 dark:border-cyan-400/20 dark:bg-cyan-400/5 px-3 py-1 font-mono text-xs text-cyan-700 dark:text-cyan-400"
            >
              {t}
            </span>
          ))}
        </div>

        <h1 className="mb-4 text-3xl font-black leading-tight text-slate-900 dark:text-white md:text-4xl">
          {post.title}
        </h1>
        <p className="mb-12 font-mono text-sm text-slate-500 dark:text-gray-500">{post.date}</p>

        <div className="border-t border-slate-200 dark:border-white/10 pt-10">
          {renderContent(post.content)}
        </div>
      </div>
    </main>
  );
}
