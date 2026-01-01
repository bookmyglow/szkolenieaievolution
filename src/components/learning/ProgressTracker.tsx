import { cn } from "@/lib/utils";

interface ProgressTrackerProps {
  current: number;
  total: number;
  color?: "primary" | "accent";
  showLabel?: boolean;
  size?: "sm" | "md" | "lg";
}

const ProgressTracker = ({ 
  current, 
  total, 
  color = "primary",
  showLabel = true,
  size = "md"
}: ProgressTrackerProps) => {
  const percentage = Math.round((current / total) * 100);
  
  const heights = {
    sm: "h-1.5",
    md: "h-2",
    lg: "h-3"
  };
  
  return (
    <div className="space-y-2">
      {showLabel && (
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">
            Postęp: {current} z {total}
          </span>
          <span className={cn(
            "font-medium",
            color === "primary" ? "text-primary" : "text-accent"
          )}>
            {percentage}%
          </span>
        </div>
      )}
      <div className={cn("bg-muted rounded-full overflow-hidden", heights[size])}>
        <div 
          className={cn(
            "h-full rounded-full transition-all duration-500 ease-out",
            color === "primary" ? "bg-primary" : "bg-accent"
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressTracker;
