
import DashboardLayout from '../components/DashboardLayout';

const SocialPlanner = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-ig-white mb-2">Planejador Social</h1>
          <p className="text-ig-gray">Organize e planeje seu conteúdo para as redes sociais.</p>
        </div>
        
        <div className="bg-ig-cyan/20 border-2 border-ig-cyan p-8 text-center">
          <h3 className="text-xl font-bold text-ig-white mb-4">📅 Em Desenvolvimento</h3>
          <p className="text-ig-gray mb-6">
            Seu calendário de conteúdo inteligente estará disponível em breve! Planeje, organize e 
            otimize seus posts para maximizar o engajamento.
          </p>
          <div className="text-ig-cyan font-semibold">
            Recursos planejados:
          </div>
          <ul className="text-ig-gray text-sm mt-2 space-y-1">
            <li>• Calendário visual de conteúdo</li>
            <li>• Banco de ideias personalizadas</li>
            <li>• Editor de posts simplificado</li>
            <li>• Integração com eventos locais</li>
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SocialPlanner;
