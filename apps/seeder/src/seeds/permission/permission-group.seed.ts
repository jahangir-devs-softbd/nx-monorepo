import { PermissionGroupTypes } from "@lams/shared/utils/util/enums";
import { DataSource } from "typeorm";
import { PermissionGroupEntity } from "@lams/shared/database/entities/user/permission-group.entity";

export class PermissionGroupSeeder {
  data: any[] = [
    {
      id: 1,
      name: "মন্ত্রী",
      name_en: "Minister",
      type: PermissionGroupTypes.DESK_LEVEL,
    },
    {
      id: 2,
      name: "প্রতিমন্ত্রীর অনুমতি",
      name_en: "State Minister Permission",
      type: PermissionGroupTypes.DESK_LEVEL,
    },
    {
      id: 3,
      name: "ল্যান্ড অটোমেশন প্রকল্প পরিচালকের অনুমতি",
      name_en: "Land Automation Project Director Permission",
      type: PermissionGroupTypes.DESK_LEVEL,
    },
    {
      id: 4,
      name: "ল্যান্ড অটোমেশন প্রকল্প সিস্টেম এনালিস্টের অনুমতি",
      name_en: "Land Automation Project System Analyst Permission",
      type: PermissionGroupTypes.DESK_LEVEL,
    },
    {
      id: 5,
      name: "মন্ত্রণালয় সিস্টেম এনালিস্টের অনুমতি",
      name_en: "Ministry System Analyst Permission",
      type: PermissionGroupTypes.DESK_LEVEL,
    },
    {
      id: 6,
      name: "বিভাগীয় কমিশনার কার্যালয়ের অনুমতি",
      name_en: "Divisional Commissioner Office Permission",
      type: PermissionGroupTypes.OFFICE_LEVEL,
    },
    {
      id: 7,
      name: "বিভাগীয় কমিশনারের অনুমতি",
      name_en: "Divisional Commissioner's Permission",
      type: PermissionGroupTypes.DESK_LEVEL,
    },
    {
      id: 8,
      name: "জেলা প্রশাসক কার্যালয়ের অনুমতি",
      name_en: "Deputy Commissioner Office Permission",
      type: PermissionGroupTypes.OFFICE_LEVEL,
    },
    {
      id: 9,
      name: "জেলা প্রশাসকের অনুমতি",
      name_en: "Deputy Collector Permission",
      type: PermissionGroupTypes.DESK_LEVEL,
    },
    {
      id: 10,
      name: "উপজেলা ভূমি অফিসের অনুমতি",
      name_en: "Upazila Land Office's Permission",
      type: PermissionGroupTypes.OFFICE_LEVEL,
    },
    {
      id: 11,
      name: "সহকারী কমিশনার (ভূমি) অনুমতি",
      name_en: "Assistant Commissioner (Land) Permission",
      type: PermissionGroupTypes.DESK_LEVEL,
    },
    {
      id: 12,
      name: "মন্ত্রণালয়ের অনুমতি",
      name_en: "Ministry Permission",
      type: PermissionGroupTypes.OFFICE_LEVEL,
    },
  ];

  async run(dataSource: DataSource): Promise<any> {
    await dataSource.query("SET FOREIGN_KEY_CHECKS=0");
    await dataSource.getRepository(PermissionGroupEntity).clear();
    await dataSource.manager.save(PermissionGroupEntity, this.data);
    await dataSource.query("SET FOREIGN_KEY_CHECKS=1");
  }
}
