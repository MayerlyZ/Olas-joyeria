'use client';

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <Image
        src="/img/fondo-olas.png"
        alt="Fondo Olas Joyería"
        fill
        className="absolute inset-0 object-cover"
        priority
      />
      
      {/* Overlay para mejorar legibilidad */}
      <div className="absolute inset-0 bg-black/20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tagline */}
          <p className="font-elegant text-lg md:text-xl text-accent tracking-[0.3em] uppercase mb-6 opacity-0 animate-fade-in-up">
            {t('hero.tagline')}
          </p>

          {/* Main Title */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-primary leading-tight mb-8 opacity-0 animate-fade-in-up delay-100">
            {t('hero.title')}
            <span className="block font-elegant italic text-4xl md:text-5xl lg:text-6xl mt-4 text-burgundy-light">
              {t('hero.subtitle')}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="font-body text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 opacity-0 animate-fade-in-up delay-200">
            {t('hero.description')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in-up delay-300">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-burgundy-light text-primary-foreground font-elegant text-lg tracking-wide px-8 py-6 group"
            >
              {t('hero.cta')}
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-[#E8D9C4] border-[#E8D9C4] text-gray-900 hover:bg-[#ddc9b5] hover:border-[#ddc9b5] font-elegant text-lg tracking-wide px-8 py-6"
            >
              Ver Novedades
            </Button>
          </div>

          
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="font-body text-xs text-accent tracking-wider">Descubre más</span>
        <div className="w-px h-12 bg-gradient-to-b from-accent/50 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
