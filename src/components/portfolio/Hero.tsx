import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Download, ArrowRight, Linkedin, Github, Phone, Mail, Camera, Upload, FileText } from "lucide-react";
import { Editable, useEdit } from "./EditableContext";
import defaultProfile from "@/assets/profile.jpeg";

const TITLES = ["Generative AI & Machine Learning Engineer", "LLM Fine-Tuning · RAG · Agentic AI"];

export function Hero({ onDownload }: { onDownload: () => void }) {
  const { editMode, resumeUrl, resumeName, setResume } = useEdit();
  const [photo, setPhoto] = useState<string | null>(defaultProfile);
  const [titleIdx, setTitleIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);
  const resumeRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const target = TITLES[titleIdx];
    let i = 0;
    setTyped("");
    const t = setInterval(() => {
      i++;
      setTyped(target.slice(0, i));
      if (i >= target.length) {
        clearInterval(t);
        setTimeout(() => setTitleIdx((titleIdx + 1) % TITLES.length), 2800);
      }
    }, 35);
    return () => clearInterval(t);
  }, [titleIdx]);

  const onPick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPhoto(url);
  };

  const onPickResume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setResume(URL.createObjectURL(file), file.name);
  };

  const handleDownload = () => {
    if (resumeUrl) {
      const a = document.createElement("a");
      a.href = resumeUrl;
      a.download = resumeName || "resume.pdf";
      a.click();
    } else {
      onDownload();
    }
  };

  const scrollProjects = () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0 mesh-bg animate-mesh" />
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 grid lg:grid-cols-[auto_1fr] gap-12 lg:gap-16 items-center w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto lg:mx-0"
        >
          <button
            onClick={() => fileRef.current?.click()}
            className="relative group size-44 md:size-48 rounded-full pulse-ring overflow-hidden bg-gradient-to-br from-violet to-teal grid place-items-center"
          >
            {photo ? (
              <img src={photo} alt="Gokul S" className="size-full object-cover" />
            ) : (
              <div className="text-center text-white/90">
                <Camera className="size-8 mx-auto mb-2" />
                <div className="text-[11px] font-medium">Click to upload</div>
              </div>
            )}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity grid place-items-center text-white text-xs font-semibold gap-1">
              <Camera className="size-6" />
              <span>Edit photo</span>
            </div>
          </button>
          <input ref={fileRef} type="file" accept="image/*" hidden onChange={onPick} />
        </motion.div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium text-muted-foreground"
          >
            <span className="size-2 rounded-full bg-teal animate-pulse" />
            Available for new opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }}
            className="text-5xl md:text-7xl font-bold tracking-tight"
          >
            <Editable>Gokul S</Editable>
            <span className="block text-gradient">AI Engineer.</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground font-mono min-h-[1.75rem]"
          >
            <span className="typing-cursor">{typed}</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-2"
          >
            {[
              { v: "5+ Years", l: "Experience" },
              { v: "30–60%", l: "Automation Gains" },
              { v: "50K+", l: "Assets Managed" },
              { v: "88%", l: "Model Accuracy" },
            ].map(b => (
              <div key={b.l} className="glass rounded-full px-3.5 py-1.5 text-xs flex items-center gap-2">
                <span className="font-mono font-bold text-violet">{b.v}</span>
                <span className="text-muted-foreground">{b.l}</span>
              </div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            <Editable as="span">
              Results-driven Generative AI & ML Engineer specializing in LLM fine-tuning, RAG systems,
              and Agentic AI — delivering 30–60% automation gains and &lt;2s real-time inference across
              enterprise deployments.
            </Editable>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-3"
          >
            <button onClick={handleDownload} className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-5 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-violet hover-lift">
              <Download className="size-4" />
              {resumeName ? "Download Resume" : "Download Resume"}
            </button>
            {editMode && (
              <>
                <button
                  onClick={() => resumeRef.current?.click()}
                  className="inline-flex items-center gap-2 rounded-xl border border-violet/50 bg-violet/10 px-5 py-3 text-sm font-semibold text-violet hover:bg-violet/20 hover-lift"
                >
                  <Upload className="size-4" />
                  {resumeName ? "Replace Resume" : "Upload Resume"}
                </button>
                <input ref={resumeRef} type="file" accept=".pdf,.doc,.docx" hidden onChange={onPickResume} />
              </>
            )}
            {resumeName && !editMode && (
              <span className="inline-flex items-center gap-2 rounded-xl border border-teal/40 bg-teal/10 px-3 py-2 text-xs font-mono text-teal">
                <FileText className="size-3.5" /> {resumeName}
              </span>
            )}
            <button onClick={scrollProjects} className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/50 px-5 py-3 text-sm font-semibold hover:bg-card hover-lift">
              View Projects <ArrowRight className="size-4" />
            </button>
            <a href="https://www.linkedin.com/in/gokul-s/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold text-muted-foreground hover:text-foreground hover-lift">
              <Linkedin className="size-4" /> LinkedIn
            </a>
            <a href="https://github.com/gokul-s" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold text-muted-foreground hover:text-foreground hover-lift">
              <Github className="size-4" /> GitHub
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground pt-2"
          >
            <a href="tel:+918610807150" className="flex items-center gap-2 hover:text-foreground transition-colors"><Phone className="size-4" /><span>+91 86108 07150</span></a>
            <a href="mailto:gokul.sutharsangs@gmail.com" className="flex items-center gap-2 hover:text-foreground transition-colors"><Mail className="size-4" /><span>gokul.sutharsangs@gmail.com</span></a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
