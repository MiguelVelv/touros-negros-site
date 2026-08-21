 "use client";

import { ShoppingCart } from "lucide-react";
import type { Product } from "@/lib/products";

export default function AddToCart({ product }: { product: Product }) {
  function add() {
    const current = JSON.parse(localStorage.getItem("touros-negros-cart") || "[]");
    const exists = current.find((item: Product) => item.id === product.id);
    const next = exists
      ? current.map((item: Product) => item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item)
      : [...current, { ...product, quantity: 1 }];
    localStorage.setItem("touros-negros-cart", JSON.stringify(next));
    window.location.href = "/carrinho";
  }

  return (
    <button onClick={add} className="mt-8 flex items-center justify-center gap-3 rounded-xl bg-violet-600 px-6 py-4 font-bold transition hover:bg-violet-500">
      <ShoppingCart size={20} />Comprar agora
    </button>
  );
}