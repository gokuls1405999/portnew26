import { createFileRoute } from "@tanstack/react-router";
import { EditProvider } from "@/components/portfolio/EditableContext";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import {
  MetricsBanner,
  SkillsSection,
  ExperienceSection,
  InternshipSpotlight,
  ProjectsSection,
  CertificationsSection,
  EducationSection,
  LanguagesStrengths,
  Footer,
  FloatingResume,
} from "@/components/portfolio/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gokul S | Generative AI & ML Engineer" },
      { name: "description", content: "Portfolio of Gokul S — Generative AI & ML Engineer. LLM fine-tuning, RAG, Agentic AI. 30–60% automation gains, 88% model accuracy, 50K+ assets managed." },
    ],
  }),
  component: Index,
});

function downloadResume() {
  alert("Resume PDF downloading...");
}

function Index() {
  return (
    <EditProvider>
      <div id="about" className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Hero onDownload={downloadResume} />
          <MetricsBanner />
          <SkillsSection />
          <ExperienceSection />
          <InternshipSpotlight />
          <ProjectsSection />
          <CertificationsSection />
          <EducationSection />
          <LanguagesStrengths />
        </main>
        <Footer />
        <FloatingResume onClick={downloadResume} />
      </div>
    </EditProvider>
  );
}
