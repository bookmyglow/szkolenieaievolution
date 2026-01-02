import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { MessageCircle, Send, Sparkles, Trash2 } from "lucide-react";
import { useAIChat } from "@/hooks/useAIChat";
import ChatMessage from "./ChatMessage";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

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
          className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-xl hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-primary via-primary/90 to-accent text-white"
          aria-label="Otwórz czat z Evolution Bot"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full sm:w-[440px] p-0 flex flex-col bg-gradient-to-br from-background via-background/95 to-background/90 border-l shadow-2xl"
      >
        <SheetHeader className="p-4 border-b bg-gradient-to-r from-primary/15 via-background to-accent/15 backdrop-blur">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-primary via-primary/80 to-accent text-white flex items-center justify-center shadow-lg">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <SheetTitle className="text-xl tracking-tight">Evolution Bot</SheetTitle>
                <p className="text-xs text-muted-foreground">Profesjonalne wsparcie z odrobiną humoru</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-2 text-xs text-muted-foreground bg-muted/60 px-3 py-1 rounded-full">
                <span
                  className={cn("w-2 h-2 rounded-full", isLoading ? "bg-primary animate-pulse" : "bg-green-500")}
                ></span>
                {isLoading ? "Piszę odpowiedź" : "Online"}
              </span>
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
          </div>
        </SheetHeader>

        <ScrollArea
          className="flex-1 p-4 bg-gradient-to-b from-background/80 via-background to-background/90"
          ref={scrollRef}
        >
          {messages.length === 0 ? (
            <div className="space-y-4">
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary via-primary/85 to-accent mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <Sparkles className="w-8 h-8 text-white drop-shadow" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Cześć! Jestem Evolution Bot</h3>
                <p className="text-muted-foreground text-sm">
                  Pomogę ci zrozumieć i opanować świat AI. Zadaj mi dowolne pytanie!
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Popularne pytania</p>
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => sendMessage(question)}
                    disabled={isLoading}
                    className="w-full text-left px-4 py-3 rounded-xl border border-border/60 bg-muted/40 hover:bg-muted shadow-sm text-sm transition-colors disabled:opacity-50"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              {messages.map((message, index) => (
                <ChatMessage key={index} {...message} />
              ))}
              {isLoading && messages[messages.length - 1]?.role === "user" && (
                <div className="flex gap-3 p-4">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-accent-foreground animate-spin" />
                  </div>
                  <div className="bg-muted/70 rounded-2xl rounded-tl-sm px-4 py-3 shadow-inner border border-border/60">
                    <div className="flex flex-col gap-2 w-32">
                      <span className="h-2 rounded-full bg-gradient-to-r from-primary/70 via-accent/60 to-primary/70 animate-[pulse_1.6s_ease-in-out_infinite]" />
                      <span className="h-2 rounded-full bg-gradient-to-r from-primary/50 via-accent/50 to-primary/60 animate-[pulse_1.4s_ease-in-out_infinite] delay-150" />
                      <span className="h-2 rounded-full bg-gradient-to-r from-primary/40 via-accent/40 to-primary/50 animate-[pulse_1.2s_ease-in-out_infinite] delay-300" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </ScrollArea>

        <form
          onSubmit={handleSubmit}
          className="p-4 border-t bg-gradient-to-r from-background via-background/95 to-background"
        >
          <div className="flex gap-2">
            <Input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Zadaj pytanie..."
              disabled={isLoading}
              className="flex-1 rounded-xl border-border/70 bg-muted/50 focus:bg-background"
            />
            <Button
              type="submit"
              size="icon"
              disabled={!input.trim() || isLoading}
              className="shrink-0 rounded-xl bg-gradient-to-br from-primary via-primary/90 to-accent text-white shadow-lg"
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
