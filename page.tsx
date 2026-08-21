 "use client";

import Link from "next/link";
import { ArrowLeft, Minus, Plus, Trash2, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";

type CartItem = { id: string; name: string; price: number; image: string; quantity: number; };

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    try { setItems(JSON.parse(localStorage.getItem("touros-negros-cart") || "[]")); } catch { setItems([]); }
  }, []);

  function save(next: CartItem[]) {
    setItems(next);
    localStorage.setItem("touros-negros-cart", JSON.stringify(next));
  }

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!items.length) return (
    <main className="min-h-screen py-16">
      <div className="container-shop">
        <Link href="/geral" className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white"><ArrowLeft size={16} />Continuar comprando</Link>
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-10 text-center">
          <ShoppingCart size={50} className="mx-auto text-zinc-600" />
          <h1 className="mt-5 text-2xl font-black">Seu carrinho está vazio</h1>
          <p className="mt-2 text-zinc-500">Adicione produtos para começar sua compra.</p>
          <Link href="/geral" className="mt-7 inline-block rounded-xl bg-violet-600 px-6 py-3 font-bold hover:bg-violet-500">Ver produtos</Link>
        </div>
      </div>
    </main>
  );

  return (
    <main className="min-h-screen py-10">
      <div className="container-shop">
        <Link href="/geral" className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white"><ArrowLeft size={16} />Continuar comprando</Link>
        <h1 className="mb-7 text-3xl font-black">Seu carrinho</h1>
        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <div className="space-y-3">
            {items.map(item => (
              <div key={item.id} className="flex gap-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
                <img src={item.image} alt="" className="h-24 w-24 rounded-xl object-cover" />
                <div className="min-w-0 flex-1">
                  <h2 className="font-bold">{item.name}</h2>
                  <p className="mt-1 text-sm text-zinc-500">R$ {item.price.toFixed(2).replace(".", ",")}</p>
                  <div className="mt-3 flex items-center gap-2">
                    <button onClick={() => save(items.map(x => x.id === item.id ? {...x, quantity: Math.max(1, x.quantity-1)} : x))} className="rounded-lg border border-zinc-700 p-1"><Minus size={15}/></button>
                    <span className="w-6 text-center">{item.quantity}</span>
                    <button onClick={() => save(items.map(x => x.id === item.id ? {...x, quantity: x.quantity+1} : x))} className="rounded-lg border border-zinc-700 p-1"><Plus size={15}/></button>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <strong>R$ {(item.price * item.quantity).toFixed(2).replace(".", ",")}</strong>
                  <button onClick={() => save(items.filter(x => x.id !== item.id))} className="text-zinc-500 hover:text-red-400" aria-label="Remover"><Trash2 size={18}/></button>
                </div>
              </div>
            ))}
          </div>
          <aside className="h-fit rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="text-xl font-black">Resumo</h2>
            <div className="mt-5 flex justify-between text-zinc-400"><span>Subtotal</span><span>R$ {total.toFixed(2).replace(".", ",")}</span></div>
            <div className="my-5 border-t border-zinc-800" />
            <div className="flex justify-between text-lg font-black"><span>Total</span><span>R$ {total.toFixed(2).replace(".", ",")}</span></div>
            <button disabled className="mt-6 w-full cursor-not-allowed rounded-xl bg-violet-600/50 px-5 py-4 font-bold">Pagamento será conectado</button>
            <p className="mt-3 text-xs leading-5 text-zinc-600">A integração de Pix/gateway precisa ser configurada com suas credenciais antes de receber pagamentos reais.</p>
          </aside>
        </div>
      </div>
    </main>
  );
}