# Blog Next.js (App Router)

Site simples de artigos com rotas dinâmicas, SSG e SEO por página de artigo.

## Como rodar

1. Instale dependências:
   ```bash
   npm install
   ```
2. Ambiente de desenvolvimento:
   ```bash
   npm run dev
   ```
3. Build de produção:
   ```bash
   npm run build && npm run start
   ```

## Estrutura
- `app/page.tsx`: lista 4 artigos com resumo de 200 caracteres e links.
- `app/artigos/[slug]/page.tsx`: página de artigo (SSG com `generateStaticParams`).
- `lib/data.ts`: leitura e utilidades de dados.
- `lib/slugify.ts`: gera slug a partir do título.
- `data/artigos.json`: fonte de dados local.
- `app/layout.tsx` e `app/globals.css`: layout e estilos.

## SEO
Cada artigo define metadados via `generateMetadata` com `title` e `description`.

## Deploy
- GitHub: crie um repositório e faça push.
- Vercel: importe o projeto do GitHub e faça o deploy (Next.js detectado automaticamente).
