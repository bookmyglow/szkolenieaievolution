import { forwardRef } from "react";
import { Award, Star } from "lucide-react";

interface CertificatePreviewProps {
  userName: string;
  certificateNumber: string;
  completionDate: string;
  modulesCount: number;
  lessonsCount: number;
}

const CertificatePreview = forwardRef<HTMLDivElement, CertificatePreviewProps>(
  ({ userName, certificateNumber, completionDate, modulesCount, lessonsCount }, ref) => {
    return (
      <div
        ref={ref}
        className="w-[800px] h-[566px] mx-auto bg-gradient-to-br from-amber-50 to-orange-50 border-4 border-amber-300 rounded-lg p-8 relative overflow-hidden"
        style={{
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {/* Decorative corners */}
        <div className="absolute top-4 left-4 w-16 h-16 border-t-4 border-l-4 border-amber-400 rounded-tl-lg" />
        <div className="absolute top-4 right-4 w-16 h-16 border-t-4 border-r-4 border-amber-400 rounded-tr-lg" />
        <div className="absolute bottom-4 left-4 w-16 h-16 border-b-4 border-l-4 border-amber-400 rounded-bl-lg" />
        <div className="absolute bottom-4 right-4 w-16 h-16 border-b-4 border-r-4 border-amber-400 rounded-br-lg" />

        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="#F59E0B" />
            </pattern>
            <rect fill="url(#pattern)" width="100%" height="100%" />
          </svg>
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-between py-4">
          {/* Header */}
          <div className="text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-4 shadow-lg">
              <Award className="w-10 h-10 text-white" />
            </div>
            <p className="text-sm uppercase tracking-[0.3em] text-amber-600 font-semibold">
              Certyfikat ukończenia
            </p>
            <h1 className="text-3xl font-bold text-gray-800 mt-2">
              AI Evolution Polska
            </h1>
          </div>

          {/* Main content */}
          <div className="text-center py-6 border-y-2 border-amber-200 w-full max-w-lg">
            <p className="text-gray-600 mb-2">Niniejszym zaświadcza się, że</p>
            <p className="text-4xl font-bold text-gray-800 mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {userName}
            </p>
            <p className="text-gray-600">
              pomyślnie ukończył/a szkolenie z zakresu sztucznej inteligencji
            </p>
            <p className="text-sm text-amber-700 mt-4 font-medium">
              obejmujące {modulesCount} modułów i {lessonsCount} lekcji
            </p>
          </div>

          {/* Stars */}
          <div className="flex items-center justify-center gap-1 my-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-6 h-6 text-amber-400 fill-amber-400" />
            ))}
          </div>

          {/* Footer */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
              <div>
                <p className="font-semibold">Nr certyfikatu</p>
                <p className="text-amber-700">{certificateNumber}</p>
              </div>
              <div className="w-px h-8 bg-amber-300" />
              <div>
                <p className="font-semibold">Data wydania</p>
                <p className="text-amber-700">{completionDate}</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              www.aievolution.pl
            </p>
          </div>
        </div>
      </div>
    );
  }
);

CertificatePreview.displayName = "CertificatePreview";

export default CertificatePreview;