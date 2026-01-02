import { Brain, Image, Video, Globe, Workflow, Bot, Users, Briefcase, Target, BookOpen, FileText, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const skills = [
  {
    icon: Brain,
    title: "LLM Mastery",
    description: "Opanujesz ChatGPT, Gemini, Genspark i Grok. Nauczysz się pytać tak, żeby model dawał wyniki jak asystent eksperta."
  },
  {
    icon: Image,
    title: "AI Grafiki",
    description: "Nauczysz się tworzyć kompleksowe grafiki AI najlepszymi modelami. Od pomysłu do gotowej wizualki."
  },
  {
    icon: Video,
    title: "AI Wideo i Content",
    description: "Generowanie wideo, sceny, prompty, montaż. Tworzysz content jak profesjonalista."
  },
  {
    icon: Globe,
    title: "Strony i Aplikacje",
    description: "Budujesz landing page, portale i proste aplikacje. Od pomysłu do działającej wersji."
  },
  {
    icon: Workflow,
    title: "Automatyzacje",
    description: "Tworzysz automatyzacje do generowania contentu i pracy z leadami. Łączysz narzędzia w system."
  },
  {
    icon: Bot,
    title: "AI Agenci",
    description: "Tworzysz agentów, którzy wykonują zadania za Ciebie. Piszą, analizują, planują, publikują."
  }
];

const targetAudience = [
  { icon: Users, label: "Twórcy contentu" },
  { icon: Briefcase, label: "Właściciele firm" },
  { icon: Target, label: "Marketing i sprzedaż" }
];

const steps = [
  { icon: BookOpen, step: "01", title: "Uczysz się na realnych przykładach" },
  { icon: FileText, step: "02", title: "Dostajesz gotowe prompty i szablony" },
  { icon: Rocket, step: "03", title: "Budujesz swoje systemy i publikujesz" }
];

const MasterclassSection = () => {
  return (
    <section
      className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900/80 to-slate-950"
      aria-labelledby="masterclass-heading"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/40 rounded-full animate-float-particle"
            style={{
              left: `${15 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + i * 0.5}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200/80 mb-4">Program premium</p>
          <h2
            id="masterclass-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-md"
          >
            AI Evolution Masterclass
          </h2>
          <p className="text-xl md:text-2xl text-purple-100/80 max-w-3xl mx-auto text-balance">
            Strategiczny program dla osób, które chcą korzystać z AI w sposób uporządkowany, mierzalny i bez marketingowej przesady.
          </p>
        </div>

        {/* AI is not magic block */}
        <div className="text-center mb-16 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="inline-block px-8 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg">
            <p className="text-lg md:text-xl text-white/90 font-medium text-balance">
              AI to zestaw narzędzi, które da się opanować metodycznie. Dostajesz jasne instrukcje, przykłady i gotowe szablony.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {skills.map((skill, index) => (
            <article
              key={skill.title}
              className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md
                         transition-all duration-500 hover:border-cyan-300/50 hover:bg-white/10
                         hover:shadow-[0_0_40px_rgba(59,130,246,0.25)] hover:-translate-y-1
                         animate-fade-in"
              style={{ animationDelay: `${0.15 + index * 0.1}s` }}
              aria-labelledby={`skill-${index}-title`}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon */}
              <div className="relative mb-4 w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/30 to-cyan-500/30 border border-white/20 flex items-center justify-center group-hover:border-cyan-300/60 transition-colors duration-300">
                <skill.icon className="w-7 h-7 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                {/* Icon glow */}
                <div className="absolute inset-0 rounded-xl bg-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Content */}
              <h3 
                id={`skill-${index}-title`}
                className="relative text-xl font-semibold text-white mb-2 group-hover:text-cyan-100 transition-colors duration-300"
              >
                {skill.title}
              </h3>
              <p className="relative text-purple-100/70 leading-relaxed group-hover:text-purple-50/80 transition-colors duration-300 text-sm md:text-base">
                {skill.description}
              </p>
            </article>
          ))}
        </div>

        {/* Target Audience */}
        <div className="text-center mb-16 animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Dla kogo jest Masterclass?
          </h3>
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            {targetAudience.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:border-cyan-300/60 transition-all duration-300"
              >
                <item.icon className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">{item.label}</span>
              </div>
            ))}
          </div>
          <p className="text-purple-100/70 text-lg">
            Nie musisz być techniczny – liczy się konsekwencja i praca na przykładach.
          </p>
        </div>

        {/* Steps */}
        <div className="mb-20 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
            Jak wygląda nauka?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className="relative text-center group"
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-purple-500/50 to-transparent" />
                )}
                
                {/* Step number */}
                <div className="relative inline-flex items-center justify-center w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-purple-500/25 to-cyan-500/25 border border-white/10 group-hover:border-cyan-300/60 transition-all duration-300">
                  <span className="text-3xl font-bold text-white">
                    {step.step}
                  </span>
                  <step.icon className="absolute -bottom-2 -right-2 w-8 h-8 p-1.5 rounded-lg bg-slate-900 border border-cyan-500/40 text-cyan-400" />
                </div>

                <p className="text-lg text-white font-medium group-hover:text-cyan-100 transition-colors duration-300 text-balance">
                  {step.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Button
              size="lg"
              className="px-8 py-6 text-lg font-bold bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 border-0 shadow-[0_12px_50px_rgba(37,99,235,0.35)] transition-all duration-300"
              aria-label="Dołącz do AI Evolution Masterclass"
            >
              Dołącz do programu
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg font-medium border-white/20 text-white/90 hover:bg-white/10 hover:border-cyan-300/60 hover:text-white transition-all duration-300"
              aria-label="Zobacz program Masterclass"
            >
              Zobacz program
            </Button>
          </div>
          <p className="text-purple-100/70 text-lg">
            Uporządkowana ścieżka, konkretne rezultaty i wsparcie w trakcie wdrożeń.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MasterclassSection;
