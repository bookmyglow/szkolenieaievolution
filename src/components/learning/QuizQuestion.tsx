import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CheckCircle2, XCircle, HelpCircle, ArrowRight, Trophy } from "lucide-react";

interface QuizQuestionProps {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  onAnswer: (isCorrect: boolean) => void;
  questionNumber: number;
  totalQuestions: number;
}

const QuizQuestion = ({
  question,
  options,
  correctIndex,
  explanation,
  onAnswer,
  questionNumber,
  totalQuestions
}: QuizQuestionProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [answered, setAnswered] = useState(false);

  const handleSelect = (index: number) => {
    if (showResult) return;

    setSelectedIndex(index);
    setShowResult(true);
    setAnswered(true);
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      const isCorrect = selectedIndex === correctIndex;
      onAnswer(isCorrect);
    }
  };

  const isCorrect = selectedIndex === correctIndex;
  const isLastQuestion = questionNumber === totalQuestions;

  return (
    <Card className="overflow-hidden animate-fade-in">
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-4 border-b">
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
          <span>Pytanie {questionNumber} z {totalQuestions}</span>
          <div className="flex gap-1">
            {[...Array(totalQuestions)].map((_, i) => (
              <div
                key={i}
                className={cn(
                  "w-2 h-2 rounded-full transition-colors",
                  i < questionNumber - 1 ? "bg-primary" :
                    i === questionNumber - 1 ? "bg-primary animate-pulse" :
                      "bg-muted-foreground/30"
                )}
              />
            ))}
          </div>
        </div>
        <h3 className="text-lg font-semibold">{question}</h3>
      </div>

      <CardContent className="p-4 space-y-3">
        {options.map((option, index) => {
          const isSelected = selectedIndex === index;
          const isCorrectOption = index === correctIndex;

          let variant: "default" | "correct" | "incorrect" = "default";
          if (showResult) {
            if (isCorrectOption) variant = "correct";
            else if (isSelected && !isCorrectOption) variant = "incorrect";
          }

          return (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              disabled={showResult}
              className={cn(
                "w-full p-4 rounded-xl border-2 text-left transition-all duration-300",
                "flex items-center gap-3",
                !showResult && "hover:border-primary hover:bg-primary/5 cursor-pointer",
                showResult && "cursor-default",
                variant === "default" && "border-border bg-background",
                variant === "correct" && "border-green-500 bg-green-500/10",
                variant === "incorrect" && "border-red-500 bg-red-500/10",
                isSelected && !showResult && "border-primary bg-primary/5"
              )}
            >
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center shrink-0 border-2 transition-colors",
                variant === "default" && "border-muted-foreground/30",
                variant === "correct" && "border-green-500 bg-green-500 text-white",
                variant === "incorrect" && "border-red-500 bg-red-500 text-white"
              )}>
                {showResult && variant === "correct" && <CheckCircle2 className="w-5 h-5" />}
                {showResult && variant === "incorrect" && <XCircle className="w-5 h-5" />}
                {!showResult && <span className="text-sm font-medium">{String.fromCharCode(65 + index)}</span>}
              </div>
              <span className={cn(
                "flex-1",
                variant === "correct" && "font-medium text-green-500",
                variant === "incorrect" && "text-red-500"
              )}>
                {option}
              </span>
            </button>
          );
        })}

        {showResult && (
          <div className={cn(
            "mt-4 p-4 rounded-xl animate-fade-in",
            isCorrect ? "bg-green-500/10 border border-green-500/20" : "bg-accent/10 border border-accent/20"
          )}>
            <div className="flex items-start gap-3">
              {isCorrect ? (
                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
              ) : (
                <HelpCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              )}
              <div>
                <p className={cn(
                  "font-medium mb-1",
                  isCorrect ? "text-green-500" : "text-accent"
                )}>
                  {isCorrect ? "Swietnie!" : "Nie tym razem, ale swietnie, ze probujesz!"}
                </p>
                <p className="text-sm text-muted-foreground">{explanation}</p>
              </div>
            </div>
          </div>
        )}

        {/* Next Question Button */}
        {answered && (
          <div className="pt-4 border-t mt-6">
            <Button
              onClick={handleNext}
              className="w-full bg-gradient-to-r from-primary to-accent text-white font-medium py-6"
              size="lg"
            >
              {isLastQuestion ? (
                <>
                  <Trophy className="w-5 h-5 mr-2" />
                  Zobacz wyniki
                </>
              ) : (
                <>
                  Nastepne pytanie
                  <ArrowRight className="w-5 h-5 ml-2" />
                </>
              )}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default QuizQuestion;
