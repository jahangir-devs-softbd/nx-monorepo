import * as path from 'path';
import { ConfigService } from '@nestjs/config';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

const sourcePath = path.join(__dirname, '../');
const DatabaseConfig = (config: ConfigService): MysqlConnectionOptions => {
  console.log({ database: config.get<string>('DB_DATABASE') });

  return {
    type: config.get<string>('DB_CONNECTION') as any,
    host: config.get<string>('DB_HOST'),
    port: Number.parseInt(config.get<string>('DB_PORT')),
    username: config.get<string>('DB_USERNAME'),
    password: config.get<string>('DB_PASSWORD'),
    database: config.get<string>('DB_DATABASE'),
    entities: [sourcePath + '/database/entities/**/*{.ts,.js}'],
    extra: {
      seeds: [sourcePath + '/database/seeds/**/*{.ts,.js}'],
      factories: [sourcePath + '/database/factories/**/*{.ts,.js}'],
    },
    migrationsTableName: 'migrations',
    synchronize: false,
    timezone: 'UTC+06',
    logging: true,
    migrations: [sourcePath + 'database/migrations/**/*{.ts,.js}'],
  };
};
export default DatabaseConfig;
