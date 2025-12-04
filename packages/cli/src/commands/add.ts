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

// Resolve alias to actual path
function resolveAliasPath(alias: string, cwd: string): string {
    // @/components -> components (or src/components if src exists)
    // @/lib/utils -> lib/utils (or src/lib/utils if src exists)
    const relativePath = alias.replace(/^@\//, '');

    // Check if src folder exists and has content
    const srcExists = fs.existsSync(path.join(cwd, 'src'));

    if (srcExists) {
        return path.join(cwd, 'src', relativePath);
    }
    return path.join(cwd, relativePath);
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
