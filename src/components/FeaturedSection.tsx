import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FeaturedSection = () => {
  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Featured Card 1 */}
          <div className="group relative overflow-hidden rounded-sm bg-background aspect-[4/5] md:aspect-auto">
            <img
              src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80"
              alt="Colección Esencial"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <p className="font-body text-xs text-gold-light tracking-[0.3em] uppercase mb-2">
                Nueva Temporada
              </p>
              <h3 className="font-display text-3xl md:text-4xl text-primary-foreground mb-4">
                Colección Esencial
              </h3>
              <p className="font-body text-primary-foreground/80 mb-6 max-w-sm">
                Piezas atemporales diseñadas para el uso diario. Elegancia que trasciende tendencias.
              </p>
              <Button
                variant="outline"
                className="bg-[#E8D9C4] border-[#E8D9C4] text-gray-900 hover:bg-[#ddc9b5] hover:border-[#ddc9b5] font-elegant tracking-wide group/btn"
              >
                Descubrir
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Featured Card 2 */}
          <div className="group relative overflow-hidden rounded-sm bg-background aspect-[4/5] md:aspect-auto">
            <img
              src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80"
              alt="Edición Limitada"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <p className="font-body text-xs text-gold tracking-[0.3em] uppercase mb-2">
                Exclusivo
              </p>
              <h3 className="font-display text-3xl md:text-4xl text-background mb-4">
                Edición Limitada
              </h3>
              <p className="font-body text-background/80 mb-6 max-w-sm">
                Solo 50 piezas de cada diseño. Para quienes buscan lo verdaderamente único.
              </p>
              <Button
                className="bg-[#E8D9C4] hover:bg-[#ddc9b5] text-gray-900 font-elegant tracking-wide group/btn"
              >
                Ver Colección
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
