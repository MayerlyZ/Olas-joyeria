"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import { z } from "zod";

const authSchema = z.object({
  email: z.string().trim().email({ message: "Correo electrónico inválido" }).max(255),
  password: z.string().min(6, { message: "La contraseña debe tener al menos 6 caracteres" }).max(72),
});

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const validation = authSchema.safeParse({ email, password });
      if (!validation.success) {
        toast({
          title: "Error de validación",
          description: validation.error.errors[0].message,
          variant: "destructive",
        });
        setLoading(false);
        return;
      }

      if (!isLogin && password !== confirmPassword) {
        toast({
          title: "Error",
          description: "Las contraseñas no coinciden",
          variant: "destructive",
        });
        setLoading(false);
        return;
      }

      if (isLogin) {
        const result = await signIn("credentials", {
          redirect: false,
          email: email.trim(),
          password,
        });

        if (result?.error) {
          toast({
            title: "Error de inicio de sesión",
            description: "Correo o contraseña incorrectos",
            variant: "destructive",
          });
        } else {
          toast({
            title: "¡Bienvenida!",
            description: "Has iniciado sesión correctamente",
          });
          router.push("/");
        }
      } else {
        const response = await fetch("/api/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email.trim(), password }),
        });

        if (response.ok) {
          toast({
            title: "¡Cuenta creada!",
            description: "Tu cuenta ha sido creada exitosamente. Ahora inicia sesión.",
          });
          setIsLogin(true);
        } else {
          const errorData = await response.json();
          toast({
            title: "Error",
            description: errorData.message || "Ocurrió un error al registrar la cuenta.",
            variant: "destructive",
          });
        }
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Ocurrió un error inesperado",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (status === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div>Cargando...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-champagne to-background flex items-center justify-center p-4">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-float delay-300" />
      </div>

      <div className="relative w-full max-w-md">
        {/* Back Button */}
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 font-body"
        >
          <ArrowLeft size={18} />
          <span>Volver a la tienda</span>
        </button>

        {/* Auth Card */}
        <div className="bg-background/80 backdrop-blur-sm rounded-sm border border-gold/20 p-8 md:p-10 shadow-elegant">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="font-display text-3xl text-primary mb-2">OLAS</h1>
            <p className="font-elegant text-lg text-muted-foreground">
              {isLogin ? "Bienvenida de vuelta" : "Únete a nosotros"}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="font-body text-sm text-foreground">
                Correo electrónico
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className="bg-background border-border focus:border-gold font-body"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="font-body text-sm text-foreground">
                Contraseña
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-background border-border focus:border-gold font-body pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="font-body text-sm text-foreground">
                  Confirmar contraseña
                </Label>
                <Input
                  id="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-background border-border focus:border-gold font-body"
                  required
                />
              </div>
            )}

            {isLogin && (
              <div className="text-right">
                <button
                  type="button"
                  className="font-body text-sm text-accent hover:text-gold transition-colors"
                >
                  ¿Olvidaste tu contraseña?
                </button>
              </div>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-primary hover:bg-burgundy-light text-primary-foreground font-elegant text-lg tracking-wide py-6"
            >
              {loading ? "Cargando..." : isLogin ? "Iniciar Sesión" : "Crear Cuenta"}
            </Button>
          </form>

          {/* Toggle */}
          <div className="mt-8 text-center">
            <p className="font-body text-sm text-muted-foreground">
              {isLogin ? "¿No tienes una cuenta?" : "¿Ya tienes una cuenta?"}
              <button
                type="button"
                onClick={() => {
                  setIsLogin(!isLogin);
                  setPassword("");
                  setConfirmPassword("");
                }}
                className="ml-2 text-accent hover:text-gold font-medium transition-colors"
              >
                {isLogin ? "Regístrate" : "Inicia sesión"}
              </button>
            </p>
          </div>

          {/* Divider */}
          <div className="mt-8 flex items-center gap-4">
            <div className="flex-1 h-px bg-border" />
            <span className="font-body text-xs text-muted-foreground">o continúa con</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Social Login Placeholder */}
          <div className="mt-6 flex gap-4">
            <Button
              type="button"
              variant="outline"
              className="flex-1 border-border hover:bg-champagne font-body"
              onClick={() => signIn("google", { callbackUrl: "/" })}
            >
              Google
            </Button>
            <Button
              type="button"
              variant="outline"
              className="flex-1 border-border hover:bg-champagne font-body"
              disabled
            >
              Apple
            </Button>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-8 text-center font-body text-xs text-muted-foreground">
          Al continuar, aceptas nuestros{" "}
          <a href="#" className="text-accent hover:text-gold">
            Términos de Servicio
          </a>{" "}
          y{" "}
          <a href="#" className="text-accent hover:text-gold">
            Política de Privacidad
          </a>
        </p>
      </div>
    </div>
  );
};

export default Auth;
