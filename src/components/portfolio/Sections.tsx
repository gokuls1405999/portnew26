import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { ChevronDown, Award, GraduationCap, Languages as LangIcon, Briefcase, Sparkles, X, Linkedin, Github, Mail, Phone } from "lucide-react";
import { Counter } from "./Counter";
import { Reveal } from "./Reveal";
import { Editable, useEdit, UploadAction } from "./EditableContext";
import { PROJECTS, FILTERS, SKILLS, METRICS, LT_PROJECTS, type Project } from "@/data/portfolio";

function SectionTitle({ kicker, title, subtitle }: { kicker: string; title: string; subtitle?: string }) {
  return (
    <Reveal className="text-center max-w-2xl mx-auto mb-12">
      <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] font-mono uppercase tracking-widest text-violet">
        <Sparkles className="size-3" /> {kicker}
      </div>
      <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">{title}</h2>
      {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
    </Reveal>
  );
}

export function MetricsBanner() {
  return (
    <section className="relative py-16 border-y border-border/60 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-violet/10 via-transparent to-teal/10" />
      <div className="relative mx-auto max-w-7xl px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {METRICS.map((m, i) => (
          <Reveal key={m.label} delay={i * 0.06} className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient">
              <Counter value={m.value} prefix={m.prefix} suffix={m.suffix} />
            </div>
            <div className="mt-2 text-xs md:text-[13px] text-muted-foreground leading-snug">{m.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function SkillsSection() {
  const tabs = Object.keys(SKILLS) as (keyof typeof SKILLS)[];
  const [active, setActive] = useState<keyof typeof SKILLS>(tabs[0]);
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle kicker="Capabilities" title="Technical Arsenal" subtitle="Frontier ML, GenAI, and data engineering — production-tested across enterprise deployments." />

        <LayoutGroup>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {tabs.map(t => (
              <button key={t} onClick={() => setActive(t)} className="relative px-4 py-2 text-sm rounded-full">
                {active === t && (
                  <motion.div layoutId="tab-pill" className="absolute inset-0 bg-gradient-primary rounded-full" transition={{ type: "spring", stiffness: 400, damping: 32 }} />
                )}
                <span className={`relative ${active === t ? "text-white font-semibold" : "text-muted-foreground hover:text-foreground"}`}>{t}</span>
              </button>
            ))}
          </div>
        </LayoutGroup>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="flex flex-wrap justify-center gap-2.5 max-w-5xl mx-auto"
          >
            {SKILLS[active].map(s => (
              <span key={s} className="glass rounded-full px-4 py-2 text-sm hover:border-violet/60 hover:text-violet transition-all hover-lift cursor-default">
                {s}
              </span>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function ExperienceCard({ side, badge, title, org, date, children }: { side: "l" | "r"; badge?: string; title: string; org: string; date: string; children: React.ReactNode }) {
  return (
    <Reveal className="relative md:grid md:grid-cols-2 md:gap-8">
      <div className="absolute left-4 md:left-1/2 top-2 size-3 rounded-full bg-gradient-primary -translate-x-1/2 ring-4 ring-background z-10" />
      <div className={`pl-12 md:pl-0 ${side === "r" ? "md:col-start-2 md:pl-12" : "md:pr-12 md:text-right"}`}>
        <div className={`glass rounded-2xl p-6 hover-lift text-left`}>
          {badge && <div className="inline-block mb-3 rounded-full bg-gradient-primary px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">{badge}</div>}
          <h3 className="text-xl font-bold">{title}</h3>
          <div className="text-sm text-violet font-mono mt-1">{org}</div>
          <div className="text-xs text-muted-foreground mt-1">{date}</div>
          <div className="mt-4 space-y-3 text-sm">{children}</div>
        </div>
      </div>
    </Reveal>
  );
}

function DetailBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-[0.18em] font-mono text-teal mb-2">{label}</div>
      {children}
    </div>
  );
}

export function ExperienceSection() {
  const [openLT, setOpenLT] = useState<string | null>(null);
  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle kicker="Journey" title="Career Journey" subtitle="From mechanical CAD to enterprise AI engineering — five+ years of measurable, production-grade impact." />

        <div className="relative space-y-12">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet via-teal/40 to-transparent -translate-x-1/2" />
          <div className="md:hidden absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-violet via-teal/40 to-transparent" />

          {/* ROLE 1 — AK Infopark */}
          <ExperienceCard side="l" badge="Most Recent" title="Generative AI Engineer Intern" org="AK Infopark Pvt Ltd, Nagercoil" date="Sep 2025 – Apr 2026 · 8 months · On-site">
            <p className="text-muted-foreground">
              Lead engineer on an instruction fine-tuned multi-task NLP assistant. Owned the full lifecycle —
              dataset curation, supervised + instruction tuning, evaluation harness, and Gradio deployment —
              shipping a single model that replaces 6+ single-task baselines.
            </p>

            <DetailBlock label="Core Responsibilities">
              <ul className="space-y-1.5 text-muted-foreground list-disc pl-4">
                <li>Curated & standardized 5,000+ instruction–response pairs across summarization, Q&A, classification, NER, sentiment, paraphrase.</li>
                <li>Designed modular PyTorch + Hugging Face Transformers training pipeline (LoRA + full SFT variants).</li>
                <li>Built dynamic prompt-routing framework that selects task-specific templates at inference.</li>
                <li>Implemented evaluation harness: BLEU, ROUGE-L, F1, exact-match across all 6 task heads.</li>
                <li>Shipped low-latency Gradio interface with streaming responses and prompt presets.</li>
              </ul>
            </DetailBlock>

            <DetailBlock label="Quantified Impact">
              <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-1.5 text-muted-foreground">
                {[
                  ["+35%", "instruction-following accuracy vs baseline"],
                  ["88%", "evaluation accuracy across 6+ NLP tasks"],
                  ["60%", "reduction in single-task model dependency"],
                  ["+40%", "system flexibility via dynamic prompts"],
                  ["<2s", "real-time response latency"],
                  ["30%", "faster dev cycles via modular pipeline"],
                  ["20%", "hallucination reduction via structured prompts"],
                  ["5,000+", "instruction samples curated & validated"],
                ].map(([v, l]) => (
                  <li key={l} className="flex gap-3"><span className="font-mono font-bold text-violet shrink-0 w-16">{v}</span><span>{l}</span></li>
                ))}
              </ul>
            </DetailBlock>

            <DetailBlock label="Tech Stack">
              <div className="flex flex-wrap gap-1.5">
                {["Python", "PyTorch", "Hugging Face Transformers", "LoRA / PEFT", "Instruction Tuning", "Prompt Engineering", "Gradio", "Datasets", "Evaluate"].map(t => (
                  <span key={t} className="text-[11px] rounded-md border border-border px-2 py-0.5 font-mono">{t}</span>
                ))}
              </div>
            </DetailBlock>
          </ExperienceCard>

          {/* ROLE 2 — L&T */}
          <ExperienceCard side="r" title="Associate Engineer — Master Data Management" org="L&T Technology Services Ltd, Chennai" date="Jan 2020 – May 2022 · 2 years 5 months · Hybrid">
            <p className="text-muted-foreground">
              Delivered enterprise-grade Master Data Management & cataloguing across 7 global programs spanning
              Europe, USA and Australia — standardizing 50,000+ asset records to ISO 8000 / UNSPSC / ECCMA
              specifications for energy, manufacturing, food-process and oil & gas clients.
            </p>

            <DetailBlock label="Core Responsibilities">
              <ul className="space-y-1.5 text-muted-foreground list-disc pl-4">
                <li>Material standardization, classification & enrichment per UNSPSC + ECCMA cataloguing rules.</li>
                <li>De-duplication, cleansing and golden-record creation in SAP MM and MDM tools.</li>
                <li>Bill of Materials (BOM) authoring, attribute extraction and template normalization.</li>
                <li>Client-facing data quality reviews and sprint-based delivery against SLA.</li>
                <li>Power BI / Excel-VBA dashboards for daily throughput, error rate and enrichment KPIs.</li>
              </ul>
            </DetailBlock>

            <DetailBlock label="Aggregate Program Impact">
              <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-1.5 text-muted-foreground">
                {[
                  ["50,000+", "asset records standardized end-to-end"],
                  ["7", "global enterprise programs delivered"],
                  ["+22%", "average data accuracy uplift"],
                  ["+18%", "average cataloguing efficiency gain"],
                  ["55K → 14K", "data reduction (Winnebago dedupe)"],
                  ["100%", "ISO 8000 / UNSPSC compliance"],
                ].map(([v, l]) => (
                  <li key={l} className="flex gap-3"><span className="font-mono font-bold text-violet shrink-0 w-24">{v}</span><span>{l}</span></li>
                ))}
              </ul>
            </DetailBlock>

            <DetailBlock label="Client Programs (click to expand)">
              <div className="space-y-2">
                {LT_PROJECTS.map(p => (
                  <div key={p.name} className="rounded-lg border border-border bg-background/40">
                    <button onClick={() => setOpenLT(openLT === p.name ? null : p.name)} className="w-full flex items-center justify-between px-3 py-2.5 text-left">
                      <div>
                        <div className="text-sm font-medium">{p.name}</div>
                        <div className="text-[11px] text-muted-foreground font-mono">{p.date}</div>
                      </div>
                      <ChevronDown className={`size-4 transition-transform ${openLT === p.name ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence initial={false}>
                      {openLT === p.name && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                          <ul className="px-3 pb-3 space-y-1 text-xs">
                            {p.metrics.map(m => <li key={m} className="flex gap-2"><span className="text-teal">▸</span><span className="text-muted-foreground">{m}</span></li>)}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </DetailBlock>

            <DetailBlock label="Tech Stack">
              <div className="flex flex-wrap gap-1.5">
                {["SAP MM", "MDM", "ISO 8000 MDQM", "UNSPSC", "ECCMA", "BOM", "Power BI", "SQL", "Excel VBA", "MS Access"].map(t => (
                  <span key={t} className="text-[11px] rounded-md border border-border px-2 py-0.5 font-mono">{t}</span>
                ))}
              </div>
            </DetailBlock>
          </ExperienceCard>

          {/* ROLE 3 — UPK */}
          <ExperienceCard side="l" title="Mechanical CAD Designer & Trainer" org="UPK Techserv, Nagercoil" date="Jul 2017 – Dec 2019 · 2 years 6 months · On-site">
            <p className="text-muted-foreground">
              Hybrid design + training role: produced 2D/3D mechanical models for industrial clients while
              upskilling 120+ engineering graduates in CAD/CAE workflows.
            </p>

            <DetailBlock label="Core Responsibilities">
              <ul className="space-y-1.5 text-muted-foreground list-disc pl-4 md:text-left">
                <li>2D drafting, 3D modelling, assemblies and GD&T-compliant production drawings.</li>
                <li>Static / structural FEA in ANSYS for design validation and weight optimization.</li>
                <li>Reverse-engineering legacy components from physical samples and scanned data.</li>
                <li>Curriculum design & instructor-led training in AutoCAD, SOLIDWORKS, CATIA, NX CAD.</li>
                <li>Mentored 120+ trainees with hands-on industrial project assignments.</li>
              </ul>
            </DetailBlock>

            <DetailBlock label="Quantified Impact">
              <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-1.5 text-muted-foreground md:text-left">
                {[
                  ["120+", "graduates trained & placement-ready"],
                  ["300+", "production drawings released"],
                  ["−25%", "design rework via FEA validation"],
                  ["5", "CAD/CAE tools taught end-to-end"],
                ].map(([v, l]) => (
                  <li key={l} className="flex gap-3"><span className="font-mono font-bold text-violet shrink-0 w-16">{v}</span><span>{l}</span></li>
                ))}
              </ul>
            </DetailBlock>

            <DetailBlock label="Tech Stack">
              <div className="flex flex-wrap gap-1.5 md:justify-start">
                {["AutoCAD", "SOLIDWORKS", "CATIA", "NX CAD", "Creo View", "ANSYS", "GD&T", "MS Project"].map(t => (
                  <span key={t} className="text-[11px] rounded-md border border-border px-2 py-0.5 font-mono">{t}</span>
                ))}
              </div>
            </DetailBlock>
          </ExperienceCard>
        </div>
      </div>
    </section>
  );
}

export function InternshipSpotlight() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-4">
        <SectionTitle kicker="Spotlight" title="Business Analyst Internship" />
        <Reveal>
          <div className="glass rounded-3xl p-8 md:p-10 relative overflow-hidden hover-lift">
            <div className="absolute -top-20 -right-20 size-60 rounded-full bg-gradient-primary opacity-20 blur-3xl" />
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="size-5 text-violet" />
              <span className="text-sm font-mono text-muted-foreground">AK Infopark · Apr 2025 – May 2025</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold">"Connect Pay" — Digital Payment App</h3>
            <p className="mt-3 text-muted-foreground">End-to-end product analysis from market research to wireframe & sprint planning.</p>
            <div className="grid sm:grid-cols-2 gap-3 mt-6">
              {[
                "Wireframe prototype (Miro)",
                "SWOT vs Google Pay, PhonePe, Paytm",
                "User personas + customer journey mapping",
                "Agile sprint planning simulation",
                "Wallet integration, bill payments, transfers",
                "Transaction history & UX flows",
              ].map(f => (
                <div key={f} className="flex items-start gap-2 text-sm">
                  <span className="mt-1.5 size-1.5 rounded-full bg-teal shrink-0" />
                  <span className="text-muted-foreground">{f}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-teal/10 border border-teal/30 text-teal text-xs px-3 py-1.5 font-medium">
              ★ Commended by stakeholders for structured analysis and UI/UX clarity
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const CAT_COLORS: Record<string, string> = {
  "Generative AI": "from-violet to-purple-500",
  "RAG": "from-teal to-cyan-500",
  "Agentic AI": "from-fuchsia-500 to-pink-500",
  "Computer Vision": "from-amber-500 to-orange-500",
  "ML": "from-emerald-500 to-green-500",
  "NLP": "from-blue-500 to-indigo-500",
  "Time-Series": "from-rose-500 to-red-500",
  "Clustering": "from-yellow-500 to-amber-500",
  "Deep Learning": "from-sky-500 to-blue-500",
};

export function ProjectsSection() {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState<Project | null>(null);
  const [images, setImages] = useState<Record<string, string>>({});
  const [files, setFiles] = useState<Record<string, { url: string; name: string }>>({});
  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle kicker="Portfolio" title="Project Portfolio" subtitle={`${PROJECTS.length} production projects across GenAI, ML, RAG, and Agentic systems.`} />

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {FILTERS.map(f => (
            <button key={f} onClick={() => setFilter(f)} className={`text-xs md:text-sm px-3.5 py-1.5 rounded-full border transition-all ${filter === f ? "bg-gradient-primary text-white border-transparent" : "border-border text-muted-foreground hover:text-foreground hover:border-violet/40"}`}>
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                layout
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: Math.min(i * 0.03, 0.3) }}
                className="relative"
              >
                <button
                  onClick={() => setOpen(p)}
                  className="w-full text-left glass rounded-2xl p-5 hover-lift relative overflow-hidden group"
                >
                  <div className={`absolute -top-12 -right-12 size-32 rounded-full bg-gradient-to-br ${CAT_COLORS[p.category] ?? "from-violet to-teal"} opacity-10 blur-2xl group-hover:opacity-25 transition-opacity`} />
                  {images[p.id] && (
                    <img src={images[p.id]} alt={p.title} className="w-full h-32 object-cover rounded-lg mb-3 border border-border" />
                  )}
                  <div className={`inline-block rounded-md bg-gradient-to-r ${CAT_COLORS[p.category] ?? "from-violet to-teal"} px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white mb-3`}>{p.category}</div>
                  <h3 className="font-semibold text-base leading-snug">{p.title}</h3>
                  <div className="mt-3 space-y-1.5">
                    <div className="text-[10px] uppercase tracking-[0.18em] font-mono text-teal/80">Impact Metrics · {p.metrics.length}</div>
                    <ul className="space-y-1">
                      {p.metrics.map(m => (
                        <li key={m} className="text-[11px] font-mono text-violet leading-snug flex gap-1.5"><span className="text-teal shrink-0">▸</span><span>{m}</span></li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-4">
                    {p.stack.slice(0, 3).map(s => (
                      <span key={s} className="text-[10px] rounded border border-border px-1.5 py-0.5 text-muted-foreground font-mono">{s}</span>
                    ))}
                    {p.stack.length > 3 && <span className="text-[10px] text-muted-foreground">+{p.stack.length - 3}</span>}
                  </div>
                  {files[p.id] && (
                    <div className="mt-3 text-[10px] font-mono text-teal truncate">📎 {files[p.id].name}</div>
                  )}
                  <div className="mt-4 text-xs text-violet font-medium opacity-0 group-hover:opacity-100 transition-opacity">View details →</div>
                </button>
                <UploadAction
                  id={`proj-img-${p.id}`}
                  accept="image/*"
                  label="Image"
                  onFile={(url) => setImages(s => ({ ...s, [p.id]: url }))}
                />
                <UploadAction
                  id={`proj-file-${p.id}`}
                  accept=".pdf,.zip,.doc,.docx,.ppt,.pptx"
                  label="File"
                  className="absolute top-2 right-[5.25rem] z-20"
                  onFile={(url, f) => setFiles(s => ({ ...s, [p.id]: { url, name: f.name } }))}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm grid place-items-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}
              onClick={e => e.stopPropagation()}
              className="glass-strong rounded-3xl max-w-2xl w-full p-8 relative max-h-[85vh] overflow-y-auto"
            >
              <button onClick={() => setOpen(null)} className="absolute top-4 right-4 size-9 grid place-items-center rounded-lg border border-border hover:bg-white/5"><X className="size-4" /></button>
              <div className={`inline-block rounded-md bg-gradient-to-r ${CAT_COLORS[open.category] ?? "from-violet to-teal"} px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white mb-3`}>{open.category}</div>
              <h3 className="text-2xl font-bold">{open.title}</h3>
              <div className="mt-6">
                <div className="flex items-baseline justify-between mb-3">
                  <div className="text-xs uppercase tracking-[0.2em] text-teal font-mono">Quantified Impact</div>
                  <div className="text-[10px] font-mono text-muted-foreground">{open.metrics.length} measured outcomes</div>
                </div>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {open.metrics.map((m, idx) => {
                    const match = m.match(/^([<>]?\s*[\d.,]+[KMk%+×x]*(?:\s*[-–—]\s*[\d.,]+[KMk%+×x]*)?(?:\s*(?:%|s|ms|x|×|\+|K|M))?)\s*(.*)$/);
                    const head = match?.[1]?.trim() || m;
                    const tail = match?.[2]?.trim() || "";
                    return (
                      <div key={m} className="rounded-xl border border-violet/20 bg-violet/5 p-3 hover:border-violet/40 transition-colors">
                        <div className="flex items-start gap-2">
                          <span className="text-[10px] font-mono text-teal mt-0.5">{String(idx + 1).padStart(2, "0")}</span>
                          <div className="min-w-0">
                            <div className="font-mono text-violet font-semibold text-sm leading-tight">{head}</div>
                            {tail && <div className="text-xs text-muted-foreground mt-1 leading-snug">{tail}</div>}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="mt-6">
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2 font-mono">Stack</div>
                <div className="flex flex-wrap gap-1.5">
                  {open.stack.map(s => <span key={s} className="text-xs rounded border border-border px-2 py-1 font-mono">{s}</span>)}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export function CertificationsSection() {
  const initial = [
    { title: "ISO 8000 MDQM", org: "ECCMA · 2025", desc: "Master Data Quality Manager" },
    { title: "ISO 25500 SCDM", org: "ECCMA · 2025", desc: "Supply Chain Data Manager" },
    { title: "Diploma in Computer Applications", org: "DCA", desc: "Foundational computing certification" },
  ];
  const [files, setFiles] = useState<Record<string, { url: string; name: string; isImage: boolean }>>({});
  return (
    <section id="certifications" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle kicker="Credentials" title="Certifications & Credentials" />
        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {initial.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div className="glass rounded-2xl p-6 hover-lift relative overflow-hidden h-full">
                <div className="absolute -top-10 -right-10 size-32 rounded-full bg-gradient-primary opacity-15 blur-2xl" />
                <div className="size-12 grid place-items-center rounded-xl bg-gradient-primary text-white mb-4 shadow-lg">
                  <Award className="size-6" />
                </div>
                <h3 className="font-bold text-lg">{c.title}</h3>
                <div className="text-xs font-mono text-violet mt-1">{c.org}</div>
                <p className="text-sm text-muted-foreground mt-3">{c.desc}</p>
                {files[c.title] && (
                  <a
                    href={files[c.title].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 block"
                  >
                    {files[c.title].isImage ? (
                      <img src={files[c.title].url} alt={c.title} className="w-full h-32 object-cover rounded-lg border border-border" />
                    ) : (
                      <span className="inline-flex items-center gap-2 text-xs font-mono text-teal hover:text-violet transition-colors">
                        📎 {files[c.title].name}
                      </span>
                    )}
                  </a>
                )}
                <UploadAction
                  id={`cert-${i}`}
                  accept="image/*,application/pdf"
                  label="Certificate"
                  onFile={(url, f) =>
                    setFiles(s => ({
                      ...s,
                      [c.title]: { url, name: f.name, isImage: f.type.startsWith("image/") },
                    }))
                  }
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EducationSection() {
  const items = [
    { degree: "B.E. Mechanical Engineering", grade: "CGPA 8.06/10", school: "Amrita College of Engineering & Technology, Nagercoil", date: "2022–2025 · Anna University" },
    { degree: "Diploma in Mechanical Engineering", grade: "83%", school: "K.N.S.K Polytechnic College, Nagercoil", date: "2015–2017" },
    { degree: "Higher Secondary (H.S.C)", grade: "81%", school: "Govt. Higher Secondary School, Kurathiyarai", date: "2015" },
    { degree: "Secondary School (S.S.L.C)", grade: "82%", school: "Govt. High School, Kadukkarai", date: "2013" },
  ];
  return (
    <section id="education" className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4">
        <SectionTitle kicker="Education" title="Education" />
        <div className="space-y-4">
          {items.map((e, i) => (
            <Reveal key={e.degree} delay={i * 0.06}>
              <div className="glass rounded-2xl p-5 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="size-10 grid place-items-center rounded-lg bg-violet/10 border border-violet/30 text-violet shrink-0">
                    <GraduationCap className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{e.degree}</h3>
                    <div className="text-sm text-muted-foreground">{e.school}</div>
                    <div className="text-xs font-mono text-muted-foreground mt-1">{e.date}</div>
                  </div>
                </div>
                <div className="font-mono font-bold text-gradient text-xl pl-14 md:pl-0">{e.grade}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LanguagesStrengths() {
  const langs = [
    { name: "English", level: 95, flag: "🇬🇧" },
    { name: "Tamil", level: 100, flag: "🇮🇳" },
    { name: "Malayalam", level: 80, flag: "🇮🇳" },
    { name: "Hindi", level: 70, flag: "🇮🇳" },
  ];
  const strengths = ["Self-motivated", "Fast learner", "Strong communicator", "Adaptive", "Collaborative & independent"];
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-8">
        <Reveal>
          <div className="glass rounded-3xl p-8 h-full">
            <div className="flex items-center gap-3 mb-6">
              <LangIcon className="size-5 text-violet" />
              <h3 className="text-xl font-bold">Languages</h3>
            </div>
            <div className="space-y-4">
              {langs.map(l => (
                <div key={l.name}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm flex items-center gap-2"><span>{l.flag}</span> {l.name}</span>
                    <span className="text-xs font-mono text-muted-foreground">{l.level}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }} whileInView={{ width: `${l.level}%` }} viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-primary"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="glass rounded-3xl p-8 h-full">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="size-5 text-teal" />
              <h3 className="text-xl font-bold">Core Strengths</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {strengths.map(s => (
                <span key={s} className="rounded-full glass px-4 py-2 text-sm hover:border-teal/60 hover:text-teal transition-all hover-lift cursor-default">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  const { editMode } = useEdit();
  const [contacts, setContacts] = useState([
    { key: "Email Me", value: "gokul.sutharsangs@gmail.com", href: "mailto:gokul.sutharsangs@gmail.com", Icon: Mail, hint: "Drop a message anytime" },
    { key: "LinkedIn", value: "linkedin.com/in/gokul-s", href: "https://www.linkedin.com/in/gokul-s/", Icon: Linkedin, hint: "Let's connect professionally" },
    { key: "Contact", value: "+91 86108 07150", href: "tel:+918610807150", Icon: Phone, hint: "Available Mon–Sat, 9am–7pm IST" },
    { key: "GitHub", value: "github.com/gokul-s", href: "https://github.com/gokul-s", Icon: Github, hint: "Explore my code & projects" },
  ]);
  return (
    <footer id="contact" className="border-t border-border/60 py-14 mt-16 relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="rounded-2xl glass-strong border border-violet/30 p-6 md:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 size-72 rounded-full bg-violet/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 size-72 rounded-full bg-teal/15 blur-3xl pointer-events-none" />
          <div className="relative grid lg:grid-cols-[1.1fr_1.4fr] gap-8 lg:gap-12 items-start">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-violet/40 bg-violet/10 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.18em] text-violet">
                <Sparkles className="size-3" /> Stakeholder Queries
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight">
                Let's Connect — <span className="text-gradient">Building Intelligent Systems</span>
              </h2>
              <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-md">
                Open to discussing Generative AI, ML engineering, RAG/agentic systems, and full-time or freelance collaborations. Reach out through any channel below — typically respond within 24 hours.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Full-time roles", "Freelance AI/ML", "Remote opportunities"].map(x => (
                  <span key={x} className="text-[11px] rounded-full glass px-3 py-1 border border-border/60">{x}</span>
                ))}
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {contacts.map(({ key, value, href, Icon, hint }, i) => (
                editMode ? (
                  <div key={key} className="rounded-xl border border-violet/30 bg-background/40 p-4 space-y-2">
                    <div className="flex items-center gap-2 text-violet">
                      <Icon className="size-4" />
                      <span className="text-xs font-mono uppercase tracking-widest">{key}</span>
                    </div>
                    <input
                      value={href}
                      onChange={(e) => setContacts(s => s.map((x, j) => j === i ? { ...x, href: e.target.value } : x))}
                      aria-label={`${key} URL`}
                      className="w-full h-8 rounded-md border border-violet/40 bg-background/60 px-2 text-xs font-mono focus:outline-none focus:ring-1 focus:ring-violet"
                    />
                    <input
                      value={value}
                      onChange={(e) => setContacts(s => s.map((x, j) => j === i ? { ...x, value: e.target.value } : x))}
                      aria-label={`${key} display`}
                      className="w-full h-8 rounded-md border border-border bg-background/60 px-2 text-xs focus:outline-none focus:ring-1 focus:ring-violet"
                    />
                  </div>
                ) : (
                  <a
                    key={key}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group rounded-xl border border-border/70 bg-background/40 p-4 hover-lift hover:border-violet/60 transition-all flex flex-col gap-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="size-10 grid place-items-center rounded-lg bg-gradient-primary text-white shadow-md">
                        <Icon className="size-5" />
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground group-hover:text-violet transition-colors">{key}</span>
                    </div>
                    <div className="text-sm font-semibold break-all leading-tight">{value}</div>
                    <div className="text-[11px] text-muted-foreground">{hint}</div>
                  </a>
                )
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="relative mx-auto max-w-7xl px-4 mt-10 pt-6 border-t border-border/60 text-xs text-muted-foreground flex flex-wrap justify-between gap-3">
        <span>© 2025 Gokul S. All rights reserved.</span>
        <span className="font-mono">Crafted with precision · Built for impact</span>
      </div>
    </footer>
  );
}

export function FloatingResume({ onClick }: { onClick: () => void }) {
  const { resumeUrl, resumeName } = useEdit();
  const [hover, setHover] = useState(false);
  const handleClick = () => {
    if (resumeUrl) {
      const a = document.createElement("a");
      a.href = resumeUrl;
      a.download = resumeName || "resume.pdf";
      a.click();
    } else {
      onClick();
    }
  };
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, width: hover ? 220 : 56, paddingLeft: hover ? 20 : 0, paddingRight: hover ? 20 : 0 }}
      transition={{ delay: 0.8 }}
      onClick={handleClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      className="fixed bottom-6 right-6 z-40 h-14 rounded-full bg-gradient-primary text-white font-semibold shadow-2xl flex items-center overflow-hidden pulse-ring"
    >
      <span className="grid place-items-center size-14 shrink-0">
        <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" /></svg>
      </span>
      <span className={`text-sm whitespace-nowrap transition-opacity ${hover ? "opacity-100" : "opacity-0"}`}>Download Resume ↓</span>
    </motion.button>
  );
}
