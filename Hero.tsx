import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-800">
      <div className="container-shop py-20 md:py-28">
        <div className="glow max-w-2xl">
          <span className="mb-5 inline-flex rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-violet-400">
            Loja Gamer
          </span>
          <h1 className="text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            Suas contas e itens
            <span className="block text-violet-500">em um só lugar.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400 md:text-lg">
            Encontre contas, itens e kits para seus jogos favoritos. Compra rápida e catálogo organizado.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/geral" className="rounded-xl bg-violet-600 px-6 py-3 font-bold transition hover:bg-violet-500">
              Ver produtos
            </Link>
            <a href="#categorias" className="rounded-xl border border-zinc-700 px-6 py-3 font-bold transition hover:bg-zinc-900">
              Categorias
            </a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />
    </section>
  );
}