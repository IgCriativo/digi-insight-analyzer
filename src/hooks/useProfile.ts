
import { useState, useEffect } from 'react';

export interface CompanyProfile {
  id?: string;
  company_name: string;
  short_description: string;
  detailed_description: string;
  target_audience: string;
  brand_tone: 'friendly' | 'professional' | 'welcoming' | 'fun';
  current_promotion: string;
  website: string;
  instagram: string;
  facebook: string;
  whatsapp: string;
}

// Simulação até integração com Supabase
export const useProfile = () => {
  const [profile, setProfile] = useState<CompanyProfile>({
    company_name: 'Pousada Cantinho do Mar',
    short_description: 'Pousada charmosa com piscina e café da manhã artesanal',
    detailed_description: 'Nossa pousada oferece uma experiência única em Maresias, com quartos aconchegantes, piscina com vista para o mar e café da manhã feito com ingredientes locais.',
    target_audience: 'Casais em busca de tranquilidade',
    brand_tone: 'welcoming',
    current_promotion: '20% de desconto para reservas de 3 noites em junho',
    website: 'https://pousadacantinhomar.com.br',
    instagram: '@pousadacantinhomar',
    facebook: 'PousadaCantinhoMar',
    whatsapp: '(12) 99999-9999'
  });

  const [loading, setLoading] = useState(false);

  const updateProfile = async (updatedProfile: Partial<CompanyProfile>) => {
    setLoading(true);
    
    // Simular delay da API
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setProfile(prev => ({ ...prev, ...updatedProfile }));
    setLoading(false);
  };

  const getBrandToneLabel = (tone: string) => {
    const tones = {
      friendly: 'Amigável e Informal',
      professional: 'Profissional e Direto',
      welcoming: 'Acolhedor e Sofisticado',
      fun: 'Divertido e Jovem'
    };
    return tones[tone as keyof typeof tones] || tone;
  };

  return {
    profile,
    loading,
    updateProfile,
    getBrandToneLabel
  };
};
