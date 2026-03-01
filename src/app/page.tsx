import Image from "next/image";

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
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <header className="border-b border-stone-200 bg-stone-50/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <Image
              src="/evitra-logo.jpeg"
              alt="Evitra Digital logo"
              width={36}
              height={36}
              className="h-9 w-9 rounded-md object-cover"
              priority
            />
            <p className="text-base font-semibold tracking-tight">Evitra Digital</p>
          </div>
          <a
            href="#contact"
            className="rounded-full border border-stone-300 px-4 py-2 text-sm font-medium transition hover:bg-stone-100"
          >
            Book a Call
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-stone-600">
              Digital Growth Partner
            </p>
            <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl lg:text-6xl">
              Build, rank, and scale your business online.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-stone-700">
              Evitra Digital helps brands grow with websites, SEO, content, and
              performance ads designed around real business outcomes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#services"
                className="rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-700"
              >
                Explore Services
              </a>
              <a
                href="#contact"
                className="rounded-full border border-stone-300 px-6 py-3 text-sm font-semibold transition hover:bg-stone-100"
              >
                Start a Project
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
            <h2 className="text-lg font-semibold tracking-tight">Why Evitra</h2>
            <ul className="mt-6 space-y-5 text-stone-700">
              <li>Strategy-first execution focused on business KPIs.</li>
              <li>Full-funnel approach from discovery to conversion.</li>
              <li>Clear reporting and continuous optimization.</li>
              <li>Fast, collaborative delivery with senior specialists.</li>
            </ul>
          </div>
        </section>

        <section id="services" className="mx-auto w-full max-w-6xl px-6 py-8 lg:px-8 lg:py-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Services that move metrics
            </h2>
            <p className="mt-4 text-lg leading-8 text-stone-700">
              End-to-end digital solutions tailored to your goals and market.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-stone-200 bg-white p-6"
              >
                <h3 className="text-xl font-semibold tracking-tight text-stone-900">
                  {service.title}
                </h3>
                <p className="mt-3 leading-7 text-stone-700">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 py-14 lg:px-8 lg:py-20">
          <div className="rounded-3xl border border-stone-200 bg-white p-8 sm:p-10">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Simple process, serious results
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              <div>
                <p className="text-sm font-semibold text-stone-500">Step 01</p>
                <p className="mt-2 text-lg font-semibold">Audit & Strategy</p>
                <p className="mt-2 text-stone-700">We map your goals, funnel, and opportunities.</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-stone-500">Step 02</p>
                <p className="mt-2 text-lg font-semibold">Build & Launch</p>
                <p className="mt-2 text-stone-700">Execution across web, SEO, content, and ads.</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-stone-500">Step 03</p>
                <p className="mt-2 text-lg font-semibold">Optimize & Scale</p>
                <p className="mt-2 text-stone-700">Continuous improvement backed by real data.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto w-full max-w-6xl px-6 pb-24 lg:px-8">
          <div className="rounded-3xl bg-stone-900 px-8 py-12 text-white sm:px-10">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to grow with Evitra Digital?
            </h2>
            <p className="mt-4 max-w-2xl text-stone-200">
              Tell us your goals and we’ll create a custom digital growth plan for your business.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:digital.evitra@gmail.com"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-200"
              >
                digital.evitra@gmail.com
              </a>
              <a
                href="tel:+919999999999"
                className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold transition hover:bg-white/10"
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
