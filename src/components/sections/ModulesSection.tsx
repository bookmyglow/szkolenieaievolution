import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, MessageSquare, Image, Zap, ArrowRight, Clock, BookOpen, Scale, Palette, Wand2 } from "lucide-react";
import { modules } from "@/data/modules";
import { useProgress } from "@/context/ProgressContext";
import sectionModulesImage from "@/assets/section-modules.jpg";

const iconMap = {
  Brain,
  MessageSquare,
  Image,
  Zap,
  Scale,
  Palette,
  Wand2,
};

const gradientColors = [
  "from-primary to-cyan",
  "from-accent to-pink-400",
  "from-cyan to-primary",
  "from-orange to-amber-400",
  "from-success to-emerald-400",
  "from-pink-400 to-accent",
  "from-primary to-accent",
];

const ModulesSection = () => {
  const { getModuleProgress } = useProgress();

  return (
    <section id="moduly" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-muted/30 to-background" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 md:mb-16">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border/50">
              <img
                src={sectionModulesImage}
                alt="AI Learning Path"
                className="w-full h-auto aspect-[4/3] object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 glass-card p-4 rounded-xl shadow-lg border border-primary/20 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-bold text-foreground">7 modułów</p>
                  <p className="text-sm text-muted-foreground">49 lekcji</p>
                </div>
              </div>
            </div>
          </div>

          {/* Header */}
          <div className="text-center lg:text-left bg-card/70 border border-border/70 rounded-3xl p-6 shadow-sm">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/15 to-cyan/15 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4 md:mb-6 border border-primary/20">
              <BookOpen className="w-4 h-4" />
              <span>Moduły edukacyjne</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Ucz się w swoim{" "}
              <span className="text-gradient-primary">tempie</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-4 leading-relaxed">
              Każdy moduł to interaktywna lekcja z quizami i praktycznymi przykładami.
              Zacznij od podstaw lub wybierz temat, który Cię interesuje.
            </p>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Nasza ścieżka nauki prowadzi od podstaw AI, przez modele językowe i generowanie obrazów,
              aż po etykę AI i zaawansowany prompt engineering.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {modules.map((module, index) => {
            const Icon = iconMap[module.icon as keyof typeof iconMap] || Brain;
            const progress = getModuleProgress(module.slug, module.lessons.length);
            const gradient = gradientColors[index % gradientColors.length];
            
            return (
              <Card 
                key={module.id} 
                variant="interactive"
                className="group opacity-0 animate-fade-in-up relative overflow-hidden"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                {/* Top gradient bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient}`} />
                
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div 
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 bg-gradient-to-br ${gradient} shadow-md`}
                    >
                      <Icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div className="flex flex-col items-end gap-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {module.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        {module.lessons.length} lekcji
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {module.title}
                  </CardTitle>
                  <CardDescription className="text-base line-clamp-2">
                    {module.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full bg-gradient-to-r ${gradient}`}
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-muted-foreground">
                        {progress}%
                      </span>
                    </div>
                    <Button 
                      variant={module.color === 'primary' ? 'soft' : 'soft-accent'} 
                      size="sm"
                      className="gap-1 group-hover:gap-2 transition-all"
                      asChild
                    >
                      <Link to={`/modul/${module.slug}`}>
                        {progress > 0 ? "Kontynuuj" : "Start"}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="gap-2 shadow-md" asChild>
            <Link to="/moduly">
              Zobacz wszystkie moduły
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;