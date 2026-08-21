 "use client";

import Link from "next/link";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur-xl">
      <div className="container-shop flex h-16 items-center gap-4">
        <Link href="/" className="shrink-0 text-2xl font-black tracking-tight">
          <span className="text-violet-500">DX</span>BIL
        </Link>

        <nav className="hidden gap-6 md:flex">
          <Link href="/" className="text-sm text-zinc-300 hover:text-white">Início</Link>
          <Link href="/geral" className="text-sm text-zinc-300 hover:text-white">Loja</Link>
          <a href="/#categorias" className="text-sm text-zinc-300 hover:text-white">Categorias</a>
        </nav>

        <div className="ml-auto hidden max-w-md flex-1 md:block">
          <div className="flex items-center rounded-xl border border-zinc-800 bg-zinc-900/80 px-3">
            <Search size={18} className="text-zinc-500" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") window.location.href = `/geral?search=${encodeURIComponent(search)}`;
              }}
              placeholder="Pesquisar produtos..."
              className="w-full bg-transparent px-3 py-2 text-sm outline-none placeholder:text-zinc-600"
            />
          </div>
        </div>

        <Link href="/carrinho" className="rounded-xl p-2 hover:bg-zinc-900" aria-label="Carrinho">
          <ShoppingCart size={21} />
        </Link>
        <button className="hidden rounded-xl p-2 hover:bg-zinc-900 sm:block" aria-label="Conta">
          <User size={21} />
        </button>
        <button onClick={() => setOpen(!open)} className="rounded-xl p-2 hover:bg-zinc-900 md:hidden" aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-zinc-800 bg-zinc-950 px-4 py-4 md:hidden">
          <div className="container-shop flex flex-col gap-4">
            <Link onClick={() => setOpen(false)} href="/">Início</Link>
            <Link onClick={() => setOpen(false)} href="/geral">Loja</Link>
            <a onClick={() => setOpen(false)} href="/#categorias">Categorias</a>
          </div>
        </div>
      )}
    </header>
  );
}