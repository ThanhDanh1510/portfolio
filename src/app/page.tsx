import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import PublicationsSection from "@/components/sections/PublicationsSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-cyan-500 selection:text-white dark:selection:bg-cyan-400 dark:selection:text-black">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <PublicationsSection />
      <AchievementsSection />
      <ContactSection />

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-white/10 py-10 text-center">
        <p className="font-mono text-xs text-slate-500 dark:text-gray-500">
          © 2026 Luu Thanh Danh · Built with Next.js 15 &amp; Tailwind CSS
        </p>
      </footer>
    </main>
  );
}
