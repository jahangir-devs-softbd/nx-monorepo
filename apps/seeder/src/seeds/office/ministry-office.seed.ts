import { MinistryOfficeEntity } from "@lams/shared/database/entities/office/ministry-office.entity";
import { DataSource } from "typeorm";

export class MinistryOfficeSeeder {
  data: any[] = [
    {
      id: 1,
      name: "ভূমি মন্ত্রণালয়",
      name_en: "Land Ministry",
      short_name: "land",
      short_name_en: "land",
      website_url: "land.gov.bd",
      office_type: 1,
      parent_id: null,
      ministry_id: null,
      row_status: 1,
    },
    {
      id: 2,
      name: "মন্ত্রিপরিষদ বিভাগ",
      name_en: "Cabinet Division",
      short_name: "CD",
      short_name_en: "CD",
      website_url: "",
      office_type: 1,
      parent_id: null,
      ministry_id: null,
      row_status: 1,
    },
    {
      id: 3,
      name: "ভূমি সংস্কার বোর্ড",
      name_en: "Land Reform Board",
      short_name: "LRB",
      short_name_en: "LRB",
      website_url: "",
      office_type: 3,
      parent_id: 1,
      ministry_id: 1,
      row_status: 1,
    },
    {
      id: 4,
      name: "ভূমি সংস্কার বিভাগ",
      name_en: "Land Reform Division",
      short_name: "LRB",
      short_name_en: "LRB",
      website_url: "",
      office_type: 2,
      parent_id: 1,
      ministry_id: 1,
      row_status: 1,
    },
  ];

  async run(dataSource: DataSource): Promise<any> {
    await dataSource.query("SET FOREIGN_KEY_CHECKS=0");
    await dataSource.getRepository(MinistryOfficeEntity).clear();
    await dataSource.manager.save(MinistryOfficeEntity, this.data);
    await dataSource.query("SET FOREIGN_KEY_CHECKS=1");
  }
}
