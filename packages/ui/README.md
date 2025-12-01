# Brutalist UI

A Neo-Brutalism styled React UI component library. Beautiful, accessible components with bold borders, offset shadows, and that classic brutalist aesthetic.

[![npm version](https://img.shields.io/npm/v/brutalist-ui.svg)](https://www.npmjs.com/package/brutalist-ui)
[![npm downloads](https://img.shields.io/npm/dm/brutalist-ui.svg)](https://www.npmjs.com/package/brutalist-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

-   🎨 **Neo-Brutalism Design** - Bold 3px borders, offset shadows, heavy fonts
-   ♿ **Accessible** - Built on Radix UI primitives
-   🎯 **TypeScript** - Full type safety out of the box
-   🎨 **Tailwind CSS** - Easy customization with utility classes
-   🔧 **CVA** - Powerful variant system with class-variance-authority
-   📦 **Tree-shakeable** - Import only what you need

## Installation

```bash
npm install brutalist-ui
# or
pnpm add brutalist-ui
# or
yarn add brutalist-ui
```

## Setup

### 1. Configure Tailwind CSS

Add the brutalist-ui content path and plugin to your `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        // ... your content paths
        './node_modules/brutalist-ui/**/*.{js,mjs}',
    ],
    theme: {
        extend: {
            borderWidth: {
                3: '3px',
            },
            boxShadow: {
                brutal: '4px 4px 0px 0px #000000',
                'brutal-sm': '2px 2px 0px 0px #000000',
                'brutal-lg': '6px 6px 0px 0px #000000',
            },
        },
    },
    plugins: [require('brutalist-ui/brutalism-plugin')],
};
```

### 2. Import Styles (Optional)

If you want the base styles:

```tsx
import 'brutalist-ui/styles.css';
```

## Usage

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent } from 'brutalist-ui';

function App() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Hello Brutalism!</CardTitle>
            </CardHeader>
            <CardContent>
                <Button variant="primary">Click me</Button>
            </CardContent>
        </Card>
    );
}
```

## Components

### Form Components

-   **Button** - Multiple variants (default, primary, secondary, accent, danger, success, outline, ghost, link)
-   **Input** - Text input with brutalist styling
-   **Textarea** - Multi-line text input
-   **Label** - Form labels
-   **Checkbox** - Checkbox input
-   **Switch** - Toggle switch
-   **Select** - Dropdown select (built on Radix UI)

### Layout Components

-   **Card** - Container with header, content, footer sections
-   **Separator** - Visual divider

### Overlay Components

-   **Dialog** - Modal dialog (built on Radix UI)
-   **Popover** - Floating content (built on Radix UI)
-   **Tooltip** - Hover tooltips (built on Radix UI)
-   **DropdownMenu** - Context menus (built on Radix UI)

### Data Display

-   **Table** - Data tables with brutalist styling
-   **Badge** - Status indicators
-   **Alert** - Notification banners
-   **Avatar** - User avatars
-   **Tabs** - Tabbed content (built on Radix UI)

## Brutalism Plugin Classes

The Tailwind plugin provides these utility classes:

| Class           | Description                            |
| --------------- | -------------------------------------- |
| `.nb-border`    | 3px solid black border                 |
| `.nb-shadow`    | 4px 4px offset shadow                  |
| `.nb-shadow-sm` | 2px 2px offset shadow                  |
| `.nb-shadow-lg` | 6px 6px offset shadow                  |
| `.nb-press`     | Pressed state (translateY + no shadow) |
| `.nb-font`      | Font weight 900 + letter spacing       |

## TypeScript

All components are fully typed:

```tsx
import { Button, type ButtonProps } from 'brutalist-ui';

const MyButton: React.FC<ButtonProps> = (props) => {
    return <Button variant="primary" {...props} />;
};
```

## Customization

Components use Tailwind CSS classes and can be customized with the `className` prop:

```tsx
<Button className="bg-purple-500 hover:bg-purple-600">Custom Purple</Button>
```

## Browser Support

-   Chrome (latest)
-   Firefox (latest)
-   Safari (latest)
-   Edge (latest)

## Contributing

Contributions are welcome! Please read our [contributing guide](https://github.com/dev-snake/brutalist-ui/blob/main/CONTRIBUTING.md) for details.

## License

MIT © [dev-snake](https://github.com/dev-snake)

## Links

-   [NPM Package](https://www.npmjs.com/package/brutalist-ui)
-   [GitHub Repository](https://github.com/dev-snake/brutalist-ui)
-   [Documentation](https://github.com/dev-snake/brutalist-ui#readme)
