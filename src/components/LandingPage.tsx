
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface LandingPageProps {
  onStartAnalysis: (companyName: string, city: string) => void;
}

const LandingPage = ({ onStartAnalysis }: LandingPageProps) => {
  const [companyName, setCompanyName] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (companyName.trim() && city.trim()) {
      onStartAnalysis(companyName.trim(), city.trim());
    }
  };

  return (
    <div className="min-h-screen bg-ig-dark flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center animate-fade-in">
        {/* Logo */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-ig-gold mb-2">
            IG CRIATIVO
          </h1>
          <div className="w-24 h-1 bg-ig-gold mx-auto"></div>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-ig-white mb-6 leading-tight">
          Descubra o potencial oculto da sua{' '}
          <span className="text-ig-gold">presença digital</span>
        </h1>

        {/* Subtitle */}
        <h2 className="text-lg md:text-xl text-ig-gray mb-12 leading-relaxed">
          Receba uma análise instantânea e gratuita do seu negócio no Google, 
          Redes Sociais e Website.
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Digite o nome da sua empresa"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="ig-input w-full text-lg"
              required
            />
            
            <input
              type="text"
              placeholder="Digite sua cidade (ex: São Sebastião)"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="ig-input w-full text-lg"
              required
            />
          </div>

          <button
            type="submit"
            className="ig-button w-full text-lg flex items-center justify-center gap-3 py-4"
          >
            GERAR DIAGNÓSTICO GRATUITO
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        {/* Trust Text */}
        <p className="text-ig-gray text-sm mt-8 leading-relaxed">
          Ferramenta desenvolvida pela <span className="text-ig-gold font-semibold">IG Criativo</span> para 
          negócios em Boiçucanga, Cambury, Maresias e toda a região de São Sebastião.
        </p>

        {/* Visual Elements */}
        <div className="mt-16 flex justify-center space-x-4">
          <div className="w-3 h-3 bg-ig-gold rounded-full animate-pulse-gold"></div>
          <div className="w-3 h-3 bg-ig-cyan rounded-full animate-pulse-gold" style={{ animationDelay: '0.5s' }}></div>
          <div className="w-3 h-3 bg-ig-gold rounded-full animate-pulse-gold" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
