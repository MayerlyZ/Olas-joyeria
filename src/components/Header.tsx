import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Heart, ShoppingBag, User, Menu, X, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { User as SupabaseUser } from "@supabase/supabase-js";
import { toast } from "@/hooks/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Sesión cerrada",
      description: "Has cerrado sesión correctamente",
    });
  };

  const navLinks = [
    { name: "Productos", href: "#productos" },
    { name: "Colecciones", href: "#colecciones" },
    { name: "Material", href: "#material" },
    { name: "Descuentos", href: "#descuentos" },
    { name: "Nosotros", href: "#nosotros" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:text-accent transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <a href="/" className="flex items-center">
            <span className="font-display text-3xl tracking-wider text-primary">
              OLAS
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-elegant text-lg text-foreground/80 hover:text-accent transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <div className="relative">
              {isSearchOpen && (
                <div className="absolute right-0 top-full mt-2 w-64 animate-fade-in-up">
                  <Input
                    type="search"
                    placeholder="Buscar joyas..."
                    className="bg-background border-gold/30 focus:border-accent font-body"
                    autoFocus
                    onBlur={() => setIsSearchOpen(false)}
                  />
                </div>
              )}
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground hover:text-accent hover:bg-transparent"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <Search size={20} />
              </Button>
            </div>

            {/* Wishlist */}
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground hover:text-accent hover:bg-transparent relative"
            >
              <Heart size={20} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent text-accent-foreground text-xs rounded-full flex items-center justify-center font-body">
                0
              </span>
            </Button>

            {/* Cart */}
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground hover:text-accent hover:bg-transparent relative"
            >
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent text-accent-foreground text-xs rounded-full flex items-center justify-center font-body">
                0
              </span>
            </Button>

            {/* User */}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-accent hover:text-gold hover:bg-transparent"
                  >
                    <User size={20} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-background border-border">
                  <div className="px-3 py-2">
                    <p className="font-body text-sm text-muted-foreground">Conectada como</p>
                    <p className="font-body text-sm text-foreground truncate">{user.email}</p>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="font-body cursor-pointer">
                    Mi Cuenta
                  </DropdownMenuItem>
                  <DropdownMenuItem className="font-body cursor-pointer">
                    Mis Pedidos
                  </DropdownMenuItem>
                  <DropdownMenuItem className="font-body cursor-pointer">
                    Lista de Deseos
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    onClick={handleLogout}
                    className="font-body cursor-pointer text-destructive focus:text-destructive"
                  >
                    <LogOut size={16} className="mr-2" />
                    Cerrar Sesión
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground hover:text-accent hover:bg-transparent"
                onClick={() => navigate("/auth")}
              >
                <User size={20} />
              </Button>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-6 border-t border-border/30 animate-fade-in-up">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-elegant text-xl text-foreground/80 hover:text-accent transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              {!user && (
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    navigate("/auth");
                  }}
                  className="font-elegant text-xl text-accent hover:text-gold transition-colors py-2 text-left"
                >
                  Iniciar Sesión
                </button>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
