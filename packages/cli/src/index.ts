import { Command } from 'commander';
import { init } from './commands/init.js';
import { add } from './commands/add.js';

const program = new Command();

program
    .name('brutalist-ui')
    .description('CLI for adding Brutalist UI components to your project')
    .version('0.1.0');

program
    .command('init')
    .description('Initialize Brutalist UI in your project')
    .option('-y, --yes', 'Skip confirmation prompts')
    .option('-d, --defaults', 'Use default configuration')
    .action(init);

program
    .command('add')
    .description('Add components to your project')
    .argument('[components...]', 'Components to add')
    .option('-a, --all', 'Add all components')
    .option('-o, --overwrite', 'Overwrite existing files')
    .option('-p, --path <path>', 'Path to add components to')
    .action(add);

program.parse();
