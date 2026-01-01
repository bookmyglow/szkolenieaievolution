import { Award, Download, CheckCircle2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useProgress } from "@/context/ProgressContext";
import { modules } from "@/data/modules";

const CertificateSection = () => {
  const { getModuleProgress } = useProgress();

  const allModulesCompleted = modules.every((module) => {
    const progress = getModuleProgress ? getModuleProgress(module.slug, module.lessons.length) : 0;
    return progress >= 100;
  });

  const totalProgress = modules.reduce((acc, module) => {
    const progress = getModuleProgress ? getModuleProgress(module.slug, module.lessons.length) : 0;
    return acc + progress;
  }, 0) / modules.length;

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Info */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-600 px-4 py-2 rounded-full text-sm font-semibold">
              <Award className="w-4 h-4" />
              Certyfikacja
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
              Zdobądź{" "}
              <span className="text-gradient-accent">certyfikat</span>{" "}
              ukończenia kursu
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Po ukończeniu wszystkich modułów otrzymasz oficjalny certyfikat 
              AI Evolution Polska, potwierdzający Twoje umiejętności w zakresie 
              sztucznej inteligencji.
            </p>

            <div className="space-y-4">
              {[
                "Potwierdzenie ukończenia 7 modułów szkoleniowych",
                "Indywidualny numer certyfikatu do weryfikacji",
                "Możliwość udostępnienia w LinkedIn i CV",
                "Dostęp do ekskluzywnej społeczności absolwentów",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              {allModulesCompleted ? (
                <Button variant="hero" size="lg" asChild>
                  <Link to="/certyfikat">
                    <Download className="w-4 h-4 mr-2" />
                    Pobierz certyfikat
                  </Link>
                </Button>
              ) : (
                <>
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/moduly">
                      Rozpocznij naukę
                    </Link>
                  </Button>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full transition-all"
                        style={{ width: `${totalProgress}%` }}
                      />
                    </div>
                    <span>{Math.round(totalProgress)}% ukończono</span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Right - Certificate preview */}
          <div className="relative">
            {/* Certificate mockup */}
            <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border-2 border-amber-200 dark:border-amber-800 rounded-3xl p-8 md:p-12 shadow-xl">
              {/* Decorative corners */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-amber-400 rounded-tl-lg" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-amber-400 rounded-tr-lg" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-amber-400 rounded-bl-lg" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-amber-400 rounded-br-lg" />

              <div className="text-center space-y-6">
                {/* Logo area */}
                <div className="flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-widest text-amber-600 dark:text-amber-400 font-semibold">
                    Certyfikat ukończenia
                  </p>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mt-2">
                    AI Evolution Polska
                  </h3>
                </div>

                <div className="py-4 border-y border-amber-200 dark:border-amber-800">
                  <p className="text-muted-foreground">Niniejszym zaświadcza się, że</p>
                  <p className="text-2xl font-display font-bold text-foreground mt-2">
                    {allModulesCompleted ? "Twoje Imię" : "..."}
                  </p>
                  <p className="text-muted-foreground mt-2">
                    ukończył/a szkolenie z zakresu sztucznej inteligencji
                  </p>
                </div>

                <div className="flex items-center justify-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                <div className="text-sm text-muted-foreground">
                  <p>Nr certyfikatu: AIEP-2024-XXXX</p>
                  <p>Data wydania: DD.MM.RRRR</p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className={`absolute -top-4 -right-4 ${allModulesCompleted ? 'bg-success' : 'bg-muted'} text-success-foreground rounded-full p-3 shadow-lg ${allModulesCompleted ? 'animate-bounce' : ''}`}>
              <CheckCircle2 className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;