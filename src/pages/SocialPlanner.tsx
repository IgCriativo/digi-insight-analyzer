
import DashboardLayout from '../components/DashboardLayout';
import SocialContentGenerator from '../components/SocialContentGenerator';
import AICreditsDisplay from '../components/AICreditsDisplay';
import { useAI } from '../hooks/useAI';

const SocialPlanner = () => {
  const { credits } = useAI();

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-ig-white mb-2">Planejador Social</h1>
          <p className="text-ig-gray">Crie conteúdo inteligente para suas redes sociais com IA.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <SocialContentGenerator />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <AICreditsDisplay credits={credits} />
            
            <div className="bg-ig-dark border border-ig-gold/30 p-4">
              <h4 className="font-semibold text-ig-white mb-3">📅 Próximos Eventos</h4>
              <div className="space-y-2 text-sm">
                <div className="text-ig-gray">
                  <span className="text-ig-gold">20/Jan:</span> Feriado São Sebastião
                </div>
                <div className="text-ig-gray">
                  <span className="text-ig-gold">Feb:</span> Carnaval
                </div>
                <div className="text-ig-gray">
                  <span className="text-ig-gold">Mar:</span> Início Outono
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SocialPlanner;
