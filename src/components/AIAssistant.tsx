
import { useState } from 'react';
import { MessageCircle, Send, Sparkles, X } from 'lucide-react';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'ai',
      content: 'Olá! Sou seu Especialista Digital AI. Como posso ajudá-lo hoje com seu marketing digital?'
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const commonQuestions = [
    "Qual o melhor horário para postar no Instagram?",
    "Como responder avaliações negativas?",
    "Quantas hashtags usar no Instagram?",
    "Como melhorar meu SEO local?"
  ];

  const aiResponses: { [key: string]: string } = {
    "horário": "📅 Os melhores horários para postar no Instagram são entre 11h-13h e 19h-21h. Para negócios locais, recomendo postar quando seus clientes estão mais ativos, geralmente no fim da tarde e início da noite.",
    "avaliações": "🤝 Para avaliações negativas: 1) Responda rapidamente, 2) Seja empático e profissional, 3) Peça desculpas se necessário, 4) Ofereça uma solução, 5) Convide para conversar em privado se for complexo.",
    "hashtags": "#️⃣ Use entre 3-7 hashtags relevantes. Misture hashtags locais (#saosebastiao) com hashtags do seu nicho. Evite hashtags muito genéricas e sempre teste quais geram mais engajamento.",
    "seo": "🔍 Para melhorar SEO local: 1) Complete 100% seu Google Meu Negócio, 2) Use palavras-chave locais no site, 3) Colete avaliações positivas, 4) Mantenha informações consistentes em todas as plataformas."
  };

  const getAIResponse = (userInput: string) => {
    const lowerInput = userInput.toLowerCase();
    
    for (const [key, response] of Object.entries(aiResponses)) {
      if (lowerInput.includes(key)) {
        return response;
      }
    }
    
    return "🤖 Interessante pergunta! Baseado na sua questão, recomendo que você explore nossa Central de Capacitação, onde temos artigos detalhados sobre este tópico. Também posso ajudar com perguntas sobre horários de postagem, gestão de avaliações, hashtags e SEO local.";
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { type: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    // Simular delay da IA
    setTimeout(() => {
      const aiResponse = { type: 'ai', content: getAIResponse(input) };
      setMessages(prev => [...prev, aiResponse]);
      setLoading(false);
    }, 1500);
  };

  const handleQuickQuestion = (question: string) => {
    setInput(question);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-ig-gold text-ig-dark p-4 rounded-full shadow-lg hover:scale-110 transition-transform z-50"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 h-96 bg-ig-dark border-2 border-ig-gold shadow-xl z-50 flex flex-col">
      {/* Header */}
      <div className="bg-ig-gold text-ig-dark p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5" />
          <h3 className="font-bold">Especialista Digital AI</h3>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="hover:bg-ig-dark/20 p-1 rounded"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg text-sm ${
                message.type === 'user'
                  ? 'bg-ig-gold text-ig-dark'
                  : 'bg-ig-gray/20 text-ig-white'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
        
        {loading && (
          <div className="flex justify-start">
            <div className="bg-ig-gray/20 text-ig-white p-3 rounded-lg text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-ig-gold rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-ig-gold rounded-full animate-pulse delay-100"></div>
                <div className="w-2 h-2 bg-ig-gold rounded-full animate-pulse delay-200"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quick Questions */}
      {messages.length === 1 && (
        <div className="p-3 border-t border-ig-gold/30">
          <p className="text-xs text-ig-gray mb-2">Perguntas rápidas:</p>
          <div className="space-y-1">
            {commonQuestions.slice(0, 2).map((question, index) => (
              <button
                key={index}
                onClick={() => handleQuickQuestion(question)}
                className="w-full text-left text-xs text-ig-cyan hover:text-ig-gold transition-colors"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="p-3 border-t border-ig-gold/30">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Digite sua pergunta..."
            className="flex-1 bg-ig-gray/20 text-ig-white px-3 py-2 text-sm border border-ig-gold/30 focus:border-ig-gold outline-none"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || loading}
            className="bg-ig-gold text-ig-dark px-3 py-2 hover:brightness-110 transition-colors disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
