
import DashboardLayout from '../components/DashboardLayout';
import SEOOptimizer from '../components/SEOOptimizer';
import AICreditsDisplay from '../components/AICreditsDisplay';
import { useAI } from '../hooks/useAI';

const LocalSEO = () => {
  const { credits } = useAI();

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-ig-white mb-2">SEO Local</h1>
          <p className="text-ig-gray">Otimize sua presença nas buscas locais com sugestões inteligentes de IA.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <SEOOptimizer />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <AICreditsDisplay credits={credits} />
            
            <div className="bg-ig-dark border border-ig-gold/30 p-4">
              <h4 className="font-semibold text-ig-white mb-3">🎯 Ranking Local</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-ig-gray">Posição Média:</span>
                  <span className="text-ig-gold font-semibold">#7</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ig-gray">Melhor Posição:</span>
                  <span className="text-ig-cyan">#3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ig-gray">Palavras Monitoradas:</span>
                  <span className="text-ig-white">5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default LocalSEO;
