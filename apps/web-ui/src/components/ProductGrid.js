"use client";
import ProductCard from "@/components/ProductCard";

export default function ProductGrid({ products, onAdd }) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-bold text-[var(--primary)] mb-6">Menü</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} {...p} onAdd={onAdd} />
        ))}
      </div>
    </section>
  );
}
