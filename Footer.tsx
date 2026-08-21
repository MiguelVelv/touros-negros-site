export default function Footer() {
  return (
    <footer className="mt-20 border-t border-zinc-800 bg-zinc-950">
      <div className="container-shop grid gap-8 py-12 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <h2 className="text-xl font-black"><span className="text-violet-500">DX</span>BIL</h2>
          <p className="mt-3 text-sm leading-6 text-zinc-500">Loja dos Touros Negros para contas, itens e produtos digitais.</p>
        </div>
        <div>
          <h3 className="font-bold">Loja</h3>
          <div className="mt-3 space-y-2 text-sm text-zinc-500"><p>Contas</p><p>Itens</p><p>Kits</p><p>Moedas</p></div>
        </div>
        <div>
          <h3 className="font-bold">Suporte</h3>
          <div className="mt-3 space-y-2 text-sm text-zinc-500"><p>Contato</p><p>Termos de uso</p><p>Privacidade</p></div>
        </div>
        <div>
          <h3 className="font-bold">Atendimento</h3>
          <p className="mt-3 text-sm text-zinc-500">Atendimento online para ajudar você.</p>
        </div>
      </div>
      <div className="border-t border-zinc-900 py-5 text-center text-xs text-zinc-600">© 2026 TOUROS NEGROS. Todos os direitos reservados.</div>
    </footer>
  );
}