import { useState } from "react";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Collar Luna Creciente",
    price: 189000,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&q=80",
    category: "Collares",
    isNew: true,
  },
  {
    id: 2,
    name: "Aretes Gota de Rocío",
    price: 145000,
    originalPrice: 180000,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&q=80",
    category: "Aretes",
    isSale: true,
  },
  {
    id: 3,
    name: "Anillo Serpiente Dorada",
    price: 220000,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&q=80",
    category: "Anillos",
    isNew: true,
  },
  {
    id: 4,
    name: "Pulsera Cadena Infinita",
    price: 165000,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&q=80",
    category: "Pulseras",
  },
  {
    id: 5,
    name: "Collar Perla Barroca",
    price: 275000,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&q=80",
    category: "Collares",
  },
  {
    id: 6,
    name: "Aretes Mariposa Cristal",
    price: 128000,
    originalPrice: 160000,
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=500&q=80",
    category: "Aretes",
    isSale: true,
  },
  {
    id: 7,
    name: "Anillo Solitario Elegance",
    price: 340000,
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=500&q=80",
    category: "Anillos",
  },
  {
    id: 8,
    name: "Pulsera Charm Collection",
    price: 195000,
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=500&q=80",
    category: "Pulseras",
    isNew: true,
  },
];

const categories = ["Todos", "Collares", "Aretes", "Anillos", "Pulseras"];

const ProductGrid = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProducts =
    activeCategory === "Todos"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="productos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-elegant text-lg text-accent tracking-[0.3em] uppercase mb-4">
            Nuestra Colección
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">
            Piezas Destacadas
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Cada joya ha sido cuidadosamente seleccionada para ofrecerte lo mejor 
            en diseño y calidad. Encuentra la pieza perfecta que hable de ti.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={`font-elegant text-sm tracking-wide px-6 transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "border-gold/30 text-foreground hover:bg-gold/10 hover:border-gold"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-elegant text-lg tracking-wide px-12"
          >
            Ver Toda la Colección
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
