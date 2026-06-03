import type { Ora } from 'ora';
import ora from 'ora';
import inquirer from 'inquirer';
import fs from 'fs-extra';
import path from 'path';

import {
    type AddOptions,
    type BrutalistConfig,
    type RegistryItem,
    AVAILABLE_COMPONENTS,
    UTILS_TEMPLATE,
    detectPackageManager,
    resolveAliasPath,
    resolveImportAlias,
    installPackages,
    getInstallCommand,
    getItem,
    resolveDeps,
    isSafePath,
    logger,
} from '../lib/index.js';

async function ensureInitialized(cwd: string): Promise<BrutalistConfig> {
    const configPath = path.join(cwd, 'components.json');

    if (!(await fs.pathExists(configPath))) {
        logger.error('Error: Brutx-Vue is not initialized.');
        logger.warn('Run: npx brutx-vue@latest init');
        process.exit(1);
    }

    const config = await fs.readJson(configPath);
    if (!config?.aliases?.components || !config?.aliases?.utils) {
        logger.error('Error: Invalid components.json. Missing required "aliases.components" or "aliases.utils".');
        logger.warn('Run: npx brutx-vue@latest init --force to regenerate.');
        process.exit(1);
    }
    return config;
}

async function validateComponents(components: string[]): Promise<void> {
    const cleanComponents = components.map(c => c.split('@')[0]);
    const invalid = cleanComponents.filter((c) => !AVAILABLE_COMPONENTS.includes(c));

    if (invalid.length > 0) {
        logger.newLine();
        logger.error(`Unknown components: ${invalid.join(', ')}`);
        logger.warn('Please choose from the available list or run npx brutx-vue add interactively without arguments.');
        logger.warn(`Available: ${AVAILABLE_COMPONENTS.join(', ')}`);
        process.exit(1);
    }
}

async function selectComponents(inputComponents: string[], options: AddOptions): Promise<string[]> {
    if (options.all) {
        return [...AVAILABLE_COMPONENTS];
    }

    if (inputComponents.length > 0) {
        return inputComponents;
    }

    if (options.yes) {
        logger.error('Error: No components specified.');
        logger.warn('Use: npx brutx-vue@latest add [component] or --all');
        process.exit(1);
    }

    const { selected } = await inquirer.prompt([
        {
            type: 'checkbox',
            name: 'selected',
            message: 'Which components would you like to add?',
            choices: AVAILABLE_COMPONENTS.map((name) => ({ name, value: name })),
            pageSize: 15,
        },
    ]);

    return selected;
}

function resolveComponentFilePath(registryPath: string, config: BrutalistConfig, cwd: string): string {
    if (registryPath.startsWith('components/')) {
        const relative = registryPath.replace('components/', '');
        const aliasPath = resolveAliasPath(config.aliases.components, cwd);
        return path.join(aliasPath, relative);
    }

    if (registryPath.startsWith('lib/utils')) {
        return resolveAliasPath(config.aliases.utils, cwd) + '.ts';
    }

    if (registryPath.startsWith('lib/')) {
        const relative = registryPath.slice(4);
        const aliasPath = resolveAliasPath(config.aliases.utils, cwd);
        return path.join(path.dirname(aliasPath), relative);
    }

    return path.join(cwd, registryPath);
}

async function ensureUtilsFile(utilsPath: string): Promise<boolean> {
    if (await fs.pathExists(utilsPath)) {
        return false;
    }

    await fs.ensureDir(path.dirname(utilsPath));
    await fs.writeFile(utilsPath, UTILS_TEMPLATE);
    return true;
}

async function writeRegistryFiles(
    items: RegistryItem[],
    config: BrutalistConfig,
    cwd: string,
    options: AddOptions,
    spinner: Ora | null
): Promise<{ added: string[]; skipped: string[]; filesWritten: string[] }> {
    const added: string[] = [];
    const skippedSet = new Set<string>();
    const filesWritten: string[] = [];

    for (const item of items) {
        let itemAdded = false;

        for (const file of item.files) {
            const normalizedPath = path.normalize(file.path);
            if (normalizedPath.startsWith('..') || path.isAbsolute(normalizedPath)) {
                throw new Error(`Security Error: Malicious component file path detected: "${file.path}".`);
            }

            const targetPath = resolveComponentFilePath(file.path, config, cwd);

            if (!isSafePath(targetPath, cwd)) {
                throw new Error(`Security Error: Path traversal detected. Access denied to path "${targetPath}".`);
            }

            if (await fs.pathExists(targetPath)) {
                if (!options.overwrite) {
                    spinner?.info(`Skipping file "${file.path}" for "${item.name}" (already exists). Use --overwrite to overwrite.`);
                    skippedSet.add(item.name);
                    continue;
                }
            }

            if (options.dryRun) {
                spinner?.info(`[Dry Run] Would create file: ${targetPath}`);
                itemAdded = true;
                filesWritten.push(targetPath);
                continue;
            }

            await fs.ensureDir(path.dirname(targetPath));
            const resolvedContent = resolveImportAlias(file.content, config);
            await fs.writeFile(targetPath, resolvedContent, 'utf-8');
            itemAdded = true;
            filesWritten.push(targetPath);
        }

        if (itemAdded && !skippedSet.has(item.name)) {
            added.push(item.name);
        }
    }

    return { added, skipped: Array.from(skippedSet), filesWritten };
}

function installComponentDeps(deps: string[], cwd: string, dryRun: boolean): void {
    if (deps.length === 0) return;

    const packageManager = detectPackageManager(cwd);
    logger.newLine();

    if (dryRun) {
        logger.bold(`[Dry Run] Would install dependencies using ${packageManager}:`);
        logger.info(`  ${deps.join(', ')}`);
        return;
    }

    logger.bold(`Installing dependencies with ${packageManager}...`);

    try {
        installPackages(packageManager, deps, cwd);
        logger.success('✓ Dependencies installed');
    } catch {
        logger.warn('⚠ Failed to install dependencies automatically.');
        logger.info(`  Run manually: ${getInstallCommand(packageManager, deps)}`);
    }
}

function toPascalCase(str: string): string {
    return str
        .split('-')
        .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
        .join('');
}

function printUsageExample(component: string, componentsAlias: string): void {
    const componentName = toPascalCase(component);
    logger.info(`  import ${componentName} from "${componentsAlias}/ui/${component}/${componentName}.vue"`);
}

export async function add(components: string[], options: AddOptions): Promise<void> {
    const cwd = options.cwd ?? process.cwd();
    const targetCwd = options.path ? path.resolve(cwd, options.path) : cwd;

    if (options.path && !isSafePath(targetCwd, cwd)) {
        throw new Error(`Security Error: Path traversal detected. Access denied to path "${targetCwd}".`);
    }

    logger.setSilent(options.silent ?? false);

    const config = await ensureInitialized(cwd);

    await validateComponents(components);

    const selectedComponents = await selectComponents(components, options);

    if (selectedComponents.length === 0) {
        logger.warn('No components selected.');
        return;
    }

    const utilsPath = resolveAliasPath(config.aliases.utils, targetCwd) + '.ts';

    const spinner = options.silent ? null : ora('Resolving components and checking dependencies...').start();

    try {
        const registryItems = await resolveDeps(selectedComponents, options.registry);

        if (spinner) {
            spinner.stop();
        }

        logger.bold('\n📦 Brutx-Vue CLI - Installation Plan:');
        logger.info(`   Registry source: ${options.registry || 'Default Brutx-Vue hosted registry'}`);
        logger.newLine();

        logger.bold('🧩 Components to install/update:');
        for (const item of registryItems) {
            const depsStr = item.registryDependencies && item.registryDependencies.length > 0
                ? ` (depends on: ${item.registryDependencies.join(', ')})`
                : '';
            logger.info(`   - ${item.name}${depsStr}`);
        }
        logger.newLine();

        const allDeps = new Set<string>();
        for (const item of registryItems) {
            if (item.dependencies) {
                item.dependencies.forEach((dep) => allDeps.add(dep));
            }
        }

        if (allDeps.size > 0) {
            logger.bold('📚 Required npm packages:');
            logger.info(`   ${Array.from(allDeps).join(', ')}`);
            logger.newLine();
        }

        if (spinner) {
            spinner.start('Adding component files...');
        }

        if (!options.dryRun) {
            const utilsCreated = await ensureUtilsFile(utilsPath);
            if (utilsCreated) {
                spinner?.info(`Created utility file at ${utilsPath}`);
            }
        }

        const { added, skipped, filesWritten } = await writeRegistryFiles(
            registryItems,
            config,
            targetCwd,
            options,
            spinner
        );

        const summary = skipped.length > 0
            ? `Added ${added.length} component(s), skipped ${skipped.length}`
            : `Added ${added.length} component(s)`;

        if (options.dryRun) {
            spinner?.succeed(`[Dry Run] Simulated: ${summary}`);
        } else {
            spinner?.succeed(summary);
        }

        if (added.length > 0 && filesWritten.length > 0) {
            logger.newLine();
            logger.bold('💾 Files written to disk:');
            for (const filePath of filesWritten) {
                const relativePath = path.relative(targetCwd, filePath);
                logger.success(`   ✓ ${relativePath}`);
            }
        }

        installComponentDeps(Array.from(allDeps), cwd, options.dryRun ?? false);

        if (added.length > 0) {
            logger.newLine();
            logger.bold('Usage:');
            printUsageExample(added[0], config.aliases.components);
        }

    } catch (error: any) {
        spinner?.fail('Failed to add components');
        logger.error(error?.message || error);
        process.exit(1);
    }
}
