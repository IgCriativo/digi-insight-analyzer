
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useProfile } from '../hooks/useProfile';
import { useAI } from '../hooks/useAI';
import DashboardLayout from '../components/DashboardLayout';

const Settings = () => {
  const { profile, updateProfile, loading, getBrandToneLabel } = useProfile();
  const { credits } = useAI();
  const [formData, setFormData] = useState(profile);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    await updateProfile(formData);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-ig-white mb-2">Configurações</h1>
          <p className="text-ig-gray">Gerencie seu perfil e preferências da plataforma.</p>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="bg-ig-dark border border-ig-gold/30">
            <TabsTrigger value="profile" className="data-[state=active]:bg-ig-gold data-[state=active]:text-ig-dark">
              Perfil da Empresa
            </TabsTrigger>
            <TabsTrigger value="account" className="data-[state=active]:bg-ig-gold data-[state=active]:text-ig-dark">
              Minha Conta
            </TabsTrigger>
            <TabsTrigger value="subscription" className="data-[state=active]:bg-ig-gold data-[state=active]:text-ig-dark">
              Assinatura
            </TabsTrigger>
            <TabsTrigger value="notifications" className="data-[state=active]:bg-ig-gold data-[state=active]:text-ig-dark">
              Notificações
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <div className="bg-ig-dark border border-ig-gold/30 p-6">
              <h3 className="text-xl font-bold text-ig-white mb-4">Fonte da Verdade da IA</h3>
              <p className="text-ig-gray mb-6">
                Estes dados são utilizados pela IA para personalizar todo o conteúdo gerado especificamente para seu negócio.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company_name" className="text-ig-white">Nome da Empresa *</Label>
                  <Input
                    id="company_name"
                    value={formData.company_name}
                    onChange={(e) => handleInputChange('company_name', e.target.value)}
                    className="bg-ig-gray/20 border-ig-gold/30 text-ig-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="target_audience" className="text-ig-white">Público-Alvo Principal *</Label>
                  <Input
                    id="target_audience"
                    value={formData.target_audience}
                    onChange={(e) => handleInputChange('target_audience', e.target.value)}
                    placeholder="Ex: Famílias com crianças, Jovens universitários"
                    className="bg-ig-gray/20 border-ig-gold/30 text-ig-white"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="short_description" className="text-ig-white">Descrição Curta (para Bio) *</Label>
                  <Input
                    id="short_description"
                    value={formData.short_description}
                    onChange={(e) => handleInputChange('short_description', e.target.value)}
                    maxLength={150}
                    className="bg-ig-gray/20 border-ig-gold/30 text-ig-white"
                  />
                  <p className="text-xs text-ig-gray">{formData.short_description.length}/150 caracteres</p>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="detailed_description" className="text-ig-white">Descrição Detalhada</Label>
                  <Textarea
                    id="detailed_description"
                    value={formData.detailed_description}
                    onChange={(e) => handleInputChange('detailed_description', e.target.value)}
                    rows={4}
                    className="bg-ig-gray/20 border-ig-gold/30 text-ig-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="brand_tone" className="text-ig-white">Tom de Voz da Marca *</Label>
                  <Select value={formData.brand_tone} onValueChange={(value) => handleInputChange('brand_tone', value)}>
                    <SelectTrigger className="bg-ig-gray/20 border-ig-gold/30 text-ig-white">
                      <SelectValue placeholder="Selecione o tom" />
                    </SelectTrigger>
                    <SelectContent className="bg-ig-dark border-ig-gold/30">
                      <SelectItem value="friendly">Amigável e Informal</SelectItem>
                      <SelectItem value="professional">Profissional e Direto</SelectItem>
                      <SelectItem value="welcoming">Acolhedor e Sofisticado</SelectItem>
                      <SelectItem value="fun">Divertido e Jovem</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="current_promotion" className="text-ig-white">Promoção ou Novidade Ativa</Label>
                  <Input
                    id="current_promotion"
                    value={formData.current_promotion}
                    onChange={(e) => handleInputChange('current_promotion', e.target.value)}
                    placeholder="Ex: 20% de desconto para reservas em junho"
                    className="bg-ig-gray/20 border-ig-gold/30 text-ig-white"
                  />
                </div>

                <div className="space-y-4 md:col-span-2">
                  <h4 className="font-semibold text-ig-white">Links Oficiais</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="website" className="text-ig-white">Website</Label>
                      <Input
                        id="website"
                        value={formData.website}
                        onChange={(e) => handleInputChange('website', e.target.value)}
                        placeholder="https://"
                        className="bg-ig-gray/20 border-ig-gold/30 text-ig-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="instagram" className="text-ig-white">Instagram</Label>
                      <Input
                        id="instagram"
                        value={formData.instagram}
                        onChange={(e) => handleInputChange('instagram', e.target.value)}
                        placeholder="@usuario"
                        className="bg-ig-gray/20 border-ig-gold/30 text-ig-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="facebook" className="text-ig-white">Facebook</Label>
                      <Input
                        id="facebook"
                        value={formData.facebook}
                        onChange={(e) => handleInputChange('facebook', e.target.value)}
                        placeholder="Nome da Página"
                        className="bg-ig-gray/20 border-ig-gold/30 text-ig-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="whatsapp" className="text-ig-white">WhatsApp</Label>
                      <Input
                        id="whatsapp"
                        value={formData.whatsapp}
                        onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                        placeholder="(11) 99999-9999"
                        className="bg-ig-gray/20 border-ig-gold/30 text-ig-white"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Button 
                  onClick={handleSave}
                  disabled={loading}
                  className="bg-ig-gold text-ig-dark hover:brightness-110"
                >
                  {loading ? 'Salvando...' : 'Salvar Configurações'}
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="account" className="space-y-6">
            <div className="bg-ig-dark border border-ig-gold/30 p-6">
              <h3 className="text-xl font-bold text-ig-white mb-4">Informações da Conta</h3>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-ig-white">Nome</Label>
                  <Input
                    id="name"
                    defaultValue="Usuário Teste"
                    className="bg-ig-gray/20 border-ig-gold/30 text-ig-white"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-ig-white">E-mail de Login</Label>
                  <Input
                    id="email"
                    defaultValue="usuario@teste.com"
                    disabled
                    className="bg-ig-gray/10 border-ig-gray/30 text-ig-gray"
                  />
                </div>
                
                <div className="pt-4">
                  <Button variant="outline" className="border-ig-gold/30 text-ig-gold hover:bg-ig-gold hover:text-ig-dark">
                    Alterar Senha
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="subscription" className="space-y-6">
            <div className="bg-ig-dark border border-ig-gold/30 p-6">
              <h3 className="text-xl font-bold text-ig-white mb-4">Assinatura e Créditos</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-ig-gray text-sm">Plano Atual</p>
                  <p className="text-ig-gold text-xl font-bold">GRATUITO</p>
                </div>
                
                <div className="text-center">
                  <p className="text-ig-gray text-sm">Créditos de IA</p>
                  <p className="text-ig-white text-xl font-bold">{credits}/15</p>
                </div>
                
                <div className="text-center">
                  <p className="text-ig-gray text-sm">Renovação</p>
                  <p className="text-ig-white text-xl font-bold">22/07/2025</p>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <Button className="bg-ig-gold text-ig-dark hover:brightness-110">
                  Upgrade para PRO
                </Button>
              </div>
              
              <div className="mt-6 pt-6 border-t border-ig-gold/30">
                <h4 className="font-semibold text-ig-white mb-4">Histórico de Faturas</h4>
                <p className="text-ig-gray text-sm">Nenhuma fatura encontrada.</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <div className="bg-ig-dark border border-ig-gold/30 p-6">
              <h3 className="text-xl font-bold text-ig-white mb-4">Preferências de Notificação</h3>
              <p className="text-ig-gray mb-6">Escolha quais e-mails você deseja receber:</p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="weekly-report" defaultChecked className="border-ig-gold/30" />
                  <Label htmlFor="weekly-report" className="text-ig-white">
                    Relatório Semanal de Desempenho
                  </Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox id="review-alerts" defaultChecked className="border-ig-gold/30" />
                  <Label htmlFor="review-alerts" className="text-ig-white">
                    Alertas de Novas Avaliações
                  </Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox id="tips-news" className="border-ig-gold/30" />
                  <Label htmlFor="tips-news" className="text-ig-white">
                    Dicas e Novidades da Plataforma
                  </Label>
                </div>
              </div>
              
              <div className="mt-6">
                <Button className="bg-ig-gold text-ig-dark hover:brightness-110">
                  Salvar Preferências
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
