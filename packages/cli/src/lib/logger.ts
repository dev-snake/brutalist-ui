/**
 * Logger Utility
 * Centralized logging with silent mode support
 */

import chalk from 'chalk';

// ============================================================================
// Logger Class
// ============================================================================

class Logger {
    private silent: boolean = false;

    /**
     * Set silent mode
     */
    setSilent(silent: boolean): void {
        this.silent = silent;
    }

    /**
     * Log a message (respects silent mode)
     */
    log(message: string): void {
        if (!this.silent) {
            console.log(message);
        }
    }

    /**
     * Log an info message
     */
    info(message: string): void {
        this.log(chalk.gray(message));
    }

    /**
     * Log a success message
     */
    success(message: string): void {
        this.log(chalk.green(message));
    }

    /**
     * Log a warning message
     */
    warn(message: string): void {
        this.log(chalk.yellow(message));
    }

    /**
     * Log an error message (always shows, ignores silent)
     */
    error(message: string): void {
        console.log(chalk.red(message));
    }

    /**
     * Log a bold message
     */
    bold(message: string): void {
        this.log(chalk.bold(message));
    }

    /**
     * Log a cyan/highlight message
     */
    highlight(message: string): void {
        this.log(chalk.cyan(message));
    }

    /**
     * Log a dim message
     */
    dim(message: string): void {
        this.log(chalk.dim(message));
    }

    /**
     * Print an empty line
     */
    newLine(): void {
        this.log('');
    }
}

// Export singleton instance
export const logger = new Logger();
