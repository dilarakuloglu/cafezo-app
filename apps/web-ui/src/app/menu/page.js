import MenuClient from "@/components/MenuClient";

import latteImg from "./latte.jpg";
import americanoImg from "./americano.jpg";
import brownieImg from "./brownie.jpg";

const products = [
  { id: "latte", name: "Latte", price: 95, image: latteImg },
  { id: "americano", name: "Americano", price: 80, image: americanoImg },
  { id: "brownie", name: "Brownie", price: 70, image: brownieImg },
];

export const metadata = { title: "Menu — CafeZo" };

export default function MenuPage() {
  return <MenuClient products={products} />;
}
