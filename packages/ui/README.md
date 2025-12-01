# Brutalist UI

A Neo-Brutalism styled React UI component library. Beautiful, accessible components with bold borders, offset shadows, and that classic brutalist aesthetic.

[![npm version](https://img.shields.io/npm/v/brutalist-ui.svg?style=flat-square&color=FF6B6B)](https://www.npmjs.com/package/brutalist-ui)
[![npm downloads](https://img.shields.io/npm/dm/brutalist-ui.svg?style=flat-square)](https://www.npmjs.com/package/brutalist-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-4ECDC4.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-FFE66D.svg?style=flat-square)](https://www.typescriptlang.org/)

## ✨ Features

-   🎨 **Neo-Brutalism Design** - Bold 3px borders, offset shadows, vibrant colors
-   🧱 **22+ Components** - Comprehensive UI kit for modern applications
-   🌙 **Dark Mode** - Full dark mode support out of the box
-   ♿ **Accessible** - Built on Radix UI primitives for A11y
-   🎯 **TypeScript** - Full type safety and IntelliSense
-   🎨 **Tailwind CSS** - Easy customization with utility classes
-   🔧 **CVA** - Powerful variant system with class-variance-authority
-   📦 **Tree-shakeable** - Import only what you need

## 📦 Installation

```bash
npm install brutalist-ui
# or
pnpm add brutalist-ui
# or
yarn add brutalist-ui
```

## 🚀 Setup

### 1. Configure Tailwind CSS

Add the brutalist-ui content path and plugin to your `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        // ... your content paths
        './node_modules/brutalist-ui/**/*.{js,mjs}',
    ],
    darkMode: 'class',
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

## 💡 Usage

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent, Badge } from 'brutalist-ui';

function App() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Hello Brutalism!</CardTitle>
                <Badge variant="success">New</Badge>
            </CardHeader>
            <CardContent>
                <Button variant="primary" size="lg">
                    Click me
                </Button>
            </CardContent>
        </Card>
    );
}
```

## 🧩 Components (22+)

### Form Components

| Component  | Description                                                                             |
| ---------- | --------------------------------------------------------------------------------------- |
| `Button`   | 9 variants (default, primary, secondary, accent, danger, success, outline, ghost, link) |
| `Input`    | Text input with brutalist styling                                                       |
| `Textarea` | Multi-line text input with auto-resize                                                  |
| `Label`    | Form labels                                                                             |
| `Checkbox` | Checkbox input with checkmark                                                           |
| `Switch`   | Toggle switch control                                                                   |
| `Select`   | Dropdown select (built on Radix UI)                                                     |

### Layout Components

| Component   | Description                                     |
| ----------- | ----------------------------------------------- |
| `Card`      | Container with header, content, footer sections |
| `Separator` | Visual divider (horizontal/vertical)            |

### Overlay Components

| Component      | Description                          |
| -------------- | ------------------------------------ |
| `Dialog`       | Modal dialog (built on Radix UI)     |
| `Popover`      | Floating content (built on Radix UI) |
| `Tooltip`      | Hover tooltips (built on Radix UI)   |
| `DropdownMenu` | Context menus (built on Radix UI)    |

### Feedback & Status

| Component  | Description                                     |
| ---------- | ----------------------------------------------- |
| `Alert`    | Info, success, warning, error notifications     |
| `Badge`    | Status indicators and labels                    |
| `Toast`    | Toast notification system                       |
| `Spinner`  | Loading spinners (brutalist, dots, pulse, bars) |
| `Skeleton` | Loading placeholder animations                  |

### Data Display

| Component | Description                        |
| --------- | ---------------------------------- |
| `Table`   | Data tables with brutalist styling |
| `Avatar`  | User avatars with fallback         |
| `Tabs`    | Tabbed content (built on Radix UI) |

### Navigation

| Component    | Description                                |
| ------------ | ------------------------------------------ |
| `Pagination` | Page navigation with first/last, prev/next |

## 🎨 Brutalism Plugin Classes

The Tailwind plugin provides these utility classes:

| Class           | Description                            |
| --------------- | -------------------------------------- |
| `.nb-border`    | 3px solid black border                 |
| `.nb-shadow`    | 4px 4px offset shadow                  |
| `.nb-shadow-sm` | 2px 2px offset shadow                  |
| `.nb-shadow-lg` | 6px 6px offset shadow                  |
| `.nb-press`     | Pressed state (translateY + no shadow) |
| `.nb-font`      | Font weight 900 + letter spacing       |

### Color Palette

| Color        | Hex       | Usage                        |
| ------------ | --------- | ---------------------------- |
| 🔴 Coral Red | `#FF6B6B` | Primary actions, destructive |
| 🟢 Teal      | `#4ECDC4` | Success, secondary           |
| 🟡 Yellow    | `#FFE66D` | Warning, highlights          |
| ⚫ Black     | `#000000` | Borders, text                |
| ⚪ White     | `#FFFFFF` | Backgrounds                  |

## 📝 TypeScript

All components are fully typed:

```tsx
import { Button, type ButtonProps } from 'brutalist-ui';

const MyButton: React.FC<ButtonProps> = (props) => {
    return <Button variant="primary" {...props} />;
};
```

## 🎨 Customization

Components use Tailwind CSS classes and can be customized with the `className` prop:

```tsx
<Button className="bg-purple-500 hover:bg-purple-600">Custom Purple</Button>
```

## 🌐 Browser Support

-   Chrome (latest)
-   Firefox (latest)
-   Safari (latest)
-   Edge (latest)

## 📄 License

MIT © [dev-snake](https://github.com/dev-snake)

## 🔗 Links

-   [NPM Package](https://www.npmjs.com/package/brutalist-ui)
-   [GitHub Repository](https://github.com/dev-snake/brutalist-ui)
-   [Documentation](https://brutalist-ui.vercel.app)
