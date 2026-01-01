import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProgressProvider } from "@/context/ProgressContext";
import Index from "./pages/Index";
import ModulePage from "./pages/ModulePage";
import LessonPage from "./pages/LessonPage";
import QuizPage from "./pages/QuizPage";
import AllModulesPage from "./pages/AllModulesPage";
import ProfilePage from "./pages/ProfilePage";
import GlossaryPage from "./pages/GlossaryPage";
import ResourcesPage from "./pages/ResourcesPage";
import CertificatePage from "./pages/CertificatePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ProgressProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/moduly" element={<AllModulesPage />} />
            <Route path="/modul/:moduleSlug" element={<ModulePage />} />
            <Route path="/modul/:moduleSlug/lekcja/:lessonId" element={<LessonPage />} />
            <Route path="/modul/:moduleSlug/quiz" element={<QuizPage />} />
            <Route path="/profil" element={<ProfilePage />} />
            <Route path="/slownik" element={<GlossaryPage />} />
            <Route path="/zasoby" element={<ResourcesPage />} />
            <Route path="/certyfikat" element={<CertificatePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ProgressProvider>
  </QueryClientProvider>
);

export default App;
