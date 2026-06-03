import fs from 'fs-extra';
import path from 'path';
import type { ProjectType, TsConfig, AliasConfig, PackageManager, BrutalistConfig } from './types.js';
import { CONFIG_FILES, CSS_LOCATIONS, DEFAULT_ALIASES } from './constants.js';

function hasAnyFile(cwd: string, files: readonly string[]): boolean {
    return files.some((file) => fs.existsSync(path.join(cwd, file)));
}

function findFirstExisting(cwd: string, files: readonly string[]): string | null {
    for (const file of files) {
        if (fs.existsSync(path.join(cwd, file))) {
            return file;
        }
    }
    return null;
}

function hasVueDependency(cwd: string): boolean {
    try {
        const packageJson = fs.readJsonSync(path.join(cwd, 'package.json'));
        return Boolean(
            packageJson.dependencies?.['vue'] ||
                packageJson.devDependencies?.['vue'] ||
                packageJson.dependencies?.['nuxt'] ||
                packageJson.devDependencies?.['nuxt']
        );
    } catch {
        return false;
    }
}

export function detectProjectType(cwd: string): ProjectType {
    const hasNuxt = hasAnyFile(cwd, CONFIG_FILES.nuxt);
    const hasVite = hasAnyFile(cwd, CONFIG_FILES.vite);
    const hasSrc = fs.existsSync(path.join(cwd, 'src'));

    if (hasNuxt) return 'nuxt';

    if (hasVite && hasVueDependency(cwd)) {
        return hasSrc ? 'vite-vue-src' : 'vite-vue';
    }

    if (hasVueDependency(cwd)) {
        return hasSrc ? 'vite-vue-src' : 'vite-vue';
    }

    return 'unknown';
}

export function detectPackageManager(cwd: string): PackageManager {
    const { lockfiles } = CONFIG_FILES;

    if (fs.existsSync(path.join(cwd, lockfiles.pnpm))) return 'pnpm';
    if (fs.existsSync(path.join(cwd, lockfiles.yarn))) return 'yarn';
    if (fs.existsSync(path.join(cwd, lockfiles.bun))) return 'bun';

    return 'npm';
}

export function readTsConfig(cwd: string): TsConfig | null {
    for (const configFile of CONFIG_FILES.tsconfig) {
        const configPath = path.join(cwd, configFile);

        if (!fs.existsSync(configPath)) continue;

        try {
            const content = fs.readFileSync(configPath, 'utf-8');
            const jsonContent = content.replace(/\/\*[\s\S]*?\*\/|(?<!:)\/\/.*/g, '');
            return JSON.parse(jsonContent);
        } catch {
            continue;
        }
    }
    return null;
}

export function findTailwindConfig(cwd: string): string | null {
    return findFirstExisting(cwd, CONFIG_FILES.tailwind);
}

export function findCssFile(cwd: string, projectType: ProjectType): string | null {
    const locations = CSS_LOCATIONS[projectType];
    return findFirstExisting(cwd, locations);
}

export function getAliasFromTsConfig(cwd: string): AliasConfig | null {
    const tsConfig = readTsConfig(cwd);
    const paths = tsConfig?.compilerOptions?.paths;

    if (!paths) return null;

    for (const alias of Object.keys(paths)) {
        if (alias.endsWith('/*')) {
            const prefix = alias.replace('/*', '');
            return {
                components: `${prefix}/components`,
                utils: `${prefix}/lib/utils`,
            };
        }
    }

    return null;
}

export function resolveAliasPath(alias: string, cwd: string): string {
    const match = alias.match(/^(@[^/]*|~)\/(.*)/);

    if (!match) {
        return path.join(cwd, alias);
    }

    const [, aliasPrefix, relativePath] = match;

    const resolvedFromConfig = resolveFromTsConfig(cwd, aliasPrefix, relativePath);
    if (resolvedFromConfig) return resolvedFromConfig;

    return resolveByProjectType(cwd, relativePath);
}

function resolveFromTsConfig(
    cwd: string,
    aliasPrefix: string,
    relativePath: string
): string | null {
    const tsConfig = readTsConfig(cwd);
    const paths = tsConfig?.compilerOptions?.paths;

    if (!paths) return null;

    const aliasPattern = `${aliasPrefix}/*`;
    const baseUrl = tsConfig?.compilerOptions?.baseUrl || '.';

    if (paths[aliasPattern]) {
        const targetPath = paths[aliasPattern][0];
        const resolvedBase = targetPath.replace('/*', '');
        return path.join(cwd, baseUrl, resolvedBase, relativePath);
    }

    return null;
}

function resolveByProjectType(cwd: string, relativePath: string): string {
    const projectType = detectProjectType(cwd);

    const projectTypeToBase: Record<ProjectType, string> = {
        'vite-vue-src': 'src',
        'vite-vue': '',
        nuxt: '',
        unknown: fs.existsSync(path.join(cwd, 'src')) ? 'src' : '',
    };

    const base = projectTypeToBase[projectType];
    return path.join(cwd, base, relativePath);
}

function inferTailwindVersionFromConfig(cwd: string): 'v3' | 'v4' {
    const hasConfig = CONFIG_FILES.tailwind.some(file => fs.existsSync(path.join(cwd, file)));
    return hasConfig ? 'v3' : 'v4';
}

export function getDefaultAliases(cwd: string): AliasConfig {
    return getAliasFromTsConfig(cwd) ?? { ...DEFAULT_ALIASES };
}

export function resolveImportAlias(content: string, config: BrutalistConfig): string {
    return content
        .replace(/["']@\/lib\/utils["']/g, `"${config.aliases.utils}"`)
        .replace(/["']@\/components\/(.*?)["']/g, `"${config.aliases.components}/$1"`);
}

export function isSafePath(targetPath: string, cwd: string): boolean {
    const resolvedTarget = path.resolve(targetPath).toLowerCase();
    const resolvedCwd = path.resolve(cwd).toLowerCase();
    return resolvedTarget.startsWith(resolvedCwd + path.sep) || resolvedTarget === resolvedCwd;
}

export function detectTailwindVersion(cwd: string): 'v3' | 'v4' {
    try {
        const pkgJsonPath = path.join(cwd, 'package.json');
        if (fs.existsSync(pkgJsonPath)) {
            const pkg = fs.readJsonSync(pkgJsonPath);
            const tailwindVersion = pkg.dependencies?.['tailwindcss'] || pkg.devDependencies?.['tailwindcss'];

            if (tailwindVersion) {
                const cleanVersion = tailwindVersion.replace(/^[^0-9]+/, '');
                if (cleanVersion.startsWith('4')) {
                    return 'v4';
                }
                if (cleanVersion.startsWith('3')) {
                    return 'v3';
                }
            }
        }
    } catch {
        return inferTailwindVersionFromConfig(cwd);
    }

    return inferTailwindVersionFromConfig(cwd);
}
