"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaShoppingCart } from "react-icons/fa";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "About", href: "/about" },
  { name: "Cart", href: "/cart" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-center gap-x-8 px-8 py-4 bg-grey-50 shadow-mg fixed top-0 left-0 w-full z-10" >
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`text-lg font-medium ${
            pathname === item.href ? "text-red-600 underline" : "text-gray-900" 
          }`}
        >
          {item.name}
        </Link>
      ))}  
    </nav>
  );
}
