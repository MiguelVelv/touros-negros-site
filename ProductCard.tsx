 "use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import type { Product } from "@/lib/products";

function addToCart(product: Product) {
  const current = JSON.parse(localStorage.getItem("touros-negros-cart") || "[]");
  const exists = current.find((item: Product) => item.id === product.id);
  const next = exists
    ? current.map((item: Product) => item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item)
    : [...current, { ...product, quantity: 1 }];
  localStorage.setItem("touros-negros-cart", JSON.stringify(next));
  window.dispatchEvent(new Event("cart-updated"));
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 transition hover:-translate-y-1 hover:border-violet-500/50">
      <Link href={`/produto/${product.id}`}>
        <div className="aspect-[4/3] overflow-hidden bg-zinc-950">
          <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        </div>
      </Link>
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs font-semibold text-violet-400">{product.game}</span>
          <span className="text-xs text-zinc-500">{product.category}</span>
        </div>
        <Link href={`/produto/${product.id}`}>
          <h3 className="min-h-12 font-bold transition group-hover:text-violet-400">{product.name}</h3>
        </Link>
        <div className="mt-4 flex items-end justify-between gap-3">
          <div>
            <p className="text-xs text-zinc-500">Por apenas</p>
            <strong className="text-xl">R$ {product.price.toFixed(2).replace(".", ",")}</strong>
          </div>
          <button
            onClick={() => addToCart(product)}
            className="rounded-xl bg-violet-600 p-3 transition hover:bg-violet-500"
            aria-label="Adicionar ao carrinho"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </article>
  );
}