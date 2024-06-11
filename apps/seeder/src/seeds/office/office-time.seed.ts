import { OfficeTimeEntity } from "@lams/shared/database/entities/office/office-time.entity";
import { DataSource } from "typeorm";

export class OfficeTimeSeeder {
  data: any[] = [
    {
      id: 1,
      office_in_time: "08:00:00",
      office_out_time: "14:00:00",
      row_status: 1,
    },
  ];

  async run(dataSource: DataSource): Promise<any> {
    await dataSource.query("SET FOREIGN_KEY_CHECKS=0");
    await dataSource.getRepository(OfficeTimeEntity).clear();
    await dataSource.manager.save(OfficeTimeEntity, this.data);
    await dataSource.query("SET FOREIGN_KEY_CHECKS=1");
  }
}
