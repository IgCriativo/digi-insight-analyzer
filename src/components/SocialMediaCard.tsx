
import { Check, X, Users, Hash, Lightbulb } from 'lucide-react';
import { useState } from 'react';

interface SocialMediaCardProps {
  companyName: string;
  city: string;
}

const SocialMediaCard = ({ companyName, city }: SocialMediaCardProps) => {
  const [activeTab, setActiveTab] = useState<'hashtags' | 'ideas'>('hashtags');
  
  // Simulate analysis results
  const isActive = Math.random() > 0.4;
  const hasOptimizedBio = Math.random() > 0.3;
  const daysSincePost = Math.floor(Math.random() * 25) + 1;

  const CheckIcon = ({ condition }: { condition: boolean }) => (
    condition ? 
      <Check className="w-5 h-5 text-green-400" /> : 
      <X className="w-5 h-5 text-ig-red" />
  );

  const localHashtags = [
    '#saosebastiao', '#boicucanga', '#cambury', '#maresias', '#litoralnorte'
  ];

  const nicheHashtags = [
    `#${companyName.toLowerCase().replace(/\s+/g, '')}`, 
    '#negocioslocais', '#empreendedorismo', '#servicos', '#qualidade'
  ];

  const postIdeas = [
    'Mostre os bastidores do seu trabalho diário',
    'Compartilhe depoimentos de clientes satisfeitos',
    'Faça uma postagem sobre a história da sua empresa'
  ];

  return (
    <div className="ig-card">
      <div className="flex items-center gap-3 mb-6">
        <Users className="w-6 h-6 text-ig-gold" />
        <h3 className="text-xl font-bold text-ig-white">Sua Conexão com o Público</h3>
      </div>

      <div className="space-y-4">
        {/* Posting Frequency */}
        <div className="flex items-start gap-3 p-4 bg-ig-dark/50 border border-ig-gray/20">
          <CheckIcon condition={isActive && daysSincePost <= 15} />
          <div className="flex-1">
            <h4 className="font-semibold text-ig-white mb-1">Frequência de Posts</h4>
            <p className="text-ig-gray text-sm">
              {isActive && daysSincePost <= 15 
                ? `Ativo (último post há ${daysSincePost} dias)`
                : 'Inativo (>15 dias sem postar)'
              }
            </p>
          </div>
        </div>

        {/* Bio Optimization */}
        <div className="flex items-start gap-3 p-4 bg-ig-dark/50 border border-ig-gray/20">
          <CheckIcon condition={hasOptimizedBio} />
          <div className="flex-1">
            <h4 className="font-semibold text-ig-white mb-1">Bio Otimizada</h4>
            <p className="text-ig-gray text-sm">
              {hasOptimizedBio 
                ? 'Bio com link e CTA'
                : 'Bio incompleta ou sem call-to-action'
              }
            </p>
          </div>
        </div>
      </div>

      {/* Practical Tools */}
      <div className="mt-6 p-4 bg-ig-gold/10 border border-ig-gold/30">
        <h4 className="font-semibold text-ig-white mb-4">🎁 Ferramentas Práticas</h4>
        
        {/* Tab Navigation */}
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setActiveTab('hashtags')}
            className={`px-4 py-2 text-sm font-semibold transition-colors ${
              activeTab === 'hashtags' 
                ? 'bg-ig-gold text-ig-dark' 
                : 'bg-ig-dark text-ig-gray hover:text-ig-white'
            }`}
          >
            <Hash className="w-4 h-4 inline mr-1" />
            Hashtags
          </button>
          <button
            onClick={() => setActiveTab('ideas')}
            className={`px-4 py-2 text-sm font-semibold transition-colors ${
              activeTab === 'ideas' 
                ? 'bg-ig-gold text-ig-dark' 
                : 'bg-ig-dark text-ig-gray hover:text-ig-white'
            }`}
          >
            <Lightbulb className="w-4 h-4 inline mr-1" />
            Ideias
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'hashtags' && (
          <div className="space-y-3">
            <div>
              <h5 className="text-sm font-semibold text-ig-white mb-2">Hashtags Locais:</h5>
              <div className="flex flex-wrap gap-2">
                {localHashtags.map((tag, index) => (
                  <span key={index} className="text-xs bg-ig-dark text-ig-cyan px-2 py-1 border border-ig-cyan/30">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h5 className="text-sm font-semibold text-ig-white mb-2">Hashtags do Nicho:</h5>
              <div className="flex flex-wrap gap-2">
                {nicheHashtags.map((tag, index) => (
                  <span key={index} className="text-xs bg-ig-dark text-ig-gold px-2 py-1 border border-ig-gold/30">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'ideas' && (
          <div className="space-y-2">
            {postIdeas.map((idea, index) => (
              <div key={index} className="text-sm text-ig-gray bg-ig-dark/50 px-3 py-2 border border-ig-gray/20">
                💡 {idea}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SocialMediaCard;
