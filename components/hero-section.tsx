import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen relative flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 text-center text-white px-4">
        <h1 className="signature-font text-6xl md:text-8xl mb-6 tracking-wide">Adam Freemer</h1>
        <p className="text-xl md:text-2xl font-light mb-8 text-white/90">Software Engineer and Technologist</p>

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
