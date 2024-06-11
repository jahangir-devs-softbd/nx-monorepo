import { DataSource } from 'typeorm';
import * as path from 'path';
import { ENV } from '../utils/constant';

const sourcePath = path.join(__dirname, '../');

const AppDataSource = new DataSource({
  type: ENV.DB_CONNECTION as any,
  host: ENV.DB_HOST,
  port: Number.parseInt(ENV.DB_PORT),
  username: ENV.DB_USERNAME,
  password: ENV.DB_PASSWORD,
  database: ENV.DB_DATABASE,
  entities: [sourcePath + '/mysql-database/entities/**/*{.ts,.js}'],
  // entities: [path.relative(process.cwd(), "/libs/shared/src/mysql-database/entities/**/*{.ts,.js}")],
  extra: {
    seeds: [sourcePath + '/mysql-database/seeds/**/*{.ts,.js}'],
    // seeds: [path.relative(process.cwd(), "/libs/shared/src/mysql-database/seeds/**/*{.ts,.js}")],
    factories: [sourcePath + '/mysql-database/factories/**/*{.ts,.js}'],
  },
  migrationsTableName: 'migrations',
  // We are using migrations, synchronize should be set to false.
  synchronize: false,

  timezone: 'UTC+06',

  // // Run migrations automatically,
  // // you can disable this if you prefer running migration manually.
  // migrationsRun: true,
  logging: true,
  // logger: 'file',

  // allow both start:prod and start:dev to use migrations
  // __dirname is either dist or src folder, meaning either
  // the compiled js in prod or the ts in dev
  migrations: [sourcePath + 'mysql-database/migrations/**/*{.ts,.js}'],
  // migrations: [path.relative(process.cwd(), "/libs/shared/src/mysql-database/migrations/**/*{.ts,.js}")],
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });

export default AppDataSource;
