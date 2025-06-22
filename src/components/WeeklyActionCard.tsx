
import { Target, Calendar } from 'lucide-react';

const WeeklyActionCard = () => {
  const weeklyActions = [
    "Responda a todas as avaliações no Google, mesmo as antigas!",
    "Crie um post de 'Bastidores' no Instagram mostrando seu trabalho",
    "Adicione 5 fotos de alta qualidade ao seu Google Meu Negócio",
    "Atualize a descrição dos seus serviços no Google com palavras-chave locais",
    "Publique um depoimento de cliente satisfeito nas redes sociais",
    "Verifique se seu nome, endereço e telefone estão iguais em todas as plataformas"
  ];

  const randomAction = weeklyActions[Math.floor(Math.random() * weeklyActions.length)];

  return (
    <div className="bg-gradient-to-r from-ig-gold/20 to-ig-cyan/20 border-2 border-ig-gold p-6 mb-8">
      <div className="flex items-center gap-3 mb-4">
        <Target className="w-8 h-8 text-ig-gold" />
        <h3 className="text-2xl font-bold text-ig-white">🚀 Sua Ação da Semana</h3>
      </div>
      
      <div className="bg-ig-dark/50 p-4 border border-ig-gold/30">
        <p className="text-ig-white text-lg mb-3">
          Foque nesta única tarefa para gerar um resultado rápido:
        </p>
        <div className="flex items-start gap-3">
          <Calendar className="w-5 h-5 text-ig-cyan mt-1 flex-shrink-0" />
          <p className="text-ig-gold font-semibold text-lg">
            {randomAction}
          </p>
        </div>
      </div>

      <div className="mt-4 text-center">
        <p className="text-ig-gray text-sm">
          💡 Uma tarefa simples por semana gera resultados consistentes
        </p>
      </div>
    </div>
  );
};

export default WeeklyActionCard;
