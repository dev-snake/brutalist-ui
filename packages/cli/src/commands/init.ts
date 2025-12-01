import chalk from 'chalk';
import ora from 'ora';
import inquirer from 'inquirer';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

interface InitOptions {
    yes?: boolean;
    defaults?: boolean;
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
        css: 'src/app/globals.css',
    },
    aliases: {
        components: '@/components',
        utils: '@/lib/utils',
    },
};

export async function init(options: InitOptions) {
    console.log(chalk.bold('\n🎨 Brutalist UI - Neo-Brutalism Component Library\n'));

    // Check if already initialized
    if (await fs.pathExists('components.json')) {
        const { overwrite } = await inquirer.prompt([
            {
                type: 'confirm',
                name: 'overwrite',
                message: 'Brutalist UI is already initialized. Overwrite?',
                default: false,
            },
        ]);
        if (!overwrite) {
            console.log(chalk.yellow('Aborted.'));
            return;
        }
    }

    let config = { ...defaultConfig };

    if (!options.yes && !options.defaults) {
        const answers = await inquirer.prompt([
            {
                type: 'input',
                name: 'tailwindConfig',
                message: 'Where is your tailwind.config.js located?',
                default: defaultConfig.tailwind.config,
            },
            {
                type: 'input',
                name: 'globalCss',
                message: 'Where is your global CSS file?',
                default: defaultConfig.tailwind.css,
            },
            {
                type: 'input',
                name: 'componentsAlias',
                message: 'Configure the import alias for components:',
                default: defaultConfig.aliases.components,
            },
            {
                type: 'input',
                name: 'utilsAlias',
                message: 'Configure the import alias for utils:',
                default: defaultConfig.aliases.utils,
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

    const spinner = ora('Initializing Brutalist UI...').start();

    try {
        // Create components.json
        await fs.writeJson(
            'components.json',
            {
                $schema: 'https://brutalistui.site/schema.json',
                style: 'brutalism',
                tailwind: config.tailwind,
                aliases: config.aliases,
            },
            { spaces: 2 }
        );

        // Create directories
        const componentsDir = config.aliases.components.replace('@/', 'src/');
        const utilsDir = path.dirname(config.aliases.utils.replace('@/', 'src/'));

        await fs.ensureDir(path.join(componentsDir, 'ui'));
        await fs.ensureDir(utilsDir);

        // Create utils.ts
        const utilsPath = config.aliases.utils.replace('@/', 'src/') + '.ts';
        if (!(await fs.pathExists(utilsPath))) {
            await fs.writeFile(
                utilsPath,
                `import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
`
            );
        }

        // Update tailwind.config.js if exists
        const tailwindConfigPath = config.tailwind.config;
        if (await fs.pathExists(tailwindConfigPath)) {
            let tailwindConfig = await fs.readFile(tailwindConfigPath, 'utf-8');

            // Add brutalism plugin info
            if (!tailwindConfig.includes('brutalism')) {
                spinner.info('Remember to add brutalism styles to your tailwind config!');
            }
        }

        // Update global CSS
        const cssPath = config.tailwind.css;
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

@media (prefers-color-scheme: dark) {
    .dark .shadow-brutal {
        box-shadow: 4px 4px 0px 0px #fff;
    }
    .dark .shadow-brutal-sm {
        box-shadow: 2px 2px 0px 0px #fff;
    }
    .dark .shadow-brutal-lg {
        box-shadow: 6px 6px 0px 0px #fff;
    }
}
`;

            if (!cssContent.includes('shadow-brutal')) {
                cssContent += brutalismStyles;
                await fs.writeFile(cssPath, cssContent);
            }
        }

        spinner.succeed(chalk.green('Brutalist UI initialized successfully!'));

        console.log('\n' + chalk.bold('Next steps:'));
        console.log(chalk.cyan('  1. Install dependencies:'));
        console.log(chalk.gray('     npm install clsx tailwind-merge class-variance-authority'));
        console.log(chalk.cyan('  2. Add components:'));
        console.log(chalk.gray('     npx brutalist-ui add button'));
        console.log(chalk.gray('     npx brutalist-ui add --all'));
        console.log('\n' + chalk.dim('Documentation: https://brutalistui.site/docs'));
    } catch (error) {
        spinner.fail(chalk.red('Failed to initialize Brutalist UI'));
        console.error(error);
        process.exit(1);
    }
}
