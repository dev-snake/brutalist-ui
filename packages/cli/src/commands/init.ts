import ora from 'ora';
import inquirer from 'inquirer';
import fs from 'fs-extra';
import path from 'path';

import {
    type InitOptions,
    type BrutalistConfig,
    type TailwindConfig,
    type AliasConfig,
    BASE_DEPENDENCIES,
    BRUTALIST_CSS_STYLES,
    SCHEMA_URL,
    DEFAULT_TAILWIND_CONFIG,
    UTILS_TEMPLATE,
    detectProjectType,
    detectPackageManager,
    findTailwindConfig,
    findCssFile,
    getDefaultAliases,
    resolveAliasPath,
    detectTailwindVersion,
    installPackages,
    getInstallCommand,
    isSafePath,
    logger,
} from '../lib/index.js';

interface DetectedSettings {
    tailwind: TailwindConfig;
    aliases: AliasConfig;
}

async function detectSettings(cwd: string): Promise<DetectedSettings> {
    const projectType = detectProjectType(cwd);
    const tailwindVersion = detectTailwindVersion(cwd);

    const tailwindConfig = findTailwindConfig(cwd);
    const cssFile = findCssFile(cwd, projectType);
    const aliases = getDefaultAliases(cwd);

    const fallbackCss = projectType === 'nuxt'
        ? 'assets/css/main.css'
        : (projectType.includes('src') ? 'src/index.css' : 'index.css');

    return {
        tailwind: {
            config: tailwindVersion === 'v4' ? '' : (tailwindConfig ?? DEFAULT_TAILWIND_CONFIG),
            css: cssFile ?? fallbackCss,
        },
        aliases,
    };
}

async function promptForConfig(defaults: DetectedSettings): Promise<DetectedSettings> {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'tailwindConfig',
            message: 'Where is your tailwind.config located?',
            default: defaults.tailwind.config,
            when: () => defaults.tailwind.config !== '',
        },
        {
            type: 'input',
            name: 'globalCss',
            message: 'Where is your global CSS file?',
            default: defaults.tailwind.css,
        },
        {
            type: 'input',
            name: 'componentsAlias',
            message: 'Configure the import alias for components:',
            default: defaults.aliases.components,
        },
        {
            type: 'input',
            name: 'utilsAlias',
            message: 'Configure the import alias for utils:',
            default: defaults.aliases.utils,
        },
    ]);

    return {
        tailwind: {
            config: answers.tailwindConfig ?? defaults.tailwind.config,
            css: answers.globalCss,
        },
        aliases: {
            components: answers.componentsAlias,
            utils: answers.utilsAlias,
        },
    };
}

async function createConfigFile(cwd: string, settings: DetectedSettings): Promise<void> {
    const config: BrutalistConfig = {
        $schema: SCHEMA_URL,
        style: 'brutalism',
        tailwind: settings.tailwind,
        aliases: settings.aliases,
    };

    const configPath = path.join(cwd, 'components.json');
    await fs.writeJson(configPath, config, { spaces: 2 });
}

async function addBrutalistStyles(cwd: string, cssPath: string): Promise<boolean> {
    const fullPath = path.join(cwd, cssPath);

    if (!isSafePath(fullPath, cwd)) {
        throw new Error(`Security Error: CSS path traversal detected. Access denied to path "${fullPath}".`);
    }

    await fs.ensureDir(path.dirname(fullPath));

    const tailwindVersion = detectTailwindVersion(cwd);

    let content = '';
    if (await fs.pathExists(fullPath)) {
        content = await fs.readFile(fullPath, 'utf-8');
        if (content.includes('shadow-brutal')) {
            return false;
        }
        content += BRUTALIST_CSS_STYLES;
    } else {
        if (tailwindVersion === 'v4') {
            content = `@import "tailwindcss";\n${BRUTALIST_CSS_STYLES}`;
        } else {
            content = `@tailwind base;\n@tailwind components;\n@tailwind utilities;\n${BRUTALIST_CSS_STYLES}`;
        }
    }

    await fs.writeFile(fullPath, content);
    return true;
}

async function shouldProceed(cwd: string, options: InitOptions): Promise<boolean> {
    const configPath = path.join(cwd, 'components.json');

    if (!(await fs.pathExists(configPath))) {
        return true;
    }

    if (options.force) {
        return true;
    }

    if (options.yes) {
        logger.warn('Brutx-Vue is already initialized. Use --force to overwrite.');
        return false;
    }

    const { overwrite } = await inquirer.prompt([
        {
            type: 'confirm',
            name: 'overwrite',
            message: 'Brutx-Vue is already initialized. Overwrite?',
            default: false,
        },
    ]);

    if (!overwrite) {
        logger.warn('Aborted.');
        return false;
    }

    return true;
}

export async function init(options: InitOptions): Promise<void> {
    const cwd = options.cwd ?? process.cwd();
    const projectType = detectProjectType(cwd);

    logger.setSilent(options.silent ?? false);

    logger.bold('\n🎨 Brutx-Vue - Neo-Brutalism Vue 3 Component Library\n');
    logger.info(`   Detected project: ${projectType}\n`);

    if (!(await shouldProceed(cwd, options))) {
        return;
    }

    let settings = await detectSettings(cwd);

    if (!options.yes && !options.defaults) {
        settings = await promptForConfig(settings);
    }

    const spinner = options.silent ? null : ora('Initializing Brutx-Vue...').start();

    try {
        await createConfigFile(cwd, settings);

        const utilsPath = resolveAliasPath(settings.aliases.utils, cwd) + '.ts';
        await fs.ensureDir(path.dirname(utilsPath));
        if (!(await fs.pathExists(utilsPath))) {
            await fs.writeFile(utilsPath, UTILS_TEMPLATE);
            spinner?.info('Created utility helper at ' + settings.aliases.utils);
        } else {
            spinner?.info('Utility helper already exists, skipping.');
        }

        const componentsDir = resolveAliasPath(settings.aliases.components, cwd);
        await fs.ensureDir(path.join(componentsDir, 'ui'));
        spinner?.info('Created components/ui directory');

        const stylesAdded = await addBrutalistStyles(cwd, settings.tailwind.css);
        if (stylesAdded) {
            spinner?.info('Added brutalist styles to ' + settings.tailwind.css);
        } else {
            spinner?.info('Brutalist design tokens already present in ' + settings.tailwind.css + ', skipped duplicate injection.');
        }

        spinner?.succeed('Brutx-Vue initialized successfully!');

        const packageManager = detectPackageManager(cwd);
        logger.newLine();
        logger.bold(`Installing dependencies with ${packageManager}...`);

        try {
            installPackages(packageManager, [...BASE_DEPENDENCIES], cwd);
            logger.success('✓ Dependencies installed');
        } catch {
            logger.warn('⚠ Failed to install dependencies automatically.');
            logger.info(
                `  Run manually: ${getInstallCommand(packageManager, [...BASE_DEPENDENCIES])}`
            );
        }

        logger.newLine();
        logger.bold('Next steps:');
        logger.highlight('  1. Add components:');
        logger.info('     npx brutx-vue@latest add button');
        logger.info('     npx brutx-vue@latest add --all');
        logger.newLine();
        logger.dim('Documentation: https://lidaixingchen.github.io/brutxui-vue3/');
    } catch (error) {
        spinner?.fail('Failed to initialize Brutx-Vue');
        console.error(error);
        process.exit(1);
    }
}
