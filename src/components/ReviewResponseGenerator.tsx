
import { useState } from 'react';
import { MessageSquare, Copy, Star, RefreshCw } from 'lucide-react';
import { useAI } from '../hooks/useAI';

const ReviewResponseGenerator = () => {
  const [selectedReview, setSelectedReview] = useState<any>(null);
  const [generatedResponse, setGeneratedResponse] = useState('');
  const { loading, credits, generateReviewResponse } = useAI();

  // Avaliações simuladas
  const sampleReviews = [
    {
      id: 1,
      author: "Maria Silva",
      rating: 5,
      text: "Atendimento excepcional! Superou todas as minhas expectativas. Recomendo muito!",
      date: "2 dias atrás",
      responded: false
    },
    {
      id: 2,
      author: "João Santos",
      rating: 2,
      text: "Demorou muito para ser atendido e o resultado não foi o que esperava. Precisa melhorar.",
      date: "1 semana atrás",
      responded: false
    },
    {
      id: 3,
      author: "Ana Costa",
      rating: 4,
      text: "Bom atendimento, profissionais competentes. Apenas o prazo poderia ter sido menor.",
      date: "3 dias atrás",
      responded: false
    }
  ];

  const handleGenerateResponse = async (review: any) => {
    if (credits < 1) return;
    
    setSelectedReview(review);
    const response = await generateReviewResponse(review.text, review.rating);
    setGeneratedResponse(response);
  };

  const copyResponse = () => {
    navigator.clipboard.writeText(generatedResponse);
  };

  const getRatingColor = (rating: number) => {
    if (rating >= 4) return 'text-ig-cyan';
    if (rating >= 3) return 'text-ig-gold';
    return 'text-ig-red';
  };

  return (
    <div className="space-y-6">
      <div className="bg-ig-dark border border-ig-gold/30 p-6">
        <div className="flex items-center gap-3 mb-6">
          <MessageSquare className="w-6 h-6 text-ig-gold" />
          <h3 className="text-xl font-bold text-ig-white">Gerador de Respostas Inteligentes</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Reviews List */}
          <div>
            <h4 className="font-semibold text-ig-white mb-4">Avaliações Pendentes</h4>
            <div className="space-y-4">
              {sampleReviews.map((review) => (
                <div key={review.id} className="bg-ig-gray/20 p-4 border border-ig-gray/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-ig-white">{review.author}</span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating ? 'fill-current text-ig-gold' : 'text-ig-gray'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-ig-gray text-sm mb-3">{review.text}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-ig-gray">{review.date}</span>
                    <button
                      onClick={() => handleGenerateResponse(review)}
                      disabled={credits < 1 || loading}
                      className="bg-ig-gold text-ig-dark px-3 py-1 text-sm font-semibold hover:brightness-110 transition-colors disabled:opacity-50 flex items-center gap-1"
                    >
                      {loading && selectedReview?.id === review.id ? (
                        <RefreshCw className="w-3 h-3 animate-spin" />
                      ) : (
                        <MessageSquare className="w-3 h-3" />
                      )}
                      Gerar Resposta (1 crédito)
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {credits < 1 && (
              <p className="text-ig-red text-sm mt-4">Créditos insuficientes para gerar respostas</p>
            )}
          </div>

          {/* Generated Response */}
          <div>
            <h4 className="font-semibold text-ig-white mb-4">Resposta Gerada com IA</h4>
            
            {selectedReview && generatedResponse ? (
              <div className="bg-ig-cyan/10 border border-ig-cyan/30 p-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="text-ig-cyan font-semibold">Resposta para {selectedReview.author}</span>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < selectedReview.rating ? 'fill-current text-ig-gold' : 'text-ig-gray'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={copyResponse}
                    className="bg-ig-gold text-ig-dark px-3 py-1 text-sm font-semibold hover:brightness-110 transition-colors flex items-center gap-1"
                  >
                    <Copy className="w-3 h-3" />
                    Copiar
                  </button>
                </div>
                
                <div className="bg-ig-dark/50 p-3 border border-ig-gray/30">
                  <p className="text-ig-white text-sm leading-relaxed">{generatedResponse}</p>
                </div>
                
                <p className="text-xs text-ig-gray mt-2">
                  💡 Dica: Sempre revise a resposta antes de publicar e personalize se necessário.
                </p>
              </div>
            ) : (
              <div className="bg-ig-gray/20 border border-ig-gray/30 p-8 text-center">
                <MessageSquare className="w-12 h-12 text-ig-gray mx-auto mb-3" />
                <p className="text-ig-gray">Selecione uma avaliação para gerar uma resposta personalizada com IA</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewResponseGenerator;
