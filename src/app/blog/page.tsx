import Link from "next/link";
import { ArrowLeft, Calendar, Tag } from "lucide-react";

const posts = [
  {
    slug: "multimodal-retrieval",
    title: "Building a Real-Time Multimodal Video Retrieval Engine",
    date: "2026-10-01",
    tags: ["Multimodal AI", "Vector Search", "Qdrant", "BEiT-3"],
    excerpt:
      "How we engineered a hybrid dense-sparse retrieval system indexing 88,899+ video keyframes with sub-1.5s latency for the HCMC AI Challenge 2026.",
  },
  {
    slug: "hello-world",
    title: "Hello World — Starting My AI Journey",
    date: "2026-09-01",
    tags: ["Personal", "AI", "HCMUS"],
    excerpt:
      "A brief introduction to who I am, what I'm building, and what you can expect from this blog — covering deep learning, systems, and research notes.",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen px-6 py-28">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="mb-12 flex items-center gap-2 font-mono text-sm text-slate-500 dark:text-gray-500 transition-colors hover:text-cyan-600 dark:hover:text-cyan-400"
        >
          <ArrowLeft size={14} />
          Back home
        </Link>

        <div className="mb-12">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
            // Writing
          </p>
          <h1 className="text-4xl font-black text-slate-900 dark:text-white md:text-5xl">Blog</h1>
          <p className="mt-4 text-slate-600 dark:text-gray-400">
            Notes on deep learning, systems engineering, and research.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-2xl border border-slate-200 bg-white/80 dark:border-white/10 dark:bg-white/5 p-6 backdrop-blur transition-all hover:border-cyan-500/40 hover:bg-slate-50 dark:hover:border-cyan-400/30 dark:hover:bg-white/8 shadow-xs dark:shadow-none"
            >
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <span className="flex items-center gap-1.5 font-mono text-xs text-slate-500 dark:text-gray-500">
                  <Calendar size={11} />
                  {post.date}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((t) => (
                    <span
                      key={t}
                      className="flex items-center gap-1 rounded-full border border-cyan-500/20 bg-cyan-500/10 dark:border-cyan-400/20 dark:bg-cyan-400/5 px-2 py-0.5 font-mono text-xs text-cyan-700 dark:text-cyan-400"
                    >
                      <Tag size={9} />
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <h2 className="mb-2 text-lg font-bold text-slate-900 dark:text-white transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
                {post.title}
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-gray-400">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
