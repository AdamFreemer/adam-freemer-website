type TagVariant = "default" | "rails" | "next" | "claude" | "hw" | "music"

type Tag = { label: string; variant?: TagVariant }

type Project = {
  title: string
  url: string
  year: string
  description: string
  tags: Tag[]
}

const projects: Project[] = [
  {
    title: "Flip.Watch",
    url: "https://flip.watch",
    year: "2026",
    description:
      "A retro split-flap display PWA and Chrome extension. Real-time data rendered through nostalgic mechanical aesthetics.",
    tags: [
      { label: "Claude Code", variant: "claude" },
      { label: "Next.js", variant: "next" },
      { label: "TypeScript", variant: "next" },
      { label: "Supabase" },
      { label: "Stripe" },
      { label: "Chrome MV3" },
    ],
  },
  {
    title: "Court Ninja",
    url: "https://court.ninja",
    year: "2023–2025",
    description:
      "Sports training app with algorithmic athlete ranking across dynamically generated tournament brackets. Real-time match data and performance analytics.",
    tags: [
      { label: "Rails", variant: "rails" },
      { label: "Ruby", variant: "rails" },
      { label: "StimulusJS" },
      { label: "PostgreSQL" },
      { label: "Stripe" },
    ],
  },
  {
    title: "VaxxMax",
    url: "https://vaxxmax.com",
    year: "2021",
    description:
      "High-scale Rails app that hit 4M daily page views and 10K req/min, helping thousands secure COVID vaccine appointments during the pandemic peak.",
    tags: [
      { label: "Rails", variant: "rails" },
      { label: "Ruby", variant: "rails" },
      { label: "PostgreSQL" },
      { label: "Heroku" },
    ],
  },
  {
    title: "RMC-1 MIDI Controller",
    url: "http://afxmidi.com",
    year: "2016",
    description:
      "Custom hardware MIDI controller emulating classic analog rotary DJ mixers. Bridging vintage aesthetics with modern digital control.",
    tags: [
      { label: "Hardware", variant: "hw" },
      { label: "MIDI", variant: "hw" },
      { label: "Arduino", variant: "hw" },
      { label: "C++", variant: "hw" },
      { label: "CAD" },
    ],
  },
  {
    title: "Adam Freemer Music",
    url: "https://www.beatport.com/artist/adam-freemer/505",
    year: "1995–present",
    description:
      "30 years of electronic music production. Multiple Billboard chart-topping remixes and original productions across progressive house and techno.",
    tags: [
      { label: "Production", variant: "music" },
      { label: "Audio Eng", variant: "music" },
      { label: "ProTools", variant: "music" },
    ],
  },
]

const tagVariantClass: Record<TagVariant, string> = {
  default: "bg-bg-accent text-text-bright",
  rails: "bg-tag-rails-bg text-tag-rails-fg",
  next: "bg-accent-teal-dim text-accent-teal",
  claude: "bg-accent-warm-dim text-accent-warm",
  hw: "bg-tag-hw-bg text-tag-hw-fg",
  music: "bg-tag-music-bg text-tag-music-fg",
}

const cardDelay = [
  "[animation-delay:0.6s]",
  "[animation-delay:0.7s]",
  "[animation-delay:0.8s]",
  "[animation-delay:0.9s]",
  "[animation-delay:1s]",
]

export function ProjectsSection() {
  return (
    <>
      <div
        id="projects"
        className="flex items-center gap-2.5 px-5 sm:px-8 pt-2 pb-4 text-[11px] font-mono uppercase tracking-[2px] text-text-dim animate-fade-in [animation-delay:0.55s]"
      >
        <span>Personal projects</span>
        <span className="h-px flex-1 bg-border-subtle" />
      </div>

      <div className="flex flex-col gap-2 px-5 sm:px-8 pb-8">
        {projects.map((project, i) => (
          <a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group grid grid-cols-[1fr_auto] items-start gap-4 rounded-[10px] border border-border-subtle bg-bg-card px-5 py-5 sm:px-6 transition-colors duration-200 hover:border-border-hover hover:bg-bg-card-hover animate-fade-slide-in ${cardDelay[i]}`}
          >
            <div>
              <div className="mb-1.5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="text-[15px] font-medium text-text-bright">{project.title}</span>
                <span className="font-mono text-[11px] text-text-dim">{project.year}</span>
              </div>
              <div className="mb-2.5 text-[13px] font-light leading-[1.5] text-text-mid">
                {project.description}
              </div>
              <div className="flex flex-wrap gap-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag.label}
                    className={`rounded font-mono text-[10px] tracking-[0.3px] px-2 py-[3px] ${
                      tagVariantClass[tag.variant ?? "default"]
                    }`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
            <span
              aria-hidden
              className="mt-0.5 text-[14px] text-text-dim transition-[color,transform] duration-200 group-hover:translate-x-[3px] group-hover:text-accent-warm"
            >
              →
            </span>
          </a>
        ))}
      </div>
    </>
  )
}
