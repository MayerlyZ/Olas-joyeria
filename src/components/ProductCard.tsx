'use client'
import { useState } from "react";
import { Heart, ShoppingBag, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useCartFavorites } from "@/hooks/use-cart-favorites";
import { toast } from "react-toastify";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  description?: string;
  isNew?: boolean;
  isSale?: boolean;
}

const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  image,
  category,
  description,
  isNew,
  isSale,
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const { isFavorite, addToFavorites, removeFromFavorites, addToCart } = useCartFavorites();

  const isLiked = isFavorite(id);

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isLiked) {
      removeFromFavorites(id);
      toast.info(`${name} ha sido removido de tus favoritos`, {
        position: "top-right",
        autoClose: 3000,
      });
    } else {
      addToFavorites({
        productId: id,
        name,
        price,
        image,
        description,
        category,
      });
      toast.success(`${name} se ha añadido a tus favoritos`, {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({
      productId: id,
      name,
      price,
      image,
      quantity: 1,
    });
    toast.success(`${name} se ha añadido a tu carrito`, {
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
    <>
      <div
        className="group relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden bg-champagne rounded-sm">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Overlay */}
          <div
            className={`absolute inset-0 bg-primary/10 transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {isNew && (
              <span className="bg-accent text-accent-foreground px-3 py-1 text-xs font-body tracking-wider">
                NUEVO
              </span>
            )}
            {isSale && (
              <span className="bg-primary text-primary-foreground px-3 py-1 text-xs font-body tracking-wider">
                OFERTA
              </span>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-background hover:shadow-elegant"
            onClick={handleToggleFavorite}
          >
            <Heart
              size={18}
              className={`transition-colors ${
                isLiked ? "fill-accent text-accent" : "text-accent"
              }`}
            />
          </button>

          {/* Quick Actions */}
          <div
            className={`absolute bottom-4 left-4 right-4 flex gap-2 transition-all duration-300 ${
              isHovered
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <Button
              size="sm"
              className="flex-1 bg-background/95 backdrop-blur-sm text-foreground hover:bg-background font-body text-sm"
              onClick={handleAddToCart}
            >
              <ShoppingBag size={16} className="mr-2" />
              Añadir
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="bg-background/95 backdrop-blur-sm border-border/50 hover:bg-background"
              onClick={(e) => {
                e.preventDefault();
                setOpenModal(true);
              }}
            >
              <Eye size={16} />
            </Button>
          </div>
        </div>

        {/* Product Info */}
        <div className="mt-4 text-center">
          <p className="font-body text-xs text-gray-600 tracking-wider uppercase mb-1">
            {category}
          </p>
          <h3 className="font-elegant text-lg text-gray-900 mb-2 transition-colors group-hover:text-accent">
            {name}
          </h3>
          <div className="flex items-center justify-center gap-2">
            <span className="font-body text-gray-900 font-medium">
              {formatPrice(price)}
            </span>
            {originalPrice && (
              <span className="font-body text-sm text-gray-500 line-through">
                {formatPrice(originalPrice)}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Product Details Modal */}
      <Dialog open={openModal} onOpenChange={setOpenModal}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-gray-900">{name}</DialogTitle>
          </DialogHeader>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Product Image */}
            <div className="flex items-center justify-center">
              <img
                src={image}
                alt={name}
                className="max-h-96 object-contain rounded-lg"
              />
            </div>

            {/* Product Details */}
            <div className="space-y-4">
              <div>
                <p className="text-xs text-gray-600 tracking-wider uppercase mb-1">
                  {category}
                </p>
                <p className="text-sm text-gray-700 mb-4">
                  {description || "Sin descripción disponible"}
                </p>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-2xl font-elegant text-gray-900">
                    {formatPrice(price)}
                  </span>
                  {originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      {formatPrice(originalPrice)}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  onClick={handleAddToCart}
                  className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <ShoppingBag size={16} className="mr-2" />
                  Añadir al Carrito
                </Button>
                <Button
                  onClick={handleToggleFavorite}
                  variant="outline"
                  className="border-gray-300"
                >
                  <Heart
                    size={16}
                    className={`${
                      isLiked ? "fill-accent text-accent" : "text-accent"
                    }`}
                  />
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductCard;
