import { ScrollNav } from "../components/scroll-nav"

export default function Home() {
  return (
    <>
      <div className="topbar">
        <div className="topbar-inner">
          <a className="monogram" href="#home" data-tab="home">
            AF / Adam Freemer
          </a>
          <nav className="tabs">
            <a className="tab active" data-tab="home" href="#home">
              Home
            </a>
            <a className="tab" data-tab="projects" href="#projects">
              Projects
            </a>
            <a className="tab" data-tab="music" href="#music">
              Music
            </a>
            <a className="tab" data-tab="pottery" href="#pottery">
              Pottery
            </a>
          </nav>
        </div>
      </div>

      {/* ================= HOME (resume) ================= */}
      <section className="page active" id="home">
        <div className="hero">
          <div className="hero-bg-1"></div>
          <div className="hero-bg-3"></div>
          <div className="hero-bg-2"></div>
          <div className="wrap">
            <div className="hero-inner">
              <div>
                <div className="eyebrow">Lead Engineer · Philadelphia, PA</div>
                <h1 className="name">
                  Adam
                  <br />
                  Freemer.
                </h1>
                <p className="intro">
                  I am a <b>thoughtful and empathetic</b> software engineer, team
                  leader and technologist.
                </p>
                <div className="hero-links">
                  <a className="btn solid" href="mailto:adam@freemer.com">
                    adam@freemer.com
                  </a>
                  <a className="btn" href="https://linkedin.com/in/adamfreemer">
                    LinkedIn ↗
                  </a>
                  <a className="btn" href="https://github.com/adamfreemer">
                    GitHub ↗
                  </a>
                  <a
                    className="btn amber"
                    href="https://www.dropbox.com/scl/fi/24uj1x184zybzph05so9z/AdamFreemerResumeMay2026.pdf?rlkey=p3iwnoer0vimr8tdxt8ue5gyi&dl=0"
                  >
                    Resumé.pdf ↗
                  </a>
                </div>
              </div>
              <div className="portrait-frame">
                <img className="portrait" src="/assets/headshot.jpg" alt="Adam Freemer" />
              </div>
            </div>
          </div>
        </div>

        {/* stack */}
        <div className="sec alt" style={{ padding: "68px 0" }}>
          <div className="wrap">
            <div className="sec-head" style={{ marginBottom: "32px" }}>
              <h2 className="sec-title">Stack.</h2>
            </div>
            <div className="stack-rows">
              <div className="stack-row">
                <div className="slabel">Languages</div>
                <div className="schips">
                  <span className="chip">Ruby</span>
                  <span className="chip">JavaScript</span>
                  <span className="chip">Python</span>
                </div>
              </div>
              <div className="stack-row">
                <div className="slabel">Frameworks</div>
                <div className="schips">
                  <span className="chip">Ruby on Rails</span>
                  <span className="chip">Django</span>
                  <span className="chip">React</span>
                  <span className="chip">Hotwire / StimulusJS</span>
                  <span className="chip">TailwindCSS</span>
                </div>
              </div>
              <div className="stack-row">
                <div className="slabel">Platforms &amp; Infra</div>
                <div className="schips">
                  <span className="chip">AWS</span>
                  <span className="chip">Heroku</span>
                  <span className="chip">Vercel</span>
                  <span className="chip">Supabase</span>
                  <span className="chip">Docker</span>
                </div>
              </div>
              <div className="stack-row">
                <div className="slabel">Approach</div>
                <div className="schips">
                  <span className="chip">AI-augmented development</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* experience */}
        <div className="wrap sec">
          <div className="sec-head">
            <h2 className="sec-title">Experience.</h2>
          </div>

          <div className="job">
            <div className="job-when">
              Jul 2025 –<br />
              <span className="now">Present</span>
            </div>
            <div>
              <div className="job-role">Lead Engineer</div>
              <div className="job-client">Zen Strategies · U.S.C.I.S. (DHS)</div>
              <p className="job-desc">
                Lead engineer on Asset Manager, the internal USCIS application
                managing vulnerabilities and availability of every asset on the
                DHS network.
              </p>
              <ul>
                <li>
                  Driving modernization and optimization by planning and
                  executing critical system updates and new feature delivery.
                </li>
                <li>
                  Leveraging years of DHS / USCIS infrastructure depth to guide
                  architecture decisions.
                </li>
              </ul>
              <div className="job-skills">
                <span className="tag">Ruby</span>
                <span className="tag">Ruby on Rails</span>
                <span className="tag">JavaScript</span>
                <span className="tag">Docker</span>
                <span className="tag">Amazon EKS</span>
                <span className="tag">AI-augmented development</span>
              </div>
            </div>
          </div>

          <div className="job">
            <div className="job-when">
              Oct 2024 –<br />
              Jun 2025
            </div>
            <div>
              <div className="job-role">Lead Engineer</div>
              <div className="job-client">Synergy · U.S. Dept. of Labor</div>
              <p className="job-desc">
                Lead engineer on the Department of Labor Open Data Portal and
                agency-wide public API.
              </p>
              <ul>
                <li>
                  Re-architected an over-complex distributed AWS ETL pipeline
                  into the core Rails app for major performance and reliability
                  gains.
                </li>
                <li>
                  Refactored back-end code and database queries for significant
                  API speedups.
                </li>
                <li>
                  Shipped the re-architecture before agency-wide DOGE cuts
                  dissolved the project group.
                </li>
              </ul>
              <div className="job-skills">
                <span className="tag">Ruby on Rails</span>
                <span className="tag">Ruby</span>
                <span className="tag">REST APIs</span>
                <span className="tag">ODBC</span>
                <span className="tag">ETL</span>
                <span className="tag">Snowflake</span>
                <span className="tag">JavaScript</span>
                <span className="tag">React</span>
                <span className="tag">AWS Lambda</span>
                <span className="tag">Python</span>
                <span className="tag">AI-augmented development</span>
              </div>
            </div>
          </div>

          <div className="job">
            <div className="job-when">
              Oct 2022 –<br />
              Oct 2024
            </div>
            <div>
              <div className="job-role">Senior Consultant</div>
              <div className="job-client">Excella · U.S.C.I.S. (DHS)</div>
              <p className="job-desc">
                Lead developer on a USCIS contract supporting a portfolio of 30+
                applications.
              </p>
              <ul>
                <li>
                  Architected full-stack Rails apps with Turbo/Stimulus and React
                  front-ends.
                </li>
                <li>
                  Led a team of 6, mentored junior developers, and roadmapped
                  architecture.
                </li>
                <li>
                  Helped modernize the Rails/JS portfolio onto Dockerized Amazon
                  EKS / Kubernetes.
                </li>
              </ul>
              <div className="job-skills">
                <span className="tag">Ruby on Rails</span>
                <span className="tag">JavaScript</span>
                <span className="tag">Amazon EKS</span>
                <span className="tag">Docker</span>
                <span className="tag">Ruby</span>
                <span className="tag">React</span>
                <span className="tag">Jenkins</span>
                <span className="tag">Helm</span>
                <span className="tag">ViewComponents</span>
              </div>
            </div>
          </div>

          <div className="job">
            <div className="job-when">
              Sep 2021 –<br />
              Oct 2022
            </div>
            <div>
              <div className="job-role">Senior Software Engineer</div>
              <div className="job-client">
                Accenture Federal · U.S. Veterans Affairs
              </div>
              <p className="job-desc">
                Senior engineer on the va.gov GI Bill modernization program,
                building React front-ends and Rails APIs, mentoring junior
                developers, and leading troubleshooting.
              </p>
              <div className="job-skills">
                <span className="tag">Ruby on Rails</span>
                <span className="tag">Ruby</span>
                <span className="tag">React</span>
                <span className="tag">JavaScript</span>
                <span className="tag">PostgreSQL</span>
                <span className="tag">Unix</span>
                <span className="tag">Jenkins</span>
              </div>
            </div>
          </div>

          <div className="job">
            <div className="job-when">
              Sep 2016 –<br />
              Sep 2021
            </div>
            <div>
              <div className="job-role">Lead Software Engineer</div>
              <div className="job-client">Obsidian Global · U.S.C.I.S. (DHS)</div>
              <p className="job-desc">
                Lead developer across a USCIS / DHS program, covering full-stack
                delivery, mentoring, and architecture roadmapping.
              </p>
              <ul>
                <li>
                  Led Databricks API integration to process large national
                  citizenship datasets.
                </li>
                <li>
                  Project lead on QADB (naturalization document auditing) and
                  eSTAT (G-22/G-23 field-ops data); senior dev on ROSS, a global
                  RAIO scheduler.
                </li>
              </ul>
              <div className="job-skills">
                <span className="tag">StimulusJS</span>
                <span className="tag">Ruby on Rails</span>
                <span className="tag">JavaScript</span>
                <span className="tag">PostgreSQL</span>
                <span className="tag">Unix</span>
                <span className="tag">Ruby</span>
                <span className="tag">jQuery</span>
                <span className="tag">React</span>
                <span className="tag">Jenkins</span>
                <span className="tag">Team leadership</span>
              </div>
            </div>
          </div>

          <div className="job">
            <div className="job-when">
              Feb 2015 –<br />
              Sep 2016
            </div>
            <div>
              <div className="job-role">Senior Ruby Developer</div>
              <div className="job-client">Datapipe (now Rackspace)</div>
              <p className="job-desc">
                Built features on the enterprise operations &amp; financials Rails
                core, plus a monthly Ruby job ingesting terabyte-scale AWS usage
                files.
              </p>
              <div className="job-skills">
                <span className="tag">Ruby on Rails</span>
                <span className="tag">JavaScript</span>
                <span className="tag">PostgreSQL</span>
                <span className="tag">Capistrano</span>
                <span className="tag">Hadoop</span>
                <span className="tag">Ruby</span>
                <span className="tag">jQuery</span>
              </div>
            </div>
          </div>

          <div className="job">
            <div className="job-when">
              Jan 2014 –<br />
              Feb 2015
            </div>
            <div>
              <div className="job-role">Operational Intelligence Developer</div>
              <div className="job-client">Comcast · Xfinity</div>
              <p className="job-desc">
                Built Rails dashboards monitoring national system status and
                outages during the Xfinity X1 rollout.
              </p>
              <div className="job-skills">
                <span className="tag">Ruby on Rails</span>
                <span className="tag">JavaScript</span>
                <span className="tag">Capistrano</span>
                <span className="tag">Unix</span>
                <span className="tag">Ruby</span>
                <span className="tag">jQuery</span>
              </div>
            </div>
          </div>
        </div>

        {/* education */}
        <div className="sec alt">
          <div className="wrap">
            <div className="sec-head">
              <h2 className="sec-title">Education.</h2>
            </div>
            <div className="panel">
              <div className="edu">
                <h5>General Assembly, NYC</h5>
                <div className="es">Front-End &amp; Back-End Web Development</div>
                <div className="ed">2013</div>
              </div>
              <div className="edu">
                <h5>Pennsylvania State University</h5>
                <div className="es">
                  B.S. Electrical Engineering · 1995–2000
                </div>
                <div className="ed">
                  Analog &amp; digital circuit design, semiconductor wafer
                  manufacturing; research with the Boeing &amp; Penn State
                  Rotorcraft Center of Excellence.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="page" id="projects">
        <div className="wrap sec">
          <div className="sec-head">
            <h2 className="sec-title">Projects.</h2>
          </div>

          <div className="grid2">
            <a
              className="card-proj"
              href="https://github.com/AdamFreemer/rails-ai-intake-bot"
            >
              <div className="yr">2026 – Current</div>
              <h3>AI Intake Bot</h3>
              <p>
                A production-grade conversational WhatsApp intake bot. Claude
                conducts a natural intake, the engine parses each thread into a
                structured lead, and a real-time admin dashboard surfaces it
                instantly. Currently extracting the engine into a standalone Ruby
                gem for multi-platform use (WhatsApp, Instagram, SMS).
              </p>
              <div className="tags">
                <span className="tag hot">Ruby Gem · WIP</span>
                <span className="tag">Rails 8</span>
                <span className="tag">Hotwire</span>
                <span className="tag">Anthropic Claude</span>
                <span className="tag">Twilio</span>
              </div>
              <span className="go-link">github.com/AdamFreemer →</span>
            </a>
            <a className="card-proj" href="https://flip.watch">
              <div className="yr">2026 – Current</div>
              <h3>Flip Watch</h3>
              <p>
                A split-flap display dashboard for your desktop, with live
                weather, NPR headlines, Hacker News, quotes, and generative pixel
                art on a retro mechanical board. Installable PWA.
              </p>
              <div className="tags">
                <span className="tag">Next.js</span>
                <span className="tag">TailwindCSS</span>
                <span className="tag">PWA</span>
                <span className="tag">Vercel</span>
              </div>
              <span className="go-link">flip.watch →</span>
            </a>
            <a className="card-proj" href="https://hacker-hirings.com/">
              <div className="yr">2026 – Current</div>
              <h3>Hacker Hirings</h3>
              <p>
                Aggregates and analyzes Hacker News&apos; monthly &ldquo;Who is
                Hiring?&rdquo; threads across 180+ months, surfacing which
                languages, frameworks, and tools employers are hiring for and how
                that demand trends over time.
              </p>
              <div className="tags">
                <span className="tag">Next.js</span>
                <span className="tag">TypeScript</span>
                <span className="tag">PostgreSQL</span>
                <span className="tag">Vercel</span>
              </div>
              <span className="go-link">hacker-hirings.com →</span>
            </a>
            <a className="card-proj" href="https://kilnfront.com">
              <div className="yr">2026 – Current</div>
              <h3>KilnFront</h3>
              <p>
                A multi-tenant storefront and gallery platform for potters and
                makers. Each artist gets a branded storefront on their own
                subdomain, picks a visual skin, and sells through their own
                Stripe via Connect direct charges, so money never touches the
                platform. Gallery for the work that isn&apos;t for sale, a
                journal, shipping and order fulfillment, tiered plans, and an
                admin portal with coupon-based comps.
              </p>
              <div className="tags">
                <span className="tag">Next.js</span>
                <span className="tag">TypeScript</span>
                <span className="tag">Supabase</span>
                <span className="tag">Stripe Connect</span>
                <span className="tag">Vercel</span>
              </div>
              <span className="go-link">kilnfront.com →</span>
            </a>
            <a className="card-proj" href="https://lawnalyzer.com">
              <div className="yr">2026 – Current</div>
              <h3>Lawnalyzer</h3>
              <p>
                White-label SaaS that turns a property address into an instant,
                branded quote for lawn-care and snow-removal businesses. AI
                measures the lot from satellite imagery and parcel records, then
                prices every job with the operator&apos;s own rates.
              </p>
              <div className="tags">
                <span className="tag">Rails</span>
                <span className="tag">Ruby</span>
                <span className="tag">Hotwire</span>
                <span className="tag">PostgreSQL</span>
                <span className="tag">Stripe</span>
              </div>
              <span className="go-link">lawnalyzer.com →</span>
            </a>
            <a className="card-proj" href="https://court.ninja">
              <div className="yr">2022 – 2025</div>
              <h3>Court Ninja</h3>
              <p>
                A sports-training app that algorithmically ranks the strongest
                athlete across dynamically generated tournament brackets, with
                real-time match data and analytics.
              </p>
              <div className="tags">
                <span className="tag">Rails</span>
                <span className="tag">StimulusJS</span>
                <span className="tag">Stripe</span>
                <span className="tag">Heroku</span>
              </div>
              <span className="go-link">court.ninja →</span>
            </a>
            <a className="card-proj" href="https://vaxxmax.com">
              <div className="yr">2021</div>
              <h3>VaxxMax</h3>
              <p>
                A bare-bones Rails app that went viral (4M daily page views and
                10K req/min within a week), helping thousands book COVID vaccine
                appointments at the pandemic peak.
              </p>
              <div className="tags">
                <span className="tag">Rails</span>
                <span className="tag">jQuery</span>
                <span className="tag">Heroku</span>
              </div>
              <span className="go-link">vaxxmax.com →</span>
            </a>
            <a className="card-proj" href="http://afxmidi.com">
              <div className="yr">2016</div>
              <h3>RMC-1 MIDI Controller</h3>
              <p>
                A custom hardware MIDI controller emulating classic analog rotary
                DJ mixers with vintage feel and modern digital control. Designed,
                prototyped and fabricated end to end.
              </p>
              <div className="tags">
                <span className="tag">Hardware</span>
                <span className="tag">MIDI</span>
                <span className="tag">Arduino</span>
                <span className="tag">CAD</span>
              </div>
              <span className="go-link">afxmidi.com →</span>
            </a>
          </div>
        </div>
      </section>

      {/* ================= MUSIC ================= */}
      <section className="page" id="music">
        <div className="wrap sec">
          <div className="sec-head">
            <h2 className="sec-title">Music.</h2>
            <span className="sec-meta">Progressive House and Techno</span>
          </div>

          <div className="music-hero">
            <div className="studio-frame">
              <img
                className="studio"
                src="/assets/studio.jpg"
                alt="Adam Freemer's home music studio"
              />
            </div>
            <div className="music-copy">
              <p>
                An electronic musician and globally touring DJ since the late
                1990s, with sets played across <b>five of the seven continents</b>{" "}
                and chart-topping releases on <b>Beatport</b> and <b>Billboard</b>.
              </p>
              <div className="hero-links" style={{ marginTop: "28px" }}>
                <a className="btn solid" href="https://soundcloud.com/adamfreemer">
                  SoundCloud ↗
                </a>
                <a
                  className="btn"
                  href="https://www.beatport.com/artist/adam-freemer/505"
                >
                  Beatport ↗
                </a>
                <a className="btn" href="https://www.instagram.com/adamfreemer">
                  Instagram ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= POTTERY ================= */}
      <section className="page" id="pottery">
        <div className="wrap sec">
          <div className="sec-head">
            <h2 className="sec-title">Pottery.</h2>
            <span className="sec-meta">Wheel-thrown · Hand-built</span>
          </div>

          <img
            className="pottery-lead"
            src="/assets/pottery-01.jpg"
            alt="Finished glazed pottery"
          />

          <div className="masonry">
            <figure>
              <img src="/assets/pottery-02.jpg" alt="Pottery piece" />
            </figure>
            <figure>
              <img src="/assets/pottery-04.jpg" alt="Pottery piece" />
            </figure>
            <figure>
              <img src="/assets/pottery-03.jpg" alt="Pottery piece" />
            </figure>
            <figure>
              <img src="/assets/pottery-05.jpg" alt="Pottery piece" />
            </figure>
            <figure>
              <img src="/assets/pottery-06.jpg" alt="Pottery piece" />
            </figure>
            <figure>
              <img src="/assets/pottery-08.jpg" alt="Pottery in progress" />
            </figure>
            <figure>
              <img src="/assets/pottery-07.jpg" alt="Pottery in progress" />
            </figure>
            <figure>
              <img src="/assets/pottery-09.jpg" alt="Pottery in progress" />
            </figure>
            <figure>
              <img src="/assets/pottery-10.jpg" alt="Pottery piece" />
            </figure>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer>
        <div className="wrap">
          <div className="foot-links">
            <a className="btn solid" href="mailto:adam@freemer.com">
              adam@freemer.com
            </a>
            <a className="btn" href="https://github.com/adamfreemer">
              GitHub ↗
            </a>
            <a className="btn" href="https://linkedin.com/in/adamfreemer">
              LinkedIn ↗
            </a>
            <a className="btn" href="https://soundcloud.com/adamfreemer">
              SoundCloud ↗
            </a>
          </div>
          <div className="colophon">
            <span>© 2026 Adam Freemer · Philadelphia, PA</span>
            <span>Engineering · Music · Pottery</span>
          </div>
        </div>
      </footer>

      <ScrollNav />
    </>
  )
}
