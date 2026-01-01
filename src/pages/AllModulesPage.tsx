import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useProgress } from "@/context/ProgressContext";
import { modules } from "@/data/modules";
import { Brain, MessageSquare, Image, Zap, ArrowRight, Clock, BookOpen, CheckCircle2, Filter, Scale, Palette, Wand2 } from "lucide-react";
import AIChatbot from "@/components/chat/AIChatbot";

const iconMap = {
  Brain,
  MessageSquare,
  Image,
  Zap,
  Scale,
  Palette,
  Wand2,
};

type FilterType = "all" | "in-progress" | "completed" | "not-started";

const AllModulesPage = () => {
  const [filter, setFilter] = useState<FilterType>("all");
  const { getModuleProgress, getTotalCompletedLessons } = useProgress();

  const filteredModules = modules.filter(module => {
    const progress = getModuleProgress(module.slug, module.lessons.length);

    switch (filter) {
      case "completed":
        return progress === 100;
      case "in-progress":
        return progress > 0 && progress < 100;
      case "not-started":
        return progress === 0;
      default:
        return true;
    }
  });

  const totalLessons = modules.reduce((acc, m) => acc + m.lessons.length, 0);
  const completedLessons = getTotalCompletedLessons();
  const overallProgress = Math.round((completedLessons / totalLessons) * 100);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              <span>Wszystkie moduły</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Twoja ścieżka <span className="text-gradient-primary">nauki AI</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Przeglądaj wszystkie moduły i śledź swój postęp w nauce
            </p>

            {/* Overall Progress */}
            <div className="bg-card border border-border rounded-2xl p-6 inline-block">
              <div className="flex items-center gap-6">
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Całkowity postęp</p>
                  <p className="text-2xl font-bold">{completedLessons}/{totalLessons} lekcji</p>
                </div>
                <div className="w-32">
                  <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-500"
                      style={{ width: `${overallProgress}%` }}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-1 text-right">{overallProgress}%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("all")}
            >
              <Filter className="w-4 h-4 mr-1" />
              Wszystkie
            </Button>
            <Button
              variant={filter === "in-progress" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("in-progress")}
            >
              W trakcie
            </Button>
            <Button
              variant={filter === "completed" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("completed")}
            >
              <CheckCircle2 className="w-4 h-4 mr-1" />
              Ukończone
            </Button>
            <Button
              variant={filter === "not-started" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("not-started")}
            >
              Nierozpoczęte
            </Button>
          </div>

          {/* Modules Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {filteredModules.map((module, index) => {
              const Icon = iconMap[module.icon as keyof typeof iconMap] || Brain;
              const progress = getModuleProgress(module.slug, module.lessons.length);
              const isCompleted = progress === 100;

              return (
                <Card
                  key={module.id}
                  variant="interactive"
                  className={`group opacity-0 animate-fade-in-up ${isCompleted ? "border-success/30" : ""}`}
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${isCompleted
                        ? "bg-success/10 text-success"
                        : module.color === 'primary'
                          ? 'bg-primary/10 text-primary'
                          : 'bg-accent/10 text-accent'
                        }`}>
                        {isCompleted ? <CheckCircle2 className="w-7 h-7" /> : <Icon className="w-7 h-7" />}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
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
                    <CardDescription className="text-base">
                      {module.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all ${isCompleted ? "bg-success" : "bg-primary"
                              }`}
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                        <span className="text-sm text-muted-foreground">
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
                          {progress > 0 ? "Kontynuuj" : "Rozpocznij"}
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {filteredModules.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Brak modułów spełniających kryteria filtru.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <AIChatbot />
    </div>
  );
};

export default AllModulesPage;
