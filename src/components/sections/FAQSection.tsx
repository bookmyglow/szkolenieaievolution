import { useState, useEffect, useRef } from "react";
import { HelpCircle, Plus, Minus, Sparkles, BookOpen, CreditCard, Clock, Users, Award, Zap, Shield } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
  icon: LucideIcon;
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "Czy muszę mieć doświadczenie techniczne, żeby zacząć?",
    answer: "Absolutnie nie! Kurs AI Evolution Polska jest zaprojektowany dla osób bez doświadczenia technicznego. Zaczynamy od podstaw i krok po kroku prowadzamy przez wszystkie tematy. Wystarczy umiejętność korzystania z komputera i chęć nauki.",
    category: "Dla kogo",
    icon: Users
  },
  {
    id: 2,
    question: "Ile czasu muszę poświęcić na naukę?",
    answer: "Rekomendujemy 15-30 minut dziennie. Materiały są podzielone na krótkie lekcje, które możesz przerabiać w swoim tempie. Większość uczestników kończy cały program w 4-6 tygodni przy regularnej nauce.",
    category: "Czas",
    icon: Clock
  },
  {
    id: 3,
    question: "Czy po kursie dostanę certyfikat?",
    answer: "Tak! Po ukończeniu wszystkich modułów i zdaniu quizów otrzymujesz oficjalny certyfikat AI Evolution Polska potwierdzający Twoje umiejętności. Certyfikat możesz pobrać w formacie PDF i dodać do LinkedIn.",
    category: "Certyfikat",
    icon: Award
  },
  {
    id: 4,
    question: "Jakie narzędzia AI poznam podczas kursu?",
    answer: "Nauczysz się korzystać z ChatGPT, Gemini, Claude, Midjourney, DALL-E, Runway, Make/Zapier i wielu innych. Pokazujemy zarówno darmowe, jak i płatne narzędzia, abyś mógł wybrać te najlepsze dla siebie.",
    category: "Narzędzia",
    icon: Zap
  },
  {
    id: 5,
    question: "Czy materiały są aktualizowane?",
    answer: "Tak! AI rozwija się bardzo szybko, dlatego regularnie aktualizujemy treści kursu. Dodajemy nowe lekcje o najnowszych modelach i narzędziach. Masz dostęp do wszystkich aktualizacji bez dodatkowych opłat.",
    category: "Aktualizacje",
    icon: Sparkles
  },
  {
    id: 6,
    question: "Jak wygląda struktura kursu?",
    answer: "Kurs składa się z 7+ modułów tematycznych, każdy zawiera 5-9 lekcji. Po każdym module jest quiz sprawdzający wiedzę. Masz też dostęp do glosariusza pojęć, zestawienia narzędzi AI i chatbota pomocnika.",
    category: "Struktura",
    icon: BookOpen
  },
  {
    id: 7,
    question: "Czy mogę uczyć się na telefonie?",
    answer: "Tak! Platforma jest w pełni responsywna i działa świetnie na urządzeniach mobilnych. Możesz uczyć się w drodze do pracy, w przerwie lub gdziekolwiek masz dostęp do internetu.",
    category: "Dostęp",
    icon: Shield
  },
  {
    id: 8,
    question: "Czy kurs jest płatny?",
    answer: "Podstawowy dostęp do wszystkich modułów i lekcji jest całkowicie darmowy! Oferujemy też rozszerzoną wersję Masterclass z dodatkowymi materiałami, szablonami i wsparciem mentora.",
    category: "Cena",
    icon: CreditCard
  }
];

const FAQSection = () => {
  const [openId, setOpenId] = useState<number | null>(1);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleItem = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      aria-labelledby="faq-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        {/* Section header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            FAQ
          </div>
          <h2
            id="faq-heading"
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Często zadawane{" "}
            <span className="text-gradient-primary">pytania</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Masz pytania? Mamy odpowiedzi. Jeśli nie znajdziesz tego, czego szukasz, 
            skorzystaj z naszego chatbota AI lub napisz do nas.
          </p>
        </div>

        {/* FAQ items */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={item.id}
                className={`transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 75}ms` }}
              >
                <div
                  className={`bg-card border rounded-2xl overflow-hidden transition-all duration-300 ${
                    openId === item.id
                      ? "border-primary/30 shadow-lg shadow-primary/5"
                      : "border-border/50 hover:border-border"
                  }`}
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full flex items-center justify-between p-6 text-left"
                    aria-expanded={openId === item.id}
                    aria-controls={`faq-answer-${item.id}`}
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          openId === item.id
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <span
                          className={`text-xs font-medium uppercase tracking-wider mb-1 block ${
                            openId === item.id
                              ? "text-primary"
                              : "text-muted-foreground"
                          }`}
                        >
                          {item.category}
                        </span>
                        <span className="font-semibold text-foreground block pr-4">
                          {item.question}
                        </span>
                      </div>
                    </div>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        openId === item.id
                          ? "bg-primary text-primary-foreground rotate-180"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {openId === item.id ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  <div
                    id={`faq-answer-${item.id}`}
                    className={`overflow-hidden transition-all duration-300 ease-out ${
                      openId === item.id ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="px-6 pb-6 pt-0">
                      <div className="pl-14">
                        <p className="text-muted-foreground leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div
            className={`mt-12 text-center transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-muted-foreground mb-4">
              Nie znalazłeś odpowiedzi na swoje pytanie?
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-foreground font-medium">
              <Sparkles className="w-4 h-4 text-primary" />
              Skorzystaj z chatbota AI w prawym dolnym rogu ekranu
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
