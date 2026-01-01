import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useProgress } from "@/context/ProgressContext";
import { modules } from "@/data/modules";
import PointsDisplay from "@/components/gamification/PointsDisplay";
import StreakCounter from "@/components/gamification/StreakCounter";
import BadgesGrid from "@/components/gamification/BadgesGrid";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Trophy, Target, ArrowRight, CheckCircle2 } from "lucide-react";
import AIChatbot from "@/components/chat/AIChatbot";

const ProfilePage = () => {
  const { 
    lessons, 
    quizzes, 
    getTotalCompletedLessons, 
    getModuleProgress,
    getQuizBestScore 
  } = useProgress();

  const totalLessons = modules.reduce((acc, m) => acc + m.lessons.length, 0);
  const completedLessons = getTotalCompletedLessons();
  const completedModules = modules.filter(
    m => getModuleProgress(m.slug, m.lessons.length) === 100
  ).length;
  
  const avgQuizScore = quizzes.length > 0
    ? Math.round(quizzes.reduce((acc, q) => acc + (q.bestScore / q.totalQuestions) * 100, 0) / quizzes.length)
    : 0;

  // Get recent activity
  const recentLessons = [...lessons]
    .sort((a, b) => new Date(b.completedAt || 0).getTime() - new Date(a.completedAt || 0).getTime())
    .slice(0, 5);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  Twój profil
                </h1>
                <p className="text-muted-foreground">
                  Śledź swój postęp i osiągnięcia
                </p>
              </div>
              <Button asChild>
                <Link to="/moduly">
                  Kontynuuj naukę
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>

            {/* Stats Overview */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{completedLessons}/{totalLessons}</p>
                      <p className="text-sm text-muted-foreground">Ukończone lekcje</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-success" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{completedModules}/{modules.length}</p>
                      <p className="text-sm text-muted-foreground">Ukończone moduły</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Target className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{avgQuizScore}%</p>
                      <p className="text-sm text-muted-foreground">Średni wynik quizów</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Trophy className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{quizzes.length}</p>
                      <p className="text-sm text-muted-foreground">Ukończone quizy</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Points and Streak */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <PointsDisplay variant="full" />
              <StreakCounter variant="full" />
            </div>

            {/* Achievements */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-accent" />
                  Odznaki
                </CardTitle>
              </CardHeader>
              <CardContent>
                <BadgesGrid showAll maxDisplay={12} />
              </CardContent>
            </Card>

            {/* Module Progress */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Postęp w modułach
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {modules.map(module => {
                  const progress = getModuleProgress(module.slug, module.lessons.length);
                  const quizScore = getQuizBestScore(module.slug);
                  
                  return (
                    <div key={module.id} className="flex items-center gap-4">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <Link 
                            to={`/modul/${module.slug}`}
                            className="font-medium hover:text-primary transition-colors"
                          >
                            {module.title}
                          </Link>
                          <span className="text-sm text-muted-foreground">{progress}%</span>
                        </div>
                        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full transition-all ${
                              progress === 100 ? "bg-success" : "bg-primary"
                            }`}
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      </div>
                      {quizScore !== null && (
                        <div className="text-sm">
                          <span className="text-muted-foreground">Quiz: </span>
                          <span className="font-medium">{Math.round((quizScore / module.quiz.length) * 100)}%</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Recent Activity */}
            {recentLessons.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Ostatnia aktywność</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentLessons.map((lesson, index) => {
                      const module = modules.find(m => m.slug === lesson.moduleSlug);
                      const lessonData = module?.lessons.find(l => l.id === lesson.lessonId);
                      
                      return (
                        <div 
                          key={index}
                          className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg"
                        >
                          <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <p className="font-medium truncate">{lessonData?.title || "Nieznana lekcja"}</p>
                            <p className="text-sm text-muted-foreground">{module?.title}</p>
                          </div>
                          {lesson.completedAt && (
                            <span className="text-xs text-muted-foreground">
                              {new Date(lesson.completedAt).toLocaleDateString('pl-PL')}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
      <Footer />
      <AIChatbot />
    </div>
  );
};

export default ProfilePage;
