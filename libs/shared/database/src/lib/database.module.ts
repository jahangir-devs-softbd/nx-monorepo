import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import DatabaseConfig from '../config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: `.env.${process.env.APP_ENV}`,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return DatabaseConfig(config);
      }
    })
  ],
  providers: [],
  exports: [],
})
export class DatabaseModule {}
