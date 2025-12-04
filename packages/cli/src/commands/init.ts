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
 * Get alias configuration from tsconfig/jsconfig
 */
function getAliasFromTsConfig(cwd: string): { components: string; utils: string } | null {
    const tsConfig = readTsConfig(cwd);
    
    if (tsConfig?.compilerOptions?.paths) {
        const paths = tsConfig.compilerOptions.paths;
        
        // Look for common alias patterns
        for (const [alias] of Object.entries(paths)) {
            // Found @/* or ~/* pattern
            if (alias.endsWith('/*')) {
                const prefix = alias.replace('/*', '');
                return {
                    components: `${prefix}/components`,
                    utils: `${prefix}/lib/utils`,
                };
            }
        }
    }
    
    return null;
}

/**
 * Find existing CSS files in the project
 */
function findCssFile(cwd: string, projectType: ProjectType): string | null {
    // Priority list based on project type
    const cssLocations: Record<ProjectType, string[]> = {
        'nextjs': [
            'app/globals.css',
            'styles/globals.css',
            'app/global.css',
        ],
        'nextjs-src': [
            'src/app/globals.css',
            'src/styles/globals.css',
            'src/app/global.css',
        ],
        'vite': [
            'src/index.css',
            'src/App.css',
            'index.css',
        ],
        'vite-src': [
            'src/index.css',
            'src/App.css',
            'src/styles/index.css',
        ],
        'cra': [
            'src/index.css',
            'src/App.css',
        ],
        'remix': [
            'app/styles/global.css',
            'app/root.css',
            'app/tailwind.css',
        ],
        'unknown': [
            'src/index.css',
            'src/app/globals.css',
            'app/globals.css',
            'src/styles/globals.css',
            'styles/globals.css',
            'index.css',
        ],
    };

    const locations = cssLocations[projectType];
    
    for (const cssPath of locations) {
        if (fs.existsSync(path.join(cwd, cssPath))) {
            return cssPath;
        }
    }
    
    return null;
}

/**
 * Find tailwind config file
 */
function findTailwindConfig(cwd: string): string | null {
    const tailwindConfigs = [
        'tailwind.config.ts',
        'tailwind.config.js',
        'tailwind.config.mjs',
        'tailwind.config.cjs',
    ];

    for (const configPath of tailwindConfigs) {
        if (fs.existsSync(path.join(cwd, configPath))) {
            return configPath;
        }
    }
    
    return null;
}

/**
 * Auto-detect project settings
 */
async function detectProjectSettings(cwd: string): Promise<Config> {
    const projectType = detectProjectType(cwd);
    
    // Get aliases from tsconfig/jsconfig if available
    const aliasConfig = getAliasFromTsConfig(cwd);
    
    // Find CSS and Tailwind config files
    const cssFile = findCssFile(cwd, projectType);
    const tailwindConfig = findTailwindConfig(cwd);
    
    // Determine default aliases based on project type
    let defaultAliases: { components: string; utils: string };
    
    if (aliasConfig) {
        // Use aliases from tsconfig
        defaultAliases = aliasConfig;
    } else {
        // Fallback based on project type
        defaultAliases = {
            components: '@/components',
            utils: '@/lib/utils',
        };
    }

    return {
        tailwind: {
            config: tailwindConfig || 'tailwind.config.js',
            css: cssFile || (projectType.includes('src') ? 'src/index.css' : 'app/globals.css'),
        },
        aliases: defaultAliases,
    };
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
    const projectType = detectProjectType(cwd);

    if (!options.silent) {
        console.log(chalk.bold('\n🎨 Brutalist UI - Neo-Brutalism Component Library\n'));
        console.log(chalk.gray(`   Detected project: ${projectType}\n`));
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
    let config = await detectProjectSettings(cwd);

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
