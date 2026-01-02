import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CheckCircle2, Clock, PlayCircle, ArrowRight, BookOpen, Brain, Code, Image, Lightbulb, MessageSquare, Sparkles, Zap } from "lucide-react";
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

// Map keywords to icons for visual interest
const getIconForTitle = (title: string) => {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes('historia') || lowerTitle.includes('ewoluc')) return BookOpen;
  if (lowerTitle.includes('machine') || lowerTitle.includes('uczeni') || lowerTitle.includes('ml')) return Brain;
  if (lowerTitle.includes('kod') || lowerTitle.includes('program') || lowerTitle.includes('python')) return Code;
  if (lowerTitle.includes('obraz') || lowerTitle.includes('grafik') || lowerTitle.includes('wizual')) return Image;
  if (lowerTitle.includes('prompt') || lowerTitle.includes('generowan')) return Sparkles;
  if (lowerTitle.includes('czat') || lowerTitle.includes('konwersac') || lowerTitle.includes('asystent')) return MessageSquare;
  if (lowerTitle.includes('praktyk') || lowerTitle.includes('zastosow')) return Zap;
  return Lightbulb;
};

const LessonCard = ({ 
  id, 
  moduleSlug, 
  title, 
  duration, 
  index,
  isCompleted = false,
  isCurrent = false
}: LessonCardProps) => {
  const LessonIcon = getIconForTitle(title);
  
  return (
    <Link to={`/modul/${moduleSlug}/lekcja/${id}`}>
      <Card 
        className={cn(
          "lesson-card group border-2 transition-all duration-300 hover:shadow-lg cursor-pointer",
          isCurrent && "lesson-card-current ring-2 ring-cyan shadow-md bg-cyan/5 border-cyan/30",
          isCompleted && "lesson-card-completed bg-success/5 border-success/30",
          !isCurrent && !isCompleted && "border-border/60 hover:border-primary/40 hover:bg-primary/5"
        )}
      >
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            {/* Index Badge with gradient */}
            <div className={cn(
              "w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm",
              isCompleted 
                ? "bg-gradient-to-br from-success to-emerald-600 text-white" 
                : isCurrent 
                  ? "bg-gradient-to-br from-cyan to-primary text-white shadow-md" 
                  : "bg-muted/80 text-muted-foreground group-hover:bg-gradient-to-br group-hover:from-primary/20 group-hover:to-accent/20 group-hover:text-primary"
            )}>
              {isCompleted ? (
                <CheckCircle2 className="w-6 h-6" />
              ) : isCurrent ? (
                <PlayCircle className="w-6 h-6" />
              ) : (
                <span className="font-bold text-lg">{index}</span>
              )}
            </div>
            
            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <LessonIcon className={cn(
                  "w-4 h-4 shrink-0",
                  isCompleted ? "text-success" : isCurrent ? "text-cyan" : "text-muted-foreground group-hover:text-primary"
                )} />
                <h3 className={cn(
                  "font-semibold truncate transition-colors",
                  isCompleted ? "text-muted-foreground" : isCurrent ? "text-foreground" : "group-hover:text-primary"
                )}>
                  {title}
                </h3>
              </div>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{duration}</span>
                </div>
                {isCompleted && (
                  <span className="text-success font-medium">Ukończono</span>
                )}
                {isCurrent && (
                  <span className="text-cyan font-medium">W trakcie</span>
                )}
              </div>
            </div>
            
            {/* Arrow indicator */}
            <div className={cn(
              "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300",
              isCompleted 
                ? "bg-success/10 text-success" 
                : isCurrent 
                  ? "bg-cyan/10 text-cyan"
                  : "bg-muted/50 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:bg-primary/10 group-hover:text-primary"
            )}>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default LessonCard;
