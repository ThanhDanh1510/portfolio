"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { personalInfo } from "@/data/portfolio";
import { Mail, ExternalLink, MapPin } from "lucide-react";
import { GitHubIcon } from "@/components/icons/GitHubIcon";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: "cyan",
  },
  {
    icon: GitHubIcon,
    label: "GitHub",
    value: "ThanhDanh1510",
    href: personalInfo.github,
    color: "purple",
  },
  {
    icon: ExternalLink,
    label: "ORCID",
    value: "0009-0003-5632-6317",
    href: personalInfo.orcid,
    color: "green",
  },
];

const colorMap: Record<string, string> = {
  cyan: "border-slate-200 dark:border-cyan-400/20 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 hover:shadow-[0_0_24px_rgba(6,182,212,0.18)]",
  purple: "border-slate-200 dark:border-purple-400/20 hover:border-purple-500/50 dark:hover:border-purple-400/50 hover:shadow-[0_0_24px_rgba(167,139,250,0.18)]",
  green: "border-slate-200 dark:border-emerald-400/20 hover:border-emerald-500/50 dark:hover:border-emerald-400/50 hover:shadow-[0_0_24px_rgba(52,211,153,0.18)]",
};

const iconColorMap: Record<string, string> = {
  cyan: "text-cyan-600 dark:text-cyan-400",
  purple: "text-purple-600 dark:text-purple-400",
  green: "text-emerald-600 dark:text-emerald-400",
};

export default function ContactSection() {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center"
        >
          <motion.div variants={fadeInUp} className="mb-4">
            <p className="font-mono text-xs uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
              {"// Get In Touch"}
            </p>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="mb-6 text-4xl font-black text-slate-900 dark:text-white md:text-5xl"
          >
            Let&apos;s Connect
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mb-12 max-w-lg text-base leading-relaxed text-slate-600 dark:text-gray-400"
          >
            I&apos;m open to research collaborations, internships, and full-time AI/ML
            engineering roles. Feel free to reach out!
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3"
          >
            {links.map((l) => {
              const Icon = l.icon;
              return (
                <motion.a
                  key={l.label}
                  variants={fadeInUp}
                  href={l.href}
                  target={l.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className={`group flex flex-col items-center gap-3 rounded-2xl border bg-white/80 dark:bg-white/5 p-6 backdrop-blur transition-all shadow-xs dark:shadow-none hover:bg-slate-50 dark:hover:bg-white/10 ${colorMap[l.color]}`}
                >
                  <div className={`rounded-full border border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-white/5 p-3 transition-colors group-hover:scale-110 ${iconColorMap[l.color]}`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="mb-0.5 font-mono text-xs text-slate-500 dark:text-gray-500">{l.label}</p>
                    <p className="break-all text-sm font-semibold text-slate-900 dark:text-white">{l.value}</p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Location */}
          <motion.div
            variants={fadeInUp}
            className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-500 dark:text-gray-500"
          >
            <MapPin size={14} />
            <span>{personalInfo.location}</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
