/**
 * Init Command
 * Initialize Brutalist UI in a project
 */

import ora from 'ora';
import inquirer from 'inquirer';
import fs from 'fs-extra';
import path from 'path';

import {
    // Types
    type InitOptions,
    type BrutalistConfig,
    type TailwindConfig,
    type AliasConfig,
    // Constants
    BASE_DEPENDENCIES,
    BRUTALIST_CSS_STYLES,
    SCHEMA_URL,
    DEFAULT_TAILWIND_CONFIG,
    // Functions
    detectProjectType,
    detectPackageManager,
    findTailwindConfig,
    findCssFile,
    getDefaultAliases,
    installPackages,
    getInstallCommand,
    logger,
} from '../lib/index.js';

// ============================================================================
// Configuration Builder
// ============================================================================

interface DetectedSettings {
    tailwind: TailwindConfig;
    aliases: AliasConfig;
}

/**
 * Auto-detect project settings
 */
async function detectSettings(cwd: string): Promise<DetectedSettings> {
    const projectType = detectProjectType(cwd);
    
    const tailwindConfig = findTailwindConfig(cwd);
    const cssFile = findCssFile(cwd, projectType);
    const aliases = getDefaultAliases(cwd);
    
    // Determine fallback CSS path based on project type
    const fallbackCss = projectType.includes('src') ? 'src/index.css' : 'app/globals.css';
    
    return {
        tailwind: {
            config: tailwindConfig ?? DEFAULT_TAILWIND_CONFIG,
            css: cssFile ?? fallbackCss,
        },
        aliases,
    };
}

/**
 * Prompt user for configuration
 */
async function promptForConfig(defaults: DetectedSettings): Promise<DetectedSettings> {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'tailwindConfig',
            message: 'Where is your tailwind.config located?',
            default: defaults.tailwind.config,
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
            config: answers.tailwindConfig,
            css: answers.globalCss,
        },
        aliases: {
            components: answers.componentsAlias,
            utils: answers.utilsAlias,
        },
    };
}

// ============================================================================
// File Operations
// ============================================================================

/**
 * Create components.json configuration file
 */
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

/**
 * Add brutalist styles to global CSS file
 */
async function addBrutalistStyles(cwd: string, cssPath: string): Promise<boolean> {
    const fullPath = path.join(cwd, cssPath);
    
    if (!(await fs.pathExists(fullPath))) {
        return false;
    }
    
    let content = await fs.readFile(fullPath, 'utf-8');
    
    // Check if already added
    if (content.includes('shadow-brutal')) {
        return false;
    }
    
    content += BRUTALIST_CSS_STYLES;
    await fs.writeFile(fullPath, content);
    return true;
}

// ============================================================================
// Overwrite Handling
// ============================================================================

/**
 * Check if config exists and handle overwrite
 */
async function shouldProceed(cwd: string, options: InitOptions): Promise<boolean> {
    const configPath = path.join(cwd, 'components.json');
    
    if (!(await fs.pathExists(configPath))) {
        return true;
    }
    
    if (options.force) {
        return true;
    }
    
    if (options.yes) {
        logger.warn('Brutalist UI is already initialized. Use --force to overwrite.');
        return false;
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
        logger.warn('Aborted.');
        return false;
    }
    
    return true;
}

// ============================================================================
// Main Command
// ============================================================================

export async function init(options: InitOptions): Promise<void> {
    const cwd = options.cwd ?? process.cwd();
    const projectType = detectProjectType(cwd);
    
    // Setup logger
    logger.setSilent(options.silent ?? false);
    
    // Header
    logger.bold('\n🎨 Brutalist UI - Neo-Brutalism Component Library\n');
    logger.info(`   Detected project: ${projectType}\n`);
    
    // Check existing config
    if (!(await shouldProceed(cwd, options))) {
        return;
    }
    
    // Get configuration
    let settings = await detectSettings(cwd);
    
    if (!options.yes && !options.defaults) {
        settings = await promptForConfig(settings);
    }
    
    // Initialize
    const spinner = options.silent ? null : ora('Initializing Brutalist UI...').start();
    
    try {
        // Create config file
        await createConfigFile(cwd, settings);
        
        // Add CSS styles
        const stylesAdded = await addBrutalistStyles(cwd, settings.tailwind.css);
        if (stylesAdded) {
            spinner?.info('Added brutalist styles to your CSS file');
        }
        
        spinner?.succeed('Brutalist UI initialized successfully!');
        
        // Install dependencies
        const packageManager = detectPackageManager(cwd);
        logger.newLine();
        logger.bold(`Installing dependencies with ${packageManager}...`);
        
        try {
            installPackages(packageManager, [...BASE_DEPENDENCIES], cwd);
            logger.success('✓ Dependencies installed');
        } catch {
            logger.warn('⚠ Failed to install dependencies automatically.');
            logger.info(`  Run manually: ${getInstallCommand(packageManager, [...BASE_DEPENDENCIES])}`);
        }
        
        // Next steps
        logger.newLine();
        logger.bold('Next steps:');
        logger.highlight('  1. Add components:');
        logger.info('     npx brutx@latest add button');
        logger.info('     npx brutx@latest add --all');
        logger.newLine();
        logger.dim('Documentation: https://brutalistui.site/docs');
        
    } catch (error) {
        spinner?.fail('Failed to initialize Brutalist UI');
        console.error(error);
        process.exit(1);
    }
}
