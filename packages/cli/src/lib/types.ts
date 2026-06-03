export type ProjectType =
    | 'vite-vue'
    | 'vite-vue-src'
    | 'nuxt'
    | 'unknown';

export type PackageManager = 'pnpm' | 'yarn' | 'bun' | 'npm';

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
    dryRun?: boolean;
    registry?: string;
}

export type { ComponentMeta as ComponentInfo } from 'brutx-shared-vue';

export interface RegistryFile {
    path: string;
    content: string;
}

export interface RegistryItem {
    name: string;
    type: string;
    dependencies: string[];
    registryDependencies: string[];
    files: RegistryFile[];
}
