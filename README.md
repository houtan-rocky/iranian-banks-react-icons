# 🇮🇷 Iranian Banks React Icons

A modern React icon library featuring official logos from Iranian banks, payment service providers, and financial institutions. Each logo is available in both full-color and monochrome variants, optimized as React SVG components.

---

## Features

✨ **Complete Coverage** - Icons for major Iranian banks and PSPs  
🎨 **Dual Variants** - Color and monochrome versions for every logo  
📦 **Tree-Shakeable** - Import only what you need  
⚡ **Zero Dependencies** - Pure React components  
🔧 **TypeScript Ready** - Full type definitions included  
📱 **React Native Compatible** - Works with React Native (SVG support required)

---

## Quick Start

### Installation

```bash
npm install @houtan-rocky/iranian-banks-react-icons
```

or with yarn:

```bash
yarn add @houtan-rocky/iranian-banks-react-icons
```

### Basic Usage

```jsx
import { MelliColorIcon, MellatIcon } from '@houtan-rocky/iranian-banks-react-icons';

function MyComponent() {
  return (
    <div>
      <MelliColorIcon width={64} height={64} />
      <MellatIcon width={64} height={64} fill="#0066cc" />
    </div>
  );
}
```

---

## Icon Variants

Every bank logo comes in two styles:

- **`[BankName]ColorIcon`** - Full-color official logo (e.g., `MelliColorIcon`)
- **`[BankName]Icon`** - Monochrome version for custom styling (e.g., `MelliIcon`)

### Example

```jsx
import {
  PasargadColorIcon,
  PasargadIcon,
  SaderatColorIcon,
  SaderatIcon
} from '@houtan-rocky/iranian-banks-react-icons';

function BankLogos() {
  return (
    <>
      {/* Full-color versions */}
      <PasargadColorIcon width={80} height={80} />
      <SaderatColorIcon width={80} height={80} />
      
      {/* Monochrome versions with custom colors */}
      <PasargadIcon width={80} height={80} fill="#ff6b00" />
      <SaderatIcon width={80} height={80} fill="#1a5490" />
    </>
  );
}
```

---

## Props

All icons accept standard SVG props as defined by `React.SVGProps<SVGSVGElement>`, including:

- `width` / `height` - Size control
- `fill` - Color (for monochrome icons)
- `className` - CSS class names
- `style` - Inline styles
- All other standard SVG attributes

---

## Included Banks & Institutions

The library includes icons for:

**Traditional Banks:** Melli, Mellat, Saderat, Tejarat, Sepah, Pasargad, Saman, Refah, Keshavarzi, Maskan, Parsian, Post, and more.

**Modern Banks:** BluBank, Bankino, Futurebank, Iran Zamin, Ayandeh, Melall, Sarmayeh, and others.

**Payment Providers:** Zarrinpal, Pay.ir, Payping, NextPay, IdPay, Vandar, Digipay, and various PSPs.

**Financial Networks:** Shaparak, Bank Markazi, Iran Europe, Standard Chartered, and related institutions.

<details>
<summary><strong>View complete icon list</strong></summary>

```
AsanPardakht, Ayandeh, BankMarkazi, Bankino, BluBank, Caspian, Dey, Digipay,
EghtesadNovin, Futurebank, Gardeshgari, Hesabit, Idpay, IranEurope, IranVenezuela,
IranZamin, Karafarin, Keshavarzi, KhavarMianeh, Maskan, MehrIran, Melall, Mellat,
Melli, NextPay, Noor, Parsian, Pasargad, PasargadPep, PayIr, Payping, Post, Refah,
Resalat, Sadad, Saderat, Saman, SamanKish, SanatMadan, Sarmayeh, Sepah, SepahMerged*,
Shahr, Shaparak, Sina, StandardChartered, TaavonEslami, Tejarat, Tosee,
ToseeSaderat, ToseeTaavon, Vandar, Zarrinpal, Zibal
```

Each bank has both `Icon` and `ColorIcon` variants.
</details>

---

## Advanced Usage

### Dynamic Icon Loading

```jsx
import * as BankIcons from '@houtan-rocky/iranian-banks-react-icons';

function DynamicBankLogo({ bankName, useColor = true }) {
  const iconName = useColor 
    ? `${bankName}ColorIcon` 
    : `${bankName}Icon`;
  
  const IconComponent = BankIcons[iconName];
  
  if (!IconComponent) {
    return <span>Icon not found</span>;
  }
  
  return <IconComponent width={48} height={48} />;
}

// Usage
<DynamicBankLogo bankName="Melli" useColor={true} />
<DynamicBankLogo bankName="Pasargad" useColor={false} />
```

### CommonJS Import

```javascript
const { MelliIcon, MellatColorIcon } = require('@houtan-rocky/iranian-banks-react-icons');
```

---

## Requirements

- **React:** `^16.13.1 || ^17.0.1 || ^18.0.0 || ^19.2.0`
- **React DOM:** `^16.13.1 || ^17.0.1 || ^18.0.0 || ^19.2.0`

For React Native projects, ensure you have SVG support (e.g., `react-native-svg`).

---

## Technical Details

- **Format:** Optimized inline SVG components
- **Build:** ES modules and CommonJS support
- **Size:** Tree-shakeable - only imported icons are included in your bundle
- **Performance:** Lightweight SVG components with no runtime overhead

---

## Contributing

Contributions are welcome! If you'd like to add new icons or improve existing ones:

1. Fork the repository
2. Create your feature branch
3. Submit a pull request

For issues or feature requests, please use the [GitHub issue tracker](https://github.com/houtan-rocky/iranian-banks-react-icons/issues).

---

## License

MIT License - see [LICENSE](LICENSE) file for details.

---

## Links

- 📦 [npm Package](https://www.npmjs.com/package/@houtan-rocky/iranian-banks-react-icons)
- 🔗 [GitHub Repository](https://github.com/houtan-rocky/iranian-banks-react-icons)
- 📝 [Report an Issue](https://github.com/houtan-rocky/iranian-banks-react-icons/issues)
