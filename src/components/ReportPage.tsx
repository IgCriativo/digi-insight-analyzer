
import ScoreCard from './ScoreCard';
import GoogleAnalysisCard from './GoogleAnalysisCard';
import WebsiteAnalysisCard from './WebsiteAnalysisCard';
import SocialMediaCard from './SocialMediaCard';
import FinalCTACard from './FinalCTACard';

interface ReportPageProps {
  companyName: string;
  city: string;
  leadData: {
    name: string;
    email: string;
    whatsapp: string;
  };
}

const ReportPage = ({ companyName, city, leadData }: ReportPageProps) => {
  // Calculate overall score based on random factors (simulated analysis)
  const baseScore = Math.floor(Math.random() * 30) + 45; // 45-75 base score
  const adjustments = Math.floor(Math.random() * 20) - 10; // -10 to +10
  const finalScore = Math.max(20, Math.min(95, baseScore + adjustments));

  return (
    <div className="min-h-screen bg-ig-dark py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-ig-white mb-2">
            Diagnóstico Digital para: <span className="text-ig-gold">{companyName}</span>
          </h1>
          <p className="text-ig-gray">
            Relatório gerado para {leadData.name} • {city}
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="space-y-8">
          {/* Overall Score */}
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <ScoreCard score={finalScore} companyName={companyName} />
            </div>
          </div>

          {/* Analysis Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <GoogleAnalysisCard companyName={companyName} city={city} />
            <WebsiteAnalysisCard companyName={companyName} city={city} />
          </div>

          {/* Social Media - Full Width */}
          <div className="max-w-4xl mx-auto">
            <SocialMediaCard companyName={companyName} city={city} />
          </div>

          {/* Final CTA */}
          <div className="max-w-4xl mx-auto mt-12">
            <FinalCTACard />
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-ig-gray/20">
          <p className="text-ig-gray text-sm">
            Relatório gerado pela <span className="text-ig-gold font-semibold">IG Criativo</span> • 
            Agência de Marketing Digital especializada em negócios locais
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
