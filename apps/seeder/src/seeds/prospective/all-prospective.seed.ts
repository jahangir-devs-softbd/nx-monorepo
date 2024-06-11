import { DataSource } from "typeorm";
import { ProspectiveSeed } from "@apps/seeder/seeds/prospective/prospective.seed";

export class AllProspectiveSeed {
  async run(dataSource: DataSource): Promise<any> {
    await new ProspectiveSeed().run(dataSource);
  }
}
