import { useState } from "react";
import { Heart, ShoppingBag, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
}

const ProductCard = ({
  name,
  price,
  originalPrice,
  image,
  category,
  isNew,
  isSale,
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(value);
  };

  return (
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
          onClick={() => setIsLiked(!isLiked)}
        >
          <Heart
            size={18}
            className={`transition-colors ${
              isLiked ? "fill-accent text-accent" : "text-foreground"
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
          >
            <ShoppingBag size={16} className="mr-2" />
            Añadir
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="bg-background/95 backdrop-blur-sm border-border/50 hover:bg-background"
          >
            <Eye size={16} />
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-4 text-center">
        <p className="font-body text-xs text-muted-foreground tracking-wider uppercase mb-1">
          {category}
        </p>
        <h3 className="font-elegant text-lg text-foreground mb-2 transition-colors group-hover:text-accent">
          {name}
        </h3>
        <div className="flex items-center justify-center gap-2">
          <span className="font-body text-foreground font-medium">
            {formatPrice(price)}
          </span>
          {originalPrice && (
            <span className="font-body text-sm text-muted-foreground line-through">
              {formatPrice(originalPrice)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
