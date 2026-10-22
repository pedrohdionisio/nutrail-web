# Nutrail Web

![Next.js 16](https://img.shields.io/badge/next.js-16-000000?logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-strict-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS 4](https://img.shields.io/badge/tailwind-4-06B6D4?logo=tailwindcss&logoColor=white)

The website of **Nutrail**, an AI-first food diary, at [nutrail.app](https://nutrail.app).

| Repository                                                   | What it is                                                              |
| ------------------------------------------------------------ | ----------------------------------------------------------------------- |
| **nutrail-web** (this one)                                   | The website, in Next.js                                                 |
| [nutrail-app](https://github.com/pedrohdionisio/nutrail-app) | React Native (Expo) app                                                 |
| [nutrail-api](https://github.com/pedrohdionisio/nutrail-api) | Serverless REST API, meal processing pipeline and AI integration on AWS |
| [nutrail](https://github.com/pedrohdionisio/nutrail)         | The product overview                                                    |

## Running locally

Requirements: Node.js (see `.nvmrc`) and Yarn 1.

```bash
yarn install
yarn dev        # http://localhost:3000
```

| Script                      | What it does                      |
| --------------------------- | --------------------------------- |
| `yarn dev`                  | Development server                |
| `yarn build` · `yarn start` | Production build, and serving it  |
| `yarn typecheck`            | Route types and `tsc --noEmit`    |
| `yarn lint` · `yarn format` | Biome check, and check with fixes |

## Stack

- Next.js 16 (App Router), React 19 and TypeScript in strict mode
- Tailwind CSS 4, with the app's design tokens
- Biome, Husky and lint-staged, GitHub Actions
- Deployed on Vercel

It shares its tooling and conventions with [nutrail-app](https://github.com/pedrohdionisio/nutrail-app):
the same Biome rules, the same design tokens and the same split between presentation and shared
code.

## Author

**Pedro Henrique Dionisio** — [LinkedIn](https://www.linkedin.com/in/pedrohenriquedionisio/)
