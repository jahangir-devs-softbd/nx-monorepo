import { BaseOfficeEntity } from "@lams/shared/database/entities/office/base-office.entity";
import { DataSource } from "typeorm";

export class BaseOfficeSeeder {
  data: any[] = [
    {
      id: 1,
      name: "ভূমি মন্ত্রণালয়",
      name_en: "Land Ministry",
      ministry_office_id: 1,
      divisional_office_id: null,
      directorate_office_id: null,
      project_office_id: null,
      layer_id: 1,
      parent_id: null,
      row_status: 1,
    },
    {
      id: 2,
      name: "মন্ত্রিপরিষদ বিভাগ",
      name_en: "Cabinet Division",
      ministry_office_id: 2,
      divisional_office_id: null,
      directorate_office_id: null,
      project_office_id: null,
      layer_id: 1,
      parent_id: null,
      row_status: 1,
    },
    {
      id: 3,
      name: "ভূমি সংস্কার বোর্ড",
      name_en: "Land Reforms Board",
      ministry_office_id: 1,
      divisional_office_id: null,
      directorate_office_id: 3,
      project_office_id: null,
      layer_id: 3,
      parent_id: 1,
      row_status: 1,
    },
    {
      id: 4,
      name: "বিভাগীয় কমিশনারের কার্যালয়",
      name_en: "Divisional Commissioner's Office",
      ministry_office_id: 2,
      divisional_office_id: null,
      directorate_office_id: null,
      project_office_id: null,
      layer_id: 6,
      parent_id: 2,
      row_status: 1,
    },
    {
      id: 5,
      name: "জেলা প্রশাসকের কার্যালয়",
      name_en: "Deputy Commissioner's Office",
      ministry_office_id: 2,
      divisional_office_id: null,
      directorate_office_id: null,
      project_office_id: null,
      layer_id: 8,
      parent_id: 4,
      row_status: 1,
    },
    {
      id: 6,
      name: "উপজেলা ভূমি অফিস",
      name_en: "Upazila Land Office",
      ministry_office_id: 1,
      divisional_office_id: null,
      directorate_office_id: 3,
      project_office_id: null,
      layer_id: 9,
      parent_id: 3,
      row_status: 1,
    },
  ];

  async run(dataSource: DataSource): Promise<any> {
    await dataSource.query("SET FOREIGN_KEY_CHECKS=0");
    await dataSource.getRepository(BaseOfficeEntity).clear();
    await dataSource.manager.save(BaseOfficeEntity, this.data);
    await dataSource.query("SET FOREIGN_KEY_CHECKS=1");
  }
}
