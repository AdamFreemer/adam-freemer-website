import { ArrowDown, Github as GithubIcon } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen relative flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 text-center text-white px-4">
        <h1 className="signature-font text-6xl md:text-8xl mb-6 tracking-wide">Adam Freemer</h1>
        <p className="text-xl md:text-2xl font-light mb-8 text-white/90">Software Engineer and Technologist</p>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
          Building innovative solutions at the intersection of technology, music, and human experience
        </p>

        <div className="border border-white/20 rounded-lg p-6 mb-12 max-w-md mx-auto bg-white/5 backdrop-blur-sm">
          <div className="flex items-center justify-center gap-2 mb-4">
            <GithubIcon className="w-5 h-5" />
            <h3 className="text-lg font-medium">Latest GitHub Activity</h3>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <a
              href="https://github.com/AdamFreemer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
            >
              Personal: @AdamFreemer
            </a>
            <a
              href="https://github.com/adamf-va"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
            >
              Work: @adamf-va
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#projects"
            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-3 rounded-lg hover:bg-white/20 transition-all duration-300 font-medium"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="bg-white text-black px-8 py-3 rounded-lg hover:bg-white/90 transition-all duration-300 font-medium"
          >
            Contact
          </a>        
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <ArrowDown className="w-6 h-6" />
      </div>
    </section>
  )
}
