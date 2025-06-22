
interface ScoreCardProps {
  score: number;
  companyName: string;
}

const ScoreCard = ({ score, companyName }: ScoreCardProps) => {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-400';
    if (score >= 60) return 'text-ig-gold';
    if (score >= 40) return 'text-orange-400';
    return 'text-ig-red';
  };

  const getScoreMessage = (score: number) => {
    if (score >= 80) return 'Excelente! Sua presença digital está muito bem otimizada.';
    if (score >= 60) return 'Boa! Existem algumas oportunidades de melhoria.';
    if (score >= 40) return 'Regular. Há várias áreas que precisam de atenção.';
    return 'Crítico! Sua presença digital precisa de atenção urgente.';
  };

  // Simple circular progress calculation
  const circumference = 2 * Math.PI * 45;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="ig-card text-center">
      <h3 className="text-xl font-bold text-ig-white mb-6">
        Pontuação Geral - {companyName}
      </h3>

      {/* Circular Progress */}
      <div className="relative w-32 h-32 mx-auto mb-6">
        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#A1A1A1"
            strokeWidth="8"
            fill="transparent"
            opacity="0.3"
          />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#D4AF37"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        
        {/* Score text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-3xl font-bold ${getScoreColor(score)}`}>
            {score}%
          </span>
        </div>
      </div>

      <p className="text-ig-gray text-sm leading-relaxed">
        {getScoreMessage(score)}
      </p>
    </div>
  );
};

export default ScoreCard;
