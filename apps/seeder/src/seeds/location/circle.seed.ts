import { DataSource } from "typeorm";
import { CircleEntity } from "@lams/shared/database/entities/location/circle.entity";

export class CircleSeeder {
  data: any[] = [
    {
      id: 1,
      name: "সার্কেল ১",
      name_en: "Circle 1",
      division_id: 3,
      district_id: 40,
      code: "CIR-1",
    },
    {
      id: 2,
      name: "সার্কেল ২",
      name_en: "Circle 2",
      division_id: 3,
      district_id: 40,
      code: "CIR-2",
    },
  ];
  async run(dataSource: DataSource): Promise<any> {
    await dataSource.query("SET FOREIGN_KEY_CHECKS=0");
    await dataSource.getRepository(CircleEntity).clear();
    await dataSource.manager.save(CircleEntity, this.data);
    await dataSource.query("SET FOREIGN_KEY_CHECKS=1");
  }
}
