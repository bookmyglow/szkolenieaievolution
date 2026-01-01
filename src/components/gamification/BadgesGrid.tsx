import { useProgress } from "@/context/ProgressContext";
import { achievements } from "@/data/achievements";
import { Lock } from "lucide-react";

interface BadgesGridProps {
  showAll?: boolean;
  maxDisplay?: number;
}

const BadgesGrid = ({ showAll = false, maxDisplay = 6 }: BadgesGridProps) => {
  const { achievements: unlockedAchievements } = useProgress();
  
  const displayAchievements = showAll 
    ? achievements 
    : achievements.slice(0, maxDisplay);

  const isUnlocked = (id: string) => 
    unlockedAchievements.some(a => a.id === id);

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
      {displayAchievements.map((achievement) => {
        const unlocked = isUnlocked(achievement.id);
        const Icon = achievement.icon;
        
        const colorClasses = {
          primary: unlocked ? "bg-primary/10 text-primary border-primary/30" : "",
          accent: unlocked ? "bg-accent/10 text-accent border-accent/30" : "",
          success: unlocked ? "bg-success/10 text-success border-success/30" : "",
        };

        return (
          <div
            key={achievement.id}
            className={`relative group flex flex-col items-center p-3 rounded-xl border transition-all ${
              unlocked 
                ? `${colorClasses[achievement.color]} shadow-sm hover:shadow-md` 
                : "bg-muted/50 border-border text-muted-foreground opacity-60"
            }`}
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-2 ${
              unlocked ? "" : "bg-muted"
            }`}>
              {unlocked ? (
                <Icon className="w-5 h-5" />
              ) : (
                <Lock className="w-4 h-4" />
              )}
            </div>
            <span className="text-xs font-medium text-center leading-tight line-clamp-2">
              {achievement.name}
            </span>
            
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-foreground text-background text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
              {achievement.description}
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-foreground" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BadgesGrid;
