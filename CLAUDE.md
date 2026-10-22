# Nutrail Web

Site do Nutrail em `nutrail.app`: a vitrine do produto para quem não vai instalar o app nem subir a
API. Mostra o app em uso, a engenharia e os links para os repositórios.

O Nutrail são quatro repositórios lado a lado:
- `nutrail-web` (este): o site, em Next.js
- `../nutrail-app`: app React Native (Expo)
- `../nutrail-api`: API 100% serverless na AWS
- `../nutrail`: README do produto

A base de ferramentas e os padrões de código vêm do `../nutrail-app`: mesmo Biome, mesmo
`.editorconfig`, mesmos tokens de design e a mesma divisão em camadas, adaptados ao que o Next pede.
Onde o Next exige outra coisa (rotas em `src/app`, `export default`), o Next vence.

## Como trabalhar aqui

- **Faça só o que foi pedido.** Sem passos, refatorações ou arquivos que o pedido não chamou.
  Achou um problema em outro lugar, relate em vez de corrigir no caminho.
- **Converse em português.** Código, identificadores, commits e o README ficam em inglês.
- **Commit só quando pedido**, na branch atual. Nunca criar branch, dar push ou amend sem pedido.
- **Sem comentários de código.** Só comentários funcionais (`biome-ignore` e similares).

## Verificação

Depois de qualquer alteração:

```bash
yarn typecheck && yarn lint && yarn build
```

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript strict
- Tailwind CSS 4, com os tokens em `src/styles/global.css` · `clsx` + `tailwind-merge` (`cn`)
- `next/font` com a Host Grotesk, a mesma fonte do app
- Biome · yarn 1 · Husky + lint-staged · GitHub Actions · Vercel

Dependência entra quando a primeira feature precisa dela, não antes.

## Arquitetura

```
src/app/            rotas do Next: page, layout, metadata e ícones. Só montam a screen
src/presentation/   screens, components, layouts — a UI
src/shared/         utils, constants, assets
src/styles/         global.css: Tailwind e os tokens
```

`app → presentation → shared`, nunca o contrário. Alias sem `@` (`presentation/*`, `shared/*`), só
no `tsconfig.json`. Cruzou pasta de topo, usa alias; dentro da mesma peça, caminho relativo.

Uma rota é fina: `src/app/<rota>/page.tsx` importa a screen de `presentation/screens/<Nome>/` e a
renderiza. A lógica e o layout ficam na screen, como no app.

## Padrões

- Named export. `export default` só onde o Next exige: `page.tsx`, `layout.tsx`, `not-found.tsx`,
  `next.config.ts` e afins.
- Função declarada (`function x() {}`), arrow só como argumento.
- Toda `interface` começa com `I`; `type` só para union/mapped e sem prefixo. `import type` para
  tipos (`verbatimModuleSyntax`).
- Pasta por peça em PascalCase: `<Nome>.tsx` e, se houver, `<Nome>Types.ts`, `components/`,
  `utils/`. Screen não leva sufixo `Screen`.
- Server Component por padrão. `'use client'` só na peça que precisa de estado ou de evento do
  navegador, e o estado mora num `use<Nome>Controller.ts` ao lado, como no app.
- Sem `any`, sem `as` para calar o compilador, sem `enum`, sem `console.log`.
- Indentação de 2 espaços, aspas simples, sem trailing comma, linha de até 100 colunas.

## Design

Os tokens são os do app, com os mesmos nomes de classe: cores (`lime-500`, `gray-600`,
`black-800`, `support-*`) e tamanhos de texto (`text-title-1`, `text-body`, `text-body-sm`...). O
Tailwind 4 define o tema em CSS (`@theme` em `global.css`), não em `tailwind.config.js`; a paleta
padrão do Tailwind está desligada (`--color-*: initial`), então só existem as cores da marca. Token
novo entra lá, com o mesmo nome que teria no app. O fundo da marca é `lime-900` (`#022C22`), o mesmo
do ícone e do splash.

Imagem pelo `next/image`; o ícone e o favicon são os do app (`src/app/icon.png`,
`src/app/apple-icon.png`).
