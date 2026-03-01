import Image from "next/image";

const testimonials = [
  {
    quote:
      "Evitra Digital completely transformed our online presence. Our patient inquiries doubled within three months of launching the new site.",
    name: "Navya Agarwal",
    role: "Founder, ECPW Healthcare",
    url: "https://ecpw-healthcare.com/",
  },
  {
    quote:
      "From SEO to ad campaigns, the Evitra team delivered measurable results at every step. They truly understand how to drive leads for a renovation business.",
    name: "Mark Wyatt",
    role: "Founder, DNB Renovations",
    url: "https://dnbrenovations.com/interior-design",
  },
  {
    quote:
      "Working with Evitra felt like having an in-house digital team. Our content strategy now brings in consistent foot traffic and online orders.",
    name: "Jessica Bream",
    role: "Founder, Cafe Landwer",
    url: "https://www.landwer.ca/",
  },
  {
    quote:
      "Evitra's performance ads cut our cost per lead in half. Their data-driven approach is exactly what we needed to scale across Australia.",
    name: "Mitch Langer",
    role: "Founder, Alliance Pest Control",
    url: "https://alliancepestsolutions.com.au/",
  },
];

const impactStats = [
  {
    value: "+180%",
    label: "Average organic traffic growth",
  },
  {
    value: "3.1x",
    label: "Average ROAS on paid campaigns",
  },
  {
    value: "42%",
    label: "Increase in lead conversion rate",
  },
  {
    value: "< 21 days",
    label: "Typical website launch timeline",
  },
];

const faqs = [
  {
    question: "How quickly can we start?",
    answer:
      "Most projects begin within a week after our strategy call and scope finalization.",
  },
  {
    question: "Do you offer complete digital execution?",
    answer:
      "Yes. We handle website, SEO, content, and ads as one integrated growth system.",
  },
  {
    question: "Will we get regular performance updates?",
    answer:
      "Absolutely. You get clear reporting with insights, priorities, and next actions every cycle.",
  },
];

const services = [
  {
    title: "Website Design & Development",
    description:
      "High-converting business websites built for speed, trust, and measurable growth.",
  },
  {
    title: "SEO Strategy",
    description:
      "Technical and content SEO that helps you rank higher and get consistent organic leads.",
  },
  {
    title: "Content Marketing",
    description:
      "Brand-focused content that educates your audience and moves prospects to action.",
  },
  {
    title: "Performance Ads",
    description:
      "Data-driven ad campaigns across Google and social channels to maximize return.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-amber-50/40 to-sky-50/40 text-stone-900">
      <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-stone-50/85 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <Image
              src="/evitra-logo.jpeg"
              alt="Evitra Digital logo"
              width={36}
              height={36}
              className="h-9 w-9 rounded-md object-cover ring-1 ring-stone-200"
              priority
            />
            <p className="text-base font-semibold tracking-tight">Evitra Digital</p>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#services" className="text-sm font-medium text-stone-600 transition hover:text-indigo-700">Services</a>
            <a href="#results" className="text-sm font-medium text-stone-600 transition hover:text-indigo-700">Results</a>
            <a href="#process" className="text-sm font-medium text-stone-600 transition hover:text-indigo-700">Process</a>
            <a href="#testimonials" className="text-sm font-medium text-stone-600 transition hover:text-indigo-700">Success Stories</a>
            <a
              href="#contact"
              className="rounded-full border border-stone-300 bg-white/80 px-4 py-2 text-sm font-medium transition hover:-translate-y-0.5 hover:bg-stone-100"
            >
              Book a Call
            </a>
          </nav>
          <a
            href="#contact"
            className="rounded-full border border-stone-300 bg-white/80 px-4 py-2 text-sm font-medium transition hover:bg-stone-100 md:hidden"
          >
            Book a Call
          </a>
        </div>
      </header>

      <main>
        <section className="section-reveal relative mx-auto grid w-full max-w-6xl gap-12 overflow-hidden px-6 py-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
          <div className="hero-orb -right-20 -top-24 hidden sm:block" />
          <div className="hero-orb -left-16 bottom-0 hidden bg-amber-200/45 sm:block" />
          <div className="relative z-10 animate-fade-up">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-indigo-700">
              Digital Growth Partner
            </p>
            <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl lg:text-6xl">
              Build, rank, and <span className="gradient-text">scale your business online.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-stone-700">
              Evitra Digital helps brands grow with websites, SEO, content, and
              performance ads designed around real business outcomes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#services"
                className="pulse-glow rounded-full bg-gradient-to-r from-indigo-700 to-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:from-indigo-600 hover:to-sky-500"
              >
                Explore Services
              </a>
              <a
                href="#contact"
                className="rounded-full border border-stone-300 bg-white/80 px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-stone-100"
              >
                Start a Project
              </a>
            </div>
          </div>

          <div className="card-lift relative z-10 rounded-2xl border border-stone-200/90 bg-white/90 p-8 shadow-sm animate-fade-up-delayed">
            <h2 className="text-lg font-semibold tracking-tight">Why Evitra</h2>
            <ul className="mt-6 space-y-5 text-stone-700">
              <li>Strategy-first execution focused on business KPIs.</li>
              <li>Full-funnel approach from discovery to conversion.</li>
              <li>Clear reporting and continuous optimization.</li>
              <li>Fast, collaborative delivery with senior specialists.</li>
            </ul>
          </div>
        </section>

        <section id="results" className="section-reveal mx-auto w-full max-w-6xl px-6 py-8 lg:px-8 lg:py-12">
          <div className="mb-8 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-indigo-700">
              Real Impact
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Outcomes we optimize for
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {impactStats.map((stat, index) => (
              <article
                key={stat.label}
                className="card-lift stagger-item rounded-2xl border border-indigo-100 bg-white/90 p-6"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <p className="text-3xl font-semibold tracking-tight text-indigo-700">{stat.value}</p>
                <p className="mt-2 text-sm leading-6 text-stone-700">{stat.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="section-reveal mx-auto w-full max-w-6xl px-6 py-8 lg:px-8 lg:py-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Services that move metrics
            </h2>
            <p className="mt-4 text-lg leading-8 text-stone-700">
              End-to-end digital solutions tailored to your goals and market.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="card-lift stagger-item rounded-2xl border border-stone-200 bg-white/90 p-6"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-semibold tracking-tight text-stone-900">
                  {service.title}
                </h3>
                <p className="mt-3 leading-7 text-stone-700">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="process" className="section-reveal mx-auto w-full max-w-6xl px-6 py-14 lg:px-8 lg:py-20">
          <div className="rounded-3xl border border-indigo-100 bg-gradient-to-br from-white to-indigo-50/50 p-8 sm:p-10">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Simple process, serious results
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              <div className="card-lift rounded-2xl border border-transparent p-4 transition hover:border-indigo-100 hover:bg-white/70">
                <p className="text-sm font-semibold text-stone-500">Step 01</p>
                <p className="mt-2 text-lg font-semibold">Audit & Strategy</p>
                <p className="mt-2 text-stone-700">We map your goals, funnel, and opportunities.</p>
              </div>
              <div className="card-lift rounded-2xl border border-transparent p-4 transition hover:border-indigo-100 hover:bg-white/70">
                <p className="text-sm font-semibold text-stone-500">Step 02</p>
                <p className="mt-2 text-lg font-semibold">Build & Launch</p>
                <p className="mt-2 text-stone-700">Execution across web, SEO, content, and ads.</p>
              </div>
              <div className="card-lift rounded-2xl border border-transparent p-4 transition hover:border-indigo-100 hover:bg-white/70">
                <p className="text-sm font-semibold text-stone-500">Step 03</p>
                <p className="mt-2 text-lg font-semibold">Optimize & Scale</p>
                <p className="mt-2 text-stone-700">Continuous improvement backed by real data.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="section-reveal mx-auto w-full max-w-6xl px-6 py-14 lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-indigo-700">
              Customer Success Stories
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Trusted by growing brands
            </h2>
            <p className="mt-4 text-lg leading-8 text-stone-700">
              Hear from the founders we&apos;ve helped scale.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {testimonials.map((t, index) => (
              <blockquote
                key={t.name}
                className="card-lift stagger-item flex flex-col justify-between rounded-2xl border border-stone-200 bg-white/95 p-6"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <p className="leading-7 text-stone-700">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-5 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-stone-900">{t.name}</p>
                    <p className="text-sm text-stone-500">{t.role}</p>
                  </div>
                  <a
                    href={t.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-stone-600 underline decoration-stone-300 underline-offset-2 transition hover:text-stone-900"
                  >
                    Visit site &rarr;
                  </a>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="section-reveal mx-auto w-full max-w-6xl px-6 py-6 lg:px-8 lg:py-10">
          <div className="rounded-3xl border border-stone-200 bg-white/85 p-8 sm:p-10">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-indigo-700">
                Frequently Asked Questions
              </p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Everything you need to know
              </h2>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {faqs.map((faq, index) => (
                <article
                  key={faq.question}
                  className="card-lift stagger-item rounded-2xl border border-stone-200 bg-white p-5"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-base font-semibold tracking-tight text-stone-900">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-stone-700">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-reveal mx-auto w-full max-w-6xl px-6 pb-24 lg:px-8">
          <div className="animated-gradient rounded-3xl bg-gradient-to-r from-stone-900 via-indigo-900 to-sky-900 px-8 py-12 text-white sm:px-10">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to grow with Evitra Digital?
            </h2>
            <p className="mt-4 max-w-2xl text-stone-200">
              Tell us your goals and we’ll create a custom digital growth plan for your business.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:digital.evitra@gmail.com"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-stone-900 transition hover:-translate-y-0.5 hover:bg-stone-200"
              >
                digital.evitra@gmail.com
              </a>
              <a
                href="tel:+919999999999"
                className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                +91 99999 99999
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200 py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 text-sm text-stone-600 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Evitra Digital. All rights reserved.</p>
          <a
            href="https://vercel.com"
            className="font-medium text-stone-700 hover:text-stone-900"
          >
            Built for Vercel deployment
          </a>
        </div>
      </footer>
    </div>
  );
}
