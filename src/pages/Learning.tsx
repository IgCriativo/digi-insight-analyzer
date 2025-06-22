
import DashboardLayout from '../components/DashboardLayout';
import { CheckCircle, Users, MessageSquare, Search, TrendingUp, Hash } from 'lucide-react';

const Learning = () => {
  const checklistItems = [
    { icon: CheckCircle, title: "Complete 100% das informações básicas", description: "Nome, endereço, telefone, categoria e horário de funcionamento" },
    { icon: Users, title: "Adicione fotos de alta qualidade", description: "Mínimo de 5 fotos: fachada, interior, produtos/serviços, equipe" },
    { icon: MessageSquare, title: "Configure descrição detalhada", description: "Descreva seus diferenciais e o que torna seu negócio especial" },
    { icon: Search, title: "Ative as mensagens", description: "Permita que clientes entrem em contato diretamente pelo Google" },
    { icon: TrendingUp, title: "Crie posts regulares", description: "Publique atualizações, promoções e novidades semanalmente" },
    { icon: Hash, title: "Configure produtos/serviços", description: "Liste e descreva detalhadamente seus produtos ou serviços" },
    { icon: CheckCircle, title: "Adicione perguntas e respostas", description: "Antecipe dúvidas comuns dos seus clientes" },
    { icon: Users, title: "Responda todas as avaliações", description: "Seja ativo e demonstre que se importa com o feedback" },
    { icon: MessageSquare, title: "Use palavras-chave locais", description: "Inclua sua cidade e bairro nas descrições" },
    { icon: Search, title: "Mantenha informações atualizadas", description: "Revise dados de contato e horários mensalmente" }
  ];

  const postTypes = [
    {
      title: "Bastidores",
      description: "Mostre o dia a dia da empresa, processos e equipe trabalhando",
      example: "Foto da equipe preparando um produto ou atendendo um cliente"
    },
    {
      title: "Depoimentos",
      description: "Compartilhe feedbacks positivos e histórias de sucesso",
      example: "Print de uma avaliação positiva ou vídeo de cliente satisfeito"
    },
    {
      title: "Dicas Úteis", 
      description: "Eduque sua audiência sobre seu segmento",
      example: "Dicas de manutenção, uso de produtos ou tendências do mercado"
    },
    {
      title: "Promoções",
      description: "Divulgue ofertas especiais e condições exclusivas",
      example: "Desconto por tempo limitado ou combo especial"
    },
    {
      title: "Conteúdo Sazonal",
      description: "Aproveite datas comemorativas e eventos locais",
      example: "Posts sobre feriados, estações do ano ou eventos da cidade"
    }
  ];

  const glossaryTerms = [
    { term: "Lead", definition: "Pessoa interessada no seu produto/serviço que forneceu dados de contato" },
    { term: "CTA", definition: "Call to Action - Chamada para ação (ex: 'Clique aqui', 'Saiba mais')" },
    { term: "SEO", definition: "Otimização para mecanismos de busca, técnicas para aparecer melhor no Google" },
    { term: "Engajamento", definition: "Interação dos usuários com suas publicações (curtidas, comentários, compartilhamentos)" },
    { term: "Alcance", definition: "Número de pessoas que viram sua publicação" },
    { term: "Impressões", definition: "Número de vezes que sua publicação foi exibida" },
    { term: "ROI", definition: "Retorno sobre Investimento - quanto você ganha para cada real investido" },
    { term: "Funil de Vendas", definition: "Processo que leva um desconhecido a se tornar cliente" },
    { term: "Persona", definition: "Perfil semi-fictício do seu cliente ideal baseado em dados reais" },
    { term: "Landing Page", definition: "Página específica criada para converter visitantes em leads ou clientes" },
    { term: "Taxa de Conversão", definition: "Porcentagem de visitantes que realizam a ação desejada" },
    { term: "Remarketing", definition: "Estratégia para reconquistar pessoas que já interagiram com sua empresa" },
    { term: "Stories", definition: "Conteúdo temporário nas redes sociais que desaparece após 24 horas" },
    { term: "Hashtag", definition: "Palavra-chave precedida por # usada para categorizar conteúdo" },
    { term: "Feed", definition: "Fluxo principal de conteúdo de uma rede social" }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-ig-white mb-2">Guia Rápido</h1>
          <p className="text-ig-gray">Fundamentos essenciais para dominar seu marketing digital.</p>
        </div>

        {/* Seção 1: Checklist Google Meu Negócio */}
        <div className="bg-ig-dark border border-ig-gold/30 p-6">
          <h2 className="text-2xl font-bold text-ig-white mb-4 flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-ig-gold" />
            Checklist Essencial do Google Meu Negócio
          </h2>
          <p className="text-ig-gray mb-6">
            Estes são os 10 pontos fundamentais que todo negócio deve ter configurado no Google Meu Negócio:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {checklistItems.map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-ig-gray/10 border border-ig-gray/30">
                <item.icon className="w-5 h-5 text-ig-gold mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-ig-white text-sm">{item.title}</h4>
                  <p className="text-ig-gray text-xs mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Seção 2: Tipos de Posts */}
        <div className="bg-ig-dark border border-ig-gold/30 p-6">
          <h2 className="text-2xl font-bold text-ig-white mb-4 flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-ig-cyan" />
            Os 5 Tipos de Posts que Geram Engajamento
          </h2>
          <p className="text-ig-gray mb-6">
            Use estes formatos comprovados para criar conteúdo que realmente conecta com sua audiência:
          </p>
          
          <div className="space-y-4">
            {postTypes.map((type, index) => (
              <div key={index} className="p-4 bg-ig-gray/10 border border-ig-gray/30">
                <h4 className="font-semibold text-ig-cyan mb-2">{type.title}</h4>
                <p className="text-ig-white text-sm mb-2">{type.description}</p>
                <p className="text-ig-gray text-xs">
                  <span className="text-ig-gold">Exemplo:</span> {type.example}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Seção 3: Glossário */}
        <div className="bg-ig-dark border border-ig-gold/30 p-6">
          <h2 className="text-2xl font-bold text-ig-white mb-4 flex items-center gap-3">
            <MessageSquare className="w-6 h-6 text-ig-red" />
            Glossário Básico de Marketing Digital
          </h2>
          <p className="text-ig-gray mb-6">
            Entenda os termos mais importantes do marketing digital:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {glossaryTerms.map((item, index) => (
              <div key={index} className="p-4 bg-ig-gray/10 border border-ig-gray/30">
                <h4 className="font-semibold text-ig-red mb-2">{item.term}</h4>
                <p className="text-ig-gray text-sm">{item.definition}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-ig-gold/20 border-2 border-ig-gold p-6 text-center">
          <h3 className="text-xl font-bold text-ig-white mb-3">💡 Quer Ir Além?</h3>
          <p className="text-ig-gray mb-4">
            Este é apenas o começo! Se você quer resultados reais sem ter que fazer tudo sozinho, 
            nossa equipe de especialistas pode implementar e gerenciar tudo isso para você.
          </p>
          <button className="bg-ig-gold text-ig-dark px-6 py-3 font-bold hover:brightness-110 transition-colors">
            FALAR COM UM ESPECIALISTA
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Learning;
