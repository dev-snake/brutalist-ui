# Brutalist UI

A Neo-Brutalism styled React UI component library inspired by shadcn/ui.

[![npm version](https://img.shields.io/npm/v/brutalist-ui.svg)](https://www.npmjs.com/package/brutalist-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

-   🎨 **Neo-Brutalism Design** - Bold borders, offset shadows, heavy fonts
-   📦 **Monorepo Structure** - Powered by PNPM workspaces
-   🧱 **Radix Primitives** - Accessible, unstyled components
-   🎯 **TypeScript** - Full type safety
-   🎨 **Tailwind CSS** - Utility-first styling
-   🔧 **CVA** - Class variance authority for variants

## Getting Started

### Prerequisites

-   Node.js 18+
-   PNPM 8+

### Installation

```bash
# Clone the repository
git clone https://github.com/dev-snake/brutalist-ui.git
cd brutalist-ui

# Install dependencies
pnpm install

# Build the UI library
cd packages/ui && pnpm build

# Start the docs development server
cd apps/docs && pnpm dev
```

## Project Structure

```
brutalist-ui/
├── apps/
│   └── docs/           # Next.js documentation site
├── packages/
│   └── ui/             # UI component library (npm: brutalist-ui)
├── pnpm-workspace.yaml
└── package.json
```

## Usage

Install the package:

```bash
npm install brutalist-ui
```

Configure Tailwind:

```js
// tailwind.config.js
module.exports = {
    content: [
        // ... your content
        './node_modules/brutalist-ui/**/*.{js,mjs}',
    ],
    plugins: [require('brutalist-ui/brutalism-plugin')],
};
```

Import components:

```tsx
import { Button, Card, Dialog } from 'brutalist-ui';

function App() {
    return (
        <Card>
            <Button variant="primary">Click me!</Button>
        </Card>
    );
}
```

## Components

-   **Button** - Multiple variants and sizes
-   **Card** - Container with header, content, footer
-   **Input / Textarea** - Form inputs
-   **Dialog** - Modal dialogs
-   **Popover** - Floating content
-   **Tooltip** - Hover tooltips
-   **DropdownMenu** - Context menus
-   **Select** - Dropdown select
-   **Tabs** - Tabbed content
-   **Table** - Data tables
-   **Badge** - Status indicators
-   **Alert** - Notification banners
-   **Checkbox / Switch** - Toggle inputs

## Brutalism Plugin Classes

The library includes custom Tailwind utilities:

-   `.nb-border` - 3px solid black border
-   `.nb-shadow` - 4px offset shadow
-   `.nb-press` - Pressed state (translateY + no shadow)
-   `.nb-font` - Bold 900 weight with letter spacing

## Scripts

```bash
# packages/ui
pnpm build            # Build the library
pnpm dev              # Watch mode

# apps/docs
pnpm dev              # Start dev server
pnpm build            # Build for production
```

## License

MIT © [dev-snake](https://github.com/dev-snake)

## Links

-   [NPM Package](https://www.npmjs.com/package/brutalist-ui)
-   [GitHub](https://github.com/dev-snake/brutalist-ui)
