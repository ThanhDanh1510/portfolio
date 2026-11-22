import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AITerminal from "@/components/AITerminal";
import PublicationsSection from "@/components/sections/PublicationsSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-cyan-500 selection:text-white dark:selection:bg-cyan-400 dark:selection:text-black">
      <HeroSection />
      <div className="section-beam" />
      <AboutSection />
      <div className="section-beam" />
      <SkillsSection />
      <div className="section-beam" />
      <ProjectsSection />
      <div className="section-beam" />
      <AITerminal />
      <div className="section-beam" />
      <PublicationsSection />
      <div className="section-beam" />
      <AchievementsSection />
      <div className="section-beam" />
      <ContactSection />

      {/* Footer */}
      <footer className="border-t border-slate-200/80 dark:border-white/10 py-12 text-center bg-slate-50/60 dark:bg-black/40">
        <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-slate-600 dark:text-gray-400">
            © 2026 Luu Thanh Danh · AI Engineer &amp; ML Researcher
          </p>
          <p className="font-mono text-[11px] text-slate-500 dark:text-gray-500">
            Built with Next.js 16, Tailwind CSS &amp; Framer Motion
          </p>
        </div>
      </footer>
    </main>
  );
}
