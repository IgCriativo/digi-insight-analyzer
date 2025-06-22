
import { Check, X, MapPin, Star, Calendar } from 'lucide-react';

interface GoogleAnalysisCardProps {
  companyName: string;
  city: string;
}

const GoogleAnalysisCard = ({ companyName, city }: GoogleAnalysisCardProps) => {
  // Simulate analysis results
  const completeness = Math.floor(Math.random() * 40) + 60; // 60-100%
  const rating = (Math.random() * 2 + 3).toFixed(1); // 3.0-5.0
  const reviewCount = Math.floor(Math.random() * 50) + 5;
  const hasRecentPost = Math.random() > 0.5;
  const lastPostDays = Math.floor(Math.random() * 30) + 1;

  const CheckIcon = ({ condition }: { condition: boolean }) => (
    condition ? 
      <Check className="w-5 h-5 text-green-400" /> : 
      <X className="w-5 h-5 text-ig-red" />
  );

  return (
    <div className="ig-card">
      <div className="flex items-center gap-3 mb-6">
        <MapPin className="w-6 h-6 text-ig-gold" />
        <h3 className="text-xl font-bold text-ig-white">Sua Vitrine no Google</h3>
      </div>

      <div className="space-y-4">
        {/* Profile Completeness */}
        <div className="flex items-start gap-3 p-4 bg-ig-dark/50 border border-ig-gray/20">
          <CheckIcon condition={completeness >= 80} />
          <div className="flex-1">
            <h4 className="font-semibold text-ig-white mb-1">Perfil Completo</h4>
            <p className="text-ig-gray text-sm mb-2">
              Seu perfil está {completeness}% preenchido
            </p>
            <div className="w-full bg-ig-gray/20 h-2">
              <div 
                className="bg-ig-gold h-full transition-all duration-1000"
                style={{ width: `${completeness}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Reputation */}
        <div className="flex items-start gap-3 p-4 bg-ig-dark/50 border border-ig-gray/20">
          <CheckIcon condition={parseFloat(rating) >= 4.0} />
          <div className="flex-1">
            <h4 className="font-semibold text-ig-white mb-1">Reputação Online</h4>
            <div className="flex items-center gap-2 text-sm text-ig-gray">
              <Star className="w-4 h-4 text-ig-gold fill-current" />
              <span>{rating} ({reviewCount} avaliações)</span>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="flex items-start gap-3 p-4 bg-ig-dark/50 border border-ig-gray/20">
          <CheckIcon condition={hasRecentPost} />
          <div className="flex-1">
            <h4 className="font-semibold text-ig-white mb-1">Atividade Recente</h4>
            <div className="flex items-center gap-2 text-sm text-ig-gray">
              <Calendar className="w-4 h-4" />
              <span>
                {hasRecentPost 
                  ? `Último post há ${lastPostDays} dias`
                  : 'Nenhuma atividade recente'
                }
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Response Generator Tool */}
      <div className="mt-6 p-4 bg-ig-gold/10 border border-ig-gold/30">
        <h4 className="font-semibold text-ig-white mb-3">🎁 Ferramenta Prática</h4>
        <button className="ig-button text-sm py-2 px-4">
          Sugerir Respostas para Avaliações
        </button>
      </div>
    </div>
  );
};

export default GoogleAnalysisCard;
