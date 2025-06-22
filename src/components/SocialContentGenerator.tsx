
import { useState } from 'react';
import { Wand2, Copy, RefreshCw } from 'lucide-react';
import { useAI } from '../hooks/useAI';

const SocialContentGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedContent, setGeneratedContent] = useState<any>(null);
  const { loading, credits, generateSocialPost, generateWeeklyPlan } = useAI();

  const quickPrompts = [
    "Post sobre promoção especial",
    "Post de bastidores do trabalho",
    "Post com depoimento de cliente",
    "Post motivacional segunda-feira",
    "Post dica educativa"
  ];

  const handleGenerate = async () => {
    if (!prompt.trim() || credits < 2) return;
    
    const content = await generateSocialPost(prompt);
    setGeneratedContent(content);
  };

  const handleGenerateWeeklyPlan = async () => {
    if (credits < 10) return;
    
    const plan = await generateWeeklyPlan("negócio local");
    setGeneratedContent({ type: 'weekly', plan });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="space-y-6">
      <div className="bg-ig-dark border border-ig-gold/30 p-6">
        <div className="flex items-center gap-3 mb-4">
          <Wand2 className="w-6 h-6 text-ig-gold" />
          <h3 className="text-xl font-bold text-ig-white">Gerador de Conteúdo com IA</h3>
        </div>

        {/* Quick Prompts */}
        <div className="mb-4">
          <p className="text-sm text-ig-gray mb-2">Sugestões rápidas:</p>
          <div className="grid grid-cols-2 gap-2">
            {quickPrompts.map((quickPrompt, index) => (
              <button
                key={index}
                onClick={() => setPrompt(quickPrompt)}
                className="text-left text-xs bg-ig-gold/10 text-ig-gold px-3 py-2 hover:bg-ig-gold/20 transition-colors"
              >
                {quickPrompt}
              </button>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="mb-4">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Descreva o tipo de post que você quer criar..."
            className="w-full bg-ig-gray/20 text-ig-white p-3 border border-ig-gold/30 focus:border-ig-gold outline-none resize-none"
            rows={3}
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleGenerate}
            disabled={!prompt.trim() || credits < 2 || loading}
            className="bg-ig-gold text-ig-dark px-4 py-2 font-semibold hover:brightness-110 transition-colors disabled:opacity-50 flex items-center gap-2"
          >
            {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Wand2 className="w-4 h-4" />}
            Gerar Post (2 créditos)
          </button>
          
          <button
            onClick={handleGenerateWeeklyPlan}
            disabled={credits < 10 || loading}
            className="bg-ig-cyan text-ig-dark px-4 py-2 font-semibold hover:brightness-110 transition-colors disabled:opacity-50"
          >
            Plano Semanal (10 créditos)
          </button>
        </div>

        {credits < 2 && (
          <p className="text-ig-red text-sm mt-2">Créditos insuficientes para gerar conteúdo</p>
        )}
      </div>

      {/* Generated Content */}
      {generatedContent && (
        <div className="bg-ig-dark border border-ig-cyan/30 p-6">
          <h4 className="text-lg font-bold text-ig-white mb-4">Conteúdo Gerado com IA</h4>
          
          {generatedContent.type === 'weekly' ? (
            <div className="space-y-4">
              {generatedContent.plan.map((post: any, index: number) => (
                <div key={index} className="bg-ig-gray/20 p-4 border border-ig-gray/30">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-semibold text-ig-cyan">{post.day} - {post.type}</h5>
                    <button
                      onClick={() => copyToClipboard(`${post.content}\n\n${post.hashtags}`)}
                      className="text-ig-gold hover:text-ig-white transition-colors"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-ig-white mb-2">{post.content}</p>
                  <p className="text-ig-cyan text-sm">{post.hashtags}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-ig-gray/20 p-4 border border-ig-gray/30">
              <div className="flex items-center justify-between mb-3">
                <h5 className="font-semibold text-ig-cyan">Post Gerado</h5>
                <button
                  onClick={() => copyToClipboard(`${generatedContent.text}\n\n${generatedContent.hashtags}`)}
                  className="bg-ig-gold text-ig-dark px-3 py-1 text-sm font-semibold hover:brightness-110 transition-colors flex items-center gap-1"
                >
                  <Copy className="w-3 h-3" />
                  Copiar
                </button>
              </div>
              <p className="text-ig-white mb-3">{generatedContent.text}</p>
              <p className="text-ig-cyan text-sm">{generatedContent.hashtags}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SocialContentGenerator;
