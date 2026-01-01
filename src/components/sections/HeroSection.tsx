import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, Brain, Lightbulb, TrendingUp, Users, Award, Zap, CheckCircle2, Clock, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const AnimatedCounter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target]);

  return <span className="counter tabular-nums">{count}{suffix}</span>;
};

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 md:pt-16 lg:pb-20">
      {/* Background Elements - Simplified for professional look */}
      <div className="absolute inset-0 -z-20 bg-background">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-50" />
        <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] opacity-50" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8 max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 animate-fade-in-up">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">Twoja przygoda z AI zaczyna się tutaj</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground animate-fade-in-up animation-delay-100">
              Zrozum <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Sztuczną Inteligencję</span> krok po kroku
            </h1>

            {/* Subhead */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in-up animation-delay-200">
              Praktyczna wiedza bez zbędnego żargonu. Dołącz do tysięcy osób, które już budują swoją przyszłość z AI.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-300">
              <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/20" asChild>
                <Link to="/moduly">
                  Rozpocznij naukę
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8 text-base" asChild>
                <Link to="/moduly">
                  <Play className="mr-2 w-4 h-4" />
                  Zobacz demo
                </Link>
              </Button>
            </div>

            {/* Trust Stats */}
            <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 text-muted-foreground animate-fade-in-up animation-delay-400 border-t border-border/50">
              <div className="flex flex-col gap-1">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden">
                      <UserAvatarStub index={i} />
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full border-2 border-background bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary">
                    +2k
                  </div>
                </div>
                <p className="text-xs font-medium">Dołączyło już 2500+ osób</p>
              </div>
              <div className="h-8 w-px bg-border/50 hidden sm:block" />
              <div className="flex gap-4">
                <div>
                  <p className="text-2xl font-bold text-foreground leading-none"><AnimatedCounter target={4.9} suffix="" /></p>
                  <p className="text-xs">Ocena kursu</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground leading-none"><AnimatedCounter target={20} suffix="+" /></p>
                  <p className="text-xs">Godzin materiału</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Mockup */}
          <div className="relative hidden lg:block animate-fade-in-up animation-delay-300">
            {/* Main Dashboard Card */}
            <div className="relative bg-card/80 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl overflow-hidden p-6 hover:scale-[1.02] transition-transform duration-500">
              {/* Header of fake app */}
              <div className="flex items-center justify-between mb-8 border-b border-border/50 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                    <Brain className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Panel Studenta</p>
                    <p className="text-xs text-muted-foreground">Witaj ponownie, Alex!</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-muted/50" />
                  <div className="w-8 h-8 rounded-full bg-muted/50" />
                </div>
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-2 gap-4">
                {/* Progress Card */}
                <div className="col-span-2 bg-muted/30 rounded-2xl p-4 border border-border/50">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Postęp kursu</span>
                    <span className="text-xs font-bold text-primary">85%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-primary rounded-full" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">Dobra robota! Utrzymujesz świetne tempo.</p>
                </div>

                {/* Next Lesson */}
                <div className="bg-primary text-primary-foreground rounded-2xl p-4 shadow-lg shadow-primary/20 relative overflow-hidden group cursor-pointer">
                  <div className="relative z-10">
                    <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center mb-3">
                      <Play className="w-4 h-4 fill-current" />
                    </div>
                    <p className="text-xs opacity-80 mb-1">Następna lekcja</p>
                    <p className="font-bold text-sm leading-tight">Wprowadzenie do LLM</p>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
                </div>

                {/* Stats */}
                <div className="bg-card rounded-2xl p-4 border border-border/50 flex flex-col justify-center gap-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>Ostatnia sesja</span>
                  </div>
                  <p className="font-bold text-lg">24 min</p>
                </div>
              </div>

              {/* Recent Achievements */}
              <div className="mt-6">
                <p className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wider">Ostatnie osiągnięcia</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-muted/50 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-600">
                      <Award className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Mistrz Promptingu</p>
                      <p className="text-[10px] text-muted-foreground">Zdobyto 2h temu</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-muted/50 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-600">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Ukończono Moduł 1</p>
                      <p className="text-[10px] text-muted-foreground">Zdobyto wczoraj</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating decorative elements behind */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/30 rounded-full blur-3xl -z-10 animate-pulse-soft" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/30 rounded-full blur-3xl -z-10 animate-pulse-soft animation-delay-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper for avatars
const UserAvatarStub = ({ index }: { index: number }) => (
  <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-[10px] font-bold text-slate-500">
    U{index}
  </div>
);

export default HeroSection;