"use client";

import { Instagram, Facebook, Twitter } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const footerLinks = {
    Tienda: ["Collares", "Aretes", "Anillos", "Pulseras", "Ofertas"],
    Información: ["Sobre Nosotros", "Materiales", "Cuidado de Joyas", "Tallas", "FAQ"],
    Contacto: ["Ayuda", "Envíos", "Devoluciones", "Términos", "Privacidad"],
  };

  return (
    <footer className="bg-champagne border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Image
              src="/img/logo.png"
              alt="Olas Joyería"
              width={150}
              height={50}
              priority
              className="object-contain mb-4"
            />
            <p className="font-body text-muted-foreground mb-6 max-w-sm">
              Fragmentos de cielo para tu piel. Joyería artesanal con alma, 
              diseñada para quienes aprecian la belleza en los detalles.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-accent hover:text-accent hover:border-accent transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-accent hover:text-accent hover:border-accent transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-accent hover:text-accent hover:border-accent transition-colors"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-elegant text-lg text-foreground mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-sm text-muted-foreground">
            © 2025 OLAS Joyería. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
              alt="Visa"
              className="h-6 opacity-50"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
              alt="Mastercard"
              className="h-6 opacity-50"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
