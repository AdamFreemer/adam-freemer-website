const RESUME_URL =
  "https://www.dropbox.com/scl/fi/24uj1x184zybzph05so9z/AdamFreemerResumeMay2026.pdf?rlkey=p3iwnoer0vimr8tdxt8ue5gyi&dl=0"

export function Navigation() {
  return (
    <nav className="flex items-center justify-between px-5 py-5 sm:px-8 border-b border-border-subtle animate-fade-in">
      <a
        href="#home"
        className="font-mono text-[14px] font-medium tracking-[0.5px] text-text-bright no-underline"
      >
        adam freemer
      </a>
      <div className="flex items-center gap-4 sm:gap-6">
        <a
          href="#projects"
          className="text-[12px] tracking-[0.3px] text-text-mid hover:text-text-bright transition-colors"
        >
          projects
        </a>
        <a
          href="#contact"
          className="text-[12px] tracking-[0.3px] text-text-mid hover:text-text-bright transition-colors"
        >
          about
        </a>
        <div className="w-px h-4 bg-border-subtle" aria-hidden />
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[12px] tracking-[0.3px] text-accent-warm hover:text-[#d4a87a] transition-colors"
        >
          resume
        </a>
      </div>
    </nav>
  )
}
