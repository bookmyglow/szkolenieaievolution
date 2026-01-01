import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CheckCircle2, Circle, Clock, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";

interface LessonCardProps {
  id: string;
  moduleSlug: string;
  title: string;
  duration: string;
  index: number;
  isCompleted?: boolean;
  isCurrent?: boolean;
}

const LessonCard = ({ 
  id, 
  moduleSlug, 
  title, 
  duration, 
  index,
  isCompleted = false,
  isCurrent = false
}: LessonCardProps) => {
  return (
    <Link to={`/modul/${moduleSlug}/lekcja/${id}`}>
      <Card 
        className={cn(
          "group transition-all duration-300 hover:shadow-md cursor-pointer",
          isCurrent && "ring-2 ring-primary shadow-md",
          isCompleted && "bg-success/5"
        )}
      >
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            <div className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors",
              isCompleted 
                ? "bg-success/20 text-success" 
                : isCurrent 
                  ? "bg-primary/20 text-primary" 
                  : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
            )}>
              {isCompleted ? (
                <CheckCircle2 className="w-5 h-5" />
              ) : isCurrent ? (
                <PlayCircle className="w-5 h-5" />
              ) : (
                <span className="font-semibold text-sm">{index}</span>
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className={cn(
                "font-medium truncate group-hover:text-primary transition-colors",
                isCompleted && "text-muted-foreground"
              )}>
                {title}
              </h3>
              <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                <Clock className="w-3 h-3" />
                <span>{duration}</span>
              </div>
            </div>
            
            <div className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity",
              "bg-primary/10 text-primary"
            )}>
              <PlayCircle className="w-4 h-4" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default LessonCard;
