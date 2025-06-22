
import DashboardLayout from '../components/DashboardLayout';
import AICreditsDisplay from '../components/AICreditsDisplay';
import { useAI } from '../hooks/useAI';
import { BookOpen, Video, MessageCircle, Lightbulb } from 'lucide-react';

const Learning = () => {
  const { credits } = useAI();

  const articles = [
    {
      title: "Como otimizar seu Google Meu Negócio",
      category: "Google",
      readTime: "5 min",
      difficulty: "Básico"
    },
    {
      title: "Melhores horários para postar no Instagram",
      category: "Social Media",
      readTime: "3 min", 
      difficulty: "Básico"
    },
    {
      title: "Como responder avaliações negativas",
      category: "Reputação",
      readTime: "7 min",
      difficulty: "Intermediário"
    },
    {
      title: "SEO Local: Guia completo para negócios",
      category: "SEO",
      readTime: "12 min",
      difficulty: "Avançado"
    }
  ];

  const videos = [
    {
      title: "Como criar posts que geram engajamento",
      duration: "8:30",
      category: "Social Media"
    },
    {
      title: "Configurando seu perfil no Google",
      duration: "12:15", 
      category: "Google"
    },
    {
      title: "Estratégias de hashtags locais",
      duration: "6:45",
      category: "SEO"
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-ig-white mb-2">Central de Capacitação</h1>
          <p className="text-ig-gray">Aprenda as melhores práticas de marketing digital com nossos especialistas e IA.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* AI Assistant Prompt */}
            <div className="bg-gradient-to-r from-ig-gold/20 to-ig-cyan/20 border-2 border-ig-gold p-6">
              <div className="flex items-center gap-3 mb-3">
                <MessageCircle className="w-6 h-6 text-ig-gold" />
                <h3 className="text-xl font-bold text-ig-white">Especialista Digital AI</h3>
              </div>
              <p className="text-ig-gray mb-4">
                Tem alguma dúvida sobre marketing digital? Use nosso assistente de IA para obter respostas instantâneas!
              </p>
              <p className="text-ig-cyan text-sm">
                💡 Clique no ícone de chat no canto inferior direito para começar a conversar
              </p>
            </div>

            {/* Articles */}
            <div className="bg-ig-dark border border-ig-gold/30 p-6">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-ig-gold" />
                <h3 className="text-xl font-bold text-ig-white">Artigos e Guias</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {articles.map((article, index) => (
                  <div key={index} className="bg-ig-gray/20 p-4 border border-ig-gray/30 hover:border-ig-gold/50 transition-colors cursor-pointer">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs bg-ig-gold/20 text-ig-gold px-2 py-1">{article.category}</span>
                      <span className="text-xs text-ig-gray">{article.readTime}</span>
                    </div>
                    <h4 className="font-semibold text-ig-white mb-2">{article.title}</h4>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-ig-gray">Nível: {article.difficulty}</span>
                      <button className="text-ig-cyan text-xs font-semibold hover:text-ig-gold transition-colors">
                        Ler Artigo →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Videos */}
            <div className="bg-ig-dark border border-ig-gold/30 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Video className="w-6 h-6 text-ig-cyan" />
                <h3 className="text-xl font-bold text-ig-white">Vídeos Tutoriais</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {videos.map((video, index) => (
                  <div key={index} className="bg-ig-gray/20 p-4 border border-ig-gray/30 hover:border-ig-cyan/50 transition-colors cursor-pointer">
                    <div className="aspect-video bg-ig-gray/50 mb-3 flex items-center justify-center">
                      <Video className="w-8 h-8 text-ig-gray" />
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs bg-ig-cyan/20 text-ig-cyan px-2 py-1">{video.category}</span>
                      <span className="text-xs text-ig-gray">{video.duration}</span>
                    </div>
                    <h4 className="font-semibold text-ig-white text-sm">{video.title}</h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Glossary */}
            <div className="bg-ig-dark border border-ig-gold/30 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-6 h-6 text-ig-gold" />
                <h3 className="text-xl font-bold text-ig-white">Glossário de Marketing Digital</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="border-l-4 border-ig-gold pl-3">
                    <h5 className="font-semibold text-ig-white">CTA (Call to Action)</h5>
                    <p className="text-sm text-ig-gray">Chamada para ação que incentiva o usuário a realizar uma tarefa específica.</p>
                  </div>
                  <div className="border-l-4 border-ig-cyan pl-3">
                    <h5 className="font-semibold text-ig-white">SEO (Search Engine Optimization)</h5>
                    <p className="text-sm text-ig-gray">Otimização para mecanismos de busca, melhorando a visibilidade online.</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="border-l-4 border-ig-gold pl-3">
                    <h5 className="font-semibold text-ig-white">Lead</h5>
                    <p className="text-sm text-ig-gray">Potencial cliente que demonstrou interesse no seu produto ou serviço.</p>
                  </div>
                  <div className="border-l-4 border-ig-cyan pl-3">
                    <h5 className="font-semibold text-ig-white">Engajamento</h5>
                    <p className="text-sm text-ig-gray">Interações do público com seu conteúdo nas redes sociais.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <AICreditsDisplay credits={credits} />
            
            <div className="bg-ig-dark border border-ig-gold/30 p-4">
              <h4 className="font-semibold text-ig-white mb-3">📚 Seu Progresso</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-ig-gray">Artigos Lidos:</span>
                  <span className="text-ig-gold font-semibold">8/20</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ig-gray">Vídeos Assistidos:</span>
                  <span className="text-ig-cyan">3/12</span>
                </div>
                <div className="w-full bg-ig-gray/20 h-2 mt-2">
                  <div className="bg-ig-gold h-2 w-[40%]" />
                </div>
                <p className="text-xs text-ig-gray">40% concluído</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Learning;
