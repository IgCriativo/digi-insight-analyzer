
import { CheckSquare, Square, Award } from 'lucide-react';
import { useState } from 'react';

const OptimizationChecklist = () => {
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({});

  const checklistItems = [
    "Padronizar nome, endereço e telefone em todas as plataformas (NAP)",
    "Adicionar 5-10 fotos de alta qualidade ao Google Meu Negócio",
    "Cadastrar a empresa nos principais diretórios locais",
    "Otimizar a descrição dos serviços com palavras-chave locais",
    "Adicionar seção de 'Perguntas e Respostas' no Google",
    "Verificar horários de funcionamento em todas as plataformas",
    "Criar posts regulares no Google Meu Negócio (1x por semana)",
    "Solicitar avaliações para clientes satisfeitos"
  ];

  const toggleItem = (index: number) => {
    setCheckedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const progressPercentage = (completedCount / checklistItems.length) * 100;

  return (
    <div className="ig-card">
      <div className="flex items-center gap-3 mb-6">
        <Award className="w-6 h-6 text-ig-gold" />
        <h3 className="text-xl font-bold text-ig-white">✅ Sua Jornada para o Sucesso Digital</h3>
      </div>

      <p className="text-ig-gray mb-6">
        Complete estas tarefas fundamentais para fortalecer sua base online.
      </p>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-ig-gray mb-2">
          <span>Progresso: {completedCount}/{checklistItems.length}</span>
          <span>{Math.round(progressPercentage)}%</span>
        </div>
        <div className="w-full bg-ig-gray/20 h-3">
          <div 
            className="bg-gradient-to-r from-ig-gold to-ig-cyan h-full transition-all duration-500"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Checklist Items */}
      <div className="space-y-3">
        {checklistItems.map((item, index) => (
          <div 
            key={index}
            onClick={() => toggleItem(index)}
            className="flex items-start gap-3 p-3 bg-ig-dark/50 border border-ig-gray/20 hover:border-ig-gold/50 cursor-pointer transition-colors"
          >
            {checkedItems[index] ? (
              <CheckSquare className="w-5 h-5 text-ig-gold mt-1 flex-shrink-0" />
            ) : (
              <Square className="w-5 h-5 text-ig-gray mt-1 flex-shrink-0" />
            )}
            <span className={`text-sm ${checkedItems[index] ? 'text-ig-gold line-through' : 'text-ig-white'}`}>
              {item}
            </span>
          </div>
        ))}
      </div>

      {/* Motivation Message */}
      {completedCount > 0 && (
        <div className="mt-6 p-4 bg-ig-gold/10 border border-ig-gold/30">
          <p className="text-ig-gold text-sm font-semibold">
            🎉 Parabéns! Você já completou {completedCount} tarefa{completedCount > 1 ? 's' : ''}. 
            Continue assim e sua presença digital vai se fortalecer!
          </p>
        </div>
      )}
    </div>
  );
};

export default OptimizationChecklist;
