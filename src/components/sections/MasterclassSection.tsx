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
      className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-slate-950 via-purple-950/50 to-slate-950"
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
          <h2 
            id="masterclass-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent"
          >
            AI Evolution Masterclass
          </h2>
          <p className="text-xl md:text-2xl text-purple-200/80 max-w-2xl mx-auto">
            Naucz się AI w praktyce i wyciśnij 100% z narzędzi, które już masz.
          </p>
        </div>

        {/* AI is not magic block */}
        <div className="text-center mb-16 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 backdrop-blur-sm">
            <p className="text-lg md:text-xl text-white/90 font-medium">
              AI to nie czarna magia. Tłumaczymy wszystko krok po kroku, bez lania wody.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {skills.map((skill, index) => (
            <article
              key={skill.title}
              className="group relative p-6 rounded-2xl bg-slate-900/50 border border-purple-500/20 backdrop-blur-sm
                         transition-all duration-500 hover:border-cyan-400/40 hover:bg-slate-800/50
                         hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] hover:-translate-y-1
                         animate-fade-in"
              style={{ animationDelay: `${0.15 + index * 0.1}s` }}
              aria-labelledby={`skill-${index}-title`}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon */}
              <div className="relative mb-4 w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-400/30 flex items-center justify-center group-hover:border-cyan-400/50 transition-colors duration-300">
                <skill.icon className="w-7 h-7 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                {/* Icon glow */}
                <div className="absolute inset-0 rounded-xl bg-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Content */}
              <h3 
                id={`skill-${index}-title`}
                className="relative text-xl font-bold text-white mb-3 group-hover:text-cyan-100 transition-colors duration-300"
              >
                {skill.title}
              </h3>
              <p className="relative text-purple-200/70 leading-relaxed group-hover:text-purple-100/80 transition-colors duration-300">
                {skill.description}
              </p>
            </article>
          ))}
        </div>

        {/* Target Audience */}
        <div className="text-center mb-16 animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Dla kogo jest Masterclass?
          </h3>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {targetAudience.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-400/30 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300"
              >
                <item.icon className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">{item.label}</span>
              </div>
            ))}
          </div>
          <p className="text-purple-200/60 text-lg">
            Nie musisz być techniczny. Liczy się praktyka.
          </p>
        </div>

        {/* Steps */}
        <div className="mb-20 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
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
                <div className="relative inline-flex items-center justify-center w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-purple-500/30 to-cyan-500/30 border border-purple-400/40 group-hover:border-cyan-400/60 transition-all duration-300">
                  <span className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                    {step.step}
                  </span>
                  <step.icon className="absolute -bottom-2 -right-2 w-8 h-8 p-1.5 rounded-lg bg-slate-900 border border-cyan-500/40 text-cyan-400" />
                </div>
                
                <p className="text-lg text-white font-medium group-hover:text-cyan-100 transition-colors duration-300">
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
              className="px-8 py-6 text-lg font-bold bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 border-0 shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] transition-all duration-300"
              aria-label="Dołącz do AI Evolution Masterclass"
            >
              Dołącz do Masterclass
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg font-medium border-purple-400/40 text-purple-200 hover:bg-purple-500/10 hover:border-cyan-400/60 hover:text-white transition-all duration-300"
              aria-label="Zobacz program Masterclass"
            >
              Zobacz program
            </Button>
          </div>
          <p className="text-purple-200/60 text-lg">
            Krok po kroku. Bez chaosu. Z efektami.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MasterclassSection;
