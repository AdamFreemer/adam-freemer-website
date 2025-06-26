import { Linkedin, Github } from "lucide-react"

export function ContactSection() {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/adamfreemer",
      icon: Linkedin,
      description: "Professional network and career updates",
    },
    {
      name: "GitHub",
      url: "https://github.com/adamfreemer",
      icon: Github,
      description: "Open source projects and code repositories",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-6">Let's Connect</h2>
          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
            Interested in collaborating on innovative projects or discussing technology solutions? I'd love to hear from
            you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-lg">
            <a
              href="https://linkedin.com/in/adamfreemer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors"
            >
              LinkedIn
            </a>
            <a href="mailto:adam@adamfreemer.com" className="text-white hover:text-blue-400 transition-colors">
              Email
            </a>
            <a
              href="https://github.com/adamfreemer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.dropbox.com/scl/fi/6hy7m5jmorbc7g18z2ojh/AdamFreemerResumeJune2025.pdf?rlkey=ke76emgq80qjmv35x9ryh98fw&st=0e52wvms&dl=0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
