
import { useState } from 'react';
import { X } from 'lucide-react';

interface LeadCaptureModalProps {
  companyName: string;
  onLeadCaptured: (leadData: { name: string; email: string; whatsapp: string }) => void;
}

const LeadCaptureModal = ({ companyName, onLeadCaptured }: LeadCaptureModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.whatsapp) {
      onLeadCaptured(formData);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
      <div className="bg-ig-dark border border-ig-gold max-w-md w-full p-8 relative animate-fade-in">
        {/* Close button */}
        <button 
          className="absolute top-4 right-4 text-ig-gray hover:text-ig-white"
          onClick={() => {}}
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-ig-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="w-8 h-8 bg-ig-gold rounded-full"></div>
          </div>
          
          <h3 className="text-2xl font-bold text-ig-white mb-2">
            Seu diagnóstico está pronto!
          </h3>
          
          <p className="text-ig-gray">
            Insira seu melhor e-mail e WhatsApp para receber o relatório completo e dicas futuras.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Seu nome completo"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="ig-input w-full"
            required
          />

          <input
            type="email"
            placeholder="Seu melhor e-mail"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="ig-input w-full"
            required
          />

          <input
            type="tel"
            placeholder="WhatsApp (com DDD)"
            value={formData.whatsapp}
            onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
            className="ig-input w-full"
            required
          />

          <button
            type="submit"
            className="ig-button w-full py-3 mt-6"
          >
            VER MEU RELATÓRIO
          </button>
        </form>

        {/* Trust indicators */}
        <div className="mt-6 text-center">
          <p className="text-xs text-ig-gray">
            🔒 Seus dados estão protegidos. Não compartilhamos com terceiros.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeadCaptureModal;
