
import DashboardLayout from '../components/DashboardLayout';

const LocalSEO = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-ig-white mb-2">SEO Local</h1>
          <p className="text-ig-gray">Otimize sua presença nas buscas locais e monitore palavras-chave.</p>
        </div>
        
        <div className="bg-ig-gold/20 border-2 border-ig-gold p-8 text-center">
          <h3 className="text-xl font-bold text-ig-white mb-4">🔍 Em Desenvolvimento</h3>
          <p className="text-ig-gray mb-6">
            Suas ferramentas de SEO local estarão disponíveis em breve! Monitore palavras-chave, 
            analise concorrentes e otimize sua presença local.
          </p>
          <div className="text-ig-gold font-semibold">
            Recursos planejados:
          </div>
          <ul className="text-ig-gray text-sm mt-2 space-y-1">
            <li>• Checklist de otimização interativo</li>
            <li>• Monitor de palavras-chave</li>
            <li>• Análise de concorrência</li>
            <li>• Lista de diretórios locais</li>
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default LocalSEO;
