import { useState, useEffect } from "react";
import { Zap, Clock, CheckCircle2, Trophy, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useProgress } from "@/context/ProgressContext";
import { toast } from "@/hooks/use-toast";
import confetti from "canvas-confetti";

interface DailyChallengeData {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  category: string;
  points: number;
}

const dailyChallenges: DailyChallengeData[] = [
  {
    id: "dc-1",
    question: "Który model AI jest rozwijany przez firmę Anthropic?",
    options: ["GPT-4", "Claude", "Gemini", "Llama"],
    correctIndex: 1,
    category: "Modele AI",
    points: 15
  },
  {
    id: "dc-2",
    question: "Co oznacza skrót LLM w kontekście AI?",
    options: ["Large Language Model", "Learning Logic Machine", "Linguistic Layer Module", "Linear Learning Method"],
    correctIndex: 0,
    category: "Podstawy AI",
    points: 10
  },
  {
    id: "dc-3",
    question: "Która technika promptowania polega na pokazaniu AI przykładów przed zadaniem pytania?",
    options: ["Zero-shot", "Few-shot", "Chain-of-thought", "Role-playing"],
    correctIndex: 1,
    category: "Prompt Engineering",
    points: 15
  },
  {
    id: "dc-4",
    question: "Co to jest 'hallucynacja' w kontekście modeli AI?",
    options: ["Błąd graficzny", "Generowanie fałszywych informacji", "Wolne działanie", "Brak odpowiedzi"],
    correctIndex: 1,
    category: "Podstawy AI",
    points: 10
  },
  {
    id: "dc-5",
    question: "Który model AI jest znany z możliwości generowania obrazów?",
    options: ["ChatGPT", "DALL-E", "Claude", "Perplexity"],
    correctIndex: 1,
    category: "AI i obrazy",
    points: 10
  },
  {
    id: "dc-6",
    question: "Co oznacza termin 'fine-tuning' w kontekście AI?",
    options: ["Usuwanie błędów", "Dostrajanie modelu do konkretnego zadania", "Zwiększanie mocy obliczeniowej", "Kompresja modelu"],
    correctIndex: 1,
    category: "Zaawansowane AI",
    points: 20
  },
  {
    id: "dc-7",
    question: "W którym roku firma OpenAI wypuściła ChatGPT?",
    options: ["2020", "2021", "2022", "2023"],
    correctIndex: 2,
    category: "Historia AI",
    points: 10
  }
];

const STORAGE_KEY = "daily_challenge_state";

interface ChallengeState {
  date: string;
  challengeId: string;
  completed: boolean;
  selectedAnswer: number | null;
}

const DailyChallenge = () => {
  const [challengeState, setChallengeState] = useState<ChallengeState | null>(null);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState("");
  const { addPoints } = useProgress();

  // Get today's challenge based on date
  const getTodaysChallenge = (): DailyChallengeData => {
    const today = new Date();
    const dayIndex = today.getDate() % dailyChallenges.length;
    return dailyChallenges[dayIndex];
  };

  const todaysChallenge = getTodaysChallenge();

  // Load saved state
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed: ChallengeState = JSON.parse(saved);
      const today = new Date().toDateString();
      
      if (parsed.date === today && parsed.challengeId === todaysChallenge.id) {
        setChallengeState(parsed);
        if (parsed.completed) {
          setShowResult(true);
          setSelectedOption(parsed.selectedAnswer);
        }
      } else {
        // New day, reset challenge
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, [todaysChallenge.id]);

  // Calculate time remaining until midnight
  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0);
      
      const diff = midnight.getTime() - now.getTime();
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      setTimeRemaining(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
    };

    calculateTimeRemaining();
    const interval = setInterval(calculateTimeRemaining, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = () => {
    if (selectedOption === null) return;

    const isCorrect = selectedOption === todaysChallenge.correctIndex;
    
    const newState: ChallengeState = {
      date: new Date().toDateString(),
      challengeId: todaysChallenge.id,
      completed: true,
      selectedAnswer: selectedOption
    };
    
    setChallengeState(newState);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
    setShowResult(true);

    if (isCorrect) {
      addPoints(todaysChallenge.points);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#06b6d4", "#8b5cf6", "#22c55e"]
      });
      toast({
        title: "🎉 Świetnie!",
        description: `Poprawna odpowiedź! Zdobywasz ${todaysChallenge.points} punktów!`,
      });
    } else {
      toast({
        title: "Nie tym razem",
        description: "Spróbuj ponownie jutro! Każdy dzień to nowa szansa.",
        variant: "destructive"
      });
    }
  };

  const isCompleted = challengeState?.completed || false;
  const isCorrect = selectedOption === todaysChallenge.correctIndex;

  return (
    <Card className="overflow-hidden border-2 border-dashed border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            Wyzwanie dnia
          </CardTitle>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span className="font-mono">{timeRemaining}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <span className="px-2 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
            {todaysChallenge.category}
          </span>
          <span className="px-2 py-1 rounded-full bg-success/10 text-success text-xs font-medium flex items-center gap-1">
            <Trophy className="w-3 h-3" />
            +{todaysChallenge.points} pkt
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="font-medium text-foreground mb-4">
          {todaysChallenge.question}
        </p>

        <div className="space-y-2 mb-4">
          {todaysChallenge.options.map((option, index) => {
            let buttonVariant: "outline" | "default" | "destructive" = "outline";
            let extraClasses = "";

            if (showResult) {
              if (index === todaysChallenge.correctIndex) {
                buttonVariant = "default";
                extraClasses = "bg-success hover:bg-success border-success text-success-foreground";
              } else if (index === selectedOption && index !== todaysChallenge.correctIndex) {
                buttonVariant = "destructive";
              }
            } else if (selectedOption === index) {
              extraClasses = "ring-2 ring-primary border-primary";
            }

            return (
              <button
                key={index}
                onClick={() => !isCompleted && setSelectedOption(index)}
                disabled={isCompleted}
                className={`w-full p-3 text-left rounded-xl border transition-all duration-200 ${
                  showResult
                    ? index === todaysChallenge.correctIndex
                      ? "bg-success/10 border-success text-success"
                      : index === selectedOption
                      ? "bg-destructive/10 border-destructive text-destructive"
                      : "bg-muted/30 border-border text-muted-foreground"
                    : selectedOption === index
                    ? "bg-primary/10 border-primary text-foreground"
                    : "bg-card border-border hover:border-primary/50 text-foreground"
                } ${isCompleted ? "cursor-not-allowed" : "cursor-pointer"}`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    showResult && index === todaysChallenge.correctIndex
                      ? "bg-success text-white"
                      : showResult && index === selectedOption
                      ? "bg-destructive text-white"
                      : selectedOption === index
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span>{option}</span>
                  {showResult && index === todaysChallenge.correctIndex && (
                    <CheckCircle2 className="w-4 h-4 ml-auto text-success" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {!isCompleted ? (
          <Button
            onClick={handleSubmit}
            disabled={selectedOption === null}
            className="w-full"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Sprawdź odpowiedź
          </Button>
        ) : (
          <div className={`text-center p-4 rounded-xl ${
            isCorrect ? "bg-success/10 text-success" : "bg-muted text-muted-foreground"
          }`}>
            {isCorrect ? (
              <div className="flex items-center justify-center gap-2">
                <Trophy className="w-5 h-5" />
                <span className="font-semibold">Gratulacje! Zdobyłeś {todaysChallenge.points} punktów!</span>
              </div>
            ) : (
              <span>Wróć jutro po nowe wyzwanie!</span>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DailyChallenge;
