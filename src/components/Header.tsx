"use client"; 
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, Heart, ShoppingBag, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const router = useRouter();

  const user = null; 

  interface NavLink {
    href: string;
    label: string;
  }

  const navLinks = [
    { href: "/productos", label: "Productos" },
    { href: "/nosotros", label: "Nosotros" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          <div className="flex items-center gap-2">

            <Button
              variant="ghost"
              size="icon"
              className="text-foreground hover:text-accent hover:bg-transparent"
              onClick={() => router.push("/auth")} // Redirigir a la página de Auth
            >
              <User size={20} />
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden py-6 border-t border-border/30 animate-fade-in-up">
            <div className="flex flex-col gap-4">
              {navLinks.map((link: NavLink) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-elegant text-xl text-accent hover:text-gold transition-colors py-2 text-left"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
               <button
                onClick={() => {
                  setIsMenuOpen(false);
                  router.push("/auth");
                }}
                className="font-elegant text-xl text-accent hover:text-gold transition-colors py-2 text-left"
              >
                Iniciar Sesión
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;