// Categorías disponibles para productos
export const PRODUCT_CATEGORIES = [
  "Collares",
  "Aretes",
  "Anillos",
  "Pulseras",
] as const;

export type ProductCategory = (typeof PRODUCT_CATEGORIES)[number];

// Para filtros (incluye "Todos")
export const CATEGORY_FILTERS = ["Todos", ...PRODUCT_CATEGORIES] as const;
