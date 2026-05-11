import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Pencil, Check } from "lucide-react";
import { useEdit } from "./EditableContext";

const LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [light, setLight] = useState(false);
  const { editMode, setEditMode } = useEdit();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (light) { root.classList.remove("dark"); root.classList.add("light"); }
    else { root.classList.add("dark"); root.classList.remove("light"); }
  }, [light]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "py-2" : "py-4"}`}>
      <div className="mx-auto max-w-7xl px-4">
        <div className={`flex items-center justify-between rounded-2xl px-4 md:px-6 py-3 ${scrolled ? "glass-strong" : "glass"}`}>
          <button onClick={() => scrollTo("hero")} className="flex items-center gap-2">
            <span className="grid place-items-center size-9 rounded-xl bg-gradient-primary font-bold text-white shadow-lg">GS</span>
            <span className="hidden sm:block font-semibold tracking-tight">Gokul S</span>
          </button>

          <nav className="hidden lg:flex items-center gap-1">
            {LINKS.map(l => (
              <button key={l.id} onClick={() => scrollTo(l.id)} className="relative px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors group">
                {l.label}
                <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setEditMode(!editMode)}
              className={`hidden md:inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${editMode ? "bg-gradient-primary text-white" : "border border-border text-muted-foreground hover:text-foreground"}`}
            >
              {editMode ? <Check className="size-3.5" /> : <Pencil className="size-3.5" />}
              {editMode ? "Done" : "Edit"}
            </button>
            <button onClick={() => setLight(!light)} className="size-9 grid place-items-center rounded-lg border border-border text-muted-foreground hover:text-foreground transition-colors">
              {light ? <Moon className="size-4" /> : <Sun className="size-4" />}
            </button>
            <button onClick={() => setOpen(!open)} className="lg:hidden size-9 grid place-items-center rounded-lg border border-border">
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mx-4 mt-2 glass-strong rounded-2xl p-3"
          >
            {LINKS.map(l => (
              <button key={l.id} onClick={() => scrollTo(l.id)} className="block w-full text-left px-4 py-3 rounded-lg hover:bg-white/5 text-sm">
                {l.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
