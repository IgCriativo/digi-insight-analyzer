
import { useState } from 'react';
import { Link } from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import LoadingAnalysis from '../components/LoadingAnalysis';
import LeadCaptureModal from '../components/LeadCaptureModal';
import ReportPage from '../components/ReportPage';

type AppState = 'landing' | 'loading' | 'lead-capture' | 'report';

const Index = () => {
  const [appState, setAppState] = useState<AppState>('landing');
  const [companyData, setCompanyData] = useState({ name: '', city: '' });
  const [leadData, setLeadData] = useState({ name: '', email: '', whatsapp: '' });

  const handleStartAnalysis = (companyName: string, city: string) => {
    console.log('Starting analysis for:', companyName, 'in', city);
    setCompanyData({ name: companyName, city });
    setAppState('loading');
  };

  const handleAnalysisComplete = () => {
    console.log('Analysis completed, showing lead capture modal');
    setAppState('lead-capture');
  };

  const handleLeadCaptured = (data: { name: string; email: string; whatsapp: string }) => {
    console.log('Lead captured:', data);
    setLeadData(data);
    
    // Here you would typically send this data to your backend/CRM
    // For demo purposes, we'll just log it and proceed to the report
    
    setAppState('report');
  };

  return (
    <>
      {/* Demo Dashboard Link - Remove in production */}
      <div className="fixed top-4 right-4 z-50">
        <Link
          to="/dashboard"
          className="bg-ig-cyan text-ig-dark px-4 py-2 font-bold text-sm hover:brightness-110 transition-all duration-200"
        >
          🚀 Ver Dashboard (Demo)
        </Link>
      </div>

      {appState === 'landing' && (
        <LandingPage onStartAnalysis={handleStartAnalysis} />
      )}

      {appState === 'loading' && (
        <LoadingAnalysis 
          companyName={companyData.name}
          onAnalysisComplete={handleAnalysisComplete}
        />
      )}

      {appState === 'lead-capture' && (
        <LeadCaptureModal 
          companyName={companyData.name}
          onLeadCaptured={handleLeadCaptured}
        />
      )}

      {appState === 'report' && (
        <ReportPage 
          companyName={companyData.name}
          city={companyData.city}
          leadData={leadData}
        />
      )}
    </>
  );
};

export default Index;
