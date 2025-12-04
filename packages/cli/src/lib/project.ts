/**
 * Project Detection Utilities
 * Detect project type, read configs, resolve paths
 */

import fs from 'fs-extra';
import path from 'path';
import type { ProjectType, TsConfig, AliasConfig, PackageManager } from './types.js';
import { CONFIG_FILES, CSS_LOCATIONS, DEFAULT_ALIASES } from './constants.js';

// ============================================================================
// File System Helpers
// ============================================================================

/**
 * Check if any of the given files exist in the directory
 */
function hasAnyFile(cwd: string, files: readonly string[]): boolean {
    return files.some((file) => fs.existsSync(path.join(cwd, file)));
}

/**
 * Find first existing file from a list
 */
function findFirstExisting(cwd: string, files: readonly string[]): string | null {
    for (const file of files) {
        if (fs.existsSync(path.join(cwd, file))) {
            return file;
        }
    }
    return null;
}

// ============================================================================
// Project Detection
// ============================================================================

/**
 * Detect project type based on config files and folder structure
 */
export function detectProjectType(cwd: string): ProjectType {
    const hasNext = hasAnyFile(cwd, CONFIG_FILES.next);
    const hasVite = hasAnyFile(cwd, CONFIG_FILES.vite);
    const hasRemix = hasAnyFile(cwd, CONFIG_FILES.remix);

    const hasSrc = fs.existsSync(path.join(cwd, 'src'));
    const hasSrcApp = fs.existsSync(path.join(cwd, 'src', 'app'));

    // Check in order of specificity
    if (hasRemix) return 'remix';

    if (hasNext) {
        return hasSrc && hasSrcApp ? 'nextjs-src' : 'nextjs';
    }

    if (hasVite) {
        return hasSrc ? 'vite-src' : 'vite';
    }

    // Check for CRA
    if (isCRA(cwd)) return 'cra';

    return 'unknown';
}

/**
 * Check if project is Create React App
 */
function isCRA(cwd: string): boolean {
    try {
        const packageJson = fs.readJsonSync(path.join(cwd, 'package.json'));
        return Boolean(
            packageJson.dependencies?.['react-scripts'] ||
                packageJson.devDependencies?.['react-scripts']
        );
    } catch {
        return false;
    }
}

// ============================================================================
// Package Manager Detection
// ============================================================================

/**
 * Detect package manager from lockfile
 */
export function detectPackageManager(cwd: string): PackageManager {
    const { lockfiles } = CONFIG_FILES;

    if (fs.existsSync(path.join(cwd, lockfiles.pnpm))) return 'pnpm';
    if (fs.existsSync(path.join(cwd, lockfiles.yarn))) return 'yarn';
    if (fs.existsSync(path.join(cwd, lockfiles.bun))) return 'bun';

    return 'npm';
}

// ============================================================================
// Config File Readers
// ============================================================================

/**
 * Read and parse tsconfig.json or jsconfig.json
 * Handles comments in JSON (which TypeScript allows)
 */
export function readTsConfig(cwd: string): TsConfig | null {
    for (const configFile of CONFIG_FILES.tsconfig) {
        const configPath = path.join(cwd, configFile);

        if (!fs.existsSync(configPath)) continue;

        try {
            const content = fs.readFileSync(configPath, 'utf-8');
            // Strip comments (tsconfig allows them)
            const jsonContent = content.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '');
            return JSON.parse(jsonContent);
        } catch {
            // Continue to next file if parsing fails
        }
    }
    return null;
}

/**
 * Find tailwind config file
 */
export function findTailwindConfig(cwd: string): string | null {
    return findFirstExisting(cwd, CONFIG_FILES.tailwind);
}

/**
 * Find CSS file based on project type
 */
export function findCssFile(cwd: string, projectType: ProjectType): string | null {
    const locations = CSS_LOCATIONS[projectType];
    return findFirstExisting(cwd, locations);
}

// ============================================================================
// Alias Resolution
// ============================================================================

/**
 * Extract alias configuration from tsconfig paths
 */
export function getAliasFromTsConfig(cwd: string): AliasConfig | null {
    const tsConfig = readTsConfig(cwd);
    const paths = tsConfig?.compilerOptions?.paths;

    if (!paths) return null;

    // Find alias pattern like @/* or ~/*
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

/**
 * Resolve alias path to actual filesystem path
 * Uses tsconfig paths if available, falls back to project type detection
 */
export function resolveAliasPath(alias: string, cwd: string): string {
    // Parse alias (e.g., "@/components" -> prefix: "@", path: "components")
    const match = alias.match(/^(@[^/]*|~)\/(.*)/);

    if (!match) {
        // No alias, treat as relative path
        return path.join(cwd, alias);
    }

    const [, aliasPrefix, relativePath] = match;

    // Try tsconfig resolution first
    const resolvedFromConfig = resolveFromTsConfig(cwd, aliasPrefix, relativePath);
    if (resolvedFromConfig) return resolvedFromConfig;

    // Fallback to project type based resolution
    return resolveByProjectType(cwd, relativePath);
}

/**
 * Resolve path using tsconfig/jsconfig paths
 */
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

/**
 * Resolve path based on project type conventions
 */
function resolveByProjectType(cwd: string, relativePath: string): string {
    const projectType = detectProjectType(cwd);

    const projectTypeToBase: Record<ProjectType, string> = {
        'nextjs-src': 'src',
        'vite-src': 'src',
        cra: 'src',
        nextjs: '',
        vite: '',
        remix: 'app',
        unknown: fs.existsSync(path.join(cwd, 'src')) ? 'src' : '',
    };

    const base = projectTypeToBase[projectType];
    return path.join(cwd, base, relativePath);
}

// ============================================================================
// Get Default Aliases
// ============================================================================

/**
 * Get aliases from tsconfig or use defaults
 */
export function getDefaultAliases(cwd: string): AliasConfig {
    return getAliasFromTsConfig(cwd) ?? { ...DEFAULT_ALIASES };
}
