# TOUROS NEGROS Shop

Base de uma loja gamer em Next.js + React + TypeScript + Tailwind CSS.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Rotas

- `/` — página inicial
- `/geral` — catálogo com busca/filtro
- `/produto/[id]` — detalhes do produto
- `/carrinho` — carrinho local

## Personalização

Edite `lib/products.ts` para trocar produtos, preços, categorias e imagens.

As imagens demonstrativas estão em `public/products`.

## Deploy na Vercel

1. Crie um repositório no GitHub.
2. Suba este projeto.
3. Importe o repositório na Vercel.
4. O build usa `npm run build`.

## Próximas integrações

Esta versão não recebe pagamentos reais. Para produção, conecte:
- banco de dados
- autenticação
- painel administrativo
- gateway/Pix
- webhooks de pagamento
- controle de estoque
- entrega automática
- políticas e termos da loja

Não coloque chaves secretas diretamente no código. Use variáveis de ambiente da Vercel.
