
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  MessageSquare, 
  Calendar, 
  Search, 
  Settings,
  Menu,
  X,
  LogOut
} from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: 'Painel Principal', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Meus Relatórios', href: '/reports', icon: FileText },
    { name: 'Reputação Online', href: '/reputation', icon: MessageSquare },
    { name: 'Planejador Social', href: '/social-planner', icon: Calendar },
    { name: 'SEO Local', href: '/local-seo', icon: Search },
    { name: 'Guia Rápido', href: '/learning', icon: FileText },
    { name: 'Configurações', href: '/settings', icon: Settings },
  ];

  const handleLogout = () => {
    // Simular logout - em produção seria com Supabase
    const confirmLogout = window.confirm('Você tem certeza que deseja sair?');
    if (confirmLogout) {
      // Aqui seria supabase.auth.signOut()
      navigate('/login');
    }
  };

  return (
    <div className="min-h-screen bg-ig-dark flex">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-ig-dark border-r border-ig-gold/30 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between h-16 px-6 border-b border-ig-gold/30">
            <div>
              <h1 className="text-xl font-bold text-ig-gold">IG CRIATIVO</h1>
              <p className="text-xs text-ig-gray">Plataforma PRO</p>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-ig-gray hover:text-ig-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`
                    flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors
                    ${isActive 
                      ? 'bg-ig-gold/20 text-ig-gold border-r-2 border-ig-gold' 
                      : 'text-ig-gray hover:text-ig-white hover:bg-ig-gold/10'
                    }
                  `}
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </Link>
              );
            })}
            
            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-ig-red hover:text-ig-white hover:bg-ig-red/10 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              Sair
            </button>
          </nav>

          {/* User info */}
          <div className="p-4 border-t border-ig-gold/30">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-ig-gold/20 rounded-full flex items-center justify-center">
                <span className="text-ig-gold text-sm font-semibold">U</span>
              </div>
              <div>
                <p className="text-sm font-medium text-ig-white">Usuário Demo</p>
                <p className="text-xs text-ig-gray">Plano Gratuito</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-h-screen lg:ml-0">
        {/* Top bar */}
        <header className="h-16 bg-ig-dark border-b border-ig-gold/30 flex items-center justify-between px-6">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-ig-gray hover:text-ig-white"
          >
            <Menu className="w-6 h-6" />
          </button>
          
          <div className="flex items-center gap-4">
            <span className="text-ig-gray text-sm">Copiloto de Marketing Digital com IA</span>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
