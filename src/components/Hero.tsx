import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-champagne to-background pt-20">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-float delay-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gold/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold/5 rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tagline */}
          <p className="font-elegant text-lg md:text-xl text-accent tracking-[0.3em] uppercase mb-6 opacity-0 animate-fade-in-up">
            Joyería Artesanal
          </p>

          {/* Main Title */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-primary leading-tight mb-8 opacity-0 animate-fade-in-up delay-100">
            Fragmentos de cielo
            <span className="block font-elegant italic text-4xl md:text-5xl lg:text-6xl mt-4 text-burgundy-light">
              para tu piel
            </span>
          </h1>

          {/* Subtitle */}
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 opacity-0 animate-fade-in-up delay-200">
            Descubre piezas únicas que cuentan historias. Cada joya es un susurro de elegancia, 
            diseñada para realzar tu belleza natural.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in-up delay-300">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-burgundy-light text-primary-foreground font-elegant text-lg tracking-wide px-8 py-6 group"
            >
              Explorar Colección
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-gold/50 text-foreground hover:bg-gold/10 hover:border-gold font-elegant text-lg tracking-wide px-8 py-6"
            >
              Ver Novedades
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-muted-foreground opacity-0 animate-fade-in-up delay-400">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                <span className="text-accent text-xs">✦</span>
              </div>
              <span className="font-body text-sm">Envío Gratis</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                <span className="text-accent text-xs">♡</span>
              </div>
              <span className="font-body text-sm">Garantía de por vida</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                <span className="text-accent text-xs">◇</span>
              </div>
              <span className="font-body text-sm">Materiales Premium</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="font-body text-xs text-muted-foreground tracking-wider">Descubre más</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold/50 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
