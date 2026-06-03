import fs from 'fs-extra';
import path from 'path';
import type { RegistryItem, RegistryFile } from './types.js';
import { DEFAULT_REGISTRY_URL } from './constants.js';

function isUrl(str: string): boolean {
    return str.startsWith('http://') || str.startsWith('https://');
}

function validateRegistryFile(file: unknown, itemName: string): file is RegistryFile {
    if (typeof file !== 'object' || file === null) {
        return false;
    }

    const f = file as Record<string, unknown>;

    if (typeof f.path !== 'string' || f.path.length === 0) {
        throw new Error(
            `Invalid registry file in "${itemName}": "path" must be a non-empty string.`
        );
    }

    if (typeof f.content !== 'string') {
        throw new Error(
            `Invalid registry file in "${itemName}": "content" must be a string.`
        );
    }

    return true;
}

function validateRegistryItem(data: unknown, name: string): asserts data is RegistryItem {
    if (typeof data !== 'object' || data === null) {
        throw new Error(`Invalid registry data for "${name}": expected an object.`);
    }

    const item = data as Record<string, unknown>;

    if (typeof item.name !== 'string' || item.name.length === 0) {
        throw new Error(`Invalid registry data for "${name}": "name" must be a non-empty string.`);
    }

    if (typeof item.type !== 'string') {
        throw new Error(`Invalid registry data for "${name}": "type" must be a string.`);
    }

    if (!Array.isArray(item.files)) {
        throw new Error(`Invalid registry data for "${name}": "files" must be an array.`);
    }

    for (const file of item.files) {
        validateRegistryFile(file, name);
    }

    if (item.dependencies !== undefined && !Array.isArray(item.dependencies)) {
        throw new Error(`Invalid registry data for "${name}": "dependencies" must be an array.`);
    }

    if (item.registryDependencies !== undefined && !Array.isArray(item.registryDependencies)) {
        throw new Error(
            `Invalid registry data for "${name}": "registryDependencies" must be an array.`
        );
    }
}

export async function getItem(name: string, source: string = DEFAULT_REGISTRY_URL): Promise<RegistryItem> {
    let data: unknown;

    if (isUrl(source)) {
        const url = `${source}/${name}.json`;
        const res = await fetch(url, { signal: AbortSignal.timeout(30000) });
        if (!res.ok) {
            throw new Error(`Failed to fetch component "${name}" from registry: ${res.statusText}`);
        }
        data = await res.json();
    } else {
        const filePath = path.resolve(source, `${name}.json`);
        if (!filePath.startsWith(path.resolve(source) + path.sep)) {
            throw new Error(`Security Error: Path traversal detected in component name "${name}".`);
        }
        if (!(await fs.pathExists(filePath))) {
            throw new Error(`Component "${name}" not found in local registry: ${filePath}`);
        }
        data = await fs.readJson(filePath);
    }

    validateRegistryItem(data, name);
    return data;
}

export async function resolveDeps(names: string[], source: string = DEFAULT_REGISTRY_URL): Promise<RegistryItem[]> {
    const resolved: RegistryItem[] = [];
    const visited = new Set<string>();
    const active = new Set<string>();

    async function dfs(fullName: string) {
        let cleanName = fullName;
        let itemSource = source;

        if (fullName.includes('@')) {
            const match = fullName.match(/^([a-z0-9-]+)@([a-zA-Z0-9._-]+)$/);
            if (match) {
                cleanName = match[1];
                const version = match[2];

                if (source === DEFAULT_REGISTRY_URL) {
                    itemSource = `https://raw.githubusercontent.com/lidaixingchen/brutxui-vue3/${version}/packages/registry/registry`;
                }
            }
        }

        if (active.has(cleanName)) {
            throw new Error(`Circular dependency detected: ${cleanName}`);
        }
        if (visited.has(cleanName)) {
            return;
        }

        active.add(cleanName);

        try {
            const item = await getItem(cleanName, itemSource);

            if (item.registryDependencies && item.registryDependencies.length > 0) {
                for (const dep of item.registryDependencies) {
                    await dfs(dep);
                }
            }

            active.delete(cleanName);
            visited.add(cleanName);
            resolved.push(item);
        } catch (err) {
            active.delete(cleanName);
            throw err;
        }
    }

    for (const name of names) {
        await dfs(name);
    }

    return resolved;
}
