import { DataSource } from "typeorm";
import { MunicipalityEntity } from "@lams/shared/database/entities/location/municipality.entity";

export class MunicipalitySeeder {
  data: any[] = [
    {
      id: 1,
      // uuid: "501255fb-3ed0-490f-a701-fb1a612ea936",
      name: "পটিয়া পৌরসভা",
      name_en: "PATIYA POUROSHOVA",
      bbs_code: "10",
      division_id: 8,
      district_id: 63,
      upazila_id: 19,
      code: "MUN-1",
    },
    {
      id: 2,
      // uuid: "56f70646-f856-430d-99fb-2440baffe22f",
      name: "চন্দনাইশ পৌরসভা",
      name_en: "CHONDANAISH POUROSHOVA",
      bbs_code: "18",
      division_id: 8,
      district_id: 63,
      upazila_id: 7,
      code: "MUN-2",
    },
  ];
  async run(dataSource: DataSource): Promise<any> {
    await dataSource.query("SET FOREIGN_KEY_CHECKS=0");
    await dataSource.getRepository(MunicipalityEntity).clear();
    await dataSource.manager.save(MunicipalityEntity, this.data);
    await dataSource.query("SET FOREIGN_KEY_CHECKS=1");
  }
}
