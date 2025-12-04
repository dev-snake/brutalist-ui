/**
 * Lib barrel export
 */

// Types
export * from './types.js';

// Constants
export * from './constants.js';

// Project utilities
export {
    detectProjectType,
    detectPackageManager,
    readTsConfig,
    findTailwindConfig,
    findCssFile,
    getAliasFromTsConfig,
    resolveAliasPath,
    getDefaultAliases,
} from './project.js';

// Package manager
export { installPackages, getInstallCommand } from './package-manager.js';

// Logger
export { logger } from './logger.js';
