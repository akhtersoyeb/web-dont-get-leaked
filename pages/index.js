import { AnnouncementBar } from "@/components/announcement-bar"
import { FeaturesSection } from "@/components/features-section"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { IntegrationSection } from "@/components/integration-section"
import { Navbar } from "@/components/navbar"
import { PartnersSection } from "@/components/partners-section"
import { ShowcaseSection } from "@/components/showcase-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <HeroSection />
      <AnnouncementBar />
      <IntegrationSection />
    </main>
  )
}

