
import DashboardLayout from '../components/DashboardLayout';

const Learning = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-ig-white mb-2">Central de Capacitação</h1>
          <p className="text-ig-gray">Aprenda as melhores práticas de marketing digital com nossos especialistas.</p>
        </div>
        
        <div className="bg-ig-cyan/20 border-2 border-ig-cyan p-8 text-center">
          <h3 className="text-xl font-bold text-ig-white mb-4">🎓 Em Desenvolvimento</h3>
          <p className="text-ig-gray mb-6">
            Nossa biblioteca de conhecimento estará disponível em breve! Acesse artigos, vídeos e 
            guias práticos para dominar o marketing digital.
          </p>
          <div className="text-ig-cyan font-semibold">
            Recursos planejados:
          </div>
          <ul className="text-ig-gray text-sm mt-2 space-y-1">
            <li>• Artigos e guias especializados</li>
            <li>• Vídeos tutoriais exclusivos</li>
            <li>• Glossário de marketing digital</li>
            <li>• Cursos práticos por módulos</li>
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Learning;
