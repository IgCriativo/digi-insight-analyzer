
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simular login
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Redirecionar para dashboard (simulado)
    window.location.href = '/dashboard';
  };

  return (
    <div className="min-h-screen bg-ig-dark flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        {/* Logo */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-ig-gold mb-2">IG CRIATIVO</h1>
          <p className="text-lg text-ig-white font-semibold">Plataforma PRO</p>
        </div>

        {/* Header */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-ig-white">Acesse seu Copiloto de Marketing</h2>
          <p className="text-ig-gray">Bem-vindo(a) de volta! Insira seus dados para continuar.</p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-ig-white">E-mail</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-ig-gray" />
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="pl-10 bg-ig-gray/20 border-ig-gold/30 text-ig-white placeholder:text-ig-gray focus:border-ig-gold"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-ig-white">Senha</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-ig-gray" />
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="pl-10 pr-10 bg-ig-gray/20 border-ig-gold/30 text-ig-white placeholder:text-ig-gray focus:border-ig-gold"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-ig-gray hover:text-ig-white"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-ig-gold text-ig-dark hover:brightness-110 font-bold py-3 flex items-center justify-center gap-2"
          >
            {loading ? (
              'Entrando...'
            ) : (
              <>
                ENTRAR NO PAINEL
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </Button>
        </form>

        {/* Links */}
        <div className="text-center space-y-4">
          <Link
            to="/forgot-password"
            className="text-ig-gold hover:text-ig-white transition-colors text-sm"
          >
            Esqueceu sua senha?
          </Link>
          
          <div className="text-ig-gray text-sm">
            Ainda não tem uma conta?{' '}
            <Link
              to="/"
              className="text-ig-cyan hover:text-ig-white transition-colors font-semibold"
            >
              Cadastre-se gratuitamente
            </Link>
          </div>
        </div>

        {/* Demo Notice */}
        <div className="bg-ig-gold/10 border border-ig-gold/30 p-4 text-center">
          <p className="text-ig-gold text-sm">
            <strong>DEMO:</strong> Use qualquer e-mail e senha para testar a plataforma
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
