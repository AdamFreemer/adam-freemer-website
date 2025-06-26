import { ArrowUpRight } from "lucide-react"

// Mockup 2: Minimal list layout with improved typography
export default function ProjectsMockup2() {
  const projects = [
    {
      title: "Court Ninja",
      url: "court.ninja",
      description:
        "A sports training application project which algorithmically calculates the best athlete during a series of dynamically created tournament matches.",
    },
    {
      title: "Vaxxmax",
      url: "vaxxmax.com",
      description:
        "A web application that reached 4 million daily page views and processed 10,000 requests per minute in under a week, helping thousands secure COVID vaccine appointments during the peak of COVID.",
    },
    {
      title: "RMC-1",
      url: "afxmidi.com",
      description: "A MIDI controller that emulates the look and feel of classic analog rotary DJ mixers.",
    },
    {
      title: "Adam Freemer Music",
      url: "beatport.com/artist/adam-freemer/505",
      description:
        "30 years of electronic music production with multiple Billboard and other chart topping remixes and productions.",
    },
  ]

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage:
          "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-24%20at%204.28.01%E2%80%AFPM.png-61QRAX3j0lnhBcK5t31T84HSsXMS3Q.jpeg')",
      }}
    >
      <div className="absolute inset-0 bg-black/40" />

      {/* Navigation */}
      <nav className="fixed left-0 top-0 h-full w-48 bg-black/20 backdrop-blur-sm border-r border-white/10 z-10">
        <div className="p-8 space-y-6">
          <a href="#home" className="block text-white/70 hover:text-white transition-colors text-sm font-light">
            home
          </a>
          <a href="#projects" className="block text-white font-medium text-sm">
            projects
          </a>
          <a href="#contact" className="block text-white/70 hover:text-white transition-colors text-sm font-light">
            contact
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="ml-48 relative z-10">
        <div className="container mx-auto px-8 py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-light text-white mb-16">Projects</h1>

            <div className="space-y-12">
              {projects.map((project, index) => (
                <div key={index} className="group">
                  <div className="flex items-baseline justify-between mb-3">
                    <h3 className="text-lg font-medium text-white group-hover:text-white/80 transition-colors">
                      {project.title}
                    </h3>
                    <a
                      href={`https://${project.url}`}
                      className="text-white/60 hover:text-white text-xs flex items-center gap-1 transition-colors"
                    >
                      {project.url}
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed max-w-2xl">{project.description}</p>
                  {index < projects.length - 1 && <div className="mt-8 h-px bg-white/10" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
