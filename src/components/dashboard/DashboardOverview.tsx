
import { useState } from 'react';
import { TrendingUp, AlertCircle, CheckCircle, Calendar, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import AICreditsDisplay from '../AICreditsDisplay';
import { useAI } from '../../hooks/useAI';

const DashboardOverview = () => {
  const [weeklyActionCompleted, setWeeklyActionCompleted] = useState(false);
  const { credits } = useAI();

  // Simulando dados do usuário
  const currentScore = 78;
  const lastScore = 65;
  const scoreChange = currentScore - lastScore;

  const weeklyActions = [
    "Responda a todas as avaliações no Google, mesmo as antigas!",
    "Crie um post de 'Bastidores' no Instagram mostrando seu trabalho",
    "Adicione 5 fotos de alta qualidade ao seu Google Meu Negócio",
    "Atualize a descrição dos seus serviços no Google com palavras-chave locais"
  ];

  const currentWeeklyAction = weeklyActions[Math.floor(Math.random() * weeklyActions.length)];

  const alerts = [
    { type: 'warning', message: 'Você tem 3 novas avaliações no Google para responder' },
    { type: 'info', message: 'Seu último post no Instagram foi há 8 dias' },
    { type: 'success', message: 'Parabéns! Sua pontuação aumentou 13 pontos este mês' }
  ];

  const evolutionData = [
    { month: 'Set', score: 45 },
    { month: 'Out', score: 52 },
    { month: 'Nov', score: 65 },
    { month: 'Dez', score: 78 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-ig-white mb-2">Painel Principal</h1>
        <p className="text-ig-gray">Bem-vindo de volta! Veja como está sua presença digital.</p>
      </div>

      {/* Score and Evolution Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Current Score */}
        <div className="bg-ig-dark border-2 border-ig-gold p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-ig-white">Score Atual</h3>
            <div className={`flex items-center gap-2 ${scoreChange > 0 ? 'text-ig-cyan' : 'text-ig-red'}`}>
              <TrendingUp className="w-5 h-5" />
              <span className="font-semibold">{scoreChange > 0 ? '+' : ''}{scoreChange}</span>
            </div>
          </div>
          
          <div className="relative w-32 h-32 mx-auto mb-4">
            <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="#333"
                strokeWidth="12"
              />
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="#D4AF37"
                strokeWidth="12"
                strokeDasharray={`${(currentScore / 100) * 339.292} 339.292`}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-bold text-ig-gold">{currentScore}</span>
            </div>
          </div>
          
          <p className="text-center text-ig-gray">
            Sua presença digital está <span className="text-ig-gold font-semibold">{currentScore}%</span> otimizada
          </p>
        </div>

        {/* Evolution Chart */}
        <div className="bg-ig-dark border border-ig-gold/30 p-6">
          <h3 className="text-xl font-bold text-ig-white mb-4">Evolução dos Últimos Meses</h3>
          
          <div className="flex items-end justify-between h-32 mb-4">
            {evolutionData.map((data, index) => (
              <div key={data.month} className="flex flex-col items-center gap-2">
                <div 
                  className="bg-gradient-to-t from-ig-gold to-ig-cyan w-8 transition-all duration-500"
                  style={{ height: `${(data.score / 100) * 100}%` }}
                />
                <span className="text-xs text-ig-gray">{data.month}</span>
              </div>
            ))}
          </div>
          
          <p className="text-sm text-ig-gray text-center">
            Tendência: <span className="text-ig-cyan font-semibold">Em crescimento 📈</span>
          </p>
        </div>

        {/* AI Credits */}
        <AICreditsDisplay credits={credits} />
      </div>

      {/* Weekly Action */}
      <div className="bg-gradient-to-r from-ig-gold/20 to-ig-cyan/20 border-2 border-ig-gold p-6">
        <div className="flex items-center gap-3 mb-4">
          <Calendar className="w-8 h-8 text-ig-gold" />
          <h3 className="text-2xl font-bold text-ig-white">🚀 Sua Ação da Semana</h3>
        </div>
        
        <div className="bg-ig-dark/50 p-4 border border-ig-gold/30 mb-4">
          <p className="text-ig-white text-lg mb-3">
            Foque nesta única tarefa para gerar um resultado rápido:
          </p>
          <p className="text-ig-gold font-semibold text-lg mb-4">
            {currentWeeklyAction}
          </p>
          
          <button
            onClick={() => setWeeklyActionCompleted(!weeklyActionCompleted)}
            className={`flex items-center gap-2 px-4 py-2 font-semibold transition-colors ${
              weeklyActionCompleted
                ? 'bg-ig-cyan text-ig-dark'
                : 'bg-ig-gold text-ig-dark hover:brightness-110'
            }`}
          >
            <CheckCircle className="w-5 h-5" />
            {weeklyActionCompleted ? 'Tarefa Concluída!' : 'Marcar como Concluído'}
          </button>
        </div>
      </div>

      {/* Alerts and Shortcuts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Feed de Alertas */}
        <div className="bg-ig-dark border border-ig-gold/30 p-6">
          <h3 className="text-xl font-bold text-ig-white mb-4 flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-ig-gold" />
            Alertas Importantes
          </h3>
          
          <div className="space-y-3">
            {alerts.map((alert, index) => (
              <div key={index} className={`p-3 border-l-4 ${
                alert.type === 'warning' ? 'border-ig-gold bg-ig-gold/10' :
                alert.type === 'info' ? 'border-ig-cyan bg-ig-cyan/10' :
                'border-green-500 bg-green-500/10'
              }`}>
                <p className="text-sm text-ig-white">{alert.message}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Atalhos */}
        <div className="bg-ig-dark border border-ig-gold/30 p-6">
          <h3 className="text-xl font-bold text-ig-white mb-4 flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-ig-gold" />
            Ações Rápidas com IA
          </h3>
          
          <div className="space-y-3">
            <Link
              to="/reports"
              className="block w-full p-3 bg-ig-gold/20 border border-ig-gold/50 text-ig-white hover:bg-ig-gold/30 transition-colors"
            >
              <span className="font-semibold">📊 Gerar Novo Relatório</span>
              <p className="text-sm text-ig-gray mt-1">Analise novamente sua presença digital</p>
            </Link>
            
            <Link
              to="/social-planner"
              className="block w-full p-3 bg-ig-cyan/20 border border-ig-cyan/50 text-ig-white hover:bg-ig-cyan/30 transition-colors"
            >
              <span className="font-semibold">✨ Criar Conteúdo com IA</span>
              <p className="text-sm text-ig-gray mt-1">Gere posts inteligentes para redes sociais</p>
            </Link>
            
            <Link
              to="/reputation"
              className="block w-full p-3 bg-ig-gold/20 border border-ig-gold/50 text-ig-white hover:bg-ig-gold/30 transition-colors"
            >
              <span className="font-semibold">🤖 Responder Avaliações com IA</span>
              <p className="text-sm text-ig-gray mt-1">Respostas inteligentes e personalizadas</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
