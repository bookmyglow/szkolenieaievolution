import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { resources, getResourcesByCategory, searchResources, Resource } from "@/data/resources";
import { Search, ExternalLink, Bot, Palette, Video, Book, Users, Wrench, Star, Sparkles } from "lucide-react";
import AIChatbot from "@/components/chat/AIChatbot";
import SEO from "@/components/seo/SEO";

const categoryInfo = [
  { id: "all", name: "Wszystkie", icon: Star },
  { id: "narzedzia", name: "Narzędzia AI", icon: Wrench },
  { id: "kursy", name: "Kursy", icon: Book },
  { id: "youtube", name: "YouTube", icon: Video },
  { id: "spolecznosci", name: "Społeczności", icon: Users },
];

const ResourcesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  let displayedResources: Resource[] = [];
  
  if (searchQuery) {
    displayedResources = searchResources(searchQuery);
  } else if (activeCategory === "all") {
    displayedResources = resources;
  } else {
    displayedResources = getResourcesByCategory(activeCategory as Resource["category"]);
  }

  const iconMap: Record<string, typeof Bot> = {
    Bot,
    Palette,
    Video,
    Book,
    Users,
    Wrench,
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Narzędzia AI | AI Evolution Polska"
        description="Starannie wyselekcjonowane narzędzia AI, kursy i społeczności, które pomogą Ci szybciej budować nowoczesne rozwiązania."
      />
      <Header />
      <main id="main-content" className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/15 to-accent/15 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-border/60">
              <Sparkles className="w-4 h-4" />
              <span>Narzędzia AI</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Przydatne <span className="text-gradient-accent">narzędzia AI</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Narzędzia, kursy i społeczności, które pomogą Ci w nauce i wdrażaniu AI na co dzień
            </p>

            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Szukaj zasobów..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 text-lg"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {categoryInfo.map(category => {
              const CategoryIcon = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setActiveCategory(category.id);
                    setSearchQuery("");
                  }}
                >
                  <CategoryIcon className="w-4 h-4 mr-1" />
                  {category.name}
                </Button>
              );
            })}
          </div>

          {/* Resources Grid */}
          <div className="max-w-5xl mx-auto">
            {displayedResources.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {displayedResources.map((resource, index) => {
                  const ResourceIcon = resource.icon ? iconMap[resource.icon.name] || Bot : Bot;
                  
                  return (
                    <Card 
                      key={resource.id}
                      variant="interactive"
                      className="group opacity-0 animate-fade-in-up"
                      style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'forwards' }}
                    >
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <ResourceIcon className="w-5 h-5 text-primary" />
                          </div>
                          {resource.isPaid && (
                            <span className="text-xs px-2 py-0.5 bg-accent/10 text-accent rounded-full">
                              Płatne
                            </span>
                          )}
                        </div>
                        <CardTitle className="text-lg mt-3 group-hover:text-primary transition-colors">
                          {resource.name}
                        </CardTitle>
                        <CardDescription>
                          {resource.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {resource.tags.map(tag => (
                            <span 
                              key={tag}
                              className="text-xs px-2 py-0.5 bg-muted rounded-full text-muted-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full gap-1"
                          asChild
                        >
                          <a 
                            href={resource.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            Odwiedź
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  Nie znaleziono zasobów dla "{searchQuery}"
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
      <AIChatbot />
    </div>
  );
};

export default ResourcesPage;
