import { Flame } from "lucide-react";
import { useProgress } from "@/context/ProgressContext";

interface StreakCounterProps {
  variant?: "compact" | "full";
}

const StreakCounter = ({ variant = "compact" }: StreakCounterProps) => {
  const { streak } = useProgress();

  if (variant === "compact") {
    return (
      <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${
        streak > 0 ? "bg-accent/10 text-accent" : "bg-muted text-muted-foreground"
      }`}>
        <Flame className={`w-4 h-4 ${streak > 0 ? "animate-pulse" : ""}`} />
        <span>{streak} {streak === 1 ? "dzień" : streak > 1 && streak < 5 ? "dni" : "dni"}</span>
      </div>
    );
  }

  const streakDays = Array.from({ length: 7 }, (_, i) => i < streak);

  return (
    <div className="bg-card border border-border rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
          streak > 0 ? "bg-accent/10" : "bg-muted"
        }`}>
          <Flame className={`w-6 h-6 ${streak > 0 ? "text-accent animate-pulse" : "text-muted-foreground"}`} />
        </div>
        <div>
          <h3 className="text-xl font-bold">
            {streak} {streak === 1 ? "dzień" : streak > 1 && streak < 5 ? "dni" : "dni"} z rzędu
          </h3>
          <p className="text-sm text-muted-foreground">
            {streak > 0 ? "Świetna passa! Nie przerywaj!" : "Zacznij naukę dziś!"}
          </p>
        </div>
      </div>
      
      <div className="flex gap-2 justify-between">
        {streakDays.map((active, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
              active 
                ? "bg-accent text-accent-foreground shadow-md" 
                : "bg-muted text-muted-foreground"
            }`}>
              <Flame className="w-4 h-4" />
            </div>
            <span className="text-xs text-muted-foreground">D{i + 1}</span>
          </div>
        ))}
      </div>
      
      {streak >= 7 && (
        <p className="text-sm text-success font-medium mt-4 text-center">
          🔥 Niesamowite! Masz 7+ dniowy streak!
        </p>
      )}
    </div>
  );
};

export default StreakCounter;
