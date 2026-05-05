import { Navigation } from "../components/navigation"
import { HeroSection } from "../components/hero-section"
import { WaveformDivider } from "../components/waveform-divider"
import { ProjectsSection } from "../components/projects-section"
import { ContactSection } from "../components/contact-section"
import { Footer } from "../components/footer"

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-[800px]">
      <Navigation />
      <main>
        <HeroSection />
        <WaveformDivider />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
