 "use client";

const categories = ["Todos", "Contas", "Itens", "Kits", "Moedas"];

export default function CategoryBar() {
  return (
    <section id="categorias" className="py-8">
      <div className="container-shop">
        <div className="mb-5">
          <h2 className="text-xl font-bold">Categorias</h2>
          <p className="text-sm text-zinc-500">Encontre exatamente o que procura.</p>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {categories.map((category, index) => (
            <a
              key={category}
              href={`/geral${category === "Todos" ? "" : `?category=${encodeURIComponent(category)}`}`}
              className={`whitespace-nowrap rounded-xl border px-5 py-3 text-sm font-semibold transition ${
                index === 0
                  ? "border-violet-600 bg-violet-600 text-white"
                  : "border-zinc-800 bg-zinc-900 text-zinc-400 hover:border-violet-500 hover:text-white"
              }`}
            >
              {category}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}