# Brutalist UI

Neo-brutalism components with a shadcn-compatible API. Tokens (background/foreground/primary/etc.), data-slot, and CVA variants are aligned so you can import like `@/components/ui/button` in apps, while keeping the original brutalist look via wrappers.

[![npm version](https://img.shields.io/npm/v/brutalist-ui.svg?style=flat-square&color=FF6B6B)](https://www.npmjs.com/package/brutalist-ui)
[![npm downloads](https://img.shields.io/npm/dm/brutalist-ui.svg?style=flat-square)](https://www.npmjs.com/package/brutalist-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-4ECDC4.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-FFE66D.svg?style=flat-square)](https://www.typescriptlang.org/)

## Features
- Shadcn-compatible API: `Button`, `Input`, `Card` exports with `variant/size`, `data-slot`, and tokenized classes.
- Brutalist wrappers: keep the old bold style and `loading` prop via `BrutalButton` (re-exports old button variants).
- Tailwind-ready tokens: background/foreground/primary/secondary/destructive, ring, input, card, etc. Dark mode via `.dark`.
- Radix-based primitives, CVA variants, and tailwind-merge `cn`.

## Installation
```bash
pnpm add brutalist-ui
# or
npm install brutalist-ui
# or
yarn add brutalist-ui
```

## Setup
### 1) Tailwind config
Add plugin and ensure tokens/shadows are available (dark mode uses class strategy):
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/brutalist-ui/**/*.{js,mjs}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // tokens are provided by the library; override here if needed
    },
  },
  plugins: [require('brutalist-ui/brutalism-plugin')],
};
```

### 2) Base styles
Import once in your app entry (e.g., `app/layout.tsx` or `src/main.tsx`):
```ts
import 'brutalist-ui/styles.css';
```

### 3) TypeScript paths (monorepo/alias)
- If you want `@/components/ui/button` style imports, set `baseUrl`/`paths` to point at your app root and ensure `@ui/*` (or similar) points to `packages/ui/src/*`. Example for Next app:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"],
      "@ui/*": ["../../packages/ui/src/*"]
    }
  }
}
```
- Package exports already expose subpaths `brutalist-ui/button`, `brutalist-ui/input`, `brutalist-ui/card`.

## Usage
Shadcn-style components:
```tsx
import { Button } from 'brutalist-ui/button';
import { Input } from 'brutalist-ui/input';
import { Card, CardHeader, CardTitle, CardContent } from 'brutalist-ui/card';

export function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Shadcn-compatible Button</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Input placeholder="Email" />
        <Button variant="default">Primary</Button>
        <Button variant="outline" size="sm">
          Outline
        </Button>
      </CardContent>
    </Card>
  );
}
```

Keep the original brutalist look and `loading` prop:
```tsx
import { BrutalButton } from 'brutalist-ui';

export function LegacyBrutal() {
  return (
    <BrutalButton variant="primary" loading>
      Saving...
    </BrutalButton>
  );
}
```

## Notes
- Dark mode: add/remove `.dark` on `html` or `body` to switch themes.
- Tokens can be overridden by setting CSS variables (`--background`, `--primary`, etc.) before importing components.
- For SSR builds that tree-shake, you can still import from the root `brutalist-ui`, or from the per-component subpaths above. The old API remains available; new shadcn-aligned components live under `components/ui`.
