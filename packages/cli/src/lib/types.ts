/**
 * Core type definitions for the CLI
 */

// ============================================================================
// Project Types
// ============================================================================

export type ProjectType =
    | 'nextjs'
    | 'nextjs-src'
    | 'vite'
    | 'vite-src'
    | 'cra'
    | 'remix'
    | 'unknown';

export type PackageManager = 'pnpm' | 'yarn' | 'bun' | 'npm';

// ============================================================================
// Configuration Types
// ============================================================================

export interface TsConfig {
    compilerOptions?: {
        baseUrl?: string;
        paths?: Record<string, string[]>;
    };
}

export interface AliasConfig {
    components: string;
    utils: string;
}

export interface TailwindConfig {
    config: string;
    css: string;
}

export interface BrutalistConfig {
    $schema?: string;
    style: string;
    tailwind: TailwindConfig;
    aliases: AliasConfig;
}

// ============================================================================
// Command Options
// ============================================================================

export interface InitOptions {
    yes?: boolean;
    defaults?: boolean;
    cwd?: string;
    force?: boolean;
    silent?: boolean;
}

export interface AddOptions {
    all?: boolean;
    overwrite?: boolean;
    path?: string;
    cwd?: string;
    yes?: boolean;
    silent?: boolean;
}

// ============================================================================
// Component Types
// ============================================================================

export interface ComponentInfo {
    name: string;
    dependencies: string[];
}
