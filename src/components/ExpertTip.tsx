
import { HelpCircle, X } from 'lucide-react';
import { useState } from 'react';

interface ExpertTipProps {
  tip: string;
}

const ExpertTip = ({ tip }: ExpertTipProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-ig-cyan hover:text-ig-gold transition-colors"
        title="Dica de Especialista"
      >
        <HelpCircle className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute z-10 right-0 top-6 w-80 bg-ig-dark border-2 border-ig-gold p-4 shadow-lg">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-ig-gold font-semibold text-sm">💡 Dica de Especialista</h4>
            <button
              onClick={() => setIsOpen(false)}
              className="text-ig-gray hover:text-ig-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-ig-gray text-sm leading-relaxed">{tip}</p>
        </div>
      )}
    </div>
  );
};

export default ExpertTip;
