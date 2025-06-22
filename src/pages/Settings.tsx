
import DashboardLayout from '../components/DashboardLayout';

const Settings = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-ig-white mb-2">Configurações</h1>
          <p className="text-ig-gray">Gerencie sua conta e preferências da plataforma.</p>
        </div>
        
        <div className="bg-ig-gold/20 border-2 border-ig-gold p-8 text-center">
          <h3 className="text-xl font-bold text-ig-white mb-4">⚙️ Em Desenvolvimento</h3>
          <p className="text-ig-gray mb-6">
            As configurações da conta estarão disponíveis em breve! Personalize sua experiência 
            e gerencie suas preferências.
          </p>
          <div className="text-ig-gold font-semibold">
            Recursos planejados:
          </div>
          <ul className="text-ig-gray text-sm mt-2 space-y-1">
            <li>• Informações da conta</li>
            <li>• Configurações de notificação</li>
            <li>• Gerenciamento de assinatura</li>
            <li>• Preferências de relatórios</li>
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
