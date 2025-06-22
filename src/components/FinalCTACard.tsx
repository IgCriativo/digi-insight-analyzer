
import { ArrowRight, MessageCircle } from 'lucide-react';

const FinalCTACard = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá! Acabei de fazer o diagnóstico digital gratuito e gostaria de agendar uma consultoria para melhorar minha presença digital."
    );
    const whatsappUrl = `https://wa.me/5512999999999?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-ig-gold text-ig-dark p-8 border-2 border-ig-gold">
      <div className="text-center">
        {/* Logo */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-2">IG CRIATIVO</h2>
          <div className="w-16 h-1 bg-ig-dark mx-auto"></div>
        </div>

        {/* Headline */}
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Gostou da análise? Este é apenas o começo.
        </h3>

        {/* Description */}
        <p className="text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
          Os problemas apontados podem ser complexos. Nossa equipe na IG Criativo é 
          especialista em transformar sua presença digital e gerar resultados reais. 
          Deixe que nossos especialistas cuidem disso para você.
        </p>

        {/* CTA Buttons */}
        <div className="space-y-4">
          <button
            onClick={handleWhatsAppClick}
            className="bg-ig-dark text-ig-gold px-8 py-4 font-bold text-lg hover:bg-ig-dark/90 transition-all duration-200 hover:scale-105 flex items-center justify-center gap-3 mx-auto"
          >
            <MessageCircle className="w-6 h-6" />
            QUERO AGENDAR UMA CONSULTORIA GRATUITA
            <ArrowRight className="w-6 h-6" />
          </button>

          <p className="text-ig-dark/70 text-sm">
            📞 Resposta em até 2 horas • 🎯 Consultoria 100% personalizada
          </p>
        </div>

        {/* Trust Elements */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="p-4">
            <div className="text-2xl font-bold text-ig-dark mb-1">+500</div>
            <div className="text-sm text-ig-dark/70">Empresas Atendidas</div>
          </div>
          <div className="p-4">
            <div className="text-2xl font-bold text-ig-dark mb-1">5 Anos</div>
            <div className="text-sm text-ig-dark/70">de Experiência</div>
          </div>
          <div className="p-4">
            <div className="text-2xl font-bold text-ig-dark mb-1">100%</div>
            <div className="text-sm text-ig-dark/70">Foco em Resultados</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalCTACard;
