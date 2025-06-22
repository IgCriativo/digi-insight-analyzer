
import { Check, X, Smartphone, Shield, Search } from 'lucide-react';

interface WebsiteAnalysisCardProps {
  companyName: string;
  city: string;
}

const WebsiteAnalysisCard = ({ companyName, city }: WebsiteAnalysisCardProps) => {
  // Simulate analysis results
  const isMobile = Math.random() > 0.3;
  const hasSSL = Math.random() > 0.2;
  const hasSEO = Math.random() > 0.4;

  const CheckIcon = ({ condition }: { condition: boolean }) => (
    condition ? 
      <Check className="w-5 h-5 text-green-400" /> : 
      <X className="w-5 h-5 text-ig-red" />
  );

  const keywords = [
    `${companyName.split(' ')[0]} em ${city}`,
    `serviços de ${companyName.split(' ')[0]} ${city}`,
    `${companyName.split(' ')[0]} região de São Sebastião`
  ];

  return (
    <div className="ig-card">
      <div className="flex items-center gap-3 mb-6">
        <Search className="w-6 h-6 text-ig-cyan" />
        <h3 className="text-xl font-bold text-ig-white">Seu Cartão de Visitas Online</h3>
      </div>

      <div className="space-y-4">
        {/* Mobile Responsive */}
        <div className="flex items-start gap-3 p-4 bg-ig-dark/50 border border-ig-gray/20">
          <CheckIcon condition={isMobile} />
          <div className="flex-1">
            <h4 className="font-semibold text-ig-white mb-1">Otimizado para Celular</h4>
            <p className="text-ig-gray text-sm flex items-center gap-2">
              <Smartphone className="w-4 h-4" />
              {isMobile ? 'Site responsivo' : 'Não otimizado para mobile'}
            </p>
          </div>
        </div>

        {/* SSL Certificate */}
        <div className="flex items-start gap-3 p-4 bg-ig-dark/50 border border-ig-gray/20">
          <CheckIcon condition={hasSSL} />
          <div className="flex-1">
            <h4 className="font-semibold text-ig-white mb-1">Certificado de Segurança</h4>
            <p className="text-ig-gray text-sm flex items-center gap-2">
              <Shield className="w-4 h-4" />
              {hasSSL ? 'HTTPS ativo' : 'Sem certificado SSL'}
            </p>
          </div>
        </div>

        {/* SEO Tags */}
        <div className="flex items-start gap-3 p-4 bg-ig-dark/50 border border-ig-gray/20">
          <CheckIcon condition={hasSEO} />
          <div className="flex-1">
            <h4 className="font-semibold text-ig-white mb-1">Tags de SEO Básicas</h4>
            <p className="text-ig-gray text-sm">
              {hasSEO ? 'Meta tags preenchidas' : 'Tags de SEO incompletas'}
            </p>
          </div>
        </div>
      </div>

      {/* Keyword Suggestions Tool */}
      <div className="mt-6 p-4 bg-ig-cyan/10 border border-ig-cyan/30">
        <h4 className="font-semibold text-ig-white mb-3">🎁 Sugestões de Palavras-Chave</h4>
        <div className="space-y-2">
          {keywords.map((keyword, index) => (
            <div key={index} className="text-sm text-ig-gray bg-ig-dark/50 px-3 py-2 border border-ig-gray/20">
              "{keyword}"
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebsiteAnalysisCard;
