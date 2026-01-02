import { cn } from "@/lib/utils";
import { Bot, User } from "lucide-react";

interface ChatMessageProps {
  role: 'user' | 'assistant';
  content: string;
}

const ChatMessage = ({ role, content }: ChatMessageProps) => {
  const isUser = role === 'user';
  
  return (
    <div className={cn(
      "flex gap-3 p-4 animate-fade-in",
      isUser ? "flex-row-reverse" : "flex-row"
    )}>
      <div className={cn(
        "w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-md",
        isUser
          ? "bg-gradient-to-br from-primary to-primary/80 text-primary-foreground"
          : "bg-gradient-to-br from-accent to-primary/70 text-accent-foreground"
      )}>
        {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
      </div>
      <div className={cn(
        "max-w-[80%] rounded-2xl px-4 py-3 shadow-sm border border-border/50",
        isUser
          ? "bg-gradient-to-br from-primary to-primary/90 text-primary-foreground rounded-tr-sm"
          : "bg-background/80 backdrop-blur text-foreground rounded-tl-sm"
      )}>
        <div className="prose prose-sm dark:prose-invert max-w-none leading-relaxed">
          {content.split('\n').map((line, i) => (
            <p
              key={i}
              className={cn(
                "mb-2 last:mb-0",
                line.startsWith('- ') && "ml-2"
              )}
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
