import { Badge } from 'brutalist-ui';
import { Metadata } from 'next';
import { CodeBlock, PackageManagerTabs } from '@/components/code-block';

export const metadata: Metadata = {
    title: 'Installation Guide - Brutalist UI | Setup Neo-Brutalism Components',
    description:
        'Install Brutalist UI in your React or Next.js project. Step-by-step guide for npm, pnpm, yarn with Tailwind CSS configuration and TypeScript support.',
    keywords: [
        'install brutalist-ui',
        'brutalist ui setup',
        'neo-brutalism npm',
        'react brutalism install',
        'tailwind brutalism plugin',
    ],
    openGraph: {
        title: 'Installation Guide - Brutalist UI',
        description:
            'Install Brutalist UI in your React or Next.js project with npm, pnpm, or yarn.',
        url: 'https://brutalistui.site/docs/installation',
    },
    alternates: {
        canonical: 'https://brutalistui.site/docs/installation',
    },
};

export default function InstallationPage() {
    return (
        <div>
            <Badge variant="secondary" className="mb-4">
                Setup
            </Badge>
            <h1>Installation</h1>

            <p>Get started with Neo-Brutalism UI in your React or Next.js project.</p>

            <h2>Prerequisites</h2>
            <ul>
                <li>React 18 or higher</li>
                <li>Tailwind CSS 3.0 or higher</li>
                <li>Node.js 18 or higher</li>
            </ul>

            <h2>Install the Package</h2>
            <PackageManagerTabs
                commands={{
                    npm: 'npm install brutalist-ui',
                    pnpm: 'pnpm add brutalist-ui',
                    yarn: 'yarn add brutalist-ui',
                    bun: 'bun add brutalist-ui',
                }}
            />

            <h2>Configure Tailwind CSS</h2>
            <p>
                Add the library to your Tailwind CSS content paths and include the Brutalism plugin:
            </p>
            <CodeBlock language="js">{`// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/brutalist-ui/**/*.{js,mjs}'
  ],
  theme: {
    extend: {
      // Optional: extend with brutalism colors
      colors: {
        brutalism: {
          primary: '#FF6B6B',
          secondary: '#4ECDC4',
          accent: '#FFE66D',
        }
      }
    },
  },
  plugins: [
    require('brutalist-ui/brutalism-plugin')
  ],
}`}</CodeBlock>

            <h2>Import Components</h2>
            <p>Import and use components in your React application:</p>
            <CodeBlock language="tsx">{`import { Button, Card, Dialog } from 'brutalist-ui';

function App() {
  return (
    <Card>
      <h2>Welcome!</h2>
      <Button variant="primary">
        Click me
      </Button>
    </Card>
  );
}`}</CodeBlock>

            <h2>TypeScript Support</h2>
            <p>
                Neo-Brutalism UI is written in TypeScript and includes full type definitions. No
                additional setup is required.
            </p>
            <CodeBlock language="tsx">{`import { Button, type ButtonProps } from 'brutalist-ui';

// Full type inference for props
const MyButton = (props: ButtonProps) => {
  return <Button {...props} />;
};`}</CodeBlock>

            <h2>Next.js Setup</h2>
            <p>For Next.js projects, add the package to your transpilePackages config:</p>
            <CodeBlock language="js">{`// next.config.js
module.exports = {
  transpilePackages: ['brutalist-ui'],
}`}</CodeBlock>
        </div>
    );
}
