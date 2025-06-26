import { ExternalLink } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "Court Ninja",
      url: "https://court.ninja",
      description:
        "A sports training application that algorithmically calculates the best athlete during dynamically created tournament matches. Built with modern web technologies to handle real-time match data and performance analytics.",
      tech: ["React", "Node.js", "Algorithm Design", "Real-time Analytics"],
    },
    {
      title: "Vaxxmax",
      url: "https://vaxxmax.com",
      description:
        "A high-scale web application that reached 4 million daily page views and processed 10,000 requests per minute, helping thousands secure COVID vaccine appointments during the pandemic's peak.",
      tech: ["Next.js", "High-Scale Architecture", "Real-time Processing", "API Integration"],
    },
    {
      title: "RMC-1 MIDI Controller",
      url: "http://afxmidi.com",
      description:
        "A custom MIDI controller that emulates the look and feel of classic analog rotary DJ mixers, bridging the gap between vintage hardware aesthetics and modern digital control.",
      tech: ["Hardware Design", "MIDI Protocol", "Embedded Systems", "Audio Engineering"],
    },
    {
      title: "Adam Freemer Music",
      url: "https://www.beatport.com/artist/adam-freemer/505",
      urlAlias: "beatport.com",
      description:
        "30 years of electronic music production featuring multiple Billboard chart-topping remixes and original productions, showcasing expertise in audio engineering and creative direction.",
      tech: ["Music Production", "Audio Engineering", "Creative Direction", "Sound Design"],
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">Selected Projects</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A collection of software engineering projects with additional work in hardware design and audio
              engineering
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                    </div>
                    <a
                      href={project.url}
                      className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-2 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.urlAlias || project.url.replace("https://", "").replace("http://", "")}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
