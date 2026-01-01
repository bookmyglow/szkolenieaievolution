import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getModuleBySlug, modules } from "@/data/modules";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Trophy, Star, RotateCcw, Home } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import QuizQuestion from "@/components/learning/QuizQuestion";
import ProgressTracker from "@/components/learning/ProgressTracker";
import { useProgress } from "@/context/ProgressContext";
import { useAchievementChecker } from "@/hooks/useAchievementChecker";
import { toast } from "@/hooks/use-toast";
import confetti from 'canvas-confetti';
import SEO from "@/components/seo/SEO";

const QuizPage = () => {
  const { moduleSlug } = useParams<{ moduleSlug: string }>();
  const navigate = useNavigate();
  const module = moduleSlug ? getModuleBySlug(moduleSlug) : undefined;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const { saveQuizResult, addPoints, getQuizBestScore } = useProgress();
  useAchievementChecker();

  if (!module) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Quiz nie znaleziony</h1>
          <Link to="/">
            <Button>Wróć do strony głównej</Button>
          </Link>
        </div>
      </div>
    );
  }

  const currentQuestion = module.quiz[currentQuestionIndex];
  const totalQuestions = module.quiz.length;
  const score = Math.round((correctAnswers / totalQuestions) * 100);
  const previousBestScore = getQuizBestScore(moduleSlug!);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setCorrectAnswers(prev => prev + 1);
    }

    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      const finalCorrect = correctAnswers + (isCorrect ? 1 : 0);
      const finalScore = Math.round((finalCorrect / totalQuestions) * 100);

      // Save quiz result
      saveQuizResult(moduleSlug!, finalScore, totalQuestions);

      // Calculate and add points based on score
      let pointsEarned = 5;
      if (finalScore >= 80) pointsEarned = 25;
      else if (finalScore >= 60) pointsEarned = 15;
      else if (finalScore >= 40) pointsEarned = 10;

      addPoints(pointsEarned);

      setIsComplete(true);

      // Trigger confetti for good scores
      if (finalScore >= 60) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }

      // Show toast with results
      toast({
        title: finalScore >= 60 ? "Swietny wynik!" : "Quiz ukonczony",
        description: `${finalScore}% poprawnych odpowiedzi`,
      });

      // Extra celebration for perfect score
      if (finalScore === 100) {
        setTimeout(() => {
          confetti({
            particleCount: 150,
            spread: 100,
            origin: { y: 0.5 }
          });
        }, 500);
      }
    }
  };

  const handleRetry = () => {
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setIsComplete(false);
  };

  const getNextModule = () => {
    const currentIndex = modules.findIndex(m => m.slug === moduleSlug);
    if (currentIndex < modules.length - 1) {
      return modules[currentIndex + 1];
    }
    return null;
  };

  const nextModule = getNextModule();

  const getScoreMessage = () => {
    if (score >= 80) return { emoji: "🎉", text: "Świetna robota! Jesteś mistrzem!" };
    if (score >= 60) return { emoji: "👍", text: "Dobry wynik! Tak trzymaj!" };
    if (score >= 40) return { emoji: "💪", text: "Nieźle! Warto powtórzyć materiał." };
    return { emoji: "📚", text: "Warto wrócić do lekcji i spróbować ponownie!" };
  };

  const isNewBestScore = previousBestScore !== null && score > previousBestScore;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`Quiz: ${module.title} | AI Evolution Polska`}
        description={`Sprawdź swoją wiedzę z modułu ${module.title} w quizie z ${module.quiz.length} pytaniami.`}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Quiz",
          about: module.title,
          numberOfQuestions: module.quiz.length,
          name: `Quiz modułu ${module.title}`,
        }}
      />
      <Header />

      <main id="main-content" className="pt-24 pb-16">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <Link
                to={`/modul/${moduleSlug}`}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
              >
                <ArrowLeft className="w-4 h-4" />
                Powrót do modułu
              </Link>

              <h1 className="text-2xl md:text-3xl font-bold mb-2">
                Quiz: {module.title}
              </h1>

              {!isComplete && (
                <ProgressTracker
                  current={currentQuestionIndex + 1}
                  total={totalQuestions}
                  color={module.color}
                />
              )}
            </div>

            {/* Quiz Content */}
            {!isComplete ? (
              <QuizQuestion
                key={currentQuestion.id}
                question={currentQuestion.question}
                options={currentQuestion.options}
                correctIndex={currentQuestion.correctIndex}
                explanation={currentQuestion.explanation}
                onAnswer={handleAnswer}
                questionNumber={currentQuestionIndex + 1}
                totalQuestions={totalQuestions}
              />
            ) : (
              <Card className="overflow-hidden animate-scale-in">
                <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-8 text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-primary mx-auto mb-6 flex items-center justify-center">
                    <Trophy className="w-12 h-12 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold mb-2">Quiz ukończony!</h2>
                  <p className="text-6xl mb-4">{getScoreMessage().emoji}</p>
                </div>

                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-8 h-8 ${i < Math.round(score / 20)
                              ? 'text-accent fill-accent'
                              : 'text-muted'
                            }`}
                        />
                      ))}
                    </div>
                    <p className="text-4xl font-bold text-primary mb-2">{score}%</p>
                    <p className="text-muted-foreground">
                      {correctAnswers} z {totalQuestions} poprawnych odpowiedzi
                    </p>

                    {isNewBestScore && (
                      <p className="text-green-500 font-medium mt-2 animate-pulse">
                        🏆 Nowy rekord! (poprzedni: {previousBestScore}%)
                      </p>
                    )}

                    {previousBestScore !== null && !isNewBestScore && (
                      <p className="text-muted-foreground text-sm mt-2">
                        Twój najlepszy wynik: {previousBestScore}%
                      </p>
                    )}

                    <p className="text-lg font-medium mt-4">
                      {getScoreMessage().text}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button variant="outline" onClick={handleRetry}>
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Spróbuj ponownie
                    </Button>

                    {score >= 60 && nextModule ? (
                      <Button
                        className="bg-gradient-primary"
                        onClick={() => navigate(`/modul/${nextModule.slug}`)}
                      >
                        Następny moduł
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    ) : (
                      <Button onClick={() => navigate('/')}>
                        <Home className="w-4 h-4 mr-2" />
                        Strona główna
                      </Button>
                    )}
                  </div>

                  {score >= 60 && nextModule && (
                    <div className="mt-8 p-4 bg-muted/50 rounded-xl text-center">
                      <p className="text-sm text-muted-foreground mb-1">Następny moduł</p>
                      <p className="font-semibold">{nextModule.title}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default QuizPage;
