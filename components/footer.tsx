export function Footer() {
  return (
    <footer className="flex flex-col items-center gap-1 border-t border-border-subtle px-5 py-4 font-mono text-[11px] text-text-dim sm:flex-row sm:justify-between sm:px-8 sm:py-5 animate-fade-in [animation-delay:1.2s]">
      <span>© {new Date().getFullYear()} adam freemer</span>
      <span>built with claude code</span>
    </footer>
  )
}
