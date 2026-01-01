import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Sparkles, MessageSquare, Image, Music, Code, Video } from "lucide-react";

const aiTools = [
  {
    name: "ChatGPT",
    description: "Asystent tekstowy od OpenAI. Świetny do pisania, nauki i rozmów.",
    icon: MessageSquare,
    category: "Tekst",
    color: "primary",
    url: "https://chat.openai.com",
  },
  {
    name: "DALL-E",
    description: "Twórz obrazy z opisu tekstowego. Wystarczy opisać, co chcesz zobaczyć.",
    icon: Image,
    category: "Obrazy",
    color: "accent",
    url: "https://openai.com/dall-e-3",
  },
  {
    name: "Claude",
    description: "Inteligentny asystent od Anthropic. Bezpieczny i pomocny.",
    icon: Sparkles,
    category: "Tekst",
    color: "primary",
    url: "https://claude.ai",
  },
  {
    name: "Midjourney",
    description: "Zaawansowane generowanie obrazów artystycznych.",
    icon: Image,
    category: "Obrazy",
    color: "accent",
    url: "https://midjourney.com",
  },
  {
    name: "GitHub Copilot",
    description: "AI pomocnik dla programistów. Pisze kod razem z Tobą.",
    icon: Code,
    category: "Kod",
    color: "primary",
    url: "https://github.com/features/copilot",
  },
  {
    name: "Suno AI",
    description: "Twórz muzykę z tekstu. AI komponuje i śpiewa dla Ciebie.",
    icon: Music,
    category: "Muzyka",
    color: "accent",
    url: "https://suno.ai",
  },
];

const DiscoverSection = () => {
  return (
    <section id="odkrywaj" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Odkrywaj AI</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Popularne narzędzia{" "}
            <span className="text-gradient-accent">AI</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Poznaj najlepsze aplikacje wykorzystujące sztuczną inteligencję.
            Od tworzenia tekstów po generowanie obrazów i muzyki.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {aiTools.map((tool, index) => (
            <Card 
              key={tool.name}
              variant="3d"
              className={`group cursor-pointer opacity-0 animate-fade-in-up`}
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div 
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                      tool.color === 'primary' 
                        ? 'bg-primary/10 text-primary' 
                        : 'bg-accent/10 text-accent'
                    }`}
                  >
                    <tool.icon className="w-6 h-6" />
                  </div>
                  <span 
                    className={`text-xs font-medium px-3 py-1 rounded-full ${
                      tool.color === 'primary' 
                        ? 'bg-primary/10 text-primary' 
                        : 'bg-accent/10 text-accent'
                    }`}
                  >
                    {tool.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {tool.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {tool.description}
                </p>
                
                <a 
                  href={tool.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  Wypróbuj
                  <ExternalLink className="w-3 h-3" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="3d-accent" size="lg">
            Wszystkie narzędzia AI
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
