"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiShoppingCart } from "react-icons/fi";
import { Leaf } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "About", href: "/about" },
  { name: "Organization", href: "/organization" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto h-[80px] px-1 flex items-center justify-between">
        {/* Sol logo */}
        <Link href="/" className="flex gap-2 items-center">
          <Leaf className = "w-6 h-6 text-green-600"/>
          <span className="text-3xl font-bold text-gray-900">CafeZo</span>
        </Link>

        {/* Menü */}
        <nav className="flex items-center gap-10">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative inline-flex items-center text-[17px] font-medium transition-colors
                  ${active ? "text-[var(--primary)]" : "text-gray-800 hover:text-[var(--primary)]"}
                `}
              >
                {item.name}
                {active && (
                  <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-[var(--primary)] rounded-full" />
                  
                )}
              </Link>
            );
          })}
        </nav>

        {/* Sağ buton */}
           <Link
          href="/cart"
          className="flex items-center gap-2 rounded-full bg-latte text-white px-5 py-2.5 font-semibold hover:bg-latteDark transition"
        >
          <FiShoppingCart className="text-xl" />
          CART
        </Link>
      </div>
    </header>
  );
}
