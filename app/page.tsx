import { Navigation } from "../components/navigation"
import { HeroSection } from "../components/hero-section"
import { ProjectsSection } from "../components/projects-section"
import { ContactSection } from "../components/contact-section"
import { Footer } from "../components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <div id="home">
          <HeroSection />
        </div>
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
