'use client'
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { CATEGORY_FILTERS } from "@/lib/constants";

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
  stock?: number;
}

const ProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data.products || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts =
    activeCategory === "Todos"
      ? products
      : products.filter((p) => p.category === activeCategory);

  if (loading) {
    return (
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600">Cargando productos...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="productos" className="py-24 bg-cream">
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
          {CATEGORY_FILTERS.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={`font-elegant text-sm tracking-wide px-6 transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-[#E8D9C4] text-gray-900 hover:bg-[#ddc9b5] border-[#E8D9C4] hover:border-[#ddc9b5]"
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
              key={product._id}
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
            >
              <ProductCard 
                id={product._id}
                name={product.name}
                price={product.price}
                image={product.image}
                category={product.category}
                description={product.description}
              />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Button
            onClick={() => {
              // Scroll to the products section
              const productsSection = document.getElementById("productos");
              if (productsSection) {
                productsSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            variant="outline"
            size="lg"
            className="bg-[#E8D9C4] border-[#E8D9C4] text-gray-900 hover:bg-[#ddc9b5] hover:border-[#ddc9b5] font-elegant text-lg tracking-wide px-12"
          >
            Ver Toda la Colección
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
