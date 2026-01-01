import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Award, Download, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useProgress } from "@/context/ProgressContext";
import { modules } from "@/data/modules";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CertificatePreview from "@/components/certificate/CertificatePreview";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { toast } from "sonner";

const CertificatePage = () => {
  const navigate = useNavigate();
  const { getModuleProgress, getTotalCompletedLessons } = useProgress();
  const [userName, setUserName] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const certificateRef = useRef<HTMLDivElement>(null);

  const allModulesCompleted = modules.every((module) => {
    const progress = getModuleProgress ? getModuleProgress(module.slug, module.lessons.length) : 0;
    return progress >= 100;
  });

  const totalLessons = modules.reduce((acc, m) => acc + m.lessons.length, 0);
  const completedLessons = getTotalCompletedLessons ? getTotalCompletedLessons() : 0;

  useEffect(() => {
    if (!allModulesCompleted) {
      toast.error("Musisz ukończyć wszystkie moduły, aby otrzymać certyfikat");
      navigate("/moduly");
    }
  }, [allModulesCompleted, navigate]);

  const generateCertificateNumber = () => {
    const date = new Date();
    const hash = Math.random().toString(36).substring(2, 8).toUpperCase();
    return `AIEP-${date.getFullYear()}-${hash}`;
  };

  const getCurrentDate = () => {
    const date = new Date();
    return date.toLocaleDateString("pl-PL", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const handleDownload = async () => {
    if (!userName.trim()) {
      toast.error("Wprowadź swoje imię i nazwisko");
      return;
    }

    if (!certificateRef.current) return;

    setIsGenerating(true);

    try {
      const canvas = await html2canvas(certificateRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4",
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`Certyfikat_AI_Evolution_${userName.replace(/\s+/g, "_")}.pdf`);

      toast.success("Certyfikat został pobrany!");
    } catch (error) {
      console.error("Error generating PDF:", error);
      toast.error("Wystąpił błąd podczas generowania certyfikatu");
    } finally {
      setIsGenerating(false);
    }
  };

  if (!allModulesCompleted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-6">
          {/* Back button */}
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)} 
            className="mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Wróć
          </Button>

          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <CheckCircle2 className="w-4 h-4" />
                Wszystkie moduły ukończone!
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Twój{" "}
                <span className="text-gradient-accent">certyfikat</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Gratulacje! Ukończyłeś wszystkie {modules.length} modułów i {totalLessons} lekcji. 
                Wprowadź swoje dane, aby wygenerować certyfikat.
              </p>
            </div>

            {/* Form */}
            <div className="bg-card border border-border rounded-2xl p-6 mb-8">
              <div className="max-w-md mx-auto">
                <Label htmlFor="name" className="text-base font-semibold mb-2 block">
                  Imię i nazwisko
                </Label>
                <Input
                  id="name"
                  placeholder="Jan Kowalski"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="text-lg h-12 mb-4"
                />
                <Button 
                  onClick={handleDownload} 
                  disabled={isGenerating || !userName.trim()}
                  className="w-full h-12 text-lg"
                  variant="hero"
                >
                  {isGenerating ? (
                    "Generowanie..."
                  ) : (
                    <>
                      <Download className="w-5 h-5 mr-2" />
                      Pobierz certyfikat PDF
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* Certificate Preview */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-center">Podgląd certyfikatu</h3>
              <div className="overflow-auto">
                <CertificatePreview
                  ref={certificateRef}
                  userName={userName || "Twoje Imię"}
                  certificateNumber={generateCertificateNumber()}
                  completionDate={getCurrentDate()}
                  modulesCount={modules.length}
                  lessonsCount={totalLessons}
                />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-primary">{modules.length}</p>
                <p className="text-sm text-muted-foreground">Modułów</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-accent">{totalLessons}</p>
                <p className="text-sm text-muted-foreground">Lekcji</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-success">{completedLessons}</p>
                <p className="text-sm text-muted-foreground">Ukończonych</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-warning">100%</p>
                <p className="text-sm text-muted-foreground">Postęp</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CertificatePage;