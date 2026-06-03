import { describe, it, expect, vi, afterEach } from 'vitest';
import fs from 'fs-extra';
import { resolveImportAlias, detectProjectType, detectPackageManager, detectTailwindVersion } from '../src/lib/project.js';

describe('resolveImportAlias', () => {
    it('should correctly resolve import aliases based on config', () => {
        const content = `import { Button } from "@/components/ui/button";\nimport { cn } from "@/lib/utils";`;

        const config = {
            style: 'brutalism',
            tailwind: { config: 'tailwind.config.js', css: 'src/index.css' },
            aliases: {
                components: '~/components',
                utils: '~/utils/cn'
            }
        };

        const resolved = resolveImportAlias(content, config);

        expect(resolved).toContain('import { Button } from "~/components/ui/button";');
        expect(resolved).toContain('import { cn } from "~/utils/cn";');
    });

    it('should preserve original imports if alias config matches default alias', () => {
        const content = `import { Button } from "@/components/ui/button";\nimport { cn } from "@/lib/utils";`;

        const config = {
            style: 'brutalism',
            tailwind: { config: 'tailwind.config.js', css: 'src/index.css' },
            aliases: {
                components: '@/components',
                utils: '@/lib/utils'
            }
        };

        const resolved = resolveImportAlias(content, config);

        expect(resolved).toContain('import { Button } from "@/components/ui/button";');
        expect(resolved).toContain('import { cn } from "@/lib/utils";');
    });
});

describe('detectPackageManager', () => {
    afterEach(() => {
        vi.restoreAllMocks();
    });

    it('should detect pnpm if pnpm-lock.yaml exists', () => {
        vi.spyOn(fs, 'existsSync').mockImplementation((p: any) => {
            return p.toString().endsWith('pnpm-lock.yaml');
        });
        const pm = detectPackageManager('/dummy/path');
        expect(pm).toBe('pnpm');
    });

    it('should detect yarn if yarn.lock exists', () => {
        vi.spyOn(fs, 'existsSync').mockImplementation((p: any) => {
            return p.toString().endsWith('yarn.lock');
        });
        const pm = detectPackageManager('/dummy/path');
        expect(pm).toBe('yarn');
    });

    it('should detect bun if bun.lockb exists', () => {
        vi.spyOn(fs, 'existsSync').mockImplementation((p: any) => {
            return p.toString().endsWith('bun.lockb');
        });
        const pm = detectPackageManager('/dummy/path');
        expect(pm).toBe('bun');
    });

    it('should detect npm as fallback if no lockfile exists', () => {
        vi.spyOn(fs, 'existsSync').mockReturnValue(false);
        const pm = detectPackageManager('/dummy/path');
        expect(pm).toBe('npm');
    });
});

describe('detectProjectType', () => {
    afterEach(() => {
        vi.restoreAllMocks();
    });

    it('should detect nuxt if nuxt config exists', () => {
        vi.spyOn(fs, 'existsSync').mockImplementation((p: any) => {
            const pStr = p.toString();
            if (pStr.endsWith('nuxt.config.js') || pStr.endsWith('nuxt.config.ts') || pStr.endsWith('nuxt.config.mjs')) {
                return true;
            }
            return false;
        });
        const type = detectProjectType('/dummy/path');
        expect(type).toBe('nuxt');
    });

    it('should detect vite-vue if vite config exists and vue dependency exists and no src dir', () => {
        vi.spyOn(fs, 'existsSync').mockImplementation((p: any) => {
            const pStr = p.toString();
            if (pStr.endsWith('vite.config.js') || pStr.endsWith('vite.config.ts') || pStr.endsWith('vite.config.mjs')) {
                return true;
            }
            if (pStr.endsWith('src')) {
                return false;
            }
            return false;
        });
        vi.spyOn(fs, 'readJsonSync').mockReturnValue({
            dependencies: {
                vue: '^3.5.0'
            }
        });
        const type = detectProjectType('/dummy/path');
        expect(type).toBe('vite-vue');
    });

    it('should detect vite-vue-src if vite config exists and vue dependency exists and src dir exists', () => {
        vi.spyOn(fs, 'existsSync').mockImplementation((p: any) => {
            const pStr = p.toString();
            if (pStr.endsWith('vite.config.js') || pStr.endsWith('vite.config.ts') || pStr.endsWith('vite.config.mjs')) {
                return true;
            }
            if (pStr.endsWith('src')) {
                return true;
            }
            return false;
        });
        vi.spyOn(fs, 'readJsonSync').mockReturnValue({
            dependencies: {
                vue: '^3.5.0'
            }
        });
        const type = detectProjectType('/dummy/path');
        expect(type).toBe('vite-vue-src');
    });
});

describe('detectTailwindVersion', () => {
    afterEach(() => {
        vi.restoreAllMocks();
    });

    it('should detect v4 if package.json has tailwindcss v4', () => {
        vi.spyOn(fs, 'existsSync').mockReturnValue(true);
        vi.spyOn(fs, 'readJsonSync').mockReturnValue({
            devDependencies: {
                tailwindcss: '^4.0.0'
            }
        });

        const version = detectTailwindVersion('/dummy/path');
        expect(version).toBe('v4');
    });

    it('should detect v3 if package.json has tailwindcss v3', () => {
        vi.spyOn(fs, 'existsSync').mockReturnValue(true);
        vi.spyOn(fs, 'readJsonSync').mockReturnValue({
            devDependencies: {
                tailwindcss: '^3.4.1'
            }
        });

        const version = detectTailwindVersion('/dummy/path');
        expect(version).toBe('v3');
    });

    it('should fallback to v3 if tailwind config file exists', () => {
        vi.spyOn(fs, 'existsSync').mockImplementation((p: any) => {
            return p.toString().endsWith('tailwind.config.js');
        });

        const version = detectTailwindVersion('/dummy/path');
        expect(version).toBe('v3');
    });
});

