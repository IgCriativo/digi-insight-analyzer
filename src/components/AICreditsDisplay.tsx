
import { Sparkles, Zap } from 'lucide-react';

interface AICreditsDisplayProps {
  credits: number;
  plan?: 'free' | 'pro';
}

const AICreditsDisplay = ({ credits, plan = 'free' }: AICreditsDisplayProps) => {
  const maxCredits = plan === 'free' ? 15 : 200;
  const percentage = (credits / maxCredits) * 100;

  return (
    <div className="bg-ig-dark border border-ig-gold/30 p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-ig-gold" />
          <h3 className="font-semibold text-ig-white">Créditos de IA</h3>
        </div>
        <span className={`text-sm px-2 py-1 ${
          plan === 'pro' ? 'bg-ig-gold text-ig-dark' : 'bg-ig-gray/20 text-ig-gray'
        }`}>
          {plan === 'pro' ? 'PRO' : 'GRATUITO'}
        </span>
      </div>

      <div className="mb-3">
        <div className="flex items-center justify-between mb-1">
          <span className="text-ig-white font-semibold">{credits}</span>
          <span className="text-ig-gray text-sm">de {maxCredits}</span>
        </div>
        <div className="w-full bg-ig-gray/20 h-2">
          <div 
            className={`h-2 transition-all duration-300 ${
              percentage > 20 ? 'bg-ig-gold' : 'bg-ig-red'
            }`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      <div className="text-xs text-ig-gray mb-3">
        <p>• Resposta para avaliação: 1 crédito</p>
        <p>• Post para rede social: 2 créditos</p>
        <p>• Plano de conteúdo semanal: 10 créditos</p>
      </div>

      {plan === 'free' && credits < 5 && (
        <button className="w-full bg-ig-gold text-ig-dark py-2 px-4 font-semibold hover:brightness-110 transition-colors flex items-center justify-center gap-2">
          <Zap className="w-4 h-4" />
          Upgrade para PRO
        </button>
      )}
    </div>
  );
};

export default AICreditsDisplay;
