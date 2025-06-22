
import { useState } from 'react';
import { Search, Copy, RefreshCw, CheckCircle } from 'lucide-react';
import { useAI } from '../hooks/useAI';

const SEOOptimizer = () => {
  const [businessName, setBusinessName] = useState('');
  const [city, setCity] = useState('São Sebastião');
  const [generatedSEO, setGeneratedSEO] = useState<any>(null);
  const { loading, credits, generateSEOContent } = useAI();

  const handleGenerateSEO = async () => {
    if (!businessName.trim() || credits < 2) return;
    
    const seoContent = await generateSEOContent(businessName, city);
    setGeneratedSEO(seoContent);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const seoChecklist = [
    { item: "Google Meu Negócio 100% preenchido", completed: true },
    { item: "Endereço consistente em todas as plataformas", completed: false },
    { item: "Palavras-chave locais no site", completed: false },
    { item: "Meta título e descrição otimizados", completed: false },
    { item: "Fotos de alta qualidade adicionadas", completed: true },
    { item: "Categorias de negócio corretas", completed: true }
  ];

  return (
    <div className="space-y-6">
      {/* SEO Generator */}
      <div className="bg-ig-dark border border-ig-gold/30 p-6">
        <div className="flex items-center gap-3 mb-6">
          <Search className="w-6 h-6 text-ig-gold" />
          <h3 className="text-xl font-bold text-ig-white">Gerador de SEO Local com IA</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-ig-white mb-2">
                Nome do Negócio
              </label>
              <input
                type="text"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder="Ex: Restaurante Mar Azul"
                className="w-full bg-ig-gray/20 text-ig-white p-3 border border-ig-gold/30 focus:border-ig-gold outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-ig-white mb-2">
                Cidade
              </label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-ig-gray/20 text-ig-white p-3 border border-ig-gold/30 focus:border-ig-gold outline-none"
              >
                <option value="São Sebastião">São Sebastião</option>
                <option value="Boiçucanga">Boiçucanga</option>
                <option value="Maresias">Maresias</option>
                <option value="Cambury">Cambury</option>
              </select>
            </div>

            <button
              onClick={handleGenerateSEO}
              disabled={!businessName.trim() || credits < 2 || loading}
              className="w-full bg-ig-gold text-ig-dark py-3 px-4 font-semibold hover:brightness-110 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
              Gerar SEO Otimizado (2 créditos)
            </button>

            {credits < 2 && (
              <p className="text-ig-red text-sm">Créditos insuficientes para gerar SEO</p>
            )}
          </div>

          {/* Generated SEO */}
          <div>
            {generatedSEO ? (
              <div className="space-y-4">
                <div className="bg-ig-cyan/10 border border-ig-cyan/30 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-semibold text-ig-cyan">Meta Título</h5>
                    <button
                      onClick={() => copyToClipboard(generatedSEO.title)}
                      className="text-ig-gold hover:text-ig-white transition-colors"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-ig-white text-sm">{generatedSEO.title}</p>
                </div>

                <div className="bg-ig-cyan/10 border border-ig-cyan/30 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-semibold text-ig-cyan">Meta Descrição</h5>
                    <button
                      onClick={() => copyToClipboard(generatedSEO.description)}
                      className="text-ig-gold hover:text-ig-white transition-colors"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-ig-white text-sm">{generatedSEO.description}</p>
                </div>

                <div className="bg-ig-cyan/10 border border-ig-cyan/30 p-4">
                  <h5 className="font-semibold text-ig-cyan mb-2">Palavras-chave Sugeridas</h5>
                  <div className="space-y-1">
                    {generatedSEO.keywords.map((keyword: string, index: number) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-ig-white text-sm">"{keyword}"</span>
                        <button
                          onClick={() => copyToClipboard(keyword)}
                          className="text-ig-gold hover:text-ig-white transition-colors"
                        >
                          <Copy className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-ig-gray/20 border border-ig-gray/30 p-8 text-center">
                <Search className="w-12 h-12 text-ig-gray mx-auto mb-3" />
                <p className="text-ig-gray">Preencha os dados e clique em gerar para criar seu SEO otimizado</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* SEO Checklist */}
      <div className="bg-ig-dark border border-ig-gold/30 p-6">
        <h3 className="text-xl font-bold text-ig-white mb-4">Checklist de Otimização SEO</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {seoChecklist.map((item, index) => (
            <div key={index} className={`flex items-center gap-3 p-3 border ${
              item.completed ? 'border-ig-cyan/30 bg-ig-cyan/10' : 'border-ig-gray/30 bg-ig-gray/10'
            }`}>
              <CheckCircle className={`w-5 h-5 ${
                item.completed ? 'text-ig-cyan' : 'text-ig-gray'
              }`} />
              <span className={`text-sm ${
                item.completed ? 'text-ig-white' : 'text-ig-gray'
              }`}>
                {item.item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SEOOptimizer;
