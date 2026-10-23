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
src/app/[lang]/     rotas do Next por idioma: layout (html, fontes, metadata) e page. Só montam a screen
src/app/            ícones (icon.png, apple-icon.png)
src/proxy.ts        manda quem abre sem idioma para /pt ou /en, pelo Accept-Language
src/presentation/   screens, components, layouts — a UI
src/shared/         i18n, constants, hooks, utils
src/styles/         global.css: Tailwind, os tokens e as utilities de gradiente
public/             logo.svg (para fundo escuro) e logo-dark.svg (para fundo claro)
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

## Idiomas

Inglês e português, como o app. Cada idioma é uma rota: `/en` e `/pt`, geradas estáticas
(`generateStaticParams`, `dynamicParams = false`). Quem abre `nutrail.app` vai para `/pt` se o
navegador prefere português e para `/en` em qualquer outro caso (`src/proxy.ts`, o antigo
`middleware.ts` do Next).
- Os textos ficam em `src/shared/i18n/dictionaries/`: `ptBR.ts` é a fonte e `enUS.ts` é
  `typeof ptBR`, então chave faltando ou sobrando é erro de tsc. Texto novo entra nos dois, na
  mesma mudança. Nenhum texto que o usuário vê fica fora deles; unidades (`kcal`, `g`, `cm`) e nomes
  próprios são a exceção.
- A page lê o dicionário (`getDictionary(lang)`) e passa para a screen, que passa a cada seção só a
  parte dela (`dictionary.hero`). Sem lib de i18n: os textos ficam no servidor, e os componentes
  cliente recebem só o que exibem.
- Números pelo `Intl.NumberFormat` com `HTML_LANG[locale]` (`1,343` em inglês, `1.343` em
  português).
- Cada idioma tem título, descrição, `canonical` e `alternates` (hreflang) próprios.

## Design

Os tokens são os do app, com os mesmos nomes de classe: cores (`lime-500`, `gray-600`,
`black-800`, `support-*`) e tamanhos de texto (`text-title-1`, `text-body`, `text-body-sm`...). O
Tailwind 4 define o tema em CSS (`@theme` em `global.css`), não em `tailwind.config.js`; a paleta
padrão do Tailwind está desligada (`--color-*: initial`), então só existem as cores da marca. Token
novo entra lá, com o mesmo nome que teria no app. O fundo da marca é `lime-900` (`#022C22`), o mesmo
do ícone e do splash.

Da landing vieram tokens próprios: os tons claros `lime-50` e `lime-100`, os títulos
(`text-hero`, `text-display`, `text-heading`, `text-subheading`, `text-lead`, com o espaçamento
negativo da marca), os raios `rounded-card` (24px) e `rounded-shell` (56px), as bordas por sombra
interna (`shadow-line`, `shadow-line-light`, `shadow-lift`), o easing `ease-out-soft` e as utilities
de fundo `bg-hero`, `bg-calculator` e `bg-cta-fade`. Borda é sombra interna, não `border`, para
não mexer no tamanho da caixa. Toda animação respeita `prefers-reduced-motion`.

Imagem pelo `next/image`; o ícone e o favicon são os do app (`src/app/icon.png`,
`src/app/apple-icon.png`).

**Mídia:** prints e vídeos do app ficam em `public/media/`, a partir dos originais em `media-raw/`
(fora do git). Vídeo é MP4 H.264 sem áudio, com capa (`poster`), tocado pelo
`presentation/components/LoopVideo`, que não dá play com `prefers-reduced-motion`. Ícones são do
`lucide-react`, como no app.

**Imagem de compartilhamento:** `src/app/[lang]/opengraph-image.tsx` gera no build o cartão de
1200×630 que aparece no LinkedIn, WhatsApp e X, um por idioma, com os textos de
`dictionary.shareImage`. O `ImageResponse` só entende estilo inline e precisa do arquivo da fonte:
a Host Grotesk fica em `src/shared/assets/fonts/` (licença OFL junto). Arquivo lido ali usa caminho
literal, para o Next rastrear só ele e não o projeto inteiro.

A calculadora de metas (`Calculator/utils/calculateGoals.ts`) é a mesma conta da `GoalCalculator`
da API (Mifflin-St Jeor, fator de atividade, ±500 kcal, proteína 2 g/kg, gordura 0,9 g/kg). Mudou
lá, muda aqui.
