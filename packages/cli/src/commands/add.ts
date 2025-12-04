import chalk from 'chalk';
import ora from 'ora';
import inquirer from 'inquirer';
import fs from 'fs-extra';
import path from 'path';
import { execSync } from 'child_process';
import { getComponentTemplate } from '../templates/index.js';

interface AddOptions {
    all?: boolean;
    overwrite?: boolean;
    path?: string;
    cwd?: string;
    yes?: boolean;
    silent?: boolean;
}

interface ComponentsConfig {
    aliases: {
        components: string;
        utils: string;
    };
}

interface TsConfig {
    compilerOptions?: {
        baseUrl?: string;
        paths?: Record<string, string[]>;
    };
}

// Project types we support
type ProjectType = 'nextjs' | 'nextjs-src' | 'vite' | 'vite-src' | 'cra' | 'remix' | 'unknown';

/**
 * Detect project type based on config files and folder structure
 */
function detectProjectType(cwd: string): ProjectType {
    const hasNextConfig = 
        fs.existsSync(path.join(cwd, 'next.config.js')) ||
        fs.existsSync(path.join(cwd, 'next.config.mjs')) ||
        fs.existsSync(path.join(cwd, 'next.config.ts'));
    
    const hasViteConfig = 
        fs.existsSync(path.join(cwd, 'vite.config.js')) ||
        fs.existsSync(path.join(cwd, 'vite.config.ts')) ||
        fs.existsSync(path.join(cwd, 'vite.config.mjs'));
    
    const hasRemixConfig = fs.existsSync(path.join(cwd, 'remix.config.js'));
    
    const hasSrcFolder = fs.existsSync(path.join(cwd, 'src'));
    const hasAppFolder = fs.existsSync(path.join(cwd, 'app'));
    const hasSrcAppFolder = fs.existsSync(path.join(cwd, 'src', 'app'));

    if (hasRemixConfig) return 'remix';
    
    if (hasNextConfig) {
        // Next.js with src folder
        if (hasSrcFolder && hasSrcAppFolder) return 'nextjs-src';
        // Next.js without src (app router at root)
        return 'nextjs';
    }
    
    if (hasViteConfig) {
        if (hasSrcFolder) return 'vite-src';
        return 'vite';
    }
    
    // Check for CRA (react-scripts in package.json)
    try {
        const packageJson = fs.readJsonSync(path.join(cwd, 'package.json'));
        if (packageJson.dependencies?.['react-scripts'] || packageJson.devDependencies?.['react-scripts']) {
            return 'cra';
        }
    } catch {}

    return 'unknown';
}

/**
 * Read and parse tsconfig.json or jsconfig.json
 */
function readTsConfig(cwd: string): TsConfig | null {
    const configFiles = ['tsconfig.json', 'jsconfig.json'];
    
    for (const configFile of configFiles) {
        const configPath = path.join(cwd, configFile);
        if (fs.existsSync(configPath)) {
            try {
                const content = fs.readFileSync(configPath, 'utf-8');
                // Remove comments (tsconfig allows comments)
                const jsonContent = content.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '');
                return JSON.parse(jsonContent);
            } catch {
                // If parsing fails, continue to next file
            }
        }
    }
    return null;
}

/**
 * Resolve alias to actual filesystem path using tsconfig/jsconfig paths
 * Falls back to intelligent detection based on project structure
 */
function resolveAliasPath(alias: string, cwd: string): string {
    const tsConfig = readTsConfig(cwd);
    const projectType = detectProjectType(cwd);
    
    // Get the alias prefix (e.g., "@" from "@/components")
    const aliasMatch = alias.match(/^(@[^/]*)\/(.*)/);
    if (!aliasMatch) {
        // No alias, treat as relative path
        return path.join(cwd, alias);
    }
    
    const [, aliasPrefix, relativePath] = aliasMatch;
    const aliasPattern = `${aliasPrefix}/*`;
    
    // Try to resolve from tsconfig/jsconfig paths
    if (tsConfig?.compilerOptions?.paths) {
        const paths = tsConfig.compilerOptions.paths;
        const baseUrl = tsConfig.compilerOptions.baseUrl || '.';
        
        // Look for matching alias pattern
        if (paths[aliasPattern]) {
            const targetPath = paths[aliasPattern][0]; // Take first mapping
            // Convert "@/*" -> "./*" or "./src/*" to actual path
            const resolvedBase = targetPath.replace('/*', '');
            return path.join(cwd, baseUrl, resolvedBase, relativePath);
        }
        
        // Try exact alias match
        if (paths[alias]) {
            return path.join(cwd, baseUrl, paths[alias][0]);
        }
    }
    
    // Fallback: Intelligent detection based on project type
    const pathWithoutAlias = relativePath; // "components" from "@/components"
    
    switch (projectType) {
        case 'nextjs-src':
        case 'vite-src':
        case 'cra':
            // These typically use src/ folder
            return path.join(cwd, 'src', pathWithoutAlias);
        
        case 'nextjs':
        case 'vite':
            // Modern Next.js without src uses root
            return path.join(cwd, pathWithoutAlias);
        
        case 'remix':
            // Remix uses app/ folder structure
            return path.join(cwd, 'app', pathWithoutAlias);
        
        default:
            // Unknown: check if src exists
            if (fs.existsSync(path.join(cwd, 'src'))) {
                return path.join(cwd, 'src', pathWithoutAlias);
            }
            return path.join(cwd, pathWithoutAlias);
    }
}

const AVAILABLE_COMPONENTS = [
    'alert',
    'avatar',
    'badge',
    'button',
    'calendar',
    'card',
    'checkbox',
    'combobox',
    'command',
    'dialog',
    'dropdown-menu',
    'input',
    'label',
    'pagination',
    'popover',
    'scroll-area',
    'select',
    'separator',
    'skeleton',
    'spinner',
    'submit-button',
    'switch',
    'table',
    'tabs',
    'textarea',
    'toast',
    'tooltip',
];

// Component dependencies mapping
const COMPONENT_DEPENDENCIES: Record<string, string[]> = {
    button: ['@radix-ui/react-slot'],
    dialog: ['@radix-ui/react-dialog', 'lucide-react'],
    popover: ['@radix-ui/react-popover'],
    tooltip: ['@radix-ui/react-tooltip'],
    'dropdown-menu': ['@radix-ui/react-dropdown-menu', 'lucide-react'],
    select: ['@radix-ui/react-select', 'lucide-react'],
    tabs: ['@radix-ui/react-tabs'],
    avatar: ['@radix-ui/react-avatar'],
    separator: ['@radix-ui/react-separator'],
    switch: ['@radix-ui/react-switch'],
    checkbox: ['@radix-ui/react-checkbox', 'lucide-react'],
    calendar: ['react-day-picker', 'date-fns', 'lucide-react'],
    command: ['cmdk', 'lucide-react'],
    'scroll-area': ['@radix-ui/react-scroll-area'],
    combobox: ['cmdk', '@radix-ui/react-popover', 'lucide-react'],
    alert: ['lucide-react'],
    pagination: ['lucide-react'],
    toast: ['lucide-react'],
    spinner: [],
    skeleton: [],
    badge: [],
    card: [],
    input: [],
    label: ['@radix-ui/react-label'],
    textarea: [],
    table: [],
    'submit-button': [], // Uses button component, no additional deps
};

// Detect package manager
function getPackageManager(cwd: string): 'pnpm' | 'yarn' | 'bun' | 'npm' {
    try {
        if (fs.existsSync(path.join(cwd, 'pnpm-lock.yaml'))) return 'pnpm';
        if (fs.existsSync(path.join(cwd, 'yarn.lock'))) return 'yarn';
        if (fs.existsSync(path.join(cwd, 'bun.lockb'))) return 'bun';
    } catch {
        // ignore
    }
    return 'npm';
}

// Install dependencies
function installDependencies(packageManager: string, deps: string[], cwd: string): void {
    if (deps.length === 0) return;

    const installCmd = {
        pnpm: `pnpm add ${deps.join(' ')}`,
        yarn: `yarn add ${deps.join(' ')}`,
        bun: `bun add ${deps.join(' ')}`,
        npm: `npm install ${deps.join(' ')}`,
    }[packageManager];

    execSync(installCmd!, { stdio: 'inherit', cwd });
}

function log(message: string, silent?: boolean) {
    if (!silent) {
        console.log(message);
    }
}

export async function add(components: string[], options: AddOptions) {
    const cwd = options.cwd || process.cwd();

    // Check if initialized
    const configPath = path.join(cwd, 'components.json');
    if (!(await fs.pathExists(configPath))) {
        console.log(chalk.red('Error: Brutalist UI is not initialized.'));
        console.log(chalk.yellow('Run: npx brutx@latest init'));
        process.exit(1);
    }

    const config: ComponentsConfig = await fs.readJson(configPath);

    // Handle --all flag
    if (options.all) {
        components = AVAILABLE_COMPONENTS;
    }

    // If no components specified, show picker
    if (components.length === 0) {
        if (options.yes) {
            console.log(chalk.red('Error: No components specified.'));
            console.log(chalk.yellow('Use: npx brutx@latest add [component] or --all'));
            process.exit(1);
        }

        const { selected } = await inquirer.prompt([
            {
                type: 'checkbox',
                name: 'selected',
                message: 'Which components would you like to add?',
                choices: AVAILABLE_COMPONENTS.map((name) => ({
                    name,
                    value: name,
                })),
                pageSize: 15,
            },
        ]);
        components = selected;
    }

    if (components.length === 0) {
        log(chalk.yellow('No components selected.'), options.silent);
        return;
    }

    // Validate component names
    const invalid = components.filter((c) => !AVAILABLE_COMPONENTS.includes(c));
    if (invalid.length > 0) {
        console.log(chalk.red(`Unknown components: ${invalid.join(', ')}`));
        console.log(chalk.yellow(`Available: ${AVAILABLE_COMPONENTS.join(', ')}`));
        process.exit(1);
    }

    const spinner = options.silent ? null : ora('Adding components...').start();

    const componentsDir = options.path
        ? path.join(cwd, options.path)
        : resolveAliasPath(config.aliases.components, cwd);
    const utilsAlias = config.aliases.utils;
    const utilsPath = resolveAliasPath(config.aliases.utils, cwd) + '.ts';
    const utilsDir = path.dirname(utilsPath);

    await fs.ensureDir(path.join(componentsDir, 'ui'));

    // Create utils.ts if it doesn't exist
    if (!(await fs.pathExists(utilsPath))) {
        await fs.ensureDir(utilsDir);
        await fs.writeFile(
            utilsPath,
            `import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
`
        );
        spinner?.info(chalk.gray(`Created ${utilsPath}`));
    }

    let added = 0;
    let skipped = 0;
    const addedComponents: string[] = [];

    for (const component of components) {
        const filePath = path.join(componentsDir, 'ui', `${component}.tsx`);

        // Check if exists
        if ((await fs.pathExists(filePath)) && !options.overwrite) {
            spinner?.info(chalk.yellow(`Skipping ${component} (already exists)`));
            skipped++;
            continue;
        }

        try {
            const template = getComponentTemplate(component, utilsAlias);
            await fs.writeFile(filePath, template);
            added++;
            addedComponents.push(component);
        } catch (error) {
            spinner?.warn(chalk.yellow(`Failed to add ${component}`));
        }
    }

    spinner?.succeed(
        chalk.green(`Added ${added} component(s)${skipped > 0 ? `, skipped ${skipped}` : ''}`)
    );

    // Collect and install dependencies
    const allDeps = new Set<string>();
    for (const component of addedComponents) {
        const deps = COMPONENT_DEPENDENCIES[component];
        if (deps) {
            deps.forEach((d) => allDeps.add(d));
        }
    }

    if (allDeps.size > 0) {
        const packageManager = getPackageManager(cwd);
        log('\n' + chalk.bold(`Installing dependencies with ${packageManager}...`), options.silent);

        try {
            installDependencies(packageManager, Array.from(allDeps), cwd);
            log(chalk.green('✓ Dependencies installed'), options.silent);
        } catch (error) {
            log(chalk.yellow('⚠ Failed to install dependencies automatically.'), options.silent);
            log(
                chalk.gray(
                    `  Run manually: ${packageManager} add ${Array.from(allDeps).join(' ')}`
                ),
                options.silent
            );
        }
    }

    log('\n' + chalk.bold('Components added to:'), options.silent);
    log(chalk.cyan(`  ${path.join(componentsDir, 'ui')}/`), options.silent);

    if (addedComponents.length > 0) {
        log('\n' + chalk.bold('Usage:'), options.silent);
        const exampleComponent = addedComponents[0];
        const componentName = exampleComponent
            .split('-')
            .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
            .join('');
        log(
            chalk.gray(
                `  import { ${componentName} } from "${config.aliases.components}/ui/${exampleComponent}";`
            ),
            options.silent
        );
    }
}
