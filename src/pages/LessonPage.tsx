import { useParams, Link, useNavigate } from "react-router-dom";
import { getModuleBySlug, getLessonById, getNextLesson, getPreviousLesson } from "@/data/modules";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2, Clock, Lightbulb, MessageCircle, Check, ChevronLeft, ChevronRight, List, X } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProgressTracker from "@/components/learning/ProgressTracker";
import { useProgress } from "@/context/ProgressContext";
import { useAchievementChecker } from "@/hooks/useAchievementChecker";
import { toast } from "@/hooks/use-toast";
import confetti from "canvas-confetti";
import { useState } from "react";
import SEO from "@/components/seo/SEO";

// Helper function to render markdown content
const renderContent = (content: string) => {
  const lines = content.split('\n');
  const elements: JSX.Element[] = [];
  let inCodeBlock = false;
  let codeContent: string[] = [];
  let inTable = false;
  let tableRows: string[][] = [];

  lines.forEach((line, index) => {
    // Code blocks
    if (line.startsWith('```')) {
      if (inCodeBlock) {
        elements.push(
          <pre key={`code-${index}`} className="bg-muted/80 p-4 rounded-xl my-4 overflow-x-auto text-sm font-mono">
            <code>{codeContent.join('\n')}</code>
          </pre>
        );
        codeContent = [];
      }
      inCodeBlock = !inCodeBlock;
      return;
    }

    if (inCodeBlock) {
      codeContent.push(line);
      return;
    }

    // Images
    const imageMatch = line.match(/!\[(.*?)]\((.*?)\)/);
    if (imageMatch) {
      const [, alt, src] = imageMatch;
      elements.push(
        <figure key={`img-${index}`} className="my-6 overflow-hidden rounded-2xl bg-muted/50 border border-border/50">
          <img
            src={src}
            alt={cleanText(alt) || "Ilustracja do lekcji"}
            loading="lazy"
            className="w-full h-auto object-cover"
          />
          {alt && (
            <figcaption className="p-4 text-sm text-muted-foreground bg-muted/60">
              {cleanText(alt)}
            </figcaption>
          )}
        </figure>
      );
      return;
    }

    // Tables
    if (line.startsWith('|')) {
      if (!inTable) {
        inTable = true;
        tableRows = [];
      }
      const cells = line.split('|').filter(cell => cell.trim() !== '');
      if (!line.includes('---')) {
        tableRows.push(cells.map(c => c.trim()));
      }
      return;
    } else if (inTable) {
      inTable = false;
      if (tableRows.length > 0) {
        elements.push(
          <div key={`table-${index}`} className="overflow-x-auto my-4">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-border">
                  {tableRows[0]?.map((cell, i) => (
                    <th key={i} className="p-3 text-left font-semibold bg-muted/50">{cleanText(cell)}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.slice(1).map((row, rowIndex) => (
                  <tr key={rowIndex} className="border-b border-border/50 hover:bg-muted/30">
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="p-3">{cleanText(cell)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        tableRows = [];
      }
    }

    // Headers
    if (line.startsWith('# ')) {
      elements.push(<h1 key={index} className="text-2xl font-bold mt-10 mb-4 text-foreground">{cleanText(line.slice(2))}</h1>);
      return;
    }
    if (line.startsWith('## ')) {
      elements.push(<h2 key={index} className="text-xl font-bold mt-8 mb-3 text-foreground">{cleanText(line.slice(3))}</h2>);
      return;
    }
    if (line.startsWith('### ')) {
      elements.push(<h3 key={index} className="text-lg font-semibold mt-6 mb-2 text-foreground">{cleanText(line.slice(4))}</h3>);
      return;
    }

    // Lists
    if (line.startsWith('- ')) {
      elements.push(
        <li key={index} className="ml-6 mb-2 list-disc text-muted-foreground">
          {cleanText(line.slice(2))}
        </li>
      );
      return;
    }

    // Numbered lists
    if (/^\d+\.\s/.test(line)) {
      elements.push(
        <li key={index} className="ml-6 mb-2 list-decimal text-muted-foreground">
          {cleanText(line.replace(/^\d+\.\s/, ''))}
        </li>
      );
      return;
    }

    // Blockquotes
    if (line.startsWith('> ')) {
      elements.push(
        <blockquote key={index} className="border-l-4 border-primary pl-4 py-2 my-4 bg-primary/5 rounded-r-lg italic text-muted-foreground">
          {cleanText(line.slice(2))}
        </blockquote>
      );
      return;
    }

    // Empty lines
    if (!line.trim()) {
      return;
    }

    // Regular paragraphs
    elements.push(
      <p key={index} className="mb-4 leading-relaxed text-muted-foreground">
        {cleanText(line)}
      </p>
    );
  });

  return elements;
};

// Clean text from markdown formatting
const cleanText = (text: string): string => {
  return text
    .replace(/\*\*(.*?)\*\*/g, '$1') // Remove **bold**
    .replace(/\*(.*?)\*/g, '$1')     // Remove *italic*
    .replace(/`(.*?)`/g, '$1')       // Remove `code`
    .trim();
};

const LessonPage = () => {
  const { moduleSlug, lessonId } = useParams<{ moduleSlug: string; lessonId: string }>();
  const navigate = useNavigate();
  const [showLessonList, setShowLessonList] = useState(false);

  const module = moduleSlug ? getModuleBySlug(moduleSlug) : undefined;
  const lesson = moduleSlug && lessonId ? getLessonById(moduleSlug, lessonId) : undefined;
  const nextLesson = moduleSlug && lessonId ? getNextLesson(moduleSlug, lessonId) : undefined;
  const previousLesson = moduleSlug && lessonId ? getPreviousLesson(moduleSlug, lessonId) : undefined;

  const { completeLesson, isLessonCompleted, addPoints } = useProgress();
  useAchievementChecker();

  if (!module || !lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Lekcja nie znaleziona</h1>
          <Link to="/moduly">
            <Button>Wróć do modułów</Button>
          </Link>
        </div>
      </div>
    );
  }

  const currentLessonIndex = module.lessons.findIndex(l => l.id === lesson.id);
  const isLastLesson = currentLessonIndex === module.lessons.length - 1;
  const alreadyCompleted = isLessonCompleted(lessonId!);

  const handleComplete = () => {
    if (!alreadyCompleted) {
      completeLesson(lessonId!, moduleSlug!);
      addPoints(10);

      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
      });

      toast({
        title: "Lekcja ukończona!",
        description: "+10 punktów",
      });
    }

    if (nextLesson) {
      navigate(`/modul/${moduleSlug}/lekcja/${nextLesson.id}`);
    } else {
      navigate(`/modul/${moduleSlug}/quiz`);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${lesson.title} | ${module.title} | AI Evolution Polska`}
        description={lesson.keyPoints[0] || lesson.title}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: lesson.title,
          description: lesson.keyPoints[0] || lesson.title,
          about: module.title,
          author: {
            "@type": "Organization",
            name: "AI Evolution Polska",
          },
        }}
      />
      <Header />

      {/* Floating Navigation */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2">
        {/* Quick Nav Buttons */}
        <div className="flex items-center gap-1 bg-card/95 backdrop-blur-xl border border-border shadow-xl rounded-full px-2 py-2">
          {previousLesson && (
            <Link to={`/modul/${moduleSlug}/lekcja/${previousLesson.id}`}>
              <Button variant="ghost" size="icon" className="rounded-full h-10 w-10">
                <ChevronLeft className="w-5 h-5" />
              </Button>
            </Link>
          )}

          <Button
            variant="ghost"
            size="sm"
            className="rounded-full px-4 h-10"
            onClick={() => setShowLessonList(!showLessonList)}
          >
            <List className="w-4 h-4 mr-2" />
            {currentLessonIndex + 1} / {module.lessons.length}
          </Button>

          {nextLesson ? (
            <Link to={`/modul/${moduleSlug}/lekcja/${nextLesson.id}`}>
              <Button variant="ghost" size="icon" className="rounded-full h-10 w-10">
                <ChevronRight className="w-5 h-5" />
              </Button>
            </Link>
          ) : (
            <Link to={`/modul/${moduleSlug}/quiz`}>
              <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 text-primary">
                <ChevronRight className="w-5 h-5" />
              </Button>
            </Link>
          )}
        </div>

        {/* Complete Button */}
        <Button
          onClick={handleComplete}
          className="rounded-full shadow-xl h-10 bg-gradient-to-r from-primary to-accent"
        >
          {alreadyCompleted ? (
            <>
              <Check className="w-4 h-4 mr-2" />
              {isLastLesson ? "Quiz" : "Dalej"}
            </>
          ) : (
            <>
              <CheckCircle2 className="w-4 h-4 mr-2" />
              Ukończ
            </>
          )}
        </Button>
      </div>

      {/* Lesson List Popup */}
      {showLessonList && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={() => setShowLessonList(false)}>
          <div className="bg-card border border-border rounded-2xl shadow-2xl max-w-md w-full mx-4 max-h-[70vh] overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h3 className="font-semibold">Lekcje w module</h3>
              <Button variant="ghost" size="icon" onClick={() => setShowLessonList(false)}>
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="overflow-y-auto max-h-[calc(70vh-60px)] p-2">
              {module.lessons.map((l, idx) => {
                const completed = isLessonCompleted(l.id);
                const isCurrent = l.id === lesson.id;
                return (
                  <Link
                    key={l.id}
                    to={`/modul/${moduleSlug}/lekcja/${l.id}`}
                    onClick={() => setShowLessonList(false)}
                    className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${isCurrent
                        ? "bg-primary/10 text-primary"
                        : "hover:bg-muted"
                      }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${completed
                        ? "bg-green-500 text-white"
                        : isCurrent
                          ? "bg-primary text-white"
                          : "bg-muted text-muted-foreground"
                      }`}>
                      {completed ? <Check className="w-4 h-4" /> : idx + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm truncate ${isCurrent ? "font-medium" : ""}`}>{l.title}</p>
                      <p className="text-xs text-muted-foreground">{l.duration}</p>
                    </div>
                    {completed && !isCurrent && (
                      <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                    )}
                  </Link>
                );
              })}

              {/* Quiz link */}
              <Link
                to={`/modul/${moduleSlug}/quiz`}
                onClick={() => setShowLessonList(false)}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted mt-2 border-t border-border pt-4"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Quiz końcowy</p>
                  <p className="text-xs text-muted-foreground">{module.quiz.length} pytań</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}

      <main id="main-content" className="pt-24 pb-32">
        {/* Top Bar */}
        <div className="border-b bg-background/80 backdrop-blur-sm sticky top-16 z-40">
          <div className="container mx-auto px-6 py-3">
            <div className="flex items-center justify-between">
              <Link
                to={`/modul/${moduleSlug}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">{module.title}</span>
                <span className="sm:hidden">Powrót</span>
              </Link>
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground">
                  {currentLessonIndex + 1} / {module.lessons.length}
                </span>
                {alreadyCompleted && (
                  <span className="text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-500 font-medium">
                    Ukończono
                  </span>
                )}
              </div>
            </div>
            <div className="mt-2">
              <ProgressTracker
                current={currentLessonIndex + 1}
                total={module.lessons.length}
                color={module.color}
                showLabel={false}
                size="sm"
              />
            </div>
          </div>
        </div>

        {/* Lesson Content */}
        <article className="container mx-auto px-6 py-8">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{lesson.duration}</span>
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{lesson.title}</h1>
            </header>

            {/* Content */}
            <div className="lesson-content">
              {renderContent(lesson.content)}
            </div>

            {/* Key Points */}
            <Card className="my-8 bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Kluczowe punkty</h3>
                </div>
                <ul className="space-y-3">
                  {lesson.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Fun Fact */}
            {lesson.funFact && (
              <Card className="mb-8 bg-accent/5 border-accent/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1 text-foreground">Czy wiesz, że...</h3>
                      <p className="text-muted-foreground">{lesson.funFact}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Ask AI */}
            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-dashed">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">Masz pytania?</h3>
                    <p className="text-sm text-muted-foreground">
                      Kliknij ikonę czatu w prawym dolnym rogu
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default LessonPage;
