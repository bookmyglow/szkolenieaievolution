import { useEffect, useState, useRef } from "react";
import { BookOpen, Award, HelpCircle, Users, Star, Clock } from "lucide-react";

const stats = [
  {
    icon: BookOpen,
    value: 7,
    label: "Modułów szkoleniowych",
    suffix: "",
    color: "primary",
  },
  {
    icon: Star,
    value: 40,
    label: "Interaktywnych lekcji",
    suffix: "",
    color: "accent",
  },
  {
    icon: HelpCircle,
    value: 35,
    label: "Pytań quizowych",
    suffix: "+",
    color: "success",
  },
  {
    icon: Award,
    value: 21,
    label: "Odznak do zdobycia",
    suffix: "",
    color: "primary",
  },
  {
    icon: Users,
    value: 2500,
    label: "Aktywnych uczniów",
    suffix: "+",
    color: "accent",
  },
  {
    icon: Clock,
    value: 15,
    label: "Godzin materiału",
    suffix: "+",
    color: "success",
  },
];

const AnimatedNumber = ({ value, suffix }: { value: number; suffix: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={ref} className="font-display text-4xl md:text-5xl font-bold text-foreground counter">
      {displayValue.toLocaleString()}{suffix}
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Platforma w{" "}
            <span className="text-gradient-primary">liczbach</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Dołącz do tysięcy osób, które już rozwijają swoje umiejętności z AI Evolution Polska.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group text-center p-6 bg-card border border-border/50 rounded-2xl card-hover"
            >
              <div className={`w-14 h-14 rounded-xl bg-${stat.color}/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <stat.icon className={`w-7 h-7 text-${stat.color}`} />
              </div>
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
