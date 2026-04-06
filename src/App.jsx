const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'For Employers', href: '#employers' },
  { label: 'For Candidates', href: '#candidates' },
  { label: 'About Us', href: '#about' },
]

const services = [
  {
    title: 'Sourcing Strategy',
    description:
      'We build role-specific sourcing blueprints, market maps, and outreach campaigns to fill your pipeline with qualified talent quickly.',
  },
  {
    title: 'Direct Placement',
    description:
      'From shortlist to signed offer, we manage end-to-end hiring so you can secure high-impact candidates with confidence.',
  },
]

export function App() {
  return (
    <div className="min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-md focus:bg-action focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/90 backdrop-blur">
        <nav
          className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6"
          aria-label="Main navigation"
        >
          <a href="#" className="text-xl font-extrabold tracking-tight text-navy">
            Helpin<span className="text-action">Hire</span>
          </a>
          <ul className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-semibold text-slate hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action focus-visible:ring-offset-2"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="rounded-full bg-navy px-4 py-2 text-sm font-semibold text-white transition hover:bg-action focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action focus-visible:ring-offset-2"
          >
            Contact
          </a>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero-gradient overflow-hidden px-4 py-20 sm:px-6 sm:py-24" id="about">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="fade-up inline-flex items-center rounded-full border border-navy/15 bg-white/80 px-4 py-1 text-sm font-semibold text-slate">
                Recruitment Specialists for Modern Teams
              </p>
              <h1 className="fade-up-delay mt-5 text-4xl font-extrabold leading-tight tracking-tight text-navy sm:text-5xl lg:text-6xl">
                Precision Hiring for Teams That Move Fast
              </h1>
              <p className="fade-up-late mt-6 max-w-xl text-lg leading-relaxed text-slate">
                HelpinHire partners with employers to source top-tier professionals and deliver direct hires that stay, perform, and grow.
              </p>
              <div className="fade-up-late mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="rounded-full bg-action px-6 py-3 text-base font-bold text-white shadow-soft transition hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action focus-visible:ring-offset-2"
                >
                  Start Hiring Today
                </a>
                <a
                  href="#services"
                  className="rounded-full border border-navy/25 px-6 py-3 text-base font-semibold text-navy transition hover:border-navy hover:bg-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action focus-visible:ring-offset-2"
                >
                  Explore Services
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/50 bg-white/80 p-6 shadow-soft sm:p-8" aria-hidden="true">
              <h2 className="text-lg font-bold text-navy">Why Employers Choose Us</h2>
              <ul className="mt-5 space-y-4">
                <li className="rounded-2xl bg-cloud p-4">
                  <p className="text-sm font-bold text-navy">Speed With Quality</p>
                  <p className="mt-1 text-sm text-slate">Structured sourcing workflows reduce time-to-hire without sacrificing fit.</p>
                </li>
                <li className="rounded-2xl bg-cloud p-4">
                  <p className="text-sm font-bold text-navy">Industry-Aligned Talent</p>
                  <p className="mt-1 text-sm text-slate">We map each role to domain-specific skills and market realities.</p>
                </li>
                <li className="rounded-2xl bg-cloud p-4">
                  <p className="text-sm font-bold text-navy">Direct Hiring Focus</p>
                  <p className="mt-1 text-sm text-slate">Every search is optimized for successful long-term placements.</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="services" className="px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto w-full max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-wider text-action">Our Services</p>
              <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">Recruitment Solutions Built for Results</h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {services.map((service) => (
                <article key={service.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-soft">
                  <h3 className="text-xl font-bold text-navy">{service.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="employers" className="bg-navy px-4 py-16 text-white sm:px-6 sm:py-20">
          <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-extrabold sm:text-4xl">For Employers</h2>
              <p className="mt-4 max-w-xl text-slate-200">
                Whether you need niche experts or leadership talent, our consultants provide dedicated support from first brief to final acceptance.
              </p>
            </div>
            <div id="candidates" className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/15 sm:p-8">
              <h3 className="text-2xl font-bold">For Candidates</h3>
              <p className="mt-3 text-slate-200">
                We connect skilled professionals with organizations where they can thrive. Every introduction is tailored to your strengths and goals.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto w-full max-w-3xl rounded-3xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
            <h2 className="text-3xl font-extrabold text-navy">Talk to Our Hiring Team</h2>
            <p className="mt-3 text-slate">Share your hiring goals and we will reach out with a tailored recruitment plan.</p>

            <form className="mt-8 grid gap-5" aria-label="Contact form for employers">
              <div>
                <label htmlFor="company-name" className="block text-sm font-semibold text-navy">
                  Company Name
                </label>
                <input
                  id="company-name"
                  name="companyName"
                  type="text"
                  required
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-navy placeholder:text-slate focus:border-action focus:outline-none focus:ring-2 focus:ring-action/40"
                  placeholder="Acme Corporation"
                />
              </div>

              <div>
                <label htmlFor="industry" className="block text-sm font-semibold text-navy">
                  Industry
                </label>
                <input
                  id="industry"
                  name="industry"
                  type="text"
                  required
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-navy placeholder:text-slate focus:border-action focus:outline-none focus:ring-2 focus:ring-action/40"
                  placeholder="Technology, Healthcare, Finance..."
                />
              </div>

              <div>
                <label htmlFor="hiring-needs" className="block text-sm font-semibold text-navy">
                  Hiring Needs
                </label>
                <textarea
                  id="hiring-needs"
                  name="hiringNeeds"
                  rows={5}
                  required
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-navy placeholder:text-slate focus:border-action focus:outline-none focus:ring-2 focus:ring-action/40"
                  placeholder="Tell us about open roles, hiring timeline, and preferred experience."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-navy px-6 py-3 text-base font-bold text-white transition hover:bg-action focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action focus-visible:ring-offset-2 sm:w-auto"
              >
                Submit Request
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}
