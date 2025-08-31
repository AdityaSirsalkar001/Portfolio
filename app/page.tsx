"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/sections/hero"
import { TechShowcaseSection } from "@/components/sections/tech-showcase"
import { AboutSection } from "@/components/sections/about"
import { ExperienceSection } from "@/components/sections/experience"
import { EducationSection } from "@/components/sections/education"
import { SkillsSection } from "@/components/sections/skills"
import { ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/footer"
import { useAnalytics } from "@/hooks/use-analytics"

export default function Home() {
  // Track page visits
  useAnalytics()

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <TechShowcaseSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
