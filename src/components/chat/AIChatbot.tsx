import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { MessageCircle, Send, X, Sparkles, Trash2 } from "lucide-react";
import { useAIChat } from "@/hooks/useAIChat";
import ChatMessage from "./ChatMessage";
import { useToast } from "@/hooks/use-toast";

interface AIChatbotProps {
  lessonContext?: string;
}

const AIChatbot = ({ lessonContext }: AIChatbotProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const { messages, isLoading, error, sendMessage, clearMessages } = useAIChat({
    lessonContext,
  });

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (error) {
      toast({
        title: "Błąd",
        description: error,
        variant: "destructive",
      });
    }
  }, [error, toast]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    
    sendMessage(input.trim());
    setInput("");
  };

  const suggestedQuestions = [
    "Co to jest sztuczna inteligencja?",
    "Jak działa ChatGPT?",
    "Co to są halucynacje AI?",
    "Jak pisać dobre prompty?",
  ];

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          size="lg"
          className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-xl hover:scale-110 transition-transform duration-300 bg-gradient-primary"
          aria-label="Otwórz czat z Evolution Bot"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </SheetTrigger>
      <SheetContent 
        side="right" 
        className="w-full sm:w-[420px] p-0 flex flex-col"
      >
        <SheetHeader className="p-4 border-b bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <SheetTitle className="text-lg">Evolution Bot</SheetTitle>
                <p className="text-xs text-muted-foreground">Twój asystent ewolucji w AI</p>
              </div>
            </div>
            {messages.length > 0 && (
              <Button
                variant="ghost"
                size="icon"
                onClick={clearMessages}
                className="text-muted-foreground hover:text-destructive"
                aria-label="Wyczyść historię"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            )}
          </div>
        </SheetHeader>

        <ScrollArea className="flex-1 p-4" ref={scrollRef}>
          {messages.length === 0 ? (
            <div className="space-y-4">
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Cześć! Jestem Evolution Bot</h3>
                <p className="text-muted-foreground text-sm">
                  Pomogę ci zrozumieć i opanować świat AI. Zadaj mi dowolne pytanie!
                </p>
              </div>
              
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                  Popularne pytania
                </p>
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => sendMessage(question)}
                    disabled={isLoading}
                    className="w-full text-left px-4 py-3 rounded-xl bg-muted/50 hover:bg-muted text-sm transition-colors disabled:opacity-50"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-1">
              {messages.map((message, index) => (
                <ChatMessage key={index} {...message} />
              ))}
              {isLoading && messages[messages.length - 1]?.role === 'user' && (
                <div className="flex gap-3 p-4">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-accent-foreground animate-pulse" />
                  </div>
                  <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-3">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-foreground/30 animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 rounded-full bg-foreground/30 animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 rounded-full bg-foreground/30 animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </ScrollArea>

        <form 
          onSubmit={handleSubmit} 
          className="p-4 border-t bg-background"
        >
          <div className="flex gap-2">
            <Input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Zadaj pytanie..."
              disabled={isLoading}
              className="flex-1"
            />
            <Button 
              type="submit" 
              size="icon" 
              disabled={!input.trim() || isLoading}
              className="shrink-0"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  );
};

export default AIChatbot;
