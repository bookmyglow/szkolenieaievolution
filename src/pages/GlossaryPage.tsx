import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { glossaryTerms, getTermsByCategory, searchTerms, GlossaryTerm } from "@/data/glossary";
import { Search, BookOpen, ArrowRight } from "lucide-react";
import AIChatbot from "@/components/chat/AIChatbot";

const categories = [
  { id: "all", name: "Wszystkie", count: glossaryTerms.length },
  { id: "podstawy", name: "Podstawy AI", count: getTermsByCategory("podstawy").length },
  { id: "modele", name: "Modele językowe", count: getTermsByCategory("modele").length },
  { id: "obrazy", name: "AI i obrazy", count: getTermsByCategory("obrazy").length },
  { id: "praktyka", name: "AI w praktyce", count: getTermsByCategory("praktyka").length },
];

const GlossaryPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  let displayedTerms: GlossaryTerm[] = [];
  
  if (searchQuery) {
    displayedTerms = searchTerms(searchQuery);
  } else if (activeCategory === "all") {
    displayedTerms = glossaryTerms;
  } else {
    displayedTerms = getTermsByCategory(activeCategory as GlossaryTerm["category"]);
  }

  // Sort alphabetically
  displayedTerms = [...displayedTerms].sort((a, b) => a.term.localeCompare(b.term, 'pl'));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              <span>Słownik AI</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Słownik pojęć <span className="text-gradient-primary">AI</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Poznaj kluczowe terminy ze świata sztucznej inteligencji
            </p>

            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Szukaj pojęcia..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 text-lg"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {categories.map(category => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  setActiveCategory(category.id);
                  setSearchQuery("");
                }}
              >
                {category.name}
                <span className="ml-1 text-xs opacity-70">({category.count})</span>
              </Button>
            ))}
          </div>

          {/* Terms Grid */}
          <div className="max-w-4xl mx-auto">
            {displayedTerms.length > 0 ? (
              <div className="grid gap-4">
                {displayedTerms.map((term, index) => (
                  <Card 
                    key={term.id}
                    className="opacity-0 animate-fade-in-up"
                    style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'forwards' }}
                  >
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center justify-between">
                        <span>{term.term}</span>
                        <span className="text-xs font-normal px-2 py-1 bg-muted rounded-full text-muted-foreground">
                          {categories.find(c => c.id === term.category)?.name}
                        </span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-3">{term.definition}</p>
                      
                      {term.relatedLessons && term.relatedLessons.length > 0 && (
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-muted-foreground">Powiązane lekcje:</span>
                          {term.relatedLessons.map(lessonId => {
                            const [moduleNum] = lessonId.split("-");
                            return (
                              <Link
                                key={lessonId}
                                to={`/modul/${getModuleSlugByNumber(parseInt(moduleNum))}/lekcja/${lessonId}`}
                                className="text-primary hover:underline"
                              >
                                Lekcja {lessonId.replace("-", ".")}
                                <ArrowRight className="w-3 h-3 inline ml-0.5" />
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  Nie znaleziono pojęć dla "{searchQuery}"
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

// Helper function to get module slug by number
const getModuleSlugByNumber = (num: number): string => {
  const slugs = ["czym-jest-ai", "modele-jezykowe", "ai-i-obrazy", "ai-w-praktyce"];
  return slugs[num - 1] || slugs[0];
};

export default GlossaryPage;
