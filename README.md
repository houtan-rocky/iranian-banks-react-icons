# 🇮🇷 Iranian Banks Icons

[![npm (core)](https://img.shields.io/npm/v/@iran-utils/iranian-banks-icons-core?label=%40iran-utils%2Fcore&color=gray&logo=npm)](https://www.npmjs.com/package/@iran-utils/iranian-banks-icons-core)
[![npm (react)](https://img.shields.io/npm/v/@iran-utils/iranian-banks-react-icons?label=%40iran-utils%2Freact&color=crimson&logo=npm)](https://www.npmjs.com/package/@iran-utils/iranian-banks-react-icons)
[![npm (vue)](https://img.shields.io/npm/v/@iran-utils/iranian-banks-vue-icons?label=%40iran-utils%2Fvue&color=42b883&logo=npm)](https://www.npmjs.com/package/@iran-utils/iranian-banks-vue-icons)
[![npm downloads](https://img.shields.io/npm/dm/@iran-utils/iranian-banks-react-icons?color=blue)](https://www.npmjs.com/package/@iran-utils/iranian-banks-react-icons)
[![Bundle size](https://img.shields.io/bundlephobia/minzip/@iran-utils/iranian-banks-react-icons?label=minzipped)](https://bundlephobia.com/package/@iran-utils/iranian-banks-react-icons)
[![License: MIT](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![React](https://img.shields.io/badge/React-16%20|%2017%20|%2018%20|%2019-61dafb?logo=react&logoColor=white)](https://reactjs.org)
[![Vue](https://img.shields.io/badge/Vue-3-42b883?logo=vue.js&logoColor=white)](https://vuejs.org)
[![GitHub stars](https://img.shields.io/github/stars/houtan-rocky/iranian-banks-react-icons?style=social)](https://github.com/houtan-rocky/iranian-banks-react-icons)

SVG icon library for **60+ Iranian banks, PSPs, and payment providers** — available for React, Vue 3, and as framework-agnostic SVG data. Every logo ships in full-color and monochrome variants.

**[→ Live Playground](https://houtan-rocky.github.io/iranian-banks-react-icons/)**

---

## Packages

| Package | Description | Install |
|---|---|---|
| [`@iran-utils/iranian-banks-icons-core`](packages/core) | Framework-agnostic SVG data (`viewBox` + `content`) | `npm i @iran-utils/iranian-banks-icons-core` |
| [`@iran-utils/iranian-banks-react-icons`](packages/react) | React components (depends on core) | `npm i @iran-utils/iranian-banks-react-icons` |
| [`@iran-utils/iranian-banks-vue-icons`](packages/vue) | Vue 3 components (depends on core) | `npm i @iran-utils/iranian-banks-vue-icons` |

---

## React

```bash
npm install @iran-utils/iranian-banks-react-icons
```

```jsx
import { MelliColorIcon, MellatIcon } from '@iran-utils/iranian-banks-react-icons';

function App() {
  return (
    <div>
      <MelliColorIcon width={64} height={64} />
      <MellatIcon width={64} height={64} fill="#0066cc" />
    </div>
  );
}
```

All icons accept `React.SVGProps<SVGSVGElement>` and are wrapped in `React.forwardRef`.

---

## Vue 3

```bash
npm install @iran-utils/iranian-banks-vue-icons
```

```vue
<script setup>
import { MelliColorIcon, MellatIcon } from '@iran-utils/iranian-banks-vue-icons';
</script>

<template>
  <MelliColorIcon :width="64" :height="64" />
  <MellatIcon :width="64" :height="64" :style="{ color: '#0066cc' }" />
</template>
```

Vue components use `inheritAttrs: false` and spread `$attrs` onto the `<svg>` element.

---

## Core (framework-agnostic)

Use the core package to build your own adapters for Angular, Svelte, Web Components, or any other framework:

```bash
npm install @iran-utils/iranian-banks-icons-core
```

```js
import { MelliColorIcon } from '@iran-utils/iranian-banks-icons-core';
// { viewBox: "0 0 ...", content: "<path ...>...</path>" }

// Web Component example
class BankIcon extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<svg viewBox="${MelliColorIcon.viewBox}" xmlns="http://www.w3.org/2000/svg">
      ${MelliColorIcon.content}
    </svg>`;
  }
}
```

---

## Icon Variants

Every bank has two export styles:

| Variant | Name pattern | Description |
|---|---|---|
| **Color** | `[Bank]ColorIcon` | Full-color official logo |
| **Mono** | `[Bank]Icon` | Single-color, pass `fill` to tint |

---

## Props

**React:** All icons accept `React.SVGProps<SVGSVGElement>` + `React.RefAttributes<SVGSVGElement>`.

**Vue:** All icons accept any attribute via `$attrs` (they're spread onto the root `<svg>`).

| Prop | Description |
|---|---|
| `width` / `height` | Size |
| `fill` | Tint color (monochrome icons) |
| `className` / `class` | CSS class |
| `style` | Inline styles |

---

## Available Icons

Browse all icons interactively: **[Playground →](https://houtan-rocky.github.io/iranian-banks-react-icons/)**

<details>
<summary><strong>Banks (38)</strong></summary>

`Melli` · `Mellat` · `Saderat` · `Tejarat` · `Sepah` · `Keshavarzi` · `Maskan` · `Refah` · `Post` · `SanatMadan` · `TaavonEslami` · `Pasargad` · `Saman` · `Parsian` · `Ayandeh` · `Karafarin` · `EghtesadNovin` · `Sina` · `Shahr` · `Gardeshgari` · `KhavarMianeh` · `Dey` · `Caspian` · `Sarmayeh` · `Resalat` · `IranZamin` · `IranEurope` · `IranVenezuela` · `Noor` · `MehrIran` · `Melall` · `Tosee` · `ToseeSaderat` · `ToseeTaavon` · `StandardChartered` · `BluBank` · `Bankino` · `Futurebank`

Each exports `[Name]ColorIcon` and `[Name]Icon`.

</details>

<details>
<summary><strong>Payment Platforms (11)</strong></summary>

`Zarrinpal` · `PayIr` · `Payping` · `NextPay` · `Idpay` · `Vandar` · `Digipay` · `Zibal` · `Hesabit` · `AsanPardakht` · `SnappPay` (color only)

</details>

<details>
<summary><strong>PSPs (3)</strong></summary>

`SamanKish` · `PasargadPep` · `Sadad`

</details>

<details>
<summary><strong>Networks (2)</strong></summary>

`Shaparak` · `BankMarkazi`

</details>

<details>
<summary><strong>Merged into Sepah (5)</strong></summary>

`SepahMergedAnsar` · `SepahMergedGhavamin` · `SepahMergedHekmat` · `SepahMergedKosar` · `SepahMergedMehrEghtesad`

</details>

---

## Monorepo

This repo is a [pnpm](https://pnpm.io) monorepo:

```
packages/
  core/    → @iran-utils/iranian-banks-icons-core
  react/   → @iran-utils/iranian-banks-react-icons
  vue/     → @iran-utils/iranian-banks-vue-icons
apps/
  docs/    → playground (deployed to GitHub Pages)
scripts/
  build-core.js    → SVG data → packages/core/dist/
  build-react.js   → core data → React components
  build-vue.js     → core data → Vue 3 components
raw/         → source SVG files
```

### Development

```bash
# Install dependencies
pnpm install

# Build everything
pnpm build

# Start docs playground
pnpm docs:dev
```

Build order: `svgo optimize → build:core → build:react → build:vue`

---

## Contributing

1. Add raw SVGs to `raw/` (both `bank-name.svg` and `bank-name-color.svg`)
2. Run `pnpm build`
3. Submit a pull request

Bug reports and feature requests: [GitHub Issues](https://github.com/houtan-rocky/iranian-banks-react-icons/issues)

---

## Links

- 🎮 [Live Playground](https://houtan-rocky.github.io/iranian-banks-react-icons/)
- 📦 [npm: core](https://www.npmjs.com/package/@iran-utils/iranian-banks-icons-core)
- 📦 [npm: react](https://www.npmjs.com/package/@iran-utils/iranian-banks-react-icons)
- 📦 [npm: vue](https://www.npmjs.com/package/@iran-utils/iranian-banks-vue-icons)
- 📏 [Bundle Size](https://bundlephobia.com/package/@iran-utils/iranian-banks-react-icons)

---

## License

[MIT](LICENSE) © [Houtan Rocky](https://github.com/houtan-rocky)
