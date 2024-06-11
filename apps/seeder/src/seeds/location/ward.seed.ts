import { DataSource } from "typeorm";
import { WardEntity } from "@lams/shared/database/entities/location/ward.entity";

export class WardSeeder {
  data: any[] = [
    {
      id: 1,
      name: "১ নং ওয়ার্ড",
      name_en: "Ward No 1",
      bbs_code: "23",
      division_id: 8,
      district_id: 63,
      upazila_id: 1,
      union_id: 1,
      municipality_id: null,
      city_corporation_id: null,
      code: "WAR-1",
    },
    {
      id: 2,
      name: "২ নং ওয়ার্ড",
      name_en: "Ward no 2",
      bbs_code: "24",
      division_id: 8,
      district_id: 63,
      upazila_id: 1,
      union_id: 1,
      municipality_id: null,
      city_corporation_id: null,
      code: "WAR-2",
    },
    {
      id: 3,
      name: "১ নং ওয়ার্ড",
      name_en: "Ward no 1",
      bbs_code: "45",
      division_id: 8,
      district_id: 63,
      upazila_id: null,
      union_id: null,
      municipality_id: null,
      city_corporation_id: 6,
      code: "WAR-3",
    },
    {
      id: 4,
      name: "২ নং ওয়ার্ড",
      name_en: "Ward no 2",
      bbs_code: "46",
      division_id: 8,
      district_id: 63,
      upazila_id: null,
      union_id: null,
      municipality_id: null,
      city_corporation_id: 6,
      code: "WAR-4",
    },
    {
      id: 5,
      name: "১ নং ওয়ার্ড",
      name_en: "Ward no 1",
      bbs_code: "55",
      division_id: 8,
      district_id: 63,
      upazila_id: null,
      union_id: null,
      municipality_id: 1,
      city_corporation_id: null,
      code: "WAR-5",
    },
    {
      id: 6,
      name: "২ নং ওয়ার্ড",
      name_en: "Ward no 2",
      bbs_code: "56",
      division_id: 8,
      district_id: 63,
      upazila_id: null,
      union_id: null,
      municipality_id: 1,
      city_corporation_id: null,
      code: "WAR-6",
    },
  ];
  async run(dataSource: DataSource): Promise<any> {
    await dataSource.query("SET FOREIGN_KEY_CHECKS=0");
    await dataSource.getRepository(WardEntity).clear();
    await dataSource.manager.save(WardEntity, this.data);
    await dataSource.query("SET FOREIGN_KEY_CHECKS=1");
  }
}
