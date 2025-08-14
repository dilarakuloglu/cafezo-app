"use client";

import ProductGrid from "@/components/ProductGrid";

export default function MenuClient({ products }) {
  const handleAdd = (item) => {
    console.log("Sepete eklendi:", item);
    // ileride burada context/store veya API çağrısı yapılır
  };

  return <ProductGrid products={products} onAdd={handleAdd} />;
}
