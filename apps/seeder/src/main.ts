import { CommandFactory } from "nest-commander";
import { AppModule } from "@apps/seeder/app/app.module";

async function bootstrap(): Promise<any> {
  await CommandFactory.run(AppModule, ["warn", "error"]);
}

bootstrap().then(() => console.log("Seeder app run"));
