# Central de Ajuda — Bionk Content

Este projeto é a Central de Ajuda da plataforma Bionk. Ele roda como uma aplicação Next.js independente, consumindo conteúdo em Markdown e oferecendo páginas de guia e artigo, além de busca simples.

## Principais Recursos
- Renderização de Markdown com `react-markdown` e `gray-matter`.
- Estrutura de conteúdo em `src/content/ajuda` com categorias `guia` e `artigo`.
- Busca de guias em `/ajuda/guia/search?q=...`.
- Tailwind CSS v4 com tipografia (`@tailwindcss/typography`) e classes `prose`.

## Requisitos
- Node.js 18+ (recomendado)
- npm (ou pnpm/yarn/bun)

## Instalação e Execução
- Instalar dependências: `npm install`
- Ambiente de desenvolvimento: `npm run dev`
- Abrir no navegador: `http://localhost:3000`

Para build de produção:
- `npm run build`
- `npm run start`

## Estrutura de Pastas
```
src/
  app/
    ajuda/
      [category]/[slug]/page.tsx   # Página de artigo/guia
      guia/search/page.tsx         # Página de busca (somente guias)
    header-ajuda.tsx               # Cabeçalho da Central de Ajuda
    layout.tsx                     # Fonte global e estilos
    globals.css                    # Tailwind (base, componentes, utilidades + typography)
    lib/content.ts                 # Loader de conteúdo e utilidades
  components/
    ui/                            # Componentes reutilizáveis (Separator, etc.)
    layout/                        # Footer e afins
  content/
    ajuda/
      guia/                        # Markdown de guias
      artigo/                      # Markdown de artigos
  fonts/
    Satoshi-Variable.woff2        # Fonte Satoshi
```

## Conteúdo em Markdown
- Local: `src/content/ajuda/<categoria>/<slug>.md`
- Suporta subpastas dentro das categorias.
- Frontmatter (recomendado):
  ```yaml
  title: "Título do artigo"
  description: "Breve descrição do conteúdo"
  # updatedAt: "2024-10-01"   # opcional, atualmente não exibido
  ```

## Rotas Importantes
- Home da Central: `/`
- Artigos/Guias: `/ajuda/<category>/<slug>`
- Busca de Guias: `/ajuda/guia/search?q=<termo>`

## Como Funciona a Busca
- Página `src/app/ajuda/guia/search/page.tsx` lê `searchParams.q`.
- Indexa todos os slugs de `guia` e filtra por ocorrência de `q` em título, descrição e conteúdo.
- Resultados linkam para `/ajuda/guia/<slug>`.

## Limitações e Próximos Passos
- A busca atual cobre apenas `guia`. Pode ser estendida para `artigo`.
- Slugs duplicados em subpastas são evitados por set, mas é recomendável manter slugs únicos.
- Ranking simples (priorizar título/descrição) pode melhorar relevância.

## Contribuição
- Padronize texto e metadados nos arquivos `.md`.
- Mantenha consistência visual com componentes existentes.
- Antes de abrir PRs, rode localmente: `npm run dev` e valide páginas e busca.

## Licença
Projeto interno da Bionk. Não adicionar cabeçalhos de licença sem orientação específica.