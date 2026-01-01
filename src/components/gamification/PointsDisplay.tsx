import { Sparkles, TrendingUp } from "lucide-react";
import { useProgress } from "@/context/ProgressContext";
import { getLevelInfo } from "@/data/achievements";

interface PointsDisplayProps {
  variant?: "compact" | "full";
}

const PointsDisplay = ({ variant = "compact" }: PointsDisplayProps) => {
  const { points, level } = useProgress();
  const levelInfo = getLevelInfo(level);
  const pointsInLevel = points % 100;
  const progressToNext = (pointsInLevel / 100) * 100;

  if (variant === "compact") {
    return (
      <div className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium">
        <Sparkles className="w-4 h-4" />
        <span>{points} pkt</span>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-2xl p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Poziom {level}</p>
            <h3 className="text-xl font-bold">{levelInfo.name}</h3>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-primary">{points}</p>
          <p className="text-sm text-muted-foreground">punktów</p>
        </div>
      </div>
      
      {levelInfo.nextLevelName && (
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground">Do następnego poziomu</span>
            <span className="font-medium">{100 - pointsInLevel} pkt</span>
          </div>
          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full transition-all duration-500"
              style={{ width: `${progressToNext}%` }}
            />
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Następny poziom: <span className="font-medium">{levelInfo.nextLevelName}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default PointsDisplay;
