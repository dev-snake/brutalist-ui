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
    dialog: ['@radix-ui/react-dialog'],
    popover: ['@radix-ui/react-popover'],
    tooltip: ['@radix-ui/react-tooltip'],
    'dropdown-menu': ['@radix-ui/react-dropdown-menu'],
    select: ['@radix-ui/react-select'],
    tabs: ['@radix-ui/react-tabs'],
    avatar: ['@radix-ui/react-avatar'],
    separator: ['@radix-ui/react-separator'],
    switch: ['@radix-ui/react-switch'],
    checkbox: ['@radix-ui/react-checkbox'],
    calendar: ['react-day-picker', 'date-fns'],
    command: ['cmdk'],
    'scroll-area': ['@radix-ui/react-scroll-area'],
    combobox: ['cmdk', '@radix-ui/react-popover'],
};

// Detect package manager
function getPackageManager(): 'pnpm' | 'yarn' | 'bun' | 'npm' {
    try {
        if (fs.existsSync('pnpm-lock.yaml')) return 'pnpm';
        if (fs.existsSync('yarn.lock')) return 'yarn';
        if (fs.existsSync('bun.lockb')) return 'bun';
    } catch {
        // ignore
    }
    return 'npm';
}

// Install dependencies
function installDependencies(packageManager: string, deps: string[]): void {
    if (deps.length === 0) return;

    const installCmd = {
        pnpm: `pnpm add ${deps.join(' ')}`,
        yarn: `yarn add ${deps.join(' ')}`,
        bun: `bun add ${deps.join(' ')}`,
        npm: `npm install ${deps.join(' ')}`,
    }[packageManager];

    execSync(installCmd!, { stdio: 'inherit' });
}

export async function add(components: string[], options: AddOptions) {
    // Check if initialized
    if (!(await fs.pathExists('components.json'))) {
        console.log(chalk.red('Error: Brutalist UI is not initialized.'));
        console.log(chalk.yellow('Run: npx brutalist-ui init'));
        process.exit(1);
    }

    const config: ComponentsConfig = await fs.readJson('components.json');

    // Handle --all flag
    if (options.all) {
        components = AVAILABLE_COMPONENTS;
    }

    // If no components specified, show picker
    if (components.length === 0) {
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
        console.log(chalk.yellow('No components selected.'));
        return;
    }

    // Validate component names
    const invalid = components.filter((c) => !AVAILABLE_COMPONENTS.includes(c));
    if (invalid.length > 0) {
        console.log(chalk.red(`Unknown components: ${invalid.join(', ')}`));
        console.log(chalk.yellow(`Available: ${AVAILABLE_COMPONENTS.join(', ')}`));
        process.exit(1);
    }

    const spinner = ora('Adding components...').start();

    const componentsDir = options.path || config.aliases.components.replace('@/', 'src/');
    const utilsAlias = config.aliases.utils;

    await fs.ensureDir(path.join(componentsDir, 'ui'));

    let added = 0;
    let skipped = 0;

    for (const component of components) {
        const filePath = path.join(componentsDir, 'ui', `${component}.tsx`);

        // Check if exists
        if ((await fs.pathExists(filePath)) && !options.overwrite) {
            spinner.info(chalk.yellow(`Skipping ${component} (already exists)`));
            skipped++;
            continue;
        }

        try {
            const template = getComponentTemplate(component, utilsAlias);
            await fs.writeFile(filePath, template);
            added++;
        } catch (error) {
            spinner.warn(chalk.yellow(`Failed to add ${component}`));
        }
    }

    spinner.succeed(
        chalk.green(`Added ${added} component(s)${skipped > 0 ? `, skipped ${skipped}` : ''}`)
    );

    // Collect and install dependencies
    const allDeps = new Set<string>();
    for (const component of components) {
        const deps = COMPONENT_DEPENDENCIES[component];
        if (deps) {
            deps.forEach((d) => allDeps.add(d));
        }
    }

    if (allDeps.size > 0) {
        const packageManager = getPackageManager();
        console.log('\n' + chalk.bold(`Installing dependencies with ${packageManager}...`));

        try {
            installDependencies(packageManager, Array.from(allDeps));
            console.log(chalk.green('✓ Dependencies installed'));
        } catch (error) {
            console.log(chalk.yellow('⚠ Failed to install dependencies automatically.'));
            console.log(
                chalk.gray(`  Run manually: ${packageManager} add ${Array.from(allDeps).join(' ')}`)
            );
        }
    }

    console.log('\n' + chalk.bold('Components added to:'));
    console.log(chalk.cyan(`  ${path.join(componentsDir, 'ui')}/`));

    console.log('\n' + chalk.bold('Usage:'));
    console.log(chalk.gray(`  import { Button } from "${config.aliases.components}/ui/button";`));
}
