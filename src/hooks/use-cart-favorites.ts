"use client";

import { useState, useEffect, useCallback } from "react";

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  image?: string;
  quantity: number;
}

export interface FavoriteItem {
  productId: string;
  name: string;
  price: number;
  image?: string;
  description?: string;
  category?: string;
}

const FAVORITES_KEY = "olas_favoritos";
const CART_KEY = "olas_carrito";

export function useCartFavorites() {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [mounted, setMounted] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem(FAVORITES_KEY);
    const savedCart = localStorage.getItem(CART_KEY);

    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
    setMounted(true);
  }, []);

  // Save favorites to localStorage
  useEffect(() => {
    if (mounted) {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    }
  }, [favorites, mounted]);

  // Save cart to localStorage
  useEffect(() => {
    if (mounted) {
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    }
  }, [cart, mounted]);

  const addToFavorites = useCallback((item: FavoriteItem) => {
    setFavorites((prev) => {
      const exists = prev.some((fav) => fav.productId === item.productId);
      if (exists) return prev;
      return [...prev, item];
    });
  }, []);

  const removeFromFavorites = useCallback((productId: string) => {
    setFavorites((prev) => prev.filter((fav) => fav.productId !== productId));
  }, []);

  const isFavorite = useCallback((productId: string) => {
    return favorites.some((fav) => fav.productId === productId);
  }, [favorites]);

  const addToCart = useCallback((item: CartItem) => {
    setCart((prev) => {
      const exists = prev.find((cartItem) => cartItem.productId === item.productId);
      if (exists) {
        return prev.map((cartItem) =>
          cartItem.productId === item.productId
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      }
      return [...prev, item];
    });
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setCart((prev) => prev.filter((item) => item.productId !== productId));
  }, []);

  const updateCartQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.productId === productId ? { ...item, quantity } : item
      )
    );
  }, [removeFromCart]);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const favoritesCount = favorites.length;

  return {
    // Favorites
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    favoritesCount,

    // Cart
    cart,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    clearCart,
    cartTotal,
    cartCount,

    // State
    mounted,
  };
}
