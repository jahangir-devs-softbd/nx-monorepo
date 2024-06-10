import { exec } from 'child_process';
import ora from 'ora';
import { createLogger, format, transports } from 'winston';
import { argv } from 'yargs';

const { combine, colorize, simple } = format;

const isDebugMode = process.env.DEBUG === 'true';

const spinner = ora({ color: 'green' });

const logo = `
            ...   :..
        .~?Y5P!  .PP5Y7^.
      ~YPPPPPP!  .5PPPPP5?:
    :YPPPPPPPP!  .5PPPPPPPP?.
   ~PPPPPPPPPP!  .5PPPPPPPPPY.
  :PPPPPPPPPPP!  .5PPPPPPPPPPJ
  ?PPPPPPPPPPP!  .5PPPPPPPPPPP:
  JPPPPPPPPPPP!  .5PPPPPPPPPPP^
  !PPPPPPPPPPP!  .5PPPPPPPPPPP:
  .YPPPPPPPPPP!  .5PPPPPPPPPPP:
   .YPPPPPPPPP!  .5PPPPPPPPPPP:
     !5PPPPPPP!  .5PPPPPPPPPPP:
      .~YPPPPP!  .PPPPPPPPPPPP:
         .^!?Y~  .YYYYYYYYYYY5:
 `;

interface Task {
  command: string;
  label: string;
}

const logger = createLogger({
  transports: [new transports.Console()],
  format: combine(colorize(), simple()),
});

function preValidate() {
  const { engines } = require('../package.json');
  const { node: nodeRange, npm } = engines;
  const npm_config_user_agent = process.env.npm_config_user_agent;
  const currentNpmVersionArray: any = npm_config_user_agent?.match(
    /npm\/[\^*\~*]*[\d\.]+/
  );
  const currentNpmVersion = currentNpmVersionArray[0]?.slice(4);
  if (!currentNpmVersionArray || !currentNpmVersion) {
    logger.error(
      "Mmmmm... it seems like you don't have permission to run the script. Try to run it as an administrator."
    );
    process.exit(1);
  }
}

function runFunction(task: Task): Promise<string> {
  spinner.start(`${task.label}` + '\n');
  return new Promise((resolve, reject) => {
    const proc = exec(task.command, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      }

      if (stdout) {
        spinner.succeed(`Finished ${task.label}`);
        stdout && resolve(task.label);
      }
    });

    if (isDebugMode) {
      proc.stdout?.on('data', (data) => {
        logger.info(data);
      });
    }
  });
}

const clean: Task[] = [
  {
    command: 'npm run clean',
    label: 'clearing Nx cache 🧼',
  },
];

const checkFormat: Task[] = [
  {
    command: 'npm run format:check',
    label: 'Check format 🧼',
  },
];

const writeFormat: Task[] = [
  {
    command: 'npm run format:write',
    label: 'write format 🧼',
  },
];

// const preparePrisma: Task[] = [
//   {
//     command:
//       "npx nx run-many --target db:prisma:generate --output-style stream",
//     label: "generating Prisma client 🧬",
//   },
// ];
// const prepareGraphQL: Task[] = [
//   {
//     command:
//       "npx nx run-many --target graphql:schema:generate --output-style stream",
//     label: "generating graphql schema 🧬",
//   },
// ];
const build: Task[] = [
  {
    command: 'npm run build',
    label: 'building packages 📦',
  },
];

const tasks: Task[][] = [clean, writeFormat, checkFormat, build];

if (require.main === module) {
  const args = argv;
  if ((args as any).clean) {
    tasks.unshift(clean);
  }

  (async () => {
    try {
      preValidate();
      logger.info(`Welcome to test installer!`);
      console.log(logo);
      console.log('start ===============>');

      for (let i = 0; i < tasks.length; i++) {
        const step = tasks[i];

        logger.info(`Starting step ${i + 1}/${tasks.length}`);
        const tasksPromises = step.map((task) => {
          return runFunction(task);
        });
        await Promise.all(tasksPromises);
        console.log('');
      }
      logger.info('Setup complete. Have fun! 👾');
      logger.info(
        '✋ To start developing a specific app, run:',
        'npm nx serve <service-name>',
        '',
        'For example, to run the test Server:',
        'npm nx serve test-server',
        '',
        'To run the test Client:',
        'npm nx serve test-client'
      );
      logger.info('Check out the test Docs at https://docs.test.com/ 📜');
    } catch (error) {
      spinner.fail();
      console.error((error as Error).message);
    }
  })();
}
