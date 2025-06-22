
import { useState, useEffect } from 'react';

interface LoadingAnalysisProps {
  companyName: string;
  onAnalysisComplete: () => void;
}

const LoadingAnalysis = ({ companyName, onAnalysisComplete }: LoadingAnalysisProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const steps = [
    "Analisando seu perfil no Google Meu Negócio...",
    "Verificando a otimização do seu site...",
    "Buscando sua presença nas redes sociais...",
    "Compilando seu relatório..."
  ];

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(stepInterval);
          setTimeout(() => onAnalysisComplete(), 1000);
          return prev;
        }
        return prev + 1;
      });
    }, 3000);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 120);

    return () => {
      clearInterval(stepInterval);
      clearInterval(progressInterval);
    };
  }, [onAnalysisComplete, steps.length]);

  return (
    <div className="min-h-screen bg-ig-dark flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Logo */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-ig-gold mb-2">IG CRIATIVO</h1>
          <div className="w-16 h-1 bg-ig-gold mx-auto"></div>
        </div>

        {/* Loading Animation */}
        <div className="mb-8">
          <div className="relative w-32 h-32 mx-auto mb-8">
            {/* Outer Ring */}
            <div className="absolute inset-0 border-4 border-ig-gold/20 rounded-full"></div>
            
            {/* Animated Ring */}
            <div className="absolute inset-0 border-4 border-transparent border-t-ig-gold rounded-full animate-spin"></div>
            
            {/* Inner Dots */}
            <div className="absolute inset-4 flex items-center justify-center">
              <div className="w-4 h-4 bg-ig-cyan rounded-full animate-pulse-gold"></div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-ig-gray/20 h-2 mb-6">
            <div 
              className="progress-bar h-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Progress Text */}
          <p className="text-ig-gold font-semibold text-lg mb-2">{progress}%</p>
        </div>

        {/* Current Step */}
        <h2 className="text-xl md:text-2xl font-semibold text-ig-white mb-4">
          Analisando {companyName}
        </h2>
        
        <p className="text-ig-gray text-lg animate-fade-in" key={currentStep}>
          {steps[currentStep]}
        </p>

        {/* Bottom Animation */}
        <div className="mt-16 flex justify-center space-x-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-8 bg-ig-gold/40 loading-dots"
              style={{ 
                animationDelay: `${i * 0.2}s`,
                backgroundColor: i <= (currentStep + 1) ? '#D4AF37' : 'rgba(212, 175, 55, 0.2)' 
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingAnalysis;
