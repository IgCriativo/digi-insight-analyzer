
import DashboardLayout from '../components/DashboardLayout';

const Reputation = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-ig-white mb-2">Reputação Online</h1>
          <p className="text-ig-gray">Gerencie e monitore sua reputação nas plataformas digitais.</p>
        </div>
        
        <div className="bg-ig-gold/20 border-2 border-ig-gold p-8 text-center">
          <h3 className="text-xl font-bold text-ig-white mb-4">🚀 Em Desenvolvimento</h3>
          <p className="text-ig-gray mb-6">
            Esta funcionalidade estará disponível em breve! Aqui você poderá gerenciar suas avaliações do Google, 
            gerar respostas automatizadas e monitorar sua reputação online.
          </p>
          <div className="text-ig-gold font-semibold">
            Recursos planejados:
          </div>
          <ul className="text-ig-gray text-sm mt-2 space-y-1">
            <li>• Agregador de avaliações do Google</li>
            <li>• Gerador de respostas inteligentes</li>
            <li>• Filtros por nota e status</li>
            <li>• Alertas de novas avaliações</li>
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Reputation;
