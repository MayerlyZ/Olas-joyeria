"use client";

import { useCartFavorites } from "@/hooks/use-cart-favorites";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, Trash2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

export default function FavoritesPage() {
  const { favorites, removeFromFavorites, addToCart, mounted } = useCartFavorites();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated || !mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto mb-4"></div>
          <p>Cargando...</p>
        </div>
      </div>
    );
  }

  const handleAddToCart = (favorite: any) => {
    addToCart({
      productId: favorite.productId,
      name: favorite.name,
      price: favorite.price,
      image: favorite.image,
      quantity: 1,
    });
    toast.success(`${favorite.name} se ha añadido a tu carrito`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const handleRemove = (productId: string, name: string) => {
    removeFromFavorites(productId);
    toast.info(`${name} ha sido removido de tus favoritos`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="min-h-screen bg-cream py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mb-6">
            <ArrowLeft size={18} />
            <span>Volver a la tienda</span>
          </Link>

          <div className="flex items-center gap-3">
            <Heart size={32} className="fill-accent text-accent" />
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Mis Favoritos</h1>
              <p className="text-gray-600 mt-2">{favorites.length} productos guardados</p>
            </div>
          </div>
        </div>

        {favorites.length === 0 ? (
          <div className="text-center py-16">
            <Heart size={64} className="mx-auto text-gray-300 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">No tienes favoritos aún</h2>
            <p className="text-gray-600 mb-8">Agrega productos a tus favoritos para verlos aquí</p>
            <Link href="/">
              <Button>Explorar productos</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {favorites.map((item) => (
              <div key={item.productId} className="bg-champagne rounded-sm overflow-hidden border border-border/20 hover:border-border/50 transition-colors">
                {/* Product Image */}
                {item.image && (
                  <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                  {item.category && (
                    <p className="text-xs text-gray-600 uppercase tracking-wider mb-2">{item.category}</p>
                  )}
                  {item.description && (
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.description}</p>
                  )}

                  <div className="text-lg font-bold text-accent mb-4">{formatPrice(item.price)}</div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button
                      className="flex-1 bg-primary hover:bg-primary/90"
                      onClick={() => handleAddToCart(item)}
                    >
                      <ShoppingBag size={16} className="mr-2" />
                      Carrito
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="text-accent hover:text-accent hover:bg-accent/10"
                      onClick={() => handleRemove(item.productId, item.name)}
                    >
                      <Trash2 size={18} />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
