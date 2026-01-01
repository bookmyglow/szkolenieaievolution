import { CheckCircle2, Lock, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { useProgress } from "@/context/ProgressContext";
import { modules } from "@/data/modules";
import { Brain, MessageSquare, Image, Zap, Scale, Palette, Wand2 } from "lucide-react";

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Brain,
  MessageSquare,
  Image,
  Zap,
  Scale,
  Palette,
  Wand2,
};

const colorMap: { [key: string]: string } = {
  "primary": "from-blue-500 to-cyan-500",
  "accent": "from-violet-500 to-purple-500",
};

const PathSection = () => {
  const { getModuleProgress } = useProgress();

  const allModulesCompleted = modules.every((module) => {
    const progress = getModuleProgress ? getModuleProgress(module.slug, module.lessons.length) : 0;
    return progress >= 100;
  });

  return (
    <section className="py-24 relative overflow-hidden bg-muted/30">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Award className="w-4 h-4" />
            Ścieżka nauki
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Twoja droga do{" "}
            <span className="text-gradient-primary">mistrzostwa AI</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            7 modułów, które przeprowadzą Cię od podstaw do zaawansowanych technik. 
            Każdy moduł to nowy poziom umiejętności.
          </p>
        </div>

        {/* Path visualization */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-success -translate-x-1/2 hidden lg:block rounded-full" />

          <div className="space-y-6">
            {modules.map((module, index) => {
              const progress = getModuleProgress ? getModuleProgress(module.slug, module.lessons.length) : 0;
              const isCompleted = progress >= 100;
              const isEven = index % 2 === 0;
              const IconComponent = iconMap[module.icon] || Brain;
              const colorClass = colorMap[module.color] || "from-blue-500 to-cyan-500";

              return (
                <div
                  key={module.slug}
                  className={`relative flex items-center gap-8 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  {/* Content card */}
                  <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                    <Link
                      to={`/modul/${module.slug}`}
                      className="block group"
                    >
                      <div className="bg-card border border-border/50 rounded-2xl p-6 card-hover inline-block w-full max-w-md">
                        <div className={`flex items-center gap-4 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colorClass} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                            <IconComponent className="w-7 h-7 text-white" />
                          </div>
                          <div className={isEven ? 'lg:text-right' : ''}>
                            <p className="text-sm text-muted-foreground mb-1">Moduł {module.id}</p>
                            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                              {module.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1">
                              {module.lessons.length} lekcji • {isCompleted ? '✓ Ukończono' : `${Math.round(progress)}% ukończono`}
                            </p>
                          </div>
                        </div>
                        
                        {/* Progress bar */}
                        <div className="mt-4 w-full h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${colorClass} rounded-full transition-all duration-500`}
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Center node */}
                  <div className="hidden lg:flex items-center justify-center relative z-10">
                    <div className={`w-12 h-12 rounded-full ${isCompleted ? 'bg-success' : 'bg-card border-2 border-primary'} flex items-center justify-center shadow-lg`}>
                      {isCompleted ? (
                        <CheckCircle2 className="w-6 h-6 text-success-foreground" />
                      ) : (
                        <span className="text-lg font-bold text-primary">{module.id}</span>
                      )}
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden lg:block flex-1" />
                </div>
              );
            })}
          </div>

          {/* Certificate at the end */}
          <div className="relative mt-12 flex justify-center">
            <div className="hidden lg:flex items-center justify-center relative z-10 mb-6">
              <div className={`w-16 h-16 rounded-full ${allModulesCompleted ? 'bg-gradient-to-br from-amber-400 to-orange-500 glow-accent' : 'bg-muted border-2 border-border'} flex items-center justify-center shadow-lg`}>
                {allModulesCompleted ? (
                  <Award className="w-8 h-8 text-white" />
                ) : (
                  <Lock className="w-8 h-8 text-muted-foreground" />
                )}
              </div>
            </div>
          </div>
          
          <div className="text-center">
            {allModulesCompleted ? (
              <Link to="/certyfikat">
                <div className="inline-block bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-2xl p-6 hover:scale-105 transition-transform cursor-pointer">
                  <p className="text-lg font-semibold text-foreground mb-2">🏆 Gratulacje! Odbierz swój certyfikat</p>
                  <p className="text-sm text-muted-foreground">Kliknij, aby wygenerować i pobrać certyfikat ukończenia</p>
                </div>
              </Link>
            ) : (
              <div className="inline-block bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-2xl p-6">
                <p className="text-lg font-semibold text-foreground mb-2">🏆 Certyfikat ukończenia</p>
                <p className="text-sm text-muted-foreground">Ukończ wszystkie moduły, aby odblokować certyfikat</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PathSection;