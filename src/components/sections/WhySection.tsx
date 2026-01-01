import { Target, Globe, Trophy, Bot, Sparkles, BookOpen, Rocket, Shield } from "lucide-react";
import sectionBenefitsImage from "@/assets/section-benefits.jpg";

const benefits = [
  {
    icon: Target,
    title: "Praktyczne podejście",
    description: "Nauka przez działanie. Każdy moduł zawiera ćwiczenia i przykłady z życia wzięte.",
    gradient: "from-primary to-cyan",
  },
  {
    icon: Globe,
    title: "Wszystko po polsku",
    description: "Kompleksowe materiały w języku polskim, bez bariery językowej.",
    gradient: "from-accent to-pink-400",
  },
  {
    icon: Trophy,
    title: "System gamifikacji",
    description: "Zdobywaj punkty, odznaki i awansuj na kolejne poziomy. Nauka może być grą!",
    gradient: "from-success to-emerald-400",
  },
  {
    icon: Bot,
    title: "Evolution Bot",
    description: "Masz pytanie? Evolution Bot odpowie na nie 24/7. Twój osobisty mentor AI.",
    gradient: "from-orange to-amber-400",
  },
];

const features = [
  {
    icon: BookOpen,
    title: "7 modułów tematycznych",
    description: "Od podstaw po zaawansowane techniki prompt engineeringu.",
    color: "primary",
  },
  {
    icon: Sparkles,
    title: "49+ interaktywnych lekcji",
    description: "Każda lekcja to krok naprzód w Twojej podróży z AI.",
    color: "accent",
  },
  {
    icon: Rocket,
    title: "Quizy i ćwiczenia",
    description: "Sprawdź swoją wiedzę i zdobywaj punkty.",
    color: "cyan",
  },
  {
    icon: Shield,
    title: "Certyfikat ukończenia",
    description: "Potwierdź swoje umiejętności oficjalnym dokumentem.",
    color: "orange",
  },
];

const WhySection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-0 left-1/2 w-64 h-64 bg-orange/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        {/* Section header with image */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 md:mb-20">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/15 to-pink-500/15 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4 md:mb-6 border border-accent/20">
              <Sparkles className="w-4 h-4" />
              Dlaczego my?
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6">
              Dlaczego{" "}
              <span className="text-gradient-accent">AI Evolution</span>?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-4">
              Stworzyliśmy platformę, która sprawia, że nauka AI jest prosta, 
              przyjemna i dostępna dla każdego.
            </p>
            <p className="text-sm md:text-base text-muted-foreground">
              Nasze materiały są tworzone przez ekspertów AI i dostosowane do polskiego rynku. 
              Uczymy praktycznie – każda lekcja zawiera konkretne przykłady i ćwiczenia.
            </p>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border/50">
              <img 
                src={sectionBenefitsImage} 
                alt="AI Learning Benefits" 
                className="w-full h-auto aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-card p-4 rounded-xl">
                  <p className="font-semibold text-foreground">Praktyczna nauka AI</p>
                  <p className="text-sm text-muted-foreground">Od teorii do praktyki w każdym module</p>
                </div>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary to-cyan rounded-2xl flex items-center justify-center shadow-lg animate-float">
              <BookOpen className="w-10 h-10 text-primary-foreground" />
            </div>
          </div>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-20 stagger-children">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-6 border-2 border-border/60 card-hover shadow-lg"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md`}>
                <benefit.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Features row */}
        <div className="bg-card border-2 border-border/60 rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-display font-bold text-foreground mb-2">Co znajdziesz w kursie?</h3>
            <p className="text-muted-foreground">Kompletna ścieżka nauki AI</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 group">
                <div className={`w-12 h-12 rounded-xl bg-${feature.color}/15 flex items-center justify-center shrink-0 group-hover:bg-${feature.color}/25 transition-colors border border-${feature.color}/20`}>
                  <feature.icon className={`w-6 h-6 text-${feature.color}`} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;