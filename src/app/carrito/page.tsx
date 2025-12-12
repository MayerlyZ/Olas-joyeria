"use client";

import { useCartFavorites } from "@/hooks/use-cart-favorites";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Trash2, Plus, Minus, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { useSession } from "next-auth/react";
import PayPalButton from "@/components/PayPalButton";

export default function CartPage() {
  const router = useRouter();
  const { data: session } = useSession();
  const { cart, removeFromCart, updateCartQuantity, cartTotal, cartCount, mounted } = useCartFavorites();
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

  const handleRemove = (productId: string, name: string) => {
    removeFromCart(productId);
    toast.info(`${name} ha sido removido de tu carrito`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const handleQuantityChange = (productId: string, quantity: number) => {
    updateCartQuantity(productId, quantity);
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
            <ShoppingBag size={32} className="text-accent" />
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Mi Carrito</h1>
              <p className="text-gray-600 mt-2">{cartCount} productos</p>
            </div>
          </div>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingBag size={64} className="mx-auto text-gray-300 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Tu carrito está vacío</h2>
            <p className="text-gray-600 mb-8">Agrega productos para comenzar tu compra</p>
            <Link href="/">
              <Button>Explorar productos</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Products List */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.productId} className="bg-champagne rounded-sm p-4 border border-border/20 hover:border-border/50 transition-colors flex gap-4">
                    {/* Product Image */}
                    {item.image && (
                      <div className="w-24 h-32 flex-shrink-0 overflow-hidden rounded bg-gray-100">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}

                    {/* Product Info */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                        <p className="text-lg font-bold text-accent">{formatPrice(item.price)}</p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => handleQuantityChange(item.productId, item.quantity - 1)}
                        >
                          <Minus size={14} />
                        </Button>
                        <Input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => handleQuantityChange(item.productId, parseInt(e.target.value) || 1)}
                          className="w-16 h-8 text-center"
                          min="1"
                        />
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => handleQuantityChange(item.productId, item.quantity + 1)}
                        >
                          <Plus size={14} />
                        </Button>
                      </div>
                    </div>

                    {/* Subtotal and Remove */}
                    <div className="flex flex-col items-end justify-between">
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground mb-1">Subtotal</p>
                        <p className="text-lg font-bold text-foreground">{formatPrice(item.price * item.quantity)}</p>
                      </div>
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
                ))}
              </div>
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-sm p-6 border border-gray-200 sticky top-24">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Resumen del pedido</h3>

                <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium text-gray-900">{formatPrice(cartTotal)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Envío</span>
                    <span className="font-medium text-accent">Gratis</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Impuestos</span>
                    <span className="font-medium text-gray-900">Calculados al final</span>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-8">
                  <span className="text-lg font-semibold text-gray-900">Total</span>
                  <span className="text-2xl font-bold text-accent">{formatPrice(cartTotal)}</span>
                </div>

                {session ? (
                  <>
                    <PayPalButton
                      items={cart.map((item) => ({
                        _id: item.productId,
                        name: item.name,
                        price: item.price,
                        quantity: item.quantity,
                        image: item.image,
                      }))}
                      total={cartTotal}
                      onSuccess={() => {
                        removeFromCart;
                        router.push("/checkout/success");
                      }}
                    />
                    <Link href="/">
                      <Button variant="outline" className="w-full mt-3">
                        Continuar comprando
                      </Button>
                    </Link>
                  </>
                ) : (
                  <>
                    <Button 
                      onClick={() => router.push("/auth")}
                      className="w-full bg-primary hover:bg-primary/90 mb-3"
                    >
                      Inicia sesión para comprar
                    </Button>
                    <Link href="/">
                      <Button variant="outline" className="w-full">
                        Continuar comprando
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
