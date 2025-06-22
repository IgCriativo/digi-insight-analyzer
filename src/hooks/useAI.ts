
import { useState } from 'react';
import { useProfile, CompanyProfile } from './useProfile';

// Hook para gerenciar IA com ancoragem de dados
export const useAI = () => {
  const [loading, setLoading] = useState(false);
  const [credits, setCredits] = useState(15); // Créditos gratuitos
  const { profile } = useProfile();

  // Função para criar prompts estruturados e ancorados
  const createAnchoredPrompt = (
    task: string,
    objective: string,
    additionalContext: string = ''
  ) => {
    const toneMap = {
      friendly: 'Amigável e Informal',
      professional: 'Profissional e Direto', 
      welcoming: 'Acolhedor e Sofisticado',
      fun: 'Divertido e Jovem'
    };

    return `
**CONTEXTO ESTRITO (Fonte: Banco de Dados do Usuário):**
- Nome do Negócio: "${profile.company_name}"
- Descrição: "${profile.short_description}"
- Público-Alvo: "${profile.target_audience}"
- Tom de Voz: "${toneMap[profile.brand_tone]}"
- Promoção Vigente: "${profile.current_promotion}"
${additionalContext}

**SUA TAREFA:**
Baseando-se EXCLUSIVAMENTE no Contexto Estrito fornecido, ${task}. ${objective}
    `.trim();
  };

  const generateReviewResponse = async (reviewText: string, rating: number) => {
    setLoading(true);
    
    // Simular delay de API
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const prompt = createAnchoredPrompt(
      `crie uma resposta profissional para a seguinte avaliação: "${reviewText}"`,
      `A resposta deve ser empática, usar o tom de voz definido, e mencionar o nome do negócio de forma natural. Para avaliações positivas, agradeça e reforce os diferenciais. Para negativas, peça desculpas e ofereça uma solução.`
    );

    // Respostas baseadas no perfil da empresa
    const responses = rating >= 4 ? [
      `Muito obrigado pelo seu feedback! Ficamos felizes em saber que você teve uma experiência excepcional no ${profile.company_name}. ${profile.short_description.toLowerCase()} é exatamente o que buscamos oferecer. Esperamos recebê-lo novamente em breve!`,
      `Que alegria receber seu comentário! É maravilhoso saber que conseguimos proporcionar a experiência que nossos ${profile.target_audience.toLowerCase()} merecem no ${profile.company_name}. Sua satisfação é nossa maior recompensa!`
    ] : [
      `Prezado(a) cliente, agradecemos pelo seu feedback sobre sua experiência no ${profile.company_name}. Lamentamos que não tenha atendido suas expectativas. Levamos todos os comentários muito a sério e gostaríamos de conversar para entender melhor como podemos melhorar. Entre em contato conosco pelo ${profile.whatsapp}.`,
      `Obrigado por compartilhar sua experiência conosco. Pedimos sinceras desculpas pela situação e já estamos trabalhando para melhorar os pontos mencionados. No ${profile.company_name}, nos importamos genuinamente com cada ${profile.target_audience.toLowerCase()}. Gostaríamos de uma nova oportunidade.`
    ];

    const response = responses[Math.floor(Math.random() * responses.length)];

    setCredits(prev => Math.max(0, prev - 1));
    setLoading(false);
    
    return response;
  };

  const generateSocialPost = async (prompt: string) => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 3000));

    const anchoredPrompt = createAnchoredPrompt(
      `crie uma legenda para post de Instagram sobre: "${prompt}"`,
      `A legenda deve ter no máximo 150 palavras, incluir 3 emojis relevantes, mencionar a promoção vigente se apropriado, e usar hashtags locais relevantes. Use o tom de voz definido.`
    );

    const posts = {
      "promoção": {
        text: `🎉 ${profile.current_promotion} no ${profile.company_name}! Não perca esta oportunidade única de experimentar ${profile.short_description.toLowerCase()}. Perfeito para ${profile.target_audience.toLowerCase()}! 💫`,
        hashtags: "#maresias #pousada #promocao #litoralnorte #descanso"
      },
      "bastidores": {
        text: `👀 Bastidores do ${profile.company_name}! Aqui você pode ver o cuidado que colocamos em cada detalhe para oferecer ${profile.short_description.toLowerCase()}. É assim que criamos momentos especiais para ${profile.target_audience.toLowerCase()}! ✨`,
        hashtags: "#bastidores #${profile.company_name.toLowerCase().replace(/\s/g, '')} #cuidado #qualidade #maresias"
      },
      "depoimento": {
        text: `💬 "Experiência incrível no ${profile.company_name}!" Ficamos emocionados com cada feedback positivo dos nossos hóspedes. ${profile.short_description} é o que nos move todos os dias! 🙏`,
        hashtags: "#depoimento #clientessatisfeitos #${profile.company_name.toLowerCase().replace(/\s/g, '')} #maresias #gratidao"
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

    const anchoredPrompt = createAnchoredPrompt(
      `crie um plano de conteúdo semanal (3 posts) para Instagram`,
      `Cada post deve ter dia da semana, tipo de conteúdo, legenda completa (max 150 palavras) e hashtags. Incorpore a promoção vigente em pelo menos um post.`
    );

    const weeklyPlan = [
      {
        day: "Segunda",
        type: "Motivacional",
        content: `💪 Começando a semana com energia no ${profile.company_name}! Nossa equipe está pronta para receber ${profile.target_audience.toLowerCase()} e proporcionar ${profile.short_description.toLowerCase()}. Que tal planejar sua próxima escapada?`,
        hashtags: "#segundafeira #energia #${profile.company_name.toLowerCase().replace(/\s/g, '')} #maresias"
      },
      {
        day: "Quarta", 
        type: "Promocional",
        content: `🎉 IMPERDÍVEL: ${profile.current_promotion}! ${profile.company_name} é o destino perfeito para ${profile.target_audience.toLowerCase()}. Venha viver momentos únicos conosco! 💫`,
        hashtags: "#promocao #${profile.company_name.toLowerCase().replace(/\s/g, '')} #maresias #oportunidade"
      },
      {
        day: "Sexta",
        type: "Experiência",
        content: `🌅 SEXTA-FEIRA é dia de planejar o fim de semana perfeito! No ${profile.company_name}, oferecemos ${profile.short_description.toLowerCase()}. Ideal para ${profile.target_audience.toLowerCase()} que buscam tranquilidade! ✨`,
        hashtags: "#sextafeira #fimdesemana #experiencia #${profile.company_name.toLowerCase().replace(/\s/g, '')} #maresias"
      }
    ];

    setCredits(prev => Math.max(0, prev - 10));
    setLoading(false);

    return weeklyPlan;
  };

  const generateSEOContent = async (businessName: string, city: string) => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2500));

    const anchoredPrompt = createAnchoredPrompt(
      `crie sugestões de SEO otimizadas`,
      `Gere título, meta descrição e palavras-chave focadas em SEO local, incorporando o nome do negócio, cidade, e descrição dos serviços.`
    );

    const seoSuggestions = {
      title: `${profile.company_name} em Maresias | ${profile.short_description}`,
      description: `${profile.short_description} no ${profile.company_name} em Maresias. Ideal para ${profile.target_audience.toLowerCase()}. Reserve já sua estadia no litoral norte de SP!`,
      keywords: [
        `${profile.company_name.toLowerCase()} maresias`,
        `pousada maresias ${profile.target_audience.toLowerCase()}`,
        `hospedagem maresias litoral norte`
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
    generateSEOContent,
    profile
  };
};
