import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, MessageCircle, Mail, ArrowRight, Heart } from "lucide-react";

const CommunitySection = () => {
  return (
    <section id="spolecznosc" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              <span>Społeczność</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ucz się razem z{" "}
              <span className="text-gradient-primary">innymi</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dołącz do społeczności osób zainteresowanych AI. Dziel się wiedzą, 
              zadawaj pytania i rozwijaj się razem z nami.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card variant="3d" className="group">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-[#5865F2]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-8 h-8 text-[#5865F2]" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Discord</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Dołącz do naszego serwera Discord. Czatuj z innymi uczniami, 
                  zadawaj pytania i bierz udział w wydarzeniach na żywo.
                </p>
                <Button variant="3d" className="w-full">
                  Dołącz do Discord
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            <Card variant="3d" className="group">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Newsletter</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Zapisz się na cotygodniowy newsletter. Otrzymuj najnowsze 
                  aktualności ze świata AI prosto na skrzynkę.
                </p>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="twoj@email.pl"
                    className="flex-1 px-4 py-2 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                  <Button variant="3d-accent">
                    Zapisz
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card variant="gradient" className="mt-8">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Heart className="w-6 h-6 text-destructive" />
                <span className="text-lg font-semibold">Wesprzyj projekt</span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                AIStart jest projektem edukacyjnym. Jeśli podoba Ci się to, co robimy, 
                rozważ wsparcie naszej pracy.
              </p>
              <Button variant="outline" size="lg">
                Dowiedz się więcej
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
