import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "¡Gracias por suscribirte!",
        description: "Pronto recibirás nuestras novedades exclusivas.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
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
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 font-body focus:border-gold"
              required
            />
            <Button
              type="submit"
              className="bg-gold hover:bg-gold-light text-accent-foreground font-elegant tracking-wide px-8 whitespace-nowrap"
            >
              Suscribirse
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
