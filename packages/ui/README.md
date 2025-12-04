# Brutalist UI

Neo-brutalism React component library with CLI support. Copy components into your codebase for full customization control.

[![npm version](https://img.shields.io/npm/v/brutalist-ui.svg?style=flat-square&color=FF6B6B)](https://www.npmjs.com/package/brutalist-ui)
[![npm downloads](https://img.shields.io/npm/dm/brutalist-ui.svg?style=flat-square)](https://www.npmjs.com/package/brutalist-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-4ECDC4.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-FFE66D.svg?style=flat-square)](https://www.typescriptlang.org/)

## Features

-   **CLI Tool**: Copy components into your codebase with `npx brutx@latest`
-   **Full Control**: Own and customize every component
-   Brutalist wrappers: bold borders, offset shadows, vibrant colors
-   Tailwind-ready tokens: background/foreground/primary/secondary/destructive, ring, input, card, etc. Dark mode via `.dark`
-   Radix-based primitives, CVA variants, and tailwind-merge `cn`

## Installation

Use the CLI to add components to your project:

```bash
# Initialize your project
npx brutx@latest init

# Add components
npx brutx@latest add button card badge

# Or add all components
npx brutx@latest add --all
```

## Usage

After adding components, import them from your project:

```tsx
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export function Example() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Welcome to Brutalist UI</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
                <Input placeholder="Email" />
                <Button variant="primary">Get Started</Button>
                <Button variant="outline" size="sm">
                    Learn More
                </Button>
            </CardContent>
        </Card>
    );
}
```

## CLI Commands

| Command                            | Description                             |
| ---------------------------------- | --------------------------------------- |
| `npx brutx@latest init`            | Initialize project with components.json |
| `npx brutx@latest add <component>` | Add specific component(s)               |
| `npx brutx@latest add --all`       | Add all components                      |

## Notes

-   Dark mode: add/remove `.dark` on `html` or `body` to switch themes.
-   Components are copied to your project, giving you full ownership and customization control.
-   Tokens can be overridden by setting CSS variables (`--background`, `--primary`, etc.).
