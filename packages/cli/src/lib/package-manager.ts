import { execFileSync } from 'child_process';
import type { PackageManager } from './types.js';

const INSTALL_COMMANDS: Record<PackageManager, string> = {
    pnpm: 'pnpm add',
    yarn: 'yarn add',
    bun: 'bun add',
    npm: 'npm install',
};

export function installPackages(
    packageManager: PackageManager,
    packages: string[],
    cwd: string
): void {
    if (packages.length === 0) return;

    const [command, ...baseArgs] = INSTALL_COMMANDS[packageManager].split(' ');
    execFileSync(command, [...baseArgs, ...packages], { stdio: 'inherit', cwd });
}

export function getInstallCommand(packageManager: PackageManager, packages: string[]): string {
    return `${INSTALL_COMMANDS[packageManager]} ${packages.join(' ')}`;
}
