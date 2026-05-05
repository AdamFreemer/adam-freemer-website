const contactLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/adamfreemer", external: true },
  { label: "GitHub", href: "https://github.com/adamfreemer", external: true },
  { label: "Email", href: "mailto:contact@freemer.com", external: false },
]

export function ContactSection() {
  return (
    <div
      id="contact"
      className="mx-5 mb-8 flex flex-col items-center gap-4 rounded-[10px] border border-border-subtle bg-bg-card p-5 text-center sm:mx-8 sm:flex-row sm:items-center sm:justify-between sm:gap-0 sm:p-7 sm:text-left animate-fade-in [animation-delay:1.1s]"
    >
      <span className="text-[14px] font-light text-text-mid">
        Philadelphia, PA — open to remote opportunities
      </span>
      <div className="flex flex-wrap justify-center gap-4 sm:justify-end">
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="rounded-md border border-border-subtle px-3.5 py-1.5 font-mono text-[12px] text-text-mid transition-colors duration-200 hover:border-border-hover hover:text-text-bright"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  )
}
