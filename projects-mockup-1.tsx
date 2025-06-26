import { ExternalLink } from "lucide-react"

// Mockup 1: Card-based layout with better typography hierarchy
export default function ProjectsMockup1() {
  const projects = [
    {
      title: "Court Ninja",
      url: "https://court.ninja",
      description:
        "A sports training application project which algorithmically calculates the best athlete during a series of dynamically created tournament matches.",
      year: "2024",
      tech: ["React", "Node.js", "Algorithm Design"],
    },
    {
      title: "Vaxxmax",
      url: "https://vaxxmax.com",
      description:
        "A web application that reached 4 million daily page views and processed 10,000 requests per minute in under a week, helping thousands secure COVID vaccine appointments during the peak of COVID.",
      year: "2021",
      tech: ["Next.js", "High-Scale Architecture", "Real-time Processing"],
    },
    {
      title: "RMC-1",
      url: "http://afxmidi.com",
      description: "A MIDI controller that emulates the look and feel of classic analog rotary DJ mixers.",
      year: "2023",
      tech: ["Hardware", "MIDI", "Embedded Systems"],
    },
    {
      title: "Adam Freemer Music",
      url: "https://www.beatport.com/artist/adam-freemer/505",
      description:
        "30 years of electronic music production with multiple Billboard and other chart topping remixes and productions.",
      year: "1994-2024",
      tech: ["Music Production", "Audio Engineering", "Creative Direction"],
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
          <div className="max-w-4xl">
            <h1 className="text-4xl font-light text-white mb-12">Projects</h1>

            <div className="grid gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-medium text-white mb-2">{project.title}</h3>
                      <a
                        href={project.url}
                        className="text-white/70 hover:text-white text-sm flex items-center gap-2 transition-colors"
                      >
                        {project.url}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <span className="text-white/60 text-xs bg-white/10 px-2 py-1 rounded">{project.year}</span>
                  </div>

                  <p className="text-white/80 text-sm leading-relaxed mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs text-white/70 bg-white/10 px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
