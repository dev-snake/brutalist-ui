import { Command } from 'commander';
import { init } from './commands/init.js';
import { add } from './commands/add.js';

const program = new Command();

program
    .name('brutalist-ui')
    .description('CLI for adding Brutalist UI components to your project')
    .version('0.1.3');

program
    .command('init')
    .description('Initialize Brutalist UI in your project')
    .option('-y, --yes', 'Skip confirmation prompts', false)
    .option('-d, --defaults', 'Use default configuration', false)
    .option('-c, --cwd <cwd>', 'The working directory', process.cwd())
    .option('-f, --force', 'Force overwrite of existing configuration', false)
    .option('-s, --silent', 'Mute output', false)
    .action(init);

program
    .command('add')
    .description('Add components to your project')
    .argument('[components...]', 'Components to add')
    .option('-y, --yes', 'Skip confirmation prompts', false)
    .option('-a, --all', 'Add all components', false)
    .option('-o, --overwrite', 'Overwrite existing files', false)
    .option('-p, --path <path>', 'The path to add the component to')
    .option('-c, --cwd <cwd>', 'The working directory', process.cwd())
    .option('-s, --silent', 'Mute output', false)
    .action(add);

program.parse();
