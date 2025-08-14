"use client";

import Image from "next/image";
import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Vegan } from 'lucide-react';

export default function ProductCard({ id, name, price, image, desc, onAdd }) {
  const [qty, setQty] = useState(1);

  return (
    <div className="group rounded-2xl border bg-white shadow-sm hover:shadow-md transition overflow-hidden relative">
      
      <div className="relative w-full h-80">
        {image && <Image src={image} alt={name} fill className="object-cover" />}
        <div className="absolute top-2 right-3 rounded-full bg-[var(--primary)] text-white text-md px-3 py-2 font-bold shadow-lg">
          ₺{price?.toFixed?.(2) ?? price}
        </div>
      </div>

      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        {desc && <p className="mt-1 text-sm text-gray-600 line-clamp-2">{desc}</p>}

        
        <div className="mt-4 flex items-center gap-3">
          <div className="flex items-center rounded-full border">
            <button onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="w-8 h-8 grid place-items-center">–</button>
            <span className="px-3 w-8 text-center">{qty}</span>
            <button onClick={() => setQty((q) => Math.min(9, q + 1))}
                    className="w-8 h-8 grid place-items-center">+</button>
          </div>
        </div>
      </div>

      
      <button
        onClick={() => onAdd?.({ id, name, price, image, qty })}
        className="absolute bottom-3 right-3 rounded-full bg-[var(--primary)] text-white p-3 shadow-lg hover:bg- transition"
      >
        <FiShoppingCart className="w-5 h-5 " />
        
      </button>
    </div>
  );
}
