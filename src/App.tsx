import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProgressProvider } from "@/context/ProgressContext";

const Index = lazy(() => import("./pages/Index"));
const ModulePage = lazy(() => import("./pages/ModulePage"));
const LessonPage = lazy(() => import("./pages/LessonPage"));
const QuizPage = lazy(() => import("./pages/QuizPage"));
const AllModulesPage = lazy(() => import("./pages/AllModulesPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const GlossaryPage = lazy(() => import("./pages/GlossaryPage"));
const ResourcesPage = lazy(() => import("./pages/ResourcesPage"));
const CertificatePage = lazy(() => import("./pages/CertificatePage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ProgressProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense
            fallback={
              <div className="min-h-screen flex items-center justify-center bg-background text-muted-foreground">
                Ładowanie...
              </div>
            }
          >
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
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </ProgressProvider>
  </QueryClientProvider>
);

export default App;
