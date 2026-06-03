import chalk from 'chalk';

class Logger {
    private silent: boolean = false;

    setSilent(silent: boolean): void {
        this.silent = silent;
    }

    log(message: string): void {
        if (!this.silent) {
            console.log(message);
        }
    }

    info(message: string): void {
        this.log(chalk.gray(message));
    }

    success(message: string): void {
        this.log(chalk.green(message));
    }

    warn(message: string): void {
        this.log(chalk.yellow(message));
    }

    error(message: string): void {
        this.log(chalk.red(message));
    }

    bold(message: string): void {
        this.log(chalk.bold(message));
    }

    highlight(message: string): void {
        this.log(chalk.cyan(message));
    }

    dim(message: string): void {
        this.log(chalk.dim(message));
    }

    newLine(): void {
        this.log('');
    }
}

export const logger = new Logger();
