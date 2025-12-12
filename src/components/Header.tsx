"use client"; 
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Search, Heart, ShoppingBag, User, Menu, X, LogOut, BarChart3, Package, Users, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { useSession, signOut } from "next-auth/react";
import { useCartFavorites } from "@/hooks/use-cart-favorites";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();
  const { favoritesCount, cartCount, mounted } = useCartFavorites();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []); 

  interface NavLink {
    href: string;
    label: string;
  }

  interface AdminLink {
    href: string;
    label: string;
    icon: React.ReactNode;
  }

  const navLinks = [
    { href: "/productos", label: "Productos" },
    { href: "/nosotros", label: "Nosotros" },
  ];

  const adminLinks: AdminLink[] = [
    { href: "/admin", label: "Dashboard", icon: <BarChart3 size={16} /> },
    { href: "/admin/productos", label: "Productos", icon: <Package size={16} /> },
    { href: "/admin/usuarios", label: "Usuarios", icon: <Users size={16} /> },
    { href: "/admin/pedidos", label: "Pedidos", icon: <ShoppingCart size={16} /> },
    { href: "/admin/ganancias", label: "Ganancias", icon: <BarChart3 size={16} /> },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-20 relative px-12">
          {/* Logo/Brand - Centered */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Image
              src="/img/logo.png"
              alt="Olas Joyería"
              width={180}
              height={60}
              priority
              className="object-contain hidden lg:block"
            />
            <Image
              src="/img/logo.png"
              alt="Olas Joyería"
              width={120}
              height={40}
              priority
              className="object-contain lg:hidden"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 absolute left-0">
            {navLinks.map((link: NavLink) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {session && session.user?.role === "admin" && (
              <>
                <div className="border-l border-border/30 pl-8">
                  <div className="flex items-center gap-4">
                    {adminLinks.map((link: AdminLink) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors text-sm"
                        title={link.label}
                      >
                        {link.icon}
                        <span className="hidden xl:inline">{link.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </>
            )}
          </nav>

          {/* Right side icons */}
          <div className="flex items-center gap-2 absolute right-0">
            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* Favorites */}
            <Link href="/favoritos">
              <Button
                variant="ghost"
                size="icon"
                className="text-accent hover:text-accent hover:bg-transparent relative"
                title="Mis Favoritos"
              >
                <Heart size={20} />
                {hydrated && mounted && favoritesCount > 0 && (
                  <span className="absolute top-0 right-0 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center -translate-y-1 translate-x-1">
                    {favoritesCount}
                  </span>
                )}
              </Button>
            </Link>

            {/* Cart */}
            <Link href="/carrito">
              <Button
                variant="ghost"
                size="icon"
                className="text-accent hover:text-accent hover:bg-transparent relative"
                title="Mi Carrito"
              >
                <ShoppingBag size={20} />
                {hydrated && mounted && cartCount > 0 && (
                  <span className="absolute top-0 right-0 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center -translate-y-1 translate-x-1">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>

            {session ? (
              <>
                {session.user?.role === "admin" && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-accent hover:text-accent hover:bg-transparent"
                    onClick={() => router.push("/admin")}
                    title="Panel de Administrador"
                  >
                    <User size={20} />
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-accent hover:text-red-500 hover:bg-transparent"
                  onClick={async () => {
                    await signOut({ redirect: false });
                    window.location.href = "/";
                  }}
                  title="Cerrar sesión"
                >
                  <LogOut size={20} />
                </Button>
              </>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                className="text-accent hover:text-accent hover:bg-transparent"
                onClick={() => router.push("/auth")}
              >
                <User size={20} />
              </Button>
            )}

            {/* Mobile menu toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-accent hover:text-accent hover:bg-transparent"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}

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

              {session && session.user?.role === "admin" && (
                <>
                  <div className="border-t border-border/30 pt-4 mt-4">
                    <p className="text-sm text-gray-500 mb-3 font-semibold">PANEL DE ADMINISTRADOR</p>
                    {adminLinks.map((link: AdminLink) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="font-elegant text-lg text-blue-600 hover:text-blue-800 transition-colors py-2 text-left flex items-center gap-2"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.icon}
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </>
              )}

              {session ? (
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    signOut({ redirect: true, callbackUrl: "/" });
                  }}
                  className="font-elegant text-xl text-red-500 hover:text-red-700 transition-colors py-2 text-left flex items-center gap-2 border-t border-border/30 pt-4 mt-4"
                >
                  <LogOut size={20} />
                  Cerrar Sesión
                </button>
              ) : (
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    router.push("/auth");
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