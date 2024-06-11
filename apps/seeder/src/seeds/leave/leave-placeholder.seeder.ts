import { DataSource } from "typeorm";
import { LeavePlaceholderEntity } from "@lams/shared/database/entities/leave/leave-placeholder.entity";

export class LeavePlaceholderSeeder {
  data: any[] = [
    {
      id: 1,
      desk_id: 8,
      office_id: 5,
      placeholder_desk_id: 9,
      placeholder_office_id: 6,
      description: "Description",
    },
    {
      id: 2,
      desk_id: 9,
      office_id: 6,
      placeholder_desk_id: 8,
      placeholder_office_id: 5,
      description: "Description",
    },
  ];

  async run(dataSource: DataSource): Promise<any> {
    await dataSource.query("SET FOREIGN_KEY_CHECKS=0");
    await dataSource.getRepository(LeavePlaceholderEntity).clear();
    await dataSource.manager.save(LeavePlaceholderEntity, this.data);
    await dataSource.query("SET FOREIGN_KEY_CHECKS=1");
  }
}
