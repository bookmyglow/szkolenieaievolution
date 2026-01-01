import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User, Menu, X, Sun, Moon, BookOpen } from "lucide-react";
import { useState } from "react";
import PointsDisplay from "@/components/gamification/PointsDisplay";
import StreakCounter from "@/components/gamification/StreakCounter";
import { useTheme } from "@/hooks/useTheme";
import { useProgress } from "@/context/ProgressContext";
import { modules } from "@/data/modules";
import logo from "@/assets/logo.png";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toggleTheme, isDark } = useTheme();
  const { getTotalCompletedLessons } = useProgress();

  // Calculate total progress
  const totalLessons = modules.reduce((acc, m) => acc + m.lessons.length, 0);
  const completedLessons = getTotalCompletedLessons();
  const progressPercent = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <a href="#main-content" className="skip-link">
        Przejdź do treści głównej
      </a>
      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-muted/50">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="AI Evolution Polska"
            className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
            loading="lazy"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/moduly"
            className="text-muted-foreground hover:text-foreground transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
          >
            Moduły
          </Link>
          <Link
            to="/slownik"
            className="text-muted-foreground hover:text-foreground transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
          >
            Słownik
          </Link>
          <Link
            to="/narzedzia"
            className="text-muted-foreground hover:text-foreground transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
          >
            Narzędzia AI
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          {/* Progress indicator - compact */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 border border-border/50">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium tabular-nums">{progressPercent}%</span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Ukończono {completedLessons} z {totalLessons} lekcji</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <div className="hidden sm:flex items-center gap-2">
            <StreakCounter variant="compact" />
            <PointsDisplay variant="compact" />
          </div>

          {/* Theme toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="relative overflow-hidden"
          >
            <Sun className={`w-5 h-5 absolute transition-all duration-300 ${isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`} />
            <Moon className={`w-5 h-5 absolute transition-all duration-300 ${isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`} />
            <span className="sr-only">Przełącz motyw</span>
          </Button>

          <Button variant="ghost" size="icon" asChild>
            <Link to="/profil">
              <User className="w-5 h-5" />
            </Link>
          </Button>
          <Button variant="3d" size="sm" asChild className="hidden sm:inline-flex">
            <Link to="/moduly">Rozpocznij</Link>
          </Button>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="primary-navigation"
            aria-label={mobileMenuOpen ? "Zamknij menu" : "Otwórz menu"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div
          id="primary-navigation"
          className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border animate-fade-in"
        >
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {/* Mobile progress */}
            <div className="flex items-center justify-between py-2 border-b border-border/50">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-primary" />
                <span className="text-sm">Postęp kursu</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                <span className="text-sm font-medium tabular-nums">{progressPercent}%</span>
              </div>
            </div>

            <Link
              to="/moduly"
              className="text-foreground font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Moduły
            </Link>
            <Link
              to="/slownik"
              className="text-foreground font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Słownik
            </Link>
            <Link
              to="/narzedzia"
              className="text-foreground font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Narzędzia AI
            </Link>

            {/* Mobile theme toggle */}
            <button
              onClick={() => {
                toggleTheme();
              }}
              className="flex items-center justify-between py-2 text-foreground font-medium"
            >
              <span>Motyw</span>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50">
                {isDark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                <span className="text-sm">{isDark ? 'Ciemny' : 'Jasny'}</span>
              </div>
            </button>

            <Button variant="3d" asChild className="mt-2">
              <Link to="/moduly" onClick={() => setMobileMenuOpen(false)}>
                Rozpocznij naukę
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
