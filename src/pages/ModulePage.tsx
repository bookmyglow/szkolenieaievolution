import { useParams, Link } from "react-router-dom";
import { getModuleBySlug } from "@/data/modules";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, BookOpen, Brain, Clock, Image, MessageSquare, Palette, Scale, Trophy, Wand2, Zap } from "lucide-react";
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
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-muted/50 to-background pb-12">
          <div className="container mx-auto px-6">
            <Link
              to="/#moduly"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Powrót do modułów
            </Link>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div
                className={`w-20 h-20 rounded-3xl flex items-center justify-center shrink-0 ${module.color === 'primary'
                    ? 'bg-primary/10 text-primary'
                    : 'bg-accent/10 text-accent'
                  }`}
              >
                <Icon className="w-10 h-10" />
              </div>

              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {module.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    {module.lessonsCount} lekcji
                  </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold mb-4">{module.title}</h1>
                <p className="text-lg text-muted-foreground mb-6">{module.description}</p>

                <ProgressTracker
                  current={completedLessons}
                  total={module.lessons.length}
                  color={module.color}
                />
              </div>

              {module.heroImage && (
                <div className="w-full md:w-1/3 lg:w-2/5 rounded-3xl overflow-hidden shadow-xl border border-border/60 bg-gradient-to-br from-primary/10 via-background to-accent/10">
                  <div className="relative">
                    <img
                      src={module.heroImage.src}
                      alt={module.heroImage.alt}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/20 to-transparent" aria-hidden="true" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/90">
                      <div className="px-3 py-2 rounded-full bg-black/50 backdrop-blur-sm">Inspiracja wizualna</div>
                      <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-black/50 backdrop-blur-sm">
                        <Image className="w-4 h-4" />
                        Multimodalny przepływ pracy
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
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-2xl font-bold mb-6">Lekcje</h2>
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

              {/* Quiz Card */}
              <Card className="mt-8 bg-gradient-to-r from-accent/10 to-primary/10 border-dashed">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                      <Trophy className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">Quiz końcowy</h3>
                      <p className="text-sm text-muted-foreground">
                        {module.quiz.length} pytań • Sprawdź swoją wiedzę
                      </p>
                    </div>
                    <Link to={`/modul/${module.slug}/quiz`}>
                      <Button disabled={completedLessons < module.lessons.length}>
                        Rozpocznij quiz
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Czego się nauczysz</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {module.lessons.slice(0, 4).map((lesson, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-xs font-medium">{index + 1}</span>
                        </div>
                        <span>{lesson.keyPoints[0]}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Masz pytania?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Zapytaj Evolution Bot – twojego osobistego asystenta AI
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Kliknij ikonę czatu w prawym dolnym rogu
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {module.gallery && module.gallery.length > 0 && (
          <section className="container mx-auto px-6 pb-6">
            <div className="bg-gradient-to-r from-primary/10 via-background to-accent/10 border border-border/60 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                  <Image className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Inspiracje wizualne modułu</p>
                  <h2 className="text-xl font-semibold">Galeria referencji i scen</h2>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {module.gallery.map((item, index) => (
                  <figure
                    key={index}
                    className="group overflow-hidden rounded-2xl border border-border/50 bg-card shadow-sm"
                  >
                    <div className="relative">
                      <img
                        src={item.src}
                        alt={item.alt}
                        loading="lazy"
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70 group-hover:opacity-80 transition-opacity" aria-hidden="true" />
                    </div>
                    {(item.alt || item.caption) && (
                      <figcaption className="p-4 space-y-1">
                        <p className="text-sm font-medium text-foreground">{item.alt}</p>
                        {item.caption && <p className="text-xs text-muted-foreground">{item.caption}</p>}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ModulePage;
