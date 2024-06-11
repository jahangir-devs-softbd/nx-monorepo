import { DataSource } from "typeorm";
import { PermissionModuleEntity } from "@lams/shared/database/entities/user/permission-module.entity";

export class PermissionModuleSeeder {
  data: any[] = [
    {
      id: 1,
      name: "USER MANAGEMENT",
      name_en: "USER MANAGEMENT",
    },
    {
      id: 2,
      name: "USER REPORT",
      name_en: "USER REPORT",
    },
    {
      id: 3,
      name: "ATTENDANCE MANAGEMENT",
      name_en: "ATTENDANCE MANAGEMENT",
    },
    {
      id: 4,
      name: "SITE VISIT MANAGEMENT",
      name_en: "SITE VISIT MANAGEMENT",
    },
    {
      id: 5,
      name: "GEO LOCATION MANAGEMENT",
      name_en: "GEO LOCATION MANAGEMENT",
    },
    {
      id: 6,
      name: "OFFICE MANAGEMENT",
      name_en: "OFFICE MANAGEMENT",
    },
    {
      id: 7,
      name: "NOTICE",
      name_en: "NOTICE",
    },
    {
      id: 8,
      name: "CONFIGURATION",
      name_en: "CONFIGURATION",
    },
    {
      id: 9,
      name: "AUDIT INSPECTION",
      name_en: "AUDIT INSPECTION",
    },
    {
      id: 10,
      name: "ASSET MANAGEMENT",
      name_en: "ASSET MANAGEMENT",
    },
    {
      id: 11,
      name: "APPRAISAL",
      name_en: "APPRAISAL",
    },
    {
      id: 12,
      name: "TRANSFER",
      name_en: "TRANSFER",
    },
    {
      id: 13,
      name: "LEAVE",
      name_en: "LEAVE",
    },
    {
      id: 14,
      name: "AWARD MANAGEMENT",
      name_en: "AWARD MANAGEMENT",
    },
    {
      id: 15,
      name: "DISCIPLINARY ACTION",
      name_en: "DISCIPLINARY ACTION",
    },
    {
      id: 16,
      name: "LOAN MANAGEMENT",
      name_en: "LOAN MANAGEMENT",
    },
    {
      id: 17,
      name: "DATA BANK",
      name_en: "DATA BANK",
    },
    {
      id: 18,
      name: "PROSPECTIVE REAL ESTATE DATA",
      name_en: "PROSPECTIVE REAL ESTATE DATA",
    },
    {
      id: 19,
      name: "EXPECTING AGENCY",
      name_en: "EXPECTING AGENCY",
    },
    {
      id: 20,
      name: "COMMENT & COMMENT TOPIC",
      name_en: "COMMENT & COMMENT TOPIC",
    },
    {
      id: 21,
      name: "INSTITUTIONAL MEMORY",
      name_en: "INSTITUTIONAL MEMORY",
    },
    {
      id: 22,
      name: "VACANT POST",
      name_en: "VACANT POST",
    },
    {
      id: 23,
      name: "ONLINE HEARING",
      name_en: "ONLINE HEARING",
    },
    {
      id: 24,
      name: "SERVICE MANAGEMENT",
      name_en: "SERVICE MANAGEMENT",
    },
    {
      id: 25,
      name: "NOTIFICATION MANAGEMENT",
      name_en: "NOTIFICATION MANAGEMENT",
    },
    {
      id: 26,
      name: "OFFICE JURISDICTION",
      name_en: "OFFICE JURISDICTION",
    },
  ];

  async run(dataSource: DataSource): Promise<any> {
    await dataSource.query("SET FOREIGN_KEY_CHECKS=0");
    await dataSource.getRepository(PermissionModuleEntity).clear();
    await dataSource.manager.save(PermissionModuleEntity, this.data);
    await dataSource.query("SET FOREIGN_KEY_CHECKS=1");
  }
}
