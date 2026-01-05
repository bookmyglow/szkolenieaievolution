import { useState, useEffect, useRef } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Anna Kowalska",
    role: "Marketing Manager",
    company: "TechStart Polska",
    avatar: "AK",
    avatarGradient: "from-primary to-accent",
    content: "AI Evolution Polska to game changer! W 3 tygodnie nauczyłam się promptowania na poziomie, który pozwala mi automatyzować 60% codziennych zadań marketingowych.",
    rating: 5,
    highlight: "60% automatyzacji"
  },
  {
    id: 2,
    name: "Michał Nowak",
    role: "Właściciel firmy",
    company: "E-commerce Solutions",
    avatar: "MN",
    avatarGradient: "from-cyan to-primary",
    content: "Myślałem, że AI to coś dla programistów. Okazuje się, że wystarczy 15 minut dziennie, żeby nauczyć się tworzyć automatyzacje, które oszczędzają mi 10 godzin tygodniowo.",
    rating: 5,
    highlight: "10h oszczędności/tydzień"
  },
  {
    id: 3,
    name: "Karolina Wiśniewska",
    role: "Content Creator",
    company: "FreelanceMedia",
    avatar: "KW",
    avatarGradient: "from-accent to-orange",
    content: "Dzięki kursowi tworzę teraz grafiki i wideo AI szybciej niż kiedykolwiek. Moi klienci są zachwyceni jakością, a ja mam więcej czasu na kreatywność.",
    rating: 5,
    highlight: "2x szybsza produkcja"
  },
  {
    id: 4,
    name: "Piotr Zieliński",
    role: "Sales Director",
    company: "B2B Connect",
    avatar: "PZ",
    avatarGradient: "from-success to-cyan",
    content: "AI Agenci, których nauczyłem się budować, generują mi teraz leady 24/7. To jak mieć dodatkowego pracownika, który nigdy nie śpi.",
    rating: 5,
    highlight: "Leady 24/7"
  },
  {
    id: 5,
    name: "Ewa Dąbrowska",
    role: "HR Manager",
    company: "PeopleFirst",
    avatar: "ED",
    avatarGradient: "from-orange to-warning",
    content: "Rekrutacja z AI to zupełnie inna bajka. Analiza CV, screening kandydatów - to wszystko robię teraz w ułamku czasu. Polecam każdemu HR-owcowi!",
    rating: 5,
    highlight: "5x szybszy screening"
  },
  {
    id: 6,
    name: "Tomasz Mazur",
    role: "Startup Founder",
    company: "InnovateTech",
    avatar: "TM",
    avatarGradient: "from-primary to-success",
    content: "Zbudowałem landing page i pierwszą wersję aplikacji w weekend. Bez AI Evolution Polska musiałbym wydać tysiące na agencję. Teraz sam kontroluję swój produkt.",
    rating: 5,
    highlight: "MVP w weekend"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const maxIndex = Math.max(0, testimonials.length - cardsToShow);
  
  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-muted/30"
      aria-labelledby="testimonials-heading"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        {/* Section header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            <Star className="w-4 h-4 fill-accent" />
            Opinie uczestników
          </div>
          <h2
            id="testimonials-heading"
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Co mówią nasi{" "}
            <span className="text-gradient-primary">absolwenci</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Dołącz do tysięcy osób, które już transformują swoją pracę z AI Evolution Polska
          </p>
        </div>

        {/* Testimonials carousel */}
        <div className="relative">
          {/* Navigation buttons */}
          <div className="hidden md:flex absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background shadow-lg"
              aria-label="Poprzednia opinia"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </div>
          <div className="hidden md:flex absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background shadow-lg"
              aria-label="Następna opinia"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Cards container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out gap-6"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsToShow + 2)}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`flex-shrink-0 transition-all duration-700 ${
                    cardsToShow === 1
                      ? "w-full"
                      : cardsToShow === 2
                      ? "w-[calc(50%-12px)]"
                      : "w-[calc(33.333%-16px)]"
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  }}
                >
                  <div className="h-full p-6 md:p-8 bg-card border border-border/50 rounded-2xl card-hover group relative overflow-hidden">
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${testimonial.avatarGradient} rounded-full blur-3xl opacity-20`} />
                    </div>

                    {/* Quote icon */}
                    <div className="absolute top-4 right-4 text-muted-foreground/20">
                      <Quote className="w-12 h-12" />
                    </div>

                    {/* Content */}
                    <div className="relative">
                      {/* Rating */}
                      <div className="flex gap-1 mb-4">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-warning text-warning"
                          />
                        ))}
                      </div>

                      {/* Highlight badge */}
                      <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${testimonial.avatarGradient} text-white text-xs font-bold mb-4`}>
                        {testimonial.highlight}
                      </div>

                      {/* Quote */}
                      <blockquote className="text-foreground mb-6 leading-relaxed">
                        "{testimonial.content}"
                      </blockquote>

                      {/* Author */}
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.avatarGradient} flex items-center justify-center text-white font-bold text-sm shadow-lg`}
                        >
                          {testimonial.avatar}
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile navigation */}
          <div className="flex md:hidden justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="rounded-full"
              aria-label="Poprzednia opinia"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className="rounded-full"
              aria-label="Następna opinia"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Przejdź do opinii ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
