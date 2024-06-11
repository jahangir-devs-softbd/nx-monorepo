import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SeederCommand } from "@apps/seeder/app/seed-command";
import { ConfigService } from "@nestjs/config";
import DatabaseConfig from "@lams/shared/config/database.config";

@Module({
  imports: [TypeOrmModule.forRootAsync({
    inject: [ConfigService],
    useFactory: (config: ConfigService) => {
      return DatabaseConfig(config);
    },
  })],
  controllers: [],
  providers: [SeederCommand],
})
export class AppModule {}
