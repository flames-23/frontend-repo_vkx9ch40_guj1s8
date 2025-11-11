import { useEffect, useMemo, useState } from 'react'
import Spline from '@splinetool/react-spline'
import { MessageSquare, Cog, Database, ArrowRight, Star, Quote } from 'lucide-react'

function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300 backdrop-blur-md">
      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
      {children}
    </span>
  )
}

function GlassCard({ children, className = '' }) {
  return (
    <div className={`relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl ${className}`}>
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 to-transparent" />
      {children}
    </div>
  )
}

const solutions = [
  {
    icon: MessageSquare,
    title: 'AI Customer Support',
    desc: '24/7 agents that resolve tickets, upsell, and learn from every interaction.',
    bullet: ['97% resolution rate', 'Human-like tone', 'Omnichannel: chat, email, SMS'],
  },
  {
    icon: Cog,
    title: 'Workflow Bots',
    desc: 'Autonomous bots that click buttons, move data, and run SOPs across your stack.',
    bullet: ['Zapier on steroids', 'Human-in-the-loop', 'Audit trails + alerts'],
  },
  {
    icon: Database,
    title: 'CRM Automations',
    desc: 'Enrichment, lead routing, and follow-ups that never sleep or forget.',
    bullet: ['10x touchpoints', 'Real-time scoring', 'Pipeline hygiene'],
  },
]

const caseStudies = [
  {
    logo: 'Apex Fintech',
    quote:
      'Replaced a 4-person ops team with bots. 142 hours saved every month and NPS went up.',
    metric: '+142 hrs/mo saved',
    detail: 'KYC verification, document parsing, CRM updates',
  },
  {
    logo: 'Nova SaaS',
    quote:
      'Inbound support deflected by 88% with an AI agent trained on our product and docs.',
    metric: '88% deflection',
    detail: 'Zendesk + Slack + billing integrations',
  },
  {
    logo: 'Harbor Logistics',
    quote:
      'Workflow bots now trigger pickups and invoices automatically. Cash cycle improved by 12 days.',
    metric: '12 days faster cash',
    detail: 'RPA + OCR + accounting sync',
  },
]

function Carousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % caseStudies.length), 4000)
    return () => clearInterval(id)
  }, [])

  const current = caseStudies[index]
  return (
    <div className="relative w-full overflow-hidden">
      <GlassCard className="p-8 md:p-10">
        <div className="flex items-start gap-4">
          <div className="rounded-lg bg-cyan-400/10 px-3 py-1 text-cyan-300 ring-1 ring-cyan-400/30">
            {current.logo}
          </div>
          <div className="text-gray-200/90">
            <p className="mb-4 text-lg leading-relaxed text-gray-200">
              <span className="mr-2 inline-block align-top text-cyan-300"><Quote size={18} /></span>
              {current.quote}
            </p>
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-cyan-300 ring-1 ring-cyan-500/30">
                {current.metric}
              </span>
              <span className="text-gray-400">{current.detail}</span>
            </div>
          </div>
        </div>
      </GlassCard>
      <div className="mt-4 flex items-center justify-center gap-2">
        {caseStudies.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 w-6 rounded-full transition-all ${i === index ? 'bg-cyan-400' : 'bg-white/20 hover:bg-white/40'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function App() {
  const [hoverCta, setHoverCta] = useState(false)

  const gradientGlow = useMemo(
    () => (
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-24 right-1/3 h-64 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>
    ),
    []
  )

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-black to-black text-white">
      {/* Hero */}
      <section className="relative h-[92vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/xXD1hOqciVNtJX50/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* Subtle overlay gradients (non-blocking) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_20%,rgba(0,255,255,0.18),rgba(0,0,0,0))]" />
        {gradientGlow}

        {/* Content */}
        <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6">
          <div className="max-w-3xl">
            <Badge>AI Automation Agency</Badge>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl">
              <span className="text-white/90">Replace Your Team With </span>
              <span className="bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">Code.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-gray-300">
              We build AI-powered automation systems that save 100+ hours/month — without hiring.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#book"
                onMouseEnter={() => setHoverCta(true)}
                onMouseLeave={() => setHoverCta(false)}
                className="group relative inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 font-medium text-black transition hover:bg-cyan-400"
              >
                <span>Book a free audit</span>
                <ArrowRight className={`transition-transform ${hoverCta ? 'translate-x-0.5' : ''}`} size={18} />
                <span className="pointer-events-none absolute -inset-0.5 rounded-full opacity-60 blur-lg ring-2 ring-cyan-400/40" />
              </a>

              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Star className="text-cyan-300" size={16} />
                <span>Matte black. Glass. Neon cyan.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="relative mx-auto max-w-6xl px-6 py-20">
        {gradientGlow}
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-white/90">Manual work is killing productivity</h2>
          <p className="mt-3 max-w-2xl text-gray-400">
            Your team clicks the same buttons every day: copy/paste, export/import, ping/pong.
            We replace those loops with deterministic systems that never get tired.
          </p>
        </div>

        <GlassCard className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {["Overloaded support queues", "Leaky, slow workflows", "Messy CRMs and lost revenue"].map((item, i) => (
            <div key={i} className="rounded-xl bg-white/5 p-6 ring-1 ring-white/10">
              <p className="text-gray-300">{item}</p>
            </div>
          ))}
        </GlassCard>
      </section>

      {/* Solutions */}
      <section className="relative mx-auto max-w-6xl px-6 pb-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-white/90">Solutions that ship outcomes</h2>
            <p className="mt-3 text-gray-400">Designed for reliability, observability, and ROI from week one.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {solutions.map(({ icon: Icon, title, desc, bullet }, idx) => (
            <GlassCard key={idx} className="group">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-3 py-1 text-cyan-300 ring-1 ring-cyan-500/30">
                <Icon size={16} />
                <span className="text-xs">{title}</span>
              </div>
              <p className="mb-4 text-gray-300">{desc}</p>
              <ul className="space-y-2 text-sm text-gray-400">
                {bullet.map((b, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> {b}
                  </li>
                ))}
              </ul>
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/10 to-transparent" />
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-white/90">Proven results</h2>
          <p className="mt-3 text-gray-400">Real deployments. Real savings. Real delight.</p>
        </div>
        <Carousel />
      </section>

      {/* CTA */}
      <section id="book" className="relative mx-auto max-w-6xl px-6 pb-24">
        <GlassCard className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-semibold text-white/90">Ready to see the gaps in your ops?</h3>
            <p className="mt-2 text-gray-400">Get a free automation audit with an implementation plan and ROI model.</p>
          </div>
          <a
            href="#book"
            className="group relative inline-flex items-center gap-2 self-stretch rounded-xl bg-cyan-500 px-6 py-3 font-medium text-black transition hover:bg-cyan-400 md:self-auto"
          >
            <span>Book a free audit</span>
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
            <span className="pointer-events-none absolute -inset-1 rounded-xl opacity-60 blur-lg ring-2 ring-cyan-400/40" />
          </a>
        </GlassCard>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10/20 bg-black/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-10 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Flames AI Automation Agency</p>
          <div className="flex items-center gap-6">
            <a className="hover:text-gray-300" href="#">Privacy</a>
            <a className="hover:text-gray-300" href="#">Terms</a>
            <a className="hover:text-gray-300" href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
