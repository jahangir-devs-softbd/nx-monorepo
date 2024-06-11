import { DataSource } from "typeorm";
import { DisciplinaryActionSeed } from "@apps/seeder/seeds/disciplinary-action/disciplinary-action.seed";

export class AllDisciplinaryActionSeed {
  async run(dataSource: DataSource): Promise<any> {
    await new DisciplinaryActionSeed().run(dataSource);
  }
}
