import { DataSource } from "typeorm";
import { WorkFlowEntity } from "@lams/shared/database/entities/work-flow/work-flow.entity";

export class WorkFlowSeeder {
  data: any[] = [
    {
      id: 1,
      name: "বদলি ব্যবস্থাপনা",
      name_en: "Transfer Management",
      module: 1,
      row_status: 1,
    },
    {
      id: 2,
      name: "ছুটি ব্যবস্থাপনা",
      name_en: "Leave Management",
      module: 2,
      row_status: 1,
    },
    {
      id: 3,
      name: "অ্যাসেট ব্যবস্থাপনা",
      name_en: "Asset Management",
      module: 3,
      row_status: 1,
    },
    {
      id: 4,
      name: "মূল্যায়ন ব্যবস্থাপনা",
      name_en: "Appraisal Management",
      module: 5,
      row_status: 1,
    },
  ];

  async run(dataSource: DataSource): Promise<any> {
    await dataSource.query("SET FOREIGN_KEY_CHECKS=0");
    await dataSource.getRepository(WorkFlowEntity).clear();
    await dataSource.manager.save(WorkFlowEntity, this.data);
    await dataSource.query("SET FOREIGN_KEY_CHECKS=1");
  }
}
