
import { Calendar, MapPin, TrendingUp } from 'lucide-react';

const LocalContentCalendar = () => {
  const getCurrentMonth = () => {
    const months = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    return months[new Date().getMonth()];
  };

  const localEvents = [
    {
      title: "Feriado de São Sebastião (20/Jan)",
      suggestion: "Crie um post desejando um bom feriado aos seus clientes e destaque como sua empresa contribui para a comunidade local!",
      type: "holiday"
    },
    {
      title: "Início da Alta Temporada",
      suggestion: "Faça um post de 'Boas-vindas aos turistas' e mostre seu diferencial para quem visita a região.",
      type: "season"
    },
    {
      title: "Festival do Camarão (Março)",
      suggestion: "Aproveite o evento para mostrar como seu negócio se conecta com a cultura local da região.",
      type: "festival"
    }
  ];

  const monthlyThemes = [
    {
      title: "Verão em São Sebastião",
      suggestion: "Mostre como seu serviço/produto é perfeito para a temporada de verão na região.",
      type: "theme"
    },
    {
      title: "Sustentabilidade Local",
      suggestion: "Destaque práticas sustentáveis do seu negócio e o cuidado com o meio ambiente local.",
      type: "theme"
    }
  ];

  return (
    <div className="ig-card">
      <div className="flex items-center gap-3 mb-6">
        <Calendar className="w-6 h-6 text-ig-cyan" />
        <h3 className="text-xl font-bold text-ig-white">📅 Oportunidades de Conteúdo Local</h3>
      </div>

      <p className="text-ig-gray mb-6">
        Conecte-se com sua comunidade através de conteúdo relevante e oportuno para {getCurrentMonth()}.
      </p>

      <div className="space-y-4">
        {/* Local Events */}
        <div>
          <h4 className="text-ig-white font-semibold mb-3 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-ig-gold" />
            Eventos e Datas Locais
          </h4>
          <div className="space-y-3">
            {localEvents.slice(0, 2).map((event, index) => (
              <div key={index} className="p-4 bg-ig-dark/50 border border-ig-cyan/30">
                <h5 className="text-ig-cyan font-semibold text-sm mb-2">{event.title}</h5>
                <p className="text-ig-gray text-sm">💡 {event.suggestion}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Themes */}
        <div>
          <h4 className="text-ig-white font-semibold mb-3 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-ig-gold" />
            Temas do Mês
          </h4>
          <div className="space-y-3">
            {monthlyThemes.map((theme, index) => (
              <div key={index} className="p-4 bg-ig-dark/50 border border-ig-gold/30">
                <h5 className="text-ig-gold font-semibold text-sm mb-2">{theme.title}</h5>
                <p className="text-ig-gray text-sm">💡 {theme.suggestion}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA for more ideas */}
      <div className="mt-6 p-4 bg-ig-cyan/10 border border-ig-cyan/30">
        <p className="text-ig-white text-sm font-semibold mb-2">
          🎯 Quer mais ideias personalizadas?
        </p>
        <p className="text-ig-gray text-sm">
          Nossa equipe pode criar um calendário de conteúdo completo e específico para seu negócio.
        </p>
      </div>
    </div>
  );
};

export default LocalContentCalendar;
