import { ExternalLink } from "lucide-react"

// Mockup 3: Grid layout with visual emphasis
export default function ProjectsMockup3() {
  const projects = [
    {
      title: "Court Ninja",
      url: "https://court.ninja",
      description:
        "Sports training application with algorithmic athlete performance calculation during dynamic tournament matches.",
      category: "Web Application",
      featured: true,
    },
    {
      title: "Vaxxmax",
      url: "https://vaxxmax.com",
      description:
        "High-scale web application serving 4M daily page views and 10K requests/minute for COVID vaccine appointments.",
      category: "High-Scale Platform",
      featured: true,
    },
    {
      title: "RMC-1",
      url: "http://afxmidi.com",
      description: "MIDI controller emulating classic analog rotary DJ mixers.",
      category: "Hardware",
      featured: false,
    },
    {
      title: "Adam Freemer Music",
      url: "https://www.beatport.com/artist/adam-freemer/505",
      description: "30 years of electronic music production with Billboard chart-topping remixes.",
      category: "Music Production",
      featured: false,
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
          <div className="max-w-5xl">
            <h1 className="text-4xl font-light text-white mb-4">Projects</h1>
            <p className="text-white/60 text-sm mb-12">
              Selected work spanning software engineering, music production, and hardware design
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 ${
                    project.featured ? "lg:col-span-2" : ""
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-medium text-white">{project.title}</h3>
                        <span className="text-xs text-white/60 bg-white/10 px-2 py-1 rounded-full">
                          {project.category}
                        </span>
                      </div>
                      <a
                        href={project.url}
                        className="text-white/70 hover:text-white text-xs flex items-center gap-2 transition-colors"
                      >
                        {project.url.replace("https://", "").replace("http://", "")}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  <p className="text-white/80 text-sm leading-relaxed">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
