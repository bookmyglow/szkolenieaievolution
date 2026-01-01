import { Link } from "react-router-dom";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 border-t border-border bg-gradient-to-b from-background to-muted/30">
      {/* Decorative gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-1 space-y-4">
            <Link to="/" className="inline-block">
              <img 
                src={logo} 
                alt="AI Evolution Polska" 
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Twoja droga do zrozumienia sztucznej inteligencji. Ucz się w swoim tempie, zdobywaj odznaki i dołącz do społeczności przyszłości.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Nawigacja</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/moduly" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Moduły szkoleniowe
              </Link>
              <Link to="/slownik" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Słownik AI
              </Link>
              <Link to="/zasoby" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Zasoby dodatkowe
              </Link>
              <Link to="/profil" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Twój profil
              </Link>
            </nav>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Zasoby</h4>
            <nav className="flex flex-col gap-2">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Blog o AI
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Newsletter
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Webinary
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Społeczność Discord
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Kontakt</h4>
            <div className="space-y-3">
              <a 
                href="mailto:kontakt@aievolution.pl" 
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                kontakt@aievolution.pl
              </a>
              <div className="flex items-center gap-3 pt-2">
                <a 
                  href="#" 
                  className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} AI Evolution Polska. Wszystkie prawa zastrzeżone.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Polityka prywatności
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Regulamin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
