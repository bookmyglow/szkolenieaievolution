import { useParams, Link } from "react-router-dom";
import { getModuleBySlug } from "@/data/modules";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, BookOpen, Brain, Clock, Image, MessageSquare, Palette, Scale, Trophy, Wand2, Zap, Sparkles, Target, CheckCircle2 } from "lucide-react";
import LessonCard from "@/components/learning/LessonCard";
import ProgressTracker from "@/components/learning/ProgressTracker";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/seo/SEO";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Brain,
  MessageSquare,
  Image,
  Zap,
  Scale,
  Palette,
  Wand2,
};

const ModulePage = () => {
  const { moduleSlug } = useParams<{ moduleSlug: string }>();
  const module = moduleSlug ? getModuleBySlug(moduleSlug) : undefined;

  if (!module) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Moduł nie znaleziony</h1>
          <Link to="/">
            <Button>Wróć do strony głównej</Button>
          </Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[module.icon] || BookOpen;
  // TODO: Get actual progress from localStorage or database
  const completedLessons = 0;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${module.title} | AI Evolution Polska`}
        description={module.description}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Course",
          name: module.title,
          description: module.description,
          provider: {
            "@type": "Organization",
            name: "AI Evolution Polska",
          },
          hasCourseInstance: module.lessons.map(lesson => ({
            "@type": "CourseInstance",
            name: lesson.title,
            description: lesson.keyPoints[0],
          })),
        }}
      />
      <Header />

      <main id="main-content" className="pt-24 pb-16">
        {/* Hero Section with gradient background */}
        <section className="module-header-gradient pb-12 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float-slow" />
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-accent/5 rounded-full blur-3xl animate-float-delayed" />
          </div>

          <div className="container mx-auto px-6 relative">
            <Link
              to="/#moduly"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6 group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Powrót do modułów
            </Link>

            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Module Icon with glow effect */}
              <div className="icon-container">
                <div
                  className={`w-24 h-24 rounded-3xl flex items-center justify-center shrink-0 shadow-xl transition-transform hover:scale-105 ${module.color === 'primary'
                      ? 'bg-gradient-to-br from-primary to-primary/80 text-white'
                      : 'bg-gradient-to-br from-accent to-accent/80 text-white'
                    }`}
                >
                  <Icon className="w-12 h-12" />
                </div>
              </div>

              <div className="flex-1 space-y-4">
                {/* Meta badges */}
                <div className="flex flex-wrap gap-3 text-sm">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 border-2 border-border/60 shadow-sm">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="font-medium">{module.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 border-2 border-border/60 shadow-sm">
                    <BookOpen className="w-4 h-4 text-accent" />
                    <span className="font-medium">{module.lessonsCount} lekcji</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 border-2 border-border/60 shadow-sm">
                    <Trophy className="w-4 h-4 text-orange" />
                    <span className="font-medium">{module.quiz.length} pytań quiz</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">{module.title}</h1>
                  <p className="text-lg text-muted-foreground leading-relaxed bg-card/60 backdrop-blur-sm border-2 border-border/50 rounded-2xl p-5 shadow-sm">
                    {module.description}
                  </p>
                </div>

                <ProgressTracker
                  current={completedLessons}
                  total={module.lessons.length}
                  color={module.color}
                />

                {/* Quick Start Button */}
                <Link to={`/modul/${moduleSlug}/lekcja/${module.lessons[0]?.id}`}>
                  <Button size="lg" className="gap-2 shadow-lg bg-gradient-to-r from-primary to-accent hover:opacity-90">
                    <Sparkles className="w-5 h-5" />
                    Rozpocznij naukę
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>

              {/* Hero Image */}
              {module.heroImage && (
                <div className="w-full lg:w-2/5 rounded-3xl overflow-hidden shadow-2xl border-2 border-border/40 bg-gradient-to-br from-primary/5 via-card to-accent/5 animate-fade-in-up">
                  <div className="relative">
                    <img
                      src={module.heroImage.src}
                      alt={module.heroImage.alt}
                      loading="lazy"
                      className="w-full h-64 lg:h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" aria-hidden="true" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/90">
                      <div className="px-3 py-2 rounded-full bg-black/60 backdrop-blur-sm font-medium">
                        Inspiracja wizualna
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Lessons List */}
        <section className="container mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-4">
              {/* Lessons Container Card */}
              <Card className="border-2 border-border/60 bg-card/80 backdrop-blur-sm shadow-lg overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-primary/10 via-accent/5 to-transparent border-b border-border/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-white" />
                      </div>
                      <CardTitle className="text-xl">Lekcje w module</CardTitle>
                    </div>
                    <span className="text-sm text-muted-foreground bg-muted/60 px-4 py-2 rounded-full border border-border/50 font-medium">
                      {module.lessons.length} kroków
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-3 stagger-children">
                    {module.lessons.map((lesson, index) => (
                      <LessonCard
                        key={lesson.id}
                        id={lesson.id}
                        moduleSlug={module.slug}
                        title={lesson.title}
                        duration={lesson.duration}
                        index={index + 1}
                        isCompleted={false}
                        isCurrent={index === 0}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quiz Card */}
              <Card className="border-2 border-primary/30 bg-gradient-to-r from-accent/10 via-primary/10 to-accent/10 shadow-lg overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary via-accent to-primary flex items-center justify-center shadow-lg animate-glow-pulse">
                      <Trophy className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="font-bold text-xl mb-1">Quiz końcowy</h3>
                      <p className="text-muted-foreground">
                        {module.quiz.length} pytań • Sprawdź swoją wiedzę i zdobądź certyfikat
                      </p>
                    </div>
                    <Link to={`/modul/${module.slug}/quiz`} className="flex justify-center">
                      <Button 
                        disabled={completedLessons < module.lessons.length} 
                        size="lg"
                        className="gap-2 shadow-md"
                      >
                        Rozpocznij quiz
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Learning Goals Card */}
              <Card className="border-2 border-border/60 bg-card/80 backdrop-blur-sm shadow-lg overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-success/10 to-transparent border-b border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-success to-emerald-600 flex items-center justify-center">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <CardTitle className="text-lg">Czego się nauczysz</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <ul className="space-y-3">
                    {module.lessons.slice(0, 5).map((lesson, index) => (
                      <li 
                        key={lesson.id} 
                        className="flex items-start gap-3 text-sm bg-muted/30 p-3 rounded-xl border border-border/40 transition-all hover:bg-muted/50 hover:border-border/60"
                      >
                        <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 text-primary flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <span className="text-muted-foreground leading-relaxed">{lesson.keyPoints[0]}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* AI Assistant Card */}
              <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/10 via-card to-accent/10 shadow-lg overflow-hidden">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary via-accent to-primary mx-auto flex items-center justify-center shadow-xl animate-float">
                    <MessageSquare className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Masz pytania?</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Zapytaj <span className="font-semibold text-primary">Evolution Bot</span> – twojego osobistego asystenta AI
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground bg-muted/50 rounded-full px-4 py-2">
                    <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                    Dostępny 24/7
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        {module.gallery && module.gallery.length > 0 && (
          <section className="container mx-auto px-6 pb-6">
            <Card className="border-2 border-border/50 bg-gradient-to-r from-primary/5 via-card to-accent/5 shadow-lg overflow-hidden">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md">
                    <Image className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Inspiracje wizualne modułu</p>
                    <CardTitle>Galeria referencji</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {module.gallery.map((item, index) => (
                    <figure
                      key={index}
                      className="group overflow-hidden rounded-2xl border-2 border-border/40 bg-card shadow-md transition-all hover:shadow-xl hover:border-primary/30"
                    >
                      <div className="relative">
                        <img
                          src={item.src}
                          alt={item.alt}
                          loading="lazy"
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" aria-hidden="true" />
                      </div>
                      {(item.alt || item.caption) && (
                        <figcaption className="p-4 space-y-1 bg-card/80">
                          <p className="text-sm font-medium text-foreground">{item.alt}</p>
                          {item.caption && <p className="text-xs text-muted-foreground">{item.caption}</p>}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ModulePage;
