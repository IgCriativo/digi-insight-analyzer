
import { useState } from 'react';

// Simulação das funcionalidades de IA até a integração real com Gemini
export const useAI = () => {
  const [loading, setLoading] = useState(false);
  const [credits, setCredits] = useState(15); // Créditos gratuitos

  const generateReviewResponse = async (reviewText: string, rating: number) => {
    setLoading(true);
    
    // Simular delay de API
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const positiveResponses = [
      "Muito obrigado pelo seu feedback positivo! Ficamos felizes em saber que você teve uma experiência excelente conosco. Sua satisfação é nossa maior recompensa!",
      "Que alegria receber seu comentário! É maravilhoso saber que conseguimos superar suas expectativas. Agradecemos pela confiança e esperamos vê-lo novamente em breve!",
      "Obrigado pela avaliação! Comentários como o seu nos motivam a continuar oferecendo o melhor atendimento. Conte sempre conosco!"
    ];

    const negativeResponses = [
      "Agradecemos pelo seu feedback e pedimos sinceras desculpas pela experiência que não atendeu suas expectativas. Levamos todos os comentários muito a sério e gostaríamos de conversar para entender melhor como podemos melhorar. Entre em contato conosco para que possamos resolver esta situação.",
      "Lamentamos profundamente que sua experiência não tenha sido satisfatória. Seu feedback é muito importante para nós e já estamos trabalhando para corrigir os pontos mencionados. Gostaríamos de uma nova oportunidade para demonstrar nosso verdadeiro padrão de atendimento."
    ];

    const response = rating >= 4 
      ? positiveResponses[Math.floor(Math.random() * positiveResponses.length)]
      : negativeResponses[Math.floor(Math.random() * negativeResponses.length)];

    setCredits(prev => Math.max(0, prev - 1));
    setLoading(false);
    
    return response;
  };

  const generateSocialPost = async (prompt: string) => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 3000));

    const posts = {
      "promoção": {
        text: "🎉 PROMOÇÃO ESPECIAL! Não perca esta oportunidade única de experimentar nossos serviços com desconto exclusivo. Venha nos visitar e comprove a qualidade que nos faz referência na região! 💫",
        hashtags: "#promocao #desconto #saosebastiao #oportunidade #qualidade"
      },
      "bastidores": {
        text: "👀 Bastidores do nosso trabalho! Aqui você pode ver o cuidado e dedicação que colocamos em cada detalhe. É assim que garantimos a excelência que nossos clientes merecem! ✨",
        hashtags: "#bastidores #qualidade #dedicacao #profissionais #excelencia"
      },
      "depoimento": {
        text: "💬 'Atendimento excepcional e resultados que superam expectativas!' Ficamos emocionados com cada feedback positivo dos nossos clientes. Obrigado pela confiança! 🙏",
        hashtags: "#depoimento #clientessatisfeitos #gratidao #confianca #qualidade"
      }
    };

    const postType = Object.keys(posts).find(key => prompt.toLowerCase().includes(key)) || "promoção";
    const selectedPost = posts[postType as keyof typeof posts];

    setCredits(prev => Math.max(0, prev - 2));
    setLoading(false);

    return selectedPost;
  };

  const generateWeeklyPlan = async (businessType: string) => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 4000));

    const weeklyPlan = [
      {
        day: "Segunda",
        type: "Motivacional",
        content: "💪 Começando a semana com energia total! Nossa equipe está pronta para oferecer o melhor atendimento. Que tal agendar uma visita?",
        hashtags: "#segundafeira #energia #atendimento #agenda"
      },
      {
        day: "Quarta", 
        type: "Dica/Educativo",
        content: "💡 DICA DA SEMANA: Sabia que um atendimento personalizado pode fazer toda a diferença na sua experiência? Venha descobrir como trabalhamos!",
        hashtags: "#dicadasemana #atendimentopersonalizado #experiencia #qualidade"
      },
      {
        day: "Sexta",
        type: "Promocional",
        content: "🎉 SEXTA-FEIRA é dia de celebrar! Que tal terminar a semana experimentando nossos serviços? Temos condições especiais esperando por você!",
        hashtags: "#sextafeira #promocao #condicoesespeciais #fimdesemana"
      }
    ];

    setCredits(prev => Math.max(0, prev - 10));
    setLoading(false);

    return weeklyPlan;
  };

  const generateSEOContent = async (businessName: string, city: string) => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2500));

    const seoSuggestions = {
      title: `${businessName} em ${city} | Qualidade e Excelência no Atendimento`,
      description: `Procura ${businessName.toLowerCase()} em ${city}? Oferecemos atendimento personalizado e resultados excepcionais. Conheça nossos serviços e agende uma visita!`,
      keywords: [
        `${businessName.toLowerCase()} ${city.toLowerCase()}`,
        `melhor ${businessName.toLowerCase()} ${city.toLowerCase()}`,
        `${businessName.toLowerCase()} qualidade ${city.toLowerCase()}`
      ]
    };

    setCredits(prev => Math.max(0, prev - 2));
    setLoading(false);

    return seoSuggestions;
  };

  return {
    loading,
    credits,
    generateReviewResponse,
    generateSocialPost,
    generateWeeklyPlan,
    generateSEOContent
  };
};
