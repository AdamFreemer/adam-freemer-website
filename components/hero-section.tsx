export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-5 sm:px-8 pt-10 pb-8 sm:pt-16 sm:pb-12"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 600px 300px at 70% 20%, rgba(196,149,106,0.04), transparent)",
        }}
      />

      <div className="relative">
        <div className="mb-4 flex items-center gap-2.5 text-[11px] font-mono uppercase tracking-[2px] text-accent-warm animate-fade-slide-in [animation-delay:0.1s]">
          <span className="inline-block h-px w-6 bg-accent-warm" />
          Full-stack engineer
        </div>

        <h1 className="mb-3 text-[28px] sm:text-[38px] font-light leading-[1.2] tracking-[-0.5px] animate-fade-slide-in [animation-delay:0.2s]">
          <strong className="font-semibold">Adam Freemer</strong>
        </h1>

        <p className="mb-7 max-w-[520px] text-[14px] sm:text-[15px] font-light leading-[1.6] text-text-mid animate-fade-slide-in [animation-delay:0.3s]">
          Senior full-stack engineer with 10+ years building enterprise software. Ruby on Rails,
          PostgreSQL, and modern JavaScript — from government-scale systems to personal projects
          that ship.
        </p>

        <div className="flex flex-wrap gap-5 sm:gap-8 animate-fade-slide-in [animation-delay:0.4s]">
          <Stat value="10+" label="Years experience" />
          <Stat value="4M" label="Peak daily views" />
          <Stat value="Rails · JS" label="Primary stack" />
        </div>
      </div>
    </section>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="font-mono text-[18px] font-medium text-text-bright">{value}</span>
      <span className="text-[11px] uppercase tracking-[0.5px] text-text-dim">{label}</span>
    </div>
  )
}
