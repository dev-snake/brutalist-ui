'use client';

import { Badge } from '@/components/ui';
import Link from 'next/link';
import { CodeBlock, PackageManagerTabs } from '@/components/code-block';

export default function ViteInstallationPage() {
    return (
        <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4">
                Installation
            </Badge>
            <h1 className="text-4xl font-black mb-4">Vite</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Install and configure Brutalist UI for Vite + React projects.
            </p>

            {/* Method A: NPM Package */}
            <section className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#4ECDC4] border-3 border-black flex items-center justify-center">
                        <span className="font-black text-black">A</span>
                    </div>
                    <div>
                        <h2 className="text-xl font-black">NPM Package</h2>
                        <span className="text-xs uppercase tracking-wider text-[#4ECDC4] font-bold">
                            Recommended
                        </span>
                    </div>
                </div>
                <p className="mb-6 text-gray-600 dark:text-gray-400">
                    Fastest way to get started with Vite.
                </p>

                <h3 className="text-lg font-black mb-3">1. Create a Vite project (if new)</h3>
                <PackageManagerTabs
                    commands={{
                        pnpm: 'pnpm create vite@latest my-app --template react-ts',
                        npm: 'npm create vite@latest my-app -- --template react-ts',
                        yarn: 'yarn create vite my-app --template react-ts',
                        bun: 'bunx create-vite my-app --template react-ts',
                    }}
                />

                <h3 className="text-lg font-black mb-3 mt-6">2. Install Tailwind CSS</h3>
                <PackageManagerTabs
                    commands={{
                        pnpm: 'pnpm add -D tailwindcss postcss autoprefixer && npx tailwindcss init -p',
                        npm: 'npm install -D tailwindcss postcss autoprefixer && npx tailwindcss init -p',
                        yarn: 'yarn add -D tailwindcss postcss autoprefixer && npx tailwindcss init -p',
                        bun: 'bun add -D tailwindcss postcss autoprefixer && bunx tailwindcss init -p',
                    }}
                />

                <h3 className="text-lg font-black mb-3 mt-6">3. Configure tailwind.config.js</h3>
                <CodeBlock language="tailwind.config.js">{`/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        3: "3px",
      },
    },
  },
  plugins: [],
}`}</CodeBlock>

                <h3 className="text-lg font-black mb-3 mt-6">4. Add Tailwind to CSS</h3>
                <CodeBlock language="src/index.css">{`@tailwind base;
@tailwind components;
@tailwind utilities;`}</CodeBlock>

                <h3 className="text-lg font-black mb-3 mt-6">5. Install Brutalist UI</h3>
                <PackageManagerTabs
                    commands={{
                        pnpm: 'pnpm add brutalist-ui',
                        npm: 'npm install brutalist-ui',
                        yarn: 'yarn add brutalist-ui',
                        bun: 'bun add brutalist-ui',
                    }}
                />

                <h3 className="text-lg font-black mb-3 mt-6">6. Import styles in main.tsx</h3>
                <CodeBlock language="src/main.tsx">{`import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import 'brutalist-ui/styles.css'; // Add this line

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);`}</CodeBlock>

                <h3 className="text-lg font-black mb-3 mt-6">7. Use components</h3>
                <CodeBlock language="src/App.tsx">{`import { Button, Card, CardContent, Badge } from 'brutalist-ui';

function App() {
  return (
    <div className="p-8">
      <Card variant="default" padding="default">
        <CardContent>
          <Badge variant="accent" className="mb-4">Welcome</Badge>
          <h1 className="text-2xl font-black mb-4">Hello Brutalist UI!</h1>
          <div className="flex gap-2">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;`}</CodeBlock>
            </section>

            {/* Method B: CLI */}
            <section className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#FF6B6B] border-3 border-black flex items-center justify-center">
                        <span className="font-black text-black">B</span>
                    </div>
                    <div>
                        <h2 className="text-xl font-black">CLI Tool</h2>
                        <span className="text-xs uppercase tracking-wider text-gray-500">
                            Copy & Customize
                        </span>
                    </div>
                </div>
                <p className="mb-6 text-gray-600 dark:text-gray-400">
                    Copy components into your project for full customization.
                </p>

                <h3 className="text-lg font-black mb-3">1. Create and setup Vite project</h3>
                <PackageManagerTabs
                    commands={{
                        pnpm: 'pnpm create vite@latest my-app --template react-ts',
                        npm: 'npm create vite@latest my-app -- --template react-ts',
                        yarn: 'yarn create vite my-app --template react-ts',
                        bun: 'bunx create-vite my-app --template react-ts',
                    }}
                />

                <h3 className="text-lg font-black mb-3 mt-6">
                    2. Setup path aliases in vite.config.ts
                </h3>
                <CodeBlock language="vite.config.ts">{`import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});`}</CodeBlock>

                <h3 className="text-lg font-black mb-3 mt-6">3. Update tsconfig.json</h3>
                <CodeBlock language="tsconfig.json">{`{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}`}</CodeBlock>

                <h3 className="text-lg font-black mb-3 mt-6">4. Run init command</h3>
                <PackageManagerTabs
                    commands={{
                        pnpm: 'pnpm dlx brutalist@latest init',
                        npm: 'npx brutalist@latest init',
                        yarn: 'yarn dlx brutalist@latest init',
                        bun: 'bunx brutalist@latest init',
                    }}
                />

                <h3 className="text-lg font-black mb-3 mt-6">5. Add components</h3>
                <PackageManagerTabs
                    commands={{
                        pnpm: 'pnpm dlx brutalist@latest add button card badge',
                        npm: 'npx brutalist@latest add button card badge',
                        yarn: 'yarn dlx brutalist@latest add button card badge',
                        bun: 'bunx brutalist@latest add button card badge',
                    }}
                />

                <h3 className="text-lg font-black mb-3 mt-6">6. Use components</h3>
                <CodeBlock language="src/App.tsx">{`import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

function App() {
  return (
    <div className="p-8">
      <Card>
        <CardContent>
          <Badge variant="accent" className="mb-4">Welcome</Badge>
          <h1 className="text-2xl font-black mb-4">Hello!</h1>
          <Button variant="primary">Get Started</Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;`}</CodeBlock>
            </section>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-8 border-t-3 border-black dark:border-white mt-12">
                <Link
                    href="/docs/installation/nextjs"
                    className="flex items-center gap-2 font-bold hover:text-[#FF6B6B] transition-colors"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                    Next.js
                </Link>
                <Link
                    href="/docs/installation/manual"
                    className="flex items-center gap-2 font-bold hover:text-[#FF6B6B] transition-colors"
                >
                    Manual
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </Link>
            </div>
        </div>
    );
}
