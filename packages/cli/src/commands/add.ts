/**
 * Add Command
 * Add components to user's project
 */

import type { Ora } from 'ora';
import ora from 'ora';
import inquirer from 'inquirer';
import fs from 'fs-extra';
import path from 'path';

import {
    // Types
    type AddOptions,
    type AliasConfig,
    // Constants
    COMPONENTS,
    AVAILABLE_COMPONENTS,
    UTILS_TEMPLATE,
    // Functions
    detectPackageManager,
    resolveAliasPath,
    installPackages,
    getInstallCommand,
    logger,
} from '../lib/index.js';
import { getComponentTemplate } from '../templates/index.js';

// ============================================================================
// Types
// ============================================================================

interface ComponentsConfig {
    aliases: AliasConfig;
}

interface AddResult {
    added: string[];
    skipped: string[];
}

// ============================================================================
// Validation
// ============================================================================

/**
 * Check if project is initialized
 */
async function ensureInitialized(cwd: string): Promise<ComponentsConfig> {
    const configPath = path.join(cwd, 'components.json');
    
    if (!(await fs.pathExists(configPath))) {
        logger.error('Error: Brutalist UI is not initialized.');
        logger.warn('Run: npx brutx@latest init');
        process.exit(1);
    }
    
    return fs.readJson(configPath);
}

/**
 * Validate component names
 */
function validateComponents(components: string[]): void {
    const invalid = components.filter(c => !AVAILABLE_COMPONENTS.includes(c));
    
    if (invalid.length > 0) {
        logger.error(`Unknown components: ${invalid.join(', ')}`);
        logger.warn(`Available: ${AVAILABLE_COMPONENTS.join(', ')}`);
        process.exit(1);
    }
}

// ============================================================================
// Component Selection
// ============================================================================

/**
 * Get components to add (from args, --all flag, or interactive picker)
 */
async function selectComponents(
    inputComponents: string[],
    options: AddOptions
): Promise<string[]> {
    // --all flag
    if (options.all) {
        return [...AVAILABLE_COMPONENTS];
    }
    
    // Components provided as arguments
    if (inputComponents.length > 0) {
        return inputComponents;
    }
    
    // Non-interactive mode without components
    if (options.yes) {
        logger.error('Error: No components specified.');
        logger.warn('Use: npx brutx@latest add [component] or --all');
        process.exit(1);
    }
    
    // Interactive picker
    const { selected } = await inquirer.prompt([
        {
            type: 'checkbox',
            name: 'selected',
            message: 'Which components would you like to add?',
            choices: AVAILABLE_COMPONENTS.map(name => ({ name, value: name })),
            pageSize: 15,
        },
    ]);
    
    return selected;
}

// ============================================================================
// File Operations
// ============================================================================

/**
 * Ensure utils.ts exists
 */
async function ensureUtilsFile(utilsPath: string): Promise<boolean> {
    if (await fs.pathExists(utilsPath)) {
        return false;
    }
    
    await fs.ensureDir(path.dirname(utilsPath));
    await fs.writeFile(utilsPath, UTILS_TEMPLATE);
    return true;
}

/**
 * Write a single component file
 */
async function writeComponent(
    component: string,
    componentsDir: string,
    utilsAlias: string,
    overwrite: boolean
): Promise<'added' | 'skipped' | 'failed'> {
    const filePath = path.join(componentsDir, 'ui', `${component}.tsx`);
    
    // Check existing
    if ((await fs.pathExists(filePath)) && !overwrite) {
        return 'skipped';
    }
    
    try {
        const template = getComponentTemplate(component, utilsAlias);
        await fs.writeFile(filePath, template);
        return 'added';
    } catch {
        return 'failed';
    }
}

/**
 * Add multiple components
 */
async function addComponents(
    components: string[],
    componentsDir: string,
    utilsAlias: string,
    overwrite: boolean,
    spinner: Ora | null
): Promise<AddResult> {
    const result: AddResult = { added: [], skipped: [] };
    
    // Ensure directory exists
    await fs.ensureDir(path.join(componentsDir, 'ui'));
    
    for (const component of components) {
        const status = await writeComponent(component, componentsDir, utilsAlias, overwrite);
        
        switch (status) {
            case 'added':
                result.added.push(component);
                break;
            case 'skipped':
                spinner?.info(`Skipping ${component} (already exists)`);
                result.skipped.push(component);
                break;
            case 'failed':
                spinner?.warn(`Failed to add ${component}`);
                break;
        }
    }
    
    return result;
}

// ============================================================================
// Dependencies
// ============================================================================

/**
 * Collect dependencies for added components
 */
function collectDependencies(components: string[]): string[] {
    const deps = new Set<string>();
    
    for (const component of components) {
        const info = COMPONENTS[component];
        if (info?.dependencies) {
            info.dependencies.forEach(dep => deps.add(dep));
        }
    }
    
    return Array.from(deps);
}

/**
 * Install component dependencies
 */
function installComponentDeps(deps: string[], cwd: string): void {
    if (deps.length === 0) return;
    
    const packageManager = detectPackageManager(cwd);
    logger.newLine();
    logger.bold(`Installing dependencies with ${packageManager}...`);
    
    try {
        installPackages(packageManager, deps, cwd);
        logger.success('✓ Dependencies installed');
    } catch {
        logger.warn('⚠ Failed to install dependencies automatically.');
        logger.info(`  Run manually: ${getInstallCommand(packageManager, deps)}`);
    }
}

// ============================================================================
// Output Helpers
// ============================================================================

/**
 * Convert kebab-case to PascalCase
 */
function toPascalCase(str: string): string {
    return str
        .split('-')
        .map(s => s.charAt(0).toUpperCase() + s.slice(1))
        .join('');
}

/**
 * Print usage example
 */
function printUsageExample(component: string, componentsAlias: string): void {
    const componentName = toPascalCase(component);
    logger.info(`  import { ${componentName} } from "${componentsAlias}/ui/${component}";`);
}

// ============================================================================
// Main Command
// ============================================================================

export async function add(components: string[], options: AddOptions): Promise<void> {
    const cwd = options.cwd ?? process.cwd();
    
    // Setup logger
    logger.setSilent(options.silent ?? false);
    
    // Ensure initialized
    const config = await ensureInitialized(cwd);
    
    // Get components to add
    const selectedComponents = await selectComponents(components, options);
    
    if (selectedComponents.length === 0) {
        logger.warn('No components selected.');
        return;
    }
    
    // Validate
    validateComponents(selectedComponents);
    
    // Resolve paths
    const componentsDir = options.path
        ? path.join(cwd, options.path)
        : resolveAliasPath(config.aliases.components, cwd);
    
    const utilsPath = resolveAliasPath(config.aliases.utils, cwd) + '.ts';
    
    // Start adding
    const spinner = options.silent ? null : ora('Adding components...').start();
    
    // Ensure utils exists
    const utilsCreated = await ensureUtilsFile(utilsPath);
    if (utilsCreated) {
        spinner?.info(`Created ${utilsPath}`);
    }
    
    // Add components
    const result = await addComponents(
        selectedComponents,
        componentsDir,
        config.aliases.utils,
        options.overwrite ?? false,
        spinner
    );
    
    // Summary
    const summary = result.skipped.length > 0
        ? `Added ${result.added.length} component(s), skipped ${result.skipped.length}`
        : `Added ${result.added.length} component(s)`;
    
    spinner?.succeed(summary);
    
    // Install dependencies
    const deps = collectDependencies(result.added);
    installComponentDeps(deps, cwd);
    
    // Print info
    logger.newLine();
    logger.bold('Components added to:');
    logger.highlight(`  ${path.join(componentsDir, 'ui')}/`);
    
    if (result.added.length > 0) {
        logger.newLine();
        logger.bold('Usage:');
        printUsageExample(result.added[0], config.aliases.components);
    }
}
