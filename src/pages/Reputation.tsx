
import DashboardLayout from '../components/DashboardLayout';
import ReviewResponseGenerator from '../components/ReviewResponseGenerator';
import AICreditsDisplay from '../components/AICreditsDisplay';
import { useAI } from '../hooks/useAI';

const Reputation = () => {
  const { credits } = useAI();

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-ig-white mb-2">Reputação Online</h1>
          <p className="text-ig-gray">Gerencie suas avaliações com respostas inteligentes geradas por IA.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <ReviewResponseGenerator />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <AICreditsDisplay credits={credits} />
            
            <div className="bg-ig-dark border border-ig-gold/30 p-4">
              <h4 className="font-semibold text-ig-white mb-3">📊 Resumo de Avaliações</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-ig-gray">Média Geral:</span>
                  <span className="text-ig-gold font-semibold">4.2 ⭐</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ig-gray">Total:</span>
                  <span className="text-ig-white">23 avaliações</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ig-gray">Pendentes:</span>
                  <span className="text-ig-red">3 sem resposta</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Reputation;
