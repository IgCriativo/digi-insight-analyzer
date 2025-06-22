
import { useState } from 'react';
import { FileText, Plus, TrendingUp, Calendar, Eye } from 'lucide-react';

const ReportsOverview = () => {
  const [selectedReports, setSelectedReports] = useState<number[]>([]);

  const reports = [
    {
      id: 1,
      date: '2024-01-15',
      score: 78,
      change: +13,
      status: 'Atual'
    },
    {
      id: 2,
      date: '2023-12-15',
      score: 65,
      change: +8,
      status: 'Anterior'
    },
    {
      id: 3,
      date: '2023-11-15',
      score: 57,
      change: +5,
      status: 'Anterior'
    },
    {
      id: 4,
      date: '2023-10-15',
      score: 52,
      change: +7,
      status: 'Anterior'
    }
  ];

  const handleReportSelect = (reportId: number) => {
    setSelectedReports(prev => {
      if (prev.includes(reportId)) {
        return prev.filter(id => id !== reportId);
      } else if (prev.length < 2) {
        return [...prev, reportId];
      }
      return prev;
    });
  };

  const canCompare = selectedReports.length === 2;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-ig-white mb-2">Meus Relatórios</h1>
          <p className="text-ig-gray">Acompanhe a evolução da sua presença digital ao longo do tempo.</p>
        </div>
        
        <button className="bg-ig-gold text-ig-dark px-6 py-3 font-bold hover:brightness-110 transition-all duration-200 hover:scale-105 flex items-center gap-2">
          <Plus className="w-5 h-5" />
          Gerar Novo Relatório
        </button>
      </div>

      {/* Comparison Tool */}
      {selectedReports.length > 0 && (
        <div className="bg-ig-gold/20 border-2 border-ig-gold p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-ig-white mb-1">Ferramenta de Comparação</h3>
              <p className="text-ig-gray text-sm">
                {selectedReports.length === 1 
                  ? 'Selecione mais um relatório para comparar' 
                  : 'Dois relatórios selecionados - pronto para comparar!'
                }
              </p>
            </div>
            
            {canCompare && (
              <button className="bg-ig-cyan text-ig-dark px-4 py-2 font-semibold hover:brightness-110 transition-colors">
                Comparar Relatórios
              </button>
            )}
          </div>
        </div>
      )}

      {/* Reports List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reports.map((report) => {
          const isSelected = selectedReports.includes(report.id);
          const formattedDate = new Date(report.date).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
          });

          return (
            <div
              key={report.id}
              className={`bg-ig-dark border-2 p-6 cursor-pointer transition-all duration-200 hover:scale-105 ${
                isSelected ? 'border-ig-cyan' : 'border-ig-gold/30 hover:border-ig-gold'
              }`}
              onClick={() => handleReportSelect(report.id)}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <FileText className={`w-6 h-6 ${isSelected ? 'text-ig-cyan' : 'text-ig-gold'}`} />
                <span className={`text-xs px-2 py-1 ${
                  report.status === 'Atual' 
                    ? 'bg-ig-gold text-ig-dark' 
                    : 'bg-ig-gray/20 text-ig-gray'
                }`}>
                  {report.status}
                </span>
              </div>

              {/* Date */}
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="w-4 h-4 text-ig-gray" />
                <span className="text-ig-gray text-sm">{formattedDate}</span>
              </div>

              {/* Score */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-3xl font-bold text-ig-white">{report.score}</span>
                  <div className={`flex items-center gap-1 ${report.change > 0 ? 'text-ig-cyan' : 'text-ig-red'}`}>
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-semibold">+{report.change}</span>
                  </div>
                </div>
                <div className="w-full bg-ig-gray/20 h-2">
                  <div 
                    className="bg-gradient-to-r from-ig-gold to-ig-cyan h-2 transition-all duration-500"
                    style={{ width: `${report.score}%` }}
                  />
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <button className="flex-1 bg-ig-gold/20 text-ig-gold px-3 py-2 text-sm font-semibold hover:bg-ig-gold/30 transition-colors flex items-center justify-center gap-2">
                  <Eye className="w-4 h-4" />
                  Ver Detalhes
                </button>
              </div>

              {/* Selection indicator */}
              {isSelected && (
                <div className="mt-3 text-center">
                  <span className="text-ig-cyan text-xs font-semibold">
                    ✓ Selecionado para comparação
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Empty State para usuários sem relatórios */}
      {reports.length === 0 && (
        <div className="text-center py-12">
          <FileText className="w-16 h-16 text-ig-gray mx-auto mb-4" />
          <h3 className="text-xl font-bold text-ig-white mb-2">Nenhum relatório ainda</h3>
          <p className="text-ig-gray mb-6">Gere seu primeiro diagnóstico digital para começar a acompanhar sua evolução.</p>
          <button className="bg-ig-gold text-ig-dark px-6 py-3 font-bold hover:brightness-110 transition-all duration-200">
            Gerar Primeiro Relatório
          </button>
        </div>
      )}
    </div>
  );
};

export default ReportsOverview;
