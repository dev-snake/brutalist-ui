import chalk from 'chalk';
import ora from 'ora';
import inquirer from 'inquirer';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

interface InitOptions {
    yes?: boolean;
    defaults?: boolean;
    cwd?: string;
    force?: boolean;
    silent?: boolean;
}

interface Config {
    tailwind: {
        config: string;
        css: string;
    };
    aliases: {
        components: string;
        utils: string;
    };
}

const defaultConfig: Config = {
    tailwind: {
        config: 'tailwind.config.js',
        css: 'app/globals.css',
    },
    aliases: {
        components: '@/components',
        utils: '@/lib/utils',
    },
};

// Detect project type and adjust defaults
async function detectProjectType(cwd: string): Promise<Config> {
    const config = { ...defaultConfig };

    // Check for common CSS file locations
    const cssLocations = [
        'src/app/globals.css',
        'src/index.css',
        'src/styles/globals.css',
        'app/globals.css',
        'styles/globals.css',
    ];

    for (const cssPath of cssLocations) {
        if (await fs.pathExists(path.join(cwd, cssPath))) {
            config.tailwind.css = cssPath;
            break;
        }
    }

    // Check for tailwind config variations
    const tailwindConfigs = [
        'tailwind.config.js',
        'tailwind.config.ts',
        'tailwind.config.mjs',
        'tailwind.config.cjs',
    ];

    for (const configPath of tailwindConfigs) {
        if (await fs.pathExists(path.join(cwd, configPath))) {
            config.tailwind.config = configPath;
            break;
        }
    }

    return config;
}

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

export async function init(options: InitOptions) {
    const cwd = options.cwd || process.cwd();

    if (!options.silent) {
        console.log(chalk.bold('\n🎨 Brutalist UI - Neo-Brutalism Component Library\n'));
    }

    // Check if already initialized
    const configPath = path.join(cwd, 'components.json');
    if (await fs.pathExists(configPath)) {
        if (!options.force) {
            if (options.yes) {
                log(
                    chalk.yellow('Brutalist UI is already initialized. Use --force to overwrite.'),
                    options.silent
                );
                return;
            }

            const { overwrite } = await inquirer.prompt([
                {
                    type: 'confirm',
                    name: 'overwrite',
                    message: 'Brutalist UI is already initialized. Overwrite?',
                    default: false,
                },
            ]);
            if (!overwrite) {
                log(chalk.yellow('Aborted.'), options.silent);
                return;
            }
        }
    }

    // Detect project settings
    let config = await detectProjectType(cwd);

    if (!options.yes && !options.defaults) {
        const answers = await inquirer.prompt([
            {
                type: 'input',
                name: 'tailwindConfig',
                message: 'Where is your tailwind.config.js located?',
                default: config.tailwind.config,
            },
            {
                type: 'input',
                name: 'globalCss',
                message: 'Where is your global CSS file?',
                default: config.tailwind.css,
            },
            {
                type: 'input',
                name: 'componentsAlias',
                message: 'Configure the import alias for components:',
                default: config.aliases.components,
            },
            {
                type: 'input',
                name: 'utilsAlias',
                message: 'Configure the import alias for utils:',
                default: config.aliases.utils,
            },
        ]);

        config = {
            tailwind: {
                config: answers.tailwindConfig,
                css: answers.globalCss,
            },
            aliases: {
                components: answers.componentsAlias,
                utils: answers.utilsAlias,
            },
        };
    }

    const spinner = options.silent ? null : ora('Initializing Brutalist UI...').start();

    try {
        // Create components.json
        await fs.writeJson(
            configPath,
            {
                $schema: 'https://brutalistui.site/schema.json',
                style: 'brutalism',
                tailwind: config.tailwind,
                aliases: config.aliases,
            },
            { spaces: 2 }
        );

        // NOTE: Don't create directories here - they will be created when adding components

        // Create utils.ts only when user adds first component (moved to add.ts)

        // Update tailwind.config.js if exists
        const tailwindConfigPath = path.join(cwd, config.tailwind.config);
        if (await fs.pathExists(tailwindConfigPath)) {
            let tailwindConfig = await fs.readFile(tailwindConfigPath, 'utf-8');

            // Add brutalism plugin info
            if (!tailwindConfig.includes('brutalism')) {
                spinner?.info('Remember to add brutalism styles to your tailwind config!');
            }
        }

        // Update global CSS
        const cssPath = path.join(cwd, config.tailwind.css);
        if (await fs.pathExists(cssPath)) {
            let cssContent = await fs.readFile(cssPath, 'utf-8');

            const brutalismStyles = `
/* Brutalist UI Styles */
.border-3 {
    border-width: 3px;
}

.shadow-brutal {
    box-shadow: 4px 4px 0px 0px #000;
}

.shadow-brutal-sm {
    box-shadow: 2px 2px 0px 0px #000;
}

.shadow-brutal-lg {
    box-shadow: 6px 6px 0px 0px #000;
}

.dark .shadow-brutal {
    box-shadow: 4px 4px 0px 0px #fff;
}

.dark .shadow-brutal-sm {
    box-shadow: 2px 2px 0px 0px #fff;
}

.dark .shadow-brutal-lg {
    box-shadow: 6px 6px 0px 0px #fff;
}
`;

            if (!cssContent.includes('shadow-brutal')) {
                cssContent += brutalismStyles;
                await fs.writeFile(cssPath, cssContent);
            }
        }

        spinner?.succeed(chalk.green('Brutalist UI initialized successfully!'));

        // Install dependencies
        const packageManager = getPackageManager(cwd);
        log('\n' + chalk.bold(`Installing dependencies with ${packageManager}...`), options.silent);

        const deps = ['clsx', 'tailwind-merge', 'class-variance-authority', 'lucide-react'];

        try {
            installDependencies(packageManager, deps, cwd);
            log(chalk.green('✓ Dependencies installed'), options.silent);
        } catch (error) {
            log(chalk.yellow('⚠ Failed to install dependencies automatically.'), options.silent);
            log(
                chalk.gray(`  Run manually: ${packageManager} add ${deps.join(' ')}`),
                options.silent
            );
        }

        log('\n' + chalk.bold('Next steps:'), options.silent);
        log(chalk.cyan('  1. Add components:'), options.silent);
        log(chalk.gray('     npx brutx@latest add button'), options.silent);
        log(chalk.gray('     npx brutx@latest add --all'), options.silent);
        log('\n' + chalk.dim('Documentation: https://brutalistui.site/docs'), options.silent);
    } catch (error) {
        spinner?.fail(chalk.red('Failed to initialize Brutalist UI'));
        console.error(error);
        process.exit(1);
    }
}
