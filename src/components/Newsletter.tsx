"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "react-toastify";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Por favor ingresa tu correo", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("¡Gracias por suscribirte! Revisa tu correo.", {
          position: "top-right",
          autoClose: 3000,
        });
        setEmail("");
      } else {
        toast.error(data.error || "Error al suscribirse", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error("Newsletter error:", error);
      toast.error("Error al suscribirse. Intenta más tarde.", {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-elegant text-lg text-gold tracking-[0.3em] uppercase mb-4">
            Newsletter
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-6">
            Sé la primera en conocer nuestras novedades
          </h2>
          <p className="font-body text-primary-foreground/70 mb-10">
            Suscríbete y recibe acceso anticipado a nuevas colecciones, 
            ofertas exclusivas y consejos de estilo.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#E8D9C4] border-[#E8D9C4] text-gray-900 placeholder:text-gray-500 font-body focus:border-gray-700 focus:ring-gray-700"
              required
            />
            <Button
              type="submit"
              disabled={loading}
              className="bg-[#E8D9C4] hover:bg-[#ddc9b5] text-gray-900 font-elegant tracking-wide px-8 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Enviando..." : "Suscribirse"}
            </Button>
          </form>

          <p className="font-body text-xs text-primary-foreground/50 mt-6">
            Al suscribirte, aceptas recibir correos de OLAS. Puedes darte de baja en cualquier momento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
