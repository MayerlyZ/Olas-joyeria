'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { signIn, useSession, getSession } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { z } from 'zod';
import { toast } from 'react-toastify';

const authSchema = z.object({
  email: z.string().trim().email({ message: 'Correo electrónico inválido' }).max(255),
  password: z.string().min(6, { message: 'La contraseña debe tener al menos 6 caracteres' }).max(72),
});



const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === 'authenticated' && session?.user?.email) {
      // Si es admin, redirige al dashboard
      if ((session.user as any)?.role === 'admin') {
        router.push('/admin');
      } else {
        router.push('/');
      }
    }
  }, [status, session, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const validation = authSchema.safeParse({ email, password });
      if (!validation.success) {
        toast.error(validation.error.errors[0].message);
        setLoading(false);
        return;
      }

      if (!isLogin && password !== confirmPassword) {
        toast.error('Las contraseñas no coinciden');
        setLoading(false);
        return;
      }

      if (isLogin) {
        const result = await signIn('credentials', {
          redirect: false,
          email: email.trim(),
          password,
        });

        if (result?.error) {
          console.error('Login error:', result.error);
          toast.error('Correo o contraseña incorrectos');
          setLoading(false);
        } else if (result?.ok) {
          toast.success('¡Bienvenida!');
          setEmail('');
          setPassword('');
          
          // Obtiene la sesión actualizada después del login
          const session = await getSession();
          console.log('Session after login:', session);
          
          // Redirige según el rol
          if ((session?.user as any)?.role === 'admin') {
            setTimeout(() => {
              router.push('/admin');
            }, 500);
          } else {
            setTimeout(() => {
              router.push('/');
            }, 500);
          }
        }
      } else {
        const response = await fetch('/api/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: email.trim(), password }),
        });

        if (response.ok) {
          toast.success('¡Cuenta creada! Ahora inicia sesión.');
          setEmail('');
          setPassword('');
          setConfirmPassword('');
          setIsLogin(true);
        } else {
          const errorData = await response.json();
          toast.error(errorData.message || 'Ocurrió un error al registrar la cuenta.');
        }
      }
    } catch (error) {
      toast.error('Ocurrió un error inesperado');
    } finally {
      setLoading(false);
    }
  };

  if (status === 'loading') {
    return (
      <div className="flex min-h-screen items-center justify-center bg-cream">
        <div className="text-gray-600">Cargando...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden flex">
        {/* Left Side - Image */}
        <div className="hidden lg:flex lg:w-1/2 bg-white items-stretch">
          <div className="relative w-full">
            <Image
              src="/img/joyas.jpg"
              alt="Joyas Olas"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-1/2 flex flex-col p-8">
          {/* Back Button */}
          <button
            onClick={() => router.push('/')}
            className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mb-6 self-start"
          >
            <ArrowLeft size={18} />
            <span className="font-medium text-sm">Volver</span>
          </button>

          {/* Form Content */}
          <div className="flex flex-col flex-1 justify-center">
            {/* Header */}
            <div className="text-center mb-4">
              <Image
                src="/img/logo.png"
                alt="Olas Joyería"
                width={240}
                height={80}
                priority
                className="mx-auto object-contain"
              />
              <p className="font-display text-gray-600 text-lg">
                {isLogin ? 'Bienvenida' : 'Crea tu cuenta'}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email */}
              <div className="space-y-1.5">
                <label className="block text-gray-700 font-medium text-xs">Correo</label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="w-full bg-blue-50 border-0 text-gray-900 placeholder:text-gray-500 rounded px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-accent"
                  required
                />
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <label className="block text-gray-700 font-medium text-xs">Contraseña</label>
                <div className="relative">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-blue-50 border-0 text-gray-900 placeholder:text-gray-500 rounded px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-accent"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              {!isLogin && (
                <div className="space-y-1.5">
                  <label className="block text-gray-700 font-medium text-xs">Confirmar</label>
                  <div className="relative">
                    <Input
                      type={showConfirmPassword ? 'text' : 'password'}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full bg-blue-50 border-0 text-gray-900 placeholder:text-gray-500 rounded px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-accent"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>
              )}

              {/* Forgot Password Link */}
              {isLogin && (
                <div className="text-right">
                  <button
                    type="button"
                    className="text-accent hover:text-accent/80 text-xs font-medium"
                  >
                    ¿Olvidaste tu contraseña?
                  </button>
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-primary hover:bg-primary/90 text-white font-serif text-base py-2 rounded mt-4"
              >
                {loading ? 'Cargando...' : isLogin ? 'Iniciar' : 'Crear'}
              </Button>
            </form>

            {/* Toggle Auth Mode */}
            <div className="mt-4 text-center">
              <p className="text-gray-600 text-xs">
                {isLogin ? '¿No tienes cuenta? ' : '¿Ya tienes cuenta? '}
                <button
                  type="button"
                  onClick={() => {
                    setIsLogin(!isLogin);
                    setPassword('');
                    setConfirmPassword('');
                  }}
                  className="text-accent font-medium hover:text-accent/80"
                >
                  {isLogin ? 'Regístrate' : 'Inicia sesión'}
                </button>
              </p>
            </div>

            {/* Divider */}
            <div className="my-4 flex items-center gap-2">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-gray-500 text-xs">o continúa con</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* Social Buttons */}
            <div className="flex gap-3">
              <Button
                type="button"
                className="flex-1 bg-black hover:bg-gray-800 text-white rounded text-sm py-2"
                onClick={() => signIn('google', { callbackUrl: '/' })}
              >
                Google
              </Button>
              <Button
                type="button"
                className="flex-1 bg-black hover:bg-gray-800 text-white rounded text-sm py-2"
                disabled
              >
                Apple
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
