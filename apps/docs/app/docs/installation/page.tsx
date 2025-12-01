import { Badge } from 'brutalist-ui';

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
            <pre className="bg-gray-900 text-white p-4 border-3 border-black shadow-brutal overflow-x-auto">
                {`# Using npm
npm install brutalist-ui

# Using pnpm
pnpm add brutalist-ui

# Using yarn
yarn add brutalist-ui`}
            </pre>

            <h2>Configure Tailwind CSS</h2>
            <p>
                Add the library to your Tailwind CSS content paths and include the Brutalism plugin:
            </p>
            <pre className="bg-gray-900 text-white p-4 border-3 border-black shadow-brutal overflow-x-auto text-sm">
                {`// tailwind.config.js
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
}`}
            </pre>

            <h2>Import Components</h2>
            <p>Import and use components in your React application:</p>
            <pre className="bg-gray-900 text-white p-4 border-3 border-black shadow-brutal overflow-x-auto text-sm">
                {`import { Button, Card, Dialog } from 'brutalist-ui';

function App() {
  return (
    <Card>
      <h2>Welcome!</h2>
      <Button variant="primary">
        Click me
      </Button>
    </Card>
  );
}`}
            </pre>

            <h2>TypeScript Support</h2>
            <p>
                Neo-Brutalism UI is written in TypeScript and includes full type definitions. No
                additional setup is required.
            </p>
            <pre className="bg-gray-900 text-white p-4 border-3 border-black shadow-brutal overflow-x-auto text-sm">
                {`import { Button, type ButtonProps } from 'brutalist-ui';

// Full type inference for props
const MyButton = (props: ButtonProps) => {
  return <Button {...props} />;
};`}
            </pre>

            <h2>Next.js Setup</h2>
            <p>For Next.js projects, add the package to your transpilePackages config:</p>
            <pre className="bg-gray-900 text-white p-4 border-3 border-black shadow-brutal overflow-x-auto text-sm">
                {`// next.config.js
module.exports = {
  transpilePackages: ['brutalist-ui'],
}`}
            </pre>
        </div>
    );
}
