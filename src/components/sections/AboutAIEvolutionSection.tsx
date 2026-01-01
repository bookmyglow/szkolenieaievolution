import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Rocket, Users, Lightbulb, ArrowRight } from "lucide-react";
import aboutImage from "@/assets/hero-robot-teaching.jpg";
import { Link } from "react-router-dom";

const AboutAIEvolutionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background via-muted/30 to-background" id="o-nas">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/15 to-accent/15 text-primary border border-border/60">
              <Sparkles className="w-4 h-4" />
              <span>AI Evolution Polska</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Startup i społeczność, która uczy jak używać AI <span className="text-gradient-primary">w praktyce</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Budujemy miejsce, w którym pasjonaci i profesjonaliści uczą się wspólnie. Łączymy warsztaty, materiały online i boty
              asystujące, aby szybciej przejść od teorii do działania.
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: Rocket, title: "Startup edukacyjny", desc: "Powstaliśmy w Polsce, by przyspieszyć adopcję AI w firmach i zespołach." },
                { icon: Users, title: "Społeczność", desc: "Setki osób wymieniają się promptami, case study i wsparciem na żywo." },
                { icon: Lightbulb, title: "Praktyka", desc: "Ćwiczenia, checklisty i zadania projektowe w każdym module." },
              ].map(item => {
                const Icon = item.icon;
                return (
                  <Card key={item.title} className="h-full border-border/70 bg-card/70">
                    <CardContent className="p-4 flex flex-col gap-2">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <p className="font-semibold text-foreground">{item.title}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="gap-2">
                <Link to="/moduly">
                  Wejdź do modułów
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link to="/narzedzia">
                  Narzędzia AI
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 rounded-[28px] blur-2xl opacity-60 group-hover:opacity-80 transition-opacity" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[24px] border border-border/60 shadow-2xl bg-card">
              <img
                src={aboutImage}
                alt="Zespół AI Evolution prowadzi warsztaty o sztucznej inteligencji"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur border border-border/50 text-xs font-medium">
                Warsztaty na żywo
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/80 to-transparent p-4">
                <p className="text-sm text-muted-foreground">Poznaj ludzi, którzy tworzą przyszłość AI w Polsce.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAIEvolutionSection;
