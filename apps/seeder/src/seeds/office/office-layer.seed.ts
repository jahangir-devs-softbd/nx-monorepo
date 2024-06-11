import { BooleanStatus } from "@lams/shared/utils/util/enums";
import { DataSource } from "typeorm";
import { OfficeLayerEntity } from "@lams/shared/database/entities/office/office-layer.entity";

export class OfficeLayerSeeder {
  data: any[] = [
    {
      id: 1,
      name: "মন্ত্রণালয়",
      name_en: "MINISTRY",
      code: "1",
      sort_order: 1,
      is_root: BooleanStatus.YES,
    },
    {
      id: 2,
      name: "বিভাগ",
      name_en: "DIVISION",
      code: "2",
      sort_order: 2,
      is_root: BooleanStatus.YES,
    },
    {
      id: 3,
      name: "অধিদপ্তর",
      name_en: "DIRECTORATE",
      code: "3",
      sort_order: 3,
      is_root: BooleanStatus.YES,
    },
    {
      id: 4,
      name: "প্রজেক্ট",
      name_en: "PROJECT",
      code: "4",
      sort_order: 4,
      is_root: BooleanStatus.YES,
    },
    {
      id: 5,
      name: "সদর দপ্তর",
      name_en: "HQ",
      code: "5",
      sort_order: 5,
      is_root: BooleanStatus.NO,
    },
    {
      id: 6,
      name: "বিভাগীয়",
      name_en: "DIVISIONAL",
      code: "6",
      sort_order: 6,
      is_root: BooleanStatus.NO,
    },
    {
      id: 7,
      name: "জোনাল",
      name_en: "ZONAL",
      code: "7",
      sort_order: 7,
      is_root: BooleanStatus.NO,
    },
    {
      id: 8,
      name: "জেলা",
      name_en: "DISTRICT",
      code: "8",
      sort_order: 8,
      is_root: BooleanStatus.NO,
    },
    {
      id: 9,
      name: "উপজেলা",
      name_en: "UPAZILA",
      code: "9",
      sort_order: 9,
      is_root: BooleanStatus.NO,
    },
    {
      id: 10,
      name: "সার্কেল",
      name_en: "CIRCLE",
      code: "10",
      sort_order: 10,
      is_root: BooleanStatus.NO,
    },
    {
      id: 11,
      name: "থানা",
      name_en: "THANA",
      code: "11",
      sort_order: 11,
      is_root: BooleanStatus.NO,
    },
    {
      id: 12,
      name: "ইউনিয়ন/পৌরসভা",
      name_en: "UNION/MUNICIPALITY",
      code: "12",
      sort_order: 12,
      is_root: BooleanStatus.NO,
    },
  ];

  async run(dataSource: DataSource): Promise<any> {
    await dataSource.query("SET FOREIGN_KEY_CHECKS=0");
    await dataSource.getRepository(OfficeLayerEntity).clear();
    await dataSource.manager.save(OfficeLayerEntity, this.data);
    await dataSource.query("SET FOREIGN_KEY_CHECKS=1");
  }
}
